"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroller() {
    useEffect(() => {
        // DETECT TOUCH DEVICES (iPad, Mobile)
        // We disable custom smooth scrolling on touch devices to prevent conflicts
        // with native iOS/Android scrolling, especially when external keyboards are used.
        const isTouch = window.matchMedia("(pointer: coarse)").matches ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0);

        // ONLY INITIALIZE LENIS ON DESKTOP (Non-Touch)
        if (isTouch) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 2,
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
