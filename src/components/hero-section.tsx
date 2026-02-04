"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Background3D } from "./Background3D";

export function HeroSection() {
  const t = useTranslations("Home");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mainContentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // First part fades out - extended to overlap
  const title1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const title1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  // Second part fades in then out - starts earlier for better overlap
  const title2Opacity = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 1, 0]);
  const title2Y = useTransform(scrollYProgress, [0.15, 0.55], [50, -50]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="bg-black relative h-[450vh] md:h-[500vh]"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center">
        <Background3D scrollYProgress={scrollYProgress} />

        {/* Main Static Title (Overlay) - Part 1 */}
        <motion.div
          style={{
            opacity: title1Opacity,
            y: title1Y
          }}
          className="absolute inset-0 bg-transparent flex flex-col items-center justify-center pointer-events-none z-10 px-8 will-change-transform"
        >
          <p className="text-white/60 text-lg md:text-xl max-w-lg text-center mb-8 font-medium tracking-tight">
            {t("subheadline")}
          </p>
          <div className="relative w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-[128px] font-bold text-white tracking-[-0.05em] leading-none uppercase inline-block py-8">
              {t("highlights.h1.titlePart1")}
            </h1>
          </div>
        </motion.div>

        {/* Main Title - Part 2 (Scrolls in after Part 1) */}
        <motion.div
          style={{
            opacity: title2Opacity,
            y: title2Y
          }}
          className="absolute inset-0 bg-transparent flex flex-col items-center justify-center pointer-events-none z-10 px-8 will-change-transform"
        >
          <div className="relative w-full text-center mt-32"> {/* Added margin to visually separate if needed, or keep centered */}
            <h1 className="text-4xl sm:text-5xl md:text-[128px] font-bold text-white tracking-[-0.05em] leading-none uppercase inline-block py-8">
              {t("highlights.h1.titlePart2")}
            </h1>
          </div>
        </motion.div>

        {/* Scroll-linked Chunks - Shifted timeline */}
        <div className="relative z-10 w-full h-full">
          <TextChunk text={t("heroChunks.velocity")} progress={scrollYProgress} range={[0.5, 0.6, 0.7, 0.8]} isGradient />
          <TextChunk text={t("heroChunks.scale")} progress={scrollYProgress} range={[0.8, 0.85, 0.95, 1.0]} />
        </div>
      </div>
    </section>
  );
}

function TextChunk({ text, progress, range, isGradient }: { text: string; progress: any; range: [number, number, number, number]; isGradient?: boolean }) {
  const opacity = useTransform(progress, range, [0, 0.9, 0.9, 0]);
  const scale = useTransform(progress, range, [0.95, 1, 1, 1.05]);
  const y = useTransform(progress, range, [100, 0, 0, -100]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        mixBlendMode: "normal" as any
      }}
      className="absolute inset-0 flex items-center justify-center p-8 text-center will-change-transform pointer-events-none"
    >
      <h2 className={`text-4xl sm:text-5xl md:text-[128px] font-bold tracking-[-0.05em] uppercase selection:bg-white selection:text-black leading-none py-12 ${isGradient ? 'bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent' : 'text-white'}`}>
        {text}
      </h2>
    </motion.div>
  );
}
