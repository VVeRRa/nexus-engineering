"use client";

import { useTranslations } from "next-intl";

export function ProvenImpactSection() {
    const t = useTranslations("CaseStudies");

    const projects = [
        {
            id: "fintech",
            color: "var(--color-fintech)",
        },
        {
            id: "proptech",
            color: "var(--color-proptech)",
        },
        {
            id: "enterprise",
            color: "var(--color-cloud)",
        },
    ];

    return (
        <section id="work" className="section bg-white relative overflow-hidden py-24">
            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                        {t("label")}
                    </span>
                    <h2
                        className="text-4xl md:text-5xl text-slate-900 mb-6"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                        {t("title")}
                    </h2>
                    <div className="w-24 h-1.5 bg-[var(--color-secondary)] mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                        >
                            {/* Category Tag */}
                            <span
                                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                                style={{
                                    backgroundColor: `${project.color}15`,
                                    color: project.color
                                }}
                            >
                                {t(`${project.id}.category`)}
                            </span>

                            {/* Title */}
                            <h3
                                className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {t(`${project.id}.title`)}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                                {t(`${project.id}.description`)}
                            </p>

                            {/* Decorative Arrow */}
                            <div className="mt-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
