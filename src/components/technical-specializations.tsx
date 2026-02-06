"use client";

import { useMemo } from "react";

import { useTranslations } from "next-intl";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

export function TechnicalSpecializations() {
    const t = useTranslations("Home.technicalCluster");

    // Check if the translations exist to avoid crash if other locales are not updated yet
    const items = useMemo(() => {
        const itemsCount = 6;
        const result = [];
        for (let i = 0; i < itemsCount; i++) {
            try {
                const item = t(`items.${i}`);
                if (item) result.push(item);
            } catch (e) {
                // Silently fail
            }
        }
        return result;
    }, [t]);

    if (items.length === 0) return null;

    return (
        <Section
            id="specializations"
            className="overflow-hidden"
            background={
                <div
                    className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 -z-10"
                    style={{ background: 'radial-gradient(circle, var(--color-primary-200) 0%, transparent 70%)' }}
                />
            }
        >
            <SectionHeader
                align="center"
                label={<span className="text-[var(--color-secondary)]">{t("title")}</span>}
                title={t("headline")}
                description={t("text")}
                className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll stagger-fly-children">
                {items.map((item: string, index: number) => {
                    const isEven = index % 2 === 0;
                    const themeClass = isEven
                        ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                        : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

                    return (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br ${themeClass} border rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-100`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${isEven ? "bg-blue-50 text-[var(--color-primary)]" : "bg-green-50 text-[var(--color-secondary)]"
                                    }`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--color-ink)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                                    {item}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
