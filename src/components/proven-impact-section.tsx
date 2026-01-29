"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

export function ProvenImpactSection() {
    const t = useTranslations("CaseStudies");
    const tNav = useTranslations("Nav");

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
        <Section id="work">
            <SectionHeader
                align="center"
                label={<span className="text-[var(--color-secondary)]">{tNav("work").toUpperCase()}</span>}
                title={t("title")}
                description={<div className="w-24 h-1.5 bg-[var(--color-secondary)] mx-auto rounded-full" />}
            />

            <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll stagger-fly-children">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const color = isEven ? "var(--color-primary)" : "var(--color-secondary)";
                    const themeClass = isEven
                        ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                        : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

                    return (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br transition-all duration-300 border rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 flex flex-col items-start transform-gpu will-change-transform ${themeClass}`}
                        >
                            {/* Category Tag */}
                            <span
                                className={`inline-block px-0 py-1 text-xs font-bold uppercase tracking-wider mb-6 ${isEven
                                    ? "text-blue-300"
                                    : "text-green-300"
                                    }`}
                            >
                                {t(`${project.id}.category`)}
                            </span>

                            {/* Title */}
                            <h3
                                className="text-2xl font-bold text-[var(--color-ink)] mb-4"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {t(`${project.id}.title`)}
                            </h3>

                            {/* Structured Content */}
                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <h4 className="font-bold text-xs uppercase opacity-70 mb-1" style={{ color: "var(--color-ink)" }}>
                                        {tNav("work") === "Work" ? "Challenge" :
                                            (tNav("work") === "Práce" || tNav("work") === "Reference") ? "Výzva" :
                                                tNav("work") === "Arbeit" ? "Herausforderung" :
                                                    tNav("work") === "Trabajo" ? "Desafío" :
                                                        tNav("work") === "Travail" ? "Défi" :
                                                            tNav("work") === "Trabalho" ? "Desafio" :
                                                                "Виклик"}
                                    </h4>
                                    <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                                        {t(`${project.id}.challenge`)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase opacity-70 mb-1" style={{ color: "var(--color-ink)" }}>
                                        {tNav("work") === "Work" ? "Solution" :
                                            (tNav("work") === "Práce" || tNav("work") === "Reference") ? "Řešení" :
                                                tNav("work") === "Arbeit" ? "Lösung" :
                                                    tNav("work") === "Trabajo" ? "Solución" :
                                                        tNav("work") === "Travail" ? "Solution" :
                                                            tNav("work") === "Trabalho" ? "Solução" :
                                                                "Рішення"}
                                    </h4>
                                    <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                                        {t(`${project.id}.solution`)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase opacity-70 mb-1" style={{ color: "var(--color-ink)" }}>
                                        {tNav("work") === "Work" ? "Outcome" :
                                            (tNav("work") === "Práce" || tNav("work") === "Reference") ? "Výsledek" :
                                                tNav("work") === "Arbeit" ? "Ergebnis" :
                                                    tNav("work") === "Trabajo" ? "Resultado" :
                                                        tNav("work") === "Travail" ? "Résultat" :
                                                            tNav("work") === "Trabalho" ? "Resultado" :
                                                                "Результат"}
                                    </h4>
                                    <p className="text-[var(--color-ink)] text-sm leading-relaxed font-semibold">
                                        {t(`${project.id}.outcome`)}
                                    </p>
                                </div>
                            </div>


                        </div>
                    )
                })}
            </div>
        </Section >
    );
}
