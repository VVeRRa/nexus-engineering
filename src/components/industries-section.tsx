"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

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
      stats: { value: "", label: t("fintech.stats") },
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
      stats: { value: "", label: t("proptech.stats") },
    },
    {
      name: t("regtech.name"),
      color: "var(--color-primary)",
      tagline: t("regtech.tagline"),
      description: t("regtech.description"),
      highlights: [
        t("regtech.highlights.0"),
        t("regtech.highlights.1"),
        t("regtech.highlights.2"),
        t("regtech.highlights.3"),
      ],
      stats: { value: "", label: t("regtech.stats") },
    },
    {
      name: t("ecosystems.name"),
      color: "var(--color-secondary)",
      tagline: t("ecosystems.tagline"),
      description: t("ecosystems.description"),
      highlights: [
        t("ecosystems.highlights.0"),
        t("ecosystems.highlights.1"),
        t("ecosystems.highlights.2"),
        t("ecosystems.highlights.3"),
      ],
      stats: { value: "", label: t("ecosystems.stats") },
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

    <Section
      id="industries"
      background={
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 -z-10"
          style={{ background: 'radial-gradient(circle, var(--color-blue-100) 0%, transparent 70%)' }}
        />
      }
    >
      {/* Section Header */}
      <SectionHeader
        align="center"
        label={<span className="text-[var(--color-primary)]">{t("label")}</span>}
        title={<>{t("title")}<br /><span className="text-[var(--color-text-secondary)]">{t("subtitle")}</span></>}
        description={t("description")}
        className="mb-20"
      />

      {/* Industries Grid */}
      <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll stagger-fly-children">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-card-from)] ${index % 2 === 0 ? "to-[var(--color-card-to-blue)] border-[var(--color-card-border-blue)]" : "to-[var(--color-card-to-green)] border-[var(--color-card-border-green)]"
              } border p-10 md:p-12 hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                {/* Color Accent Bar */}
                <div
                  className="w-12 h-1 rounded-full mb-4"
                  style={{ background: industry.color }}
                />
                <h3
                  className="text-3xl md:text-4xl text-[var(--color-ink)] mb-2"
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
                  className="text-3xl text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {industry.stats.value}
                </div>
                <div
                  className="text-xs text-[var(--color-text-secondary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {industry.stats.label}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {industry.description}
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {industry.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-center gap-3 text-[var(--color-text-secondary)]"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `color-mix(in srgb, ${industry.color}, transparent 85%)` }}
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

            {/* Learn More Button */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mt-8 transition-all duration-300 ${index % 2 === 0
                ? "bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/30"
                : "bg-[var(--color-secondary)] text-white shadow-lg shadow-green-500/30"
                }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Specializations */}
      <div className="mt-20 pt-16 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h3
            className="text-2xl text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {t("specializations.title")}
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            {t("specializations.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex items-center justify-center group relative p-5 rounded-xl border border-[var(--color-border)] hover:border-blue-200 transition-all duration-300 cursor-default bg-[var(--color-surface)]"
            >
              <div className="text-center">
                <span
                  className="block text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {spec.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
