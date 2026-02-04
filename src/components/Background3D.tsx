"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";



function TheCore({ scrollYProgress }: { scrollYProgress: any }) {
    const mesh = useRef<THREE.Mesh>(null!);
    const innerMesh = useRef<THREE.Mesh>(null!);
    const targetScale = useRef(new THREE.Vector3());

    useFrame((state, delta) => {
        const scroll = scrollYProgress ? scrollYProgress.get() : 0;
        const time = state.clock.getElapsedTime();

        if (mesh.current) {
            // Transformation
            const baseScale = 1.3 + scroll * 8;
            targetScale.current.set(baseScale, baseScale, baseScale);
            mesh.current.scale.lerp(targetScale.current, 0.08);
            mesh.current.rotation.y += delta * 0.12;
            mesh.current.rotation.x = scroll * Math.PI * 0.5;
            mesh.current.rotation.z = scroll * Math.PI * 0.2;

            // Fade out as it zooms in - kept visible longer
            if (mesh.current.material instanceof THREE.Material) {
                // Decay slower: 0.25 -> ~0.1 at end of scroll
                mesh.current.material.opacity = Math.max(0.08, 0.25 - scroll * 0.15);
            }
        }

        if (innerMesh.current) {
            innerMesh.current.rotation.y -= delta * 0.18;
            innerMesh.current.rotation.x += delta * 0.1;
            const pulse = Math.sin(time * 1.5) * 0.02;
            const innerScale = (0.7 + scroll * 4 + pulse);
            targetScale.current.set(innerScale, innerScale, innerScale);
            innerMesh.current.scale.lerp(targetScale.current, 0.08);

            if (innerMesh.current.material instanceof THREE.Material) {
                // Decay slower: 0.2 -> ~0.08 at end
                innerMesh.current.material.opacity = Math.max(0.06, 0.2 - scroll * 0.12);
            }
        }
    });

    return (
        <group>
            {/* Outer Globe - Deep Blue */}
            <mesh ref={mesh}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
            {/* Inner Globe - Cyan */}
            <mesh ref={innerMesh}>
                <sphereGeometry args={[1.2, 48, 48]} />
                <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
        </group>
    );
}

function GalaxySwarm({ scrollYProgress }: { scrollYProgress: any }) {
    const ref = useRef<THREE.Points>(null!);

    const [sphere] = useState(() => {
        let count = 2000;
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            count = 600;
        }

        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const color = new THREE.Color("#22d3ee");

        for (let i = 0; i < count; i++) {
            const r = 2 + Math.random() * 15;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 0.5;
        }
        return { positions, colors, sizes };
    });

    useFrame((state, delta) => {
        if (ref.current && scrollYProgress) {
            const scroll = scrollYProgress.get();
            ref.current.rotation.y += delta * 0.04 + scroll * 0.05;
            ref.current.rotation.z = scroll * Math.PI * 0.2;

            const breath = 1 + Math.sin(state.clock.getElapsedTime() * 0.4) * 0.03;
            ref.current.scale.set(breath, breath, breath);

            if (ref.current.material instanceof THREE.PointsMaterial) {
                ref.current.material.opacity = Math.max(0.1, 0.4 - scroll * 0.2);
            }
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <points ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={sphere.positions.length / 3}
                        array={sphere.positions}
                        itemSize={3}
                        args={[sphere.positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={sphere.colors.length / 3}
                        array={sphere.colors}
                        itemSize={3}
                        args={[sphere.colors, 3]}
                    />
                </bufferGeometry>
                <PointMaterial
                    size={0.035}
                    vertexColors
                    transparent
                    opacity={0.4}
                    sizeAttenuation={true}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
        </group>
    );
}

export const Background3D = ({ scrollYProgress }: { scrollYProgress: any }) => {
    return (
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]} performance={{ min: 0.5 }}>
                <fog attach="fog" args={["#000", 8, 30]} />
                <ambientLight intensity={1} />
                <TheCore scrollYProgress={scrollYProgress} />
                <GalaxySwarm scrollYProgress={scrollYProgress} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
        </div>
    );
};
