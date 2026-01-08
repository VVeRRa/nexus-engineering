"use client";

import { useTranslations } from "next-intl";

export function ProcessSection() {
  const t = useTranslations("Process");

  const steps = [
    {
      number: "01",
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
      duration: "1-2 weeks", // Duration could also be translated if strictly needed, but roughly language agnostic for now.
      details: [
        t("steps.discovery.details.0"),
        t("steps.discovery.details.1"),
        t("steps.discovery.details.2")
      ],
    },
    {
      number: "02",
      title: t("steps.matching.title"),
      description: t("steps.matching.description"),
      duration: "1 week",
      details: [
        t("steps.matching.details.0"),
        t("steps.matching.details.1"),
        t("steps.matching.details.2")
      ],
    },
    {
      number: "03",
      title: t("steps.integration.title"),
      description: t("steps.integration.description"),
      duration: "1-2 weeks",
      details: [
        t("steps.integration.details.0"),
        t("steps.integration.details.1"),
        t("steps.integration.details.2")
      ],
    },
    {
      number: "04",
      title: t("steps.delivery.title"),
      description: t("steps.delivery.description"),
      duration: "Ongoing",
      details: [
        t("steps.delivery.details.0"),
        t("steps.delivery.details.1"),
        t("steps.delivery.details.2")
      ],
    },
  ];

  const engagementModels = [
    {
      title: t("models.augmentation.title"),
      description: t("models.augmentation.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t("models.team.title"),
      description: t("models.team.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11V13M16 11V13M10 14.5L12 13M14 14.5L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t("models.project.title"),
      description: t("models.project.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 10L11 13L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="section bg-[var(--color-ink)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-accent)] rounded-full blur-[400px] opacity-5" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label section-label-light">{t("label")}</span>
          <h2
            className="text-display-md text-[var(--color-paper)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("title")}
          </h2>
          <p className="text-xl text-[var(--color-slate-400)]">
            {t("description")}
          </p>
        </div>

        {/* Process Steps - Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-slate-700)] to-[var(--color-slate-800)]" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
              >
                {/* Content */}
                <div
                  className={`${index % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:col-start-2 lg:text-left lg:pl-16"
                    }`}
                >
                  <div className="relative bg-[var(--color-slate-900)] rounded-2xl p-8 border border-[var(--color-slate-800)] hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-5xl text-[var(--color-accent)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                      >
                        {step.number}
                      </span>
                      <div className="flex-1 lg:hidden">
                        <span
                          className="text-xs text-[var(--color-slate-500)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl text-[var(--color-paper)] mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-slate-400)] mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, dIndex) => (
                        <span key={dIndex} className="tag tag-dark">
                          {detail}
                        </span>
                      ))}
                    </div>

                    {/* Duration Badge - Desktop */}
                    <div className="hidden lg:block absolute top-8 right-8">
                      <span
                        className="text-xs text-[var(--color-slate-500)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-ink)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mt-24 pt-16 border-t border-[var(--color-slate-800)]">
          <div className="text-center mb-12">
            <h3
              className="text-2xl text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {t("models.title")}
            </h3>
            <p className="text-[var(--color-slate-500)]">
              {t("models.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-[var(--color-slate-800)] hover:border-[var(--color-accent)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-800)] flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)] transition-all duration-300">
                    {model.icon}
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl text-[var(--color-paper)] mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {model.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[var(--color-slate-400)] text-sm">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
