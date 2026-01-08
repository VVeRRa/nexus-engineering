"use client";

import { useTranslations } from "next-intl";

export function CaseStudiesSection() {
  const t = useTranslations("CaseStudies");

  const caseStudies = [
    {
      category: "FinTech",
      title: t("fintech.title"),
      description: t("fintech.description"),
      metrics: [],
      tags: ["Java", "AWS", "PostgreSQL", "Redis"],
      color: "var(--color-fintech)",
      image: "/case-study-fintech.jpg",
    },
    {
      category: "PropTech",
      title: t("proptech.title"),
      description: t("proptech.description"),
      metrics: [],
      tags: ["React", "Node.js", "MongoDB"],
      color: "var(--color-proptech)",
      image: "/case-study-proptech.jpg",
    },
    {
      category: "Enterprise",
      title: t("enterprise.title"),
      description: t("enterprise.description"),
      metrics: [],
      tags: ["Kubernetes", "Go", "Terraform", "AWS"],
      color: "var(--color-cloud)",
      image: "/case-study-cloud.jpg",
    },
  ];

  return (
    <section id="case-studies" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label">{t("label")}</span>
            <h2
              className="text-display-md text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {t("title")}
            </h2>
          </div>
          <a
            href="#contact"
            className="link-arrow text-[var(--color-ink)] self-start lg:self-auto"
          >
            {t("viewAll")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-[var(--color-paper)] rounded-2xl overflow-hidden border border-[var(--color-slate-200)] hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              {/* Top Color Bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: study.color }}
              />

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <span
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{
                    color: study.color,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                  }}
                >
                  {study.category}
                </span>

                {/* Title */}
                <h3
                  className="text-2xl text-[var(--color-ink)] mt-3 mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-slate-600)] mb-8 leading-relaxed">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {study.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div
                className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                style={{ background: study.color }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="var(--color-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
