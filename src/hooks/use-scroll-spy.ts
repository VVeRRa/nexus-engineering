"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const elements = new Set<Element>();

        const initObserver = () => {
            // Disconnect previous observer if exists
            if (observer) {
                observer.disconnect();
                elements.clear();
            }

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const id = entry.target.getAttribute("id");
                            if (id) {
                                setActiveId(id);
                                // Update URL hash safely: preserve pathname, query params, etc.
                                const newUrl = `${window.location.pathname}${window.location.search}#${id}`;
                                window.history.replaceState(null, "", newUrl);
                            }
                        }
                    });
                },
                {
                    rootMargin: "-20% 0px -35% 0px", // Middle portion of screen triggers active state
                    threshold: 0,
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

        // Initial attempt
        const allFound = initObserver();

        // If not all elements were found (e.g., due to hydration/loading), retry a few times
        if (!allFound) {
            const timeouts = [100, 500, 1000, 2000].map(delay =>
                setTimeout(() => {
                    // Only re-init if we found more elements than before or just to be safe
                    initObserver();
                }, delay)
            );

            return () => {
                if (observer) observer.disconnect();
                timeouts.forEach(clearTimeout);
            };
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [selectors, options]);

    return activeId;
}
