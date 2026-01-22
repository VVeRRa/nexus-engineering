"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>("");
    const observerEntries = useRef<Map<string, IntersectionObserverEntry>>(new Map());

    // Handle initial hash on mount
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hashId = window.location.hash.slice(1);
            if (selectors.includes(`#${hashId}`)) {
                setActiveId(hashId);
            }
        }
    }, [selectors]);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const elements = new Set<Element>();

        // Debounce timer to prevent rapid swapping
        let updateTimeout: NodeJS.Timeout | null = null;

        const processEntries = () => {
            let bestCandidate: IntersectionObserverEntry | null = null;
            let currentActiveEntry: IntersectionObserverEntry | null = null;

            // Find best candidate and current active entry
            observerEntries.current.forEach((entry) => {
                const id = entry.target.getAttribute("id");
                if (id === activeId) {
                    currentActiveEntry = entry;
                }

                if (entry.isIntersecting) {
                    if (
                        !bestCandidate ||
                        entry.intersectionRect.height > bestCandidate.intersectionRect.height
                    ) {
                        bestCandidate = entry;
                    }
                }
            });

            if (bestCandidate) {
                const candidateId = (bestCandidate as IntersectionObserverEntry).target.getAttribute("id");

                // Hysteresis: If we have an active item that is still visible,
                // only switch if the new candidate is significantly better (more visible pixels)
                if (
                    currentActiveEntry &&
                    currentActiveEntry.isIntersecting &&
                    candidateId !== activeId
                ) {
                    const heightDiff =
                        (bestCandidate as IntersectionObserverEntry).intersectionRect.height -
                        currentActiveEntry.intersectionRect.height;

                    // Require 50px more vertical visibility to switch from an active item
                    // This prevents jitter when sizes are similar
                    if (heightDiff < 50) {
                        return;
                    }
                }

                if (candidateId && candidateId !== activeId) {
                    setActiveId(candidateId);
                    const newUrl = `${window.location.pathname}${window.location.search}#${candidateId}`;
                    window.history.replaceState(null, "", newUrl);
                }
            }
        };

        const initObserver = () => {
            if (observer) {
                observer.disconnect();
                elements.clear();
                observerEntries.current.clear();
            }

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const id = entry.target.getAttribute("id");
                        if (id) {
                            observerEntries.current.set(id, entry);
                        }
                    });

                    // Debounce updates slightly for stability
                    if (updateTimeout) clearTimeout(updateTimeout);
                    updateTimeout = setTimeout(processEntries, 50);
                },
                {
                    rootMargin: "-20% 0px -35% 0px",
                    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                    ...options,
                }
            );

            let foundAll = true;
            selectors.forEach((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    observer!.observe(element);
                    elements.add(element);
                } else {
                    foundAll = false;
                }
            });

            return foundAll;
        };

        const allFound = initObserver();

        if (!allFound) {
            const timeouts = [100, 500, 1000, 2000].map(delay =>
                setTimeout(initObserver, delay)
            );

            return () => {
                if (observer) observer.disconnect();
                timeouts.forEach(clearTimeout);
                if (updateTimeout) clearTimeout(updateTimeout);
            };
        }

        return () => {
            if (observer) observer.disconnect();
            if (updateTimeout) clearTimeout(updateTimeout);
        };
    }, [selectors, options, activeId]); // ActiveId added to allow comparing against current

    return activeId;
}
