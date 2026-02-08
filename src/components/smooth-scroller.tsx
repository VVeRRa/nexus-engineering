"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroller() {
    useEffect(() => {
        // Initialize Lenis on ALL devices (Desktop, Tablet, Mobile)
        // This ensures a consistent, premium scroll experience and fixes 
        // native scroll glitches (blank pages, rubber banding) on iOS/Android.

        // Note: Modern smartphones handle Lenis well. If performance issues arise,
        // we can conditionally adjust the configuration.

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 2,
            // infinite: false, // Default
        });

        // Add class to html to scope CSS
        document.documentElement.classList.add('lenis');

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            document.documentElement.classList.remove('lenis');
        };
    }, []);

    return null;
}
