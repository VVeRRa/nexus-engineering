"use client";

import { useTranslations } from "next-intl";

export function ProvenImpactSection() {
    const t = useTranslations("CaseStudies");

    const projects = [
        {
            id: "fintech",
        },
        {
            id: "proptech",
        },
        {
            id: "enterprise",
        },
    ];

    return (
        <section id="work" className="section bg-[var(--color-paper)] relative overflow-hidden py-24">
            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
                    <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                        {t("label")}
                    </span>
                    <h2
                        className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                        {t("title")}
                    </h2>
                    <div className="w-24 h-1.5 bg-[var(--color-secondary)] mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll stagger-children">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        const color = isEven ? "var(--color-primary)" : "var(--color-secondary)";
                        const themeClass = isEven
                            ? "hover:text-[var(--color-primary)]/80"
                            : "hover:text-[var(--color-secondary)]/80";

                        return (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br transition-all duration-300 border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 flex flex-col items-start transform-gpu will-change-transform ${isEven
                                    ? "from-[var(--color-card-from)] via-[var(--color-card-from)] to-[var(--color-card-from)] border-[var(--color-card-border-blue)] shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                                    : "from-[var(--color-card-from)] via-[var(--color-card-from)] to-[var(--color-card-from)] border-[var(--color-card-border-green)] shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
                                    }`}
                            >
                                {/* Category Tag */}
                                <span
                                    className={`inline-block px-0 py-1 text-xs font-bold uppercase tracking-wider mb-6 ${isEven
                                        ? "text-[var(--color-primary)] dark:text-blue-300"
                                        : "text-[var(--color-secondary)] dark:text-green-300"
                                        }`}
                                >
                                    {t(`${project.id}.category`)}
                                </span>

                                {/* Title */}
                                <h3
                                    className={`text-2xl font-bold text-[var(--color-ink)] mb-4 transition-colors ${themeClass}`}
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {t(`${project.id}.title`)}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed flex-grow">
                                    {t(`${project.id}.description`)}
                                </p>

                                {/* Decorative Arrow */}
                                <div className={`mt-auto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isEven
                                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/30"
                                    : "bg-[var(--color-secondary)] text-white shadow-lg shadow-green-500/30"
                                    }`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
