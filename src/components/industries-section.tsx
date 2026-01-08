"use client";

import { useTranslations } from "next-intl";

export function IndustriesSection() {
  const t = useTranslations("Industries");

  const industries = [
    {
      name: t("fintech.name"),
      color: "var(--color-fintech)",
      tagline: t("fintech.tagline"),
      description: t("fintech.description"),
      highlights: [
        t("fintech.highlights.0"),
        t("fintech.highlights.1"),
        t("fintech.highlights.2"),
        t("fintech.highlights.3"),
      ],
      stats: { value: "$2B+", label: t("fintech.stats") },
    },
    {
      name: t("proptech.name"),
      color: "var(--color-proptech)",
      tagline: t("proptech.tagline"),
      description: t("proptech.description"),
      highlights: [
        t("proptech.highlights.0"),
        t("proptech.highlights.1"),
        t("proptech.highlights.2"),
        t("proptech.highlights.3"),
      ],
      stats: { value: "50K+", label: t("proptech.stats") },
    },
  ];

  const specializations = [
    { name: t("specializations.cloud"), icon: "cloud" },
    { name: t("specializations.distArch"), icon: "network" },
    { name: t("specializations.scaling"), icon: "scale" },
    { name: t("specializations.product"), icon: "rocket" },
    { name: t("specializations.ai"), icon: "ai" },
    { name: t("specializations.migration"), icon: "migrate" },
  ];

  return (
    <section id="industries" className="section bg-[var(--color-ink)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-fintech)] rounded-full blur-[300px] opacity-5" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-proptech)] rounded-full blur-[250px] opacity-5" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label section-label-light">{t("label")}</span>
          <h2
            className="text-display-md text-[var(--color-paper)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("title")}
            <br />
            <span className="text-[var(--color-slate-500)]">{t("subtitle")}</span>
          </h2>
          <p className="text-xl text-[var(--color-slate-400)]">
            {t("description")}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-[var(--color-slate-900)] transition-all duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${industry.color}15 0%, transparent 60%)`,
                }}
              />

              {/* Border Glow on Hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 0 1px ${industry.color}40`,
                }}
              />

              <div className="relative z-10 p-10 md:p-12">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    {/* Color Accent Bar */}
                    <div
                      className="w-12 h-1 rounded-full mb-4"
                      style={{ background: industry.color }}
                    />
                    <h3
                      className="text-3xl md:text-4xl text-[var(--color-paper)] mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                      {industry.name}
                    </h3>
                    <p
                      className="text-sm uppercase tracking-widest"
                      style={{ color: industry.color, fontFamily: "var(--font-mono)" }}
                    >
                      {industry.tagline}
                    </p>
                  </div>

                  {/* Stats Badge */}
                  <div className="text-right">
                    <div
                      className="text-3xl text-[var(--color-paper)]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                      {industry.stats.value}
                    </div>
                    <div
                      className="text-xs text-[var(--color-slate-500)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {industry.stats.label}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--color-slate-400)] mb-8 leading-relaxed">
                  {industry.description}
                </p>

                {/* Highlights */}
                <ul className="grid sm:grid-cols-2 gap-3">
                  {industry.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-center gap-3 text-[var(--color-slate-300)]"
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: `${industry.color}20` }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6L5 9L10 3"
                            stroke={industry.color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-20 pt-16 border-t border-[var(--color-slate-800)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <h3
              className="text-2xl text-[var(--color-paper)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {t("specializations.title")}
            </h3>
            <p className="text-[var(--color-slate-500)]">
              {t("specializations.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-xl border border-[var(--color-slate-800)] hover:border-[var(--color-accent)] transition-all duration-300 cursor-default"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10 text-center">
                  <span
                    className="block text-sm text-[var(--color-slate-300)] group-hover:text-[var(--color-paper)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {spec.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
