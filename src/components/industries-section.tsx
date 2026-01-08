"use client";

import { useTranslations } from "next-intl";

export function IndustriesSection() {
  const t = useTranslations("Industries");

  const industries = [
    {
      name: t("fintech.name"),
      color: "var(--color-primary)",
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
      color: "var(--color-secondary)",
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
    <section id="industries" className="section bg-white relative overflow-hidden py-24">
      {/* Background with Blue Gradient Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
            {t("label")}
          </span>
          <h2
            className="text-4xl md:text-5xl text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("title")}
            <br />
            <span className="text-slate-400">{t("subtitle")}</span>
          </h2>
          <p className="text-xl text-slate-500">
            {t("description")}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 p-10 md:p-12 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  {/* Color Accent Bar */}
                  <div
                    className="w-12 h-1 rounded-full mb-4"
                    style={{ background: industry.color }}
                  />
                  <h3
                    className="text-3xl md:text-4xl text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {industry.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-widest font-bold"
                    style={{ color: industry.color, fontFamily: "var(--font-mono)" }}
                  >
                    {industry.tagline}
                  </p>
                </div>

                {/* Stats Badge */}
                <div className="text-right">
                  <div
                    className="text-3xl text-slate-900"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {industry.stats.value}
                  </div>
                  <div
                    className="text-xs text-slate-500"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {industry.stats.label}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 mb-8 leading-relaxed">
                {industry.description}
              </p>

              {/* Highlights */}
              <ul className="grid sm:grid-cols-2 gap-3">
                {industry.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: `${industry.color}15` }}
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
                    <span className="text-sm font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <h3
              className="text-2xl text-slate-900"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {t("specializations.title")}
            </h3>
            <p className="text-slate-500">
              {t("specializations.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-default bg-white"
              >
                <div className="text-center">
                  <span
                    className="block text-sm text-slate-600 group-hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
                    style={{ fontFamily: "var(--font-display)" }}
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
