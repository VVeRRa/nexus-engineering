"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

export function ProcessSection() {
  const t = useTranslations("Process");

  const steps = [
    {
      number: "01",
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
      details: (t.raw("steps.discovery.details") as string[]) || [],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      number: "02",
      title: t("steps.matching.title"),
      description: t("steps.matching.description"),
      details: (t.raw("steps.matching.details") as string[]) || [],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      number: "03",
      title: t("steps.integration.title"),
      description: t("steps.integration.description"),
      details: (t.raw("steps.integration.details") as string[]) || [],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      number: "04",
      title: t("steps.delivery.title"),
      description: t("steps.delivery.description"),
      details: (t.raw("steps.delivery.details") as string[]) || [],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
  ];

  return (

    <Section
      id="process"
      background={
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-0 -z-10"
          style={{ background: 'radial-gradient(circle, var(--color-blue-100) 0%, transparent 70%)' }}
        />
      }
    >
      <SectionHeader
        align="center"
        label={<span className="text-[var(--color-secondary)]">{t("label")}</span>}
        title={t("title")}
        description={t("description")}
        className="mb-12"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 animate-on-scroll stagger-fly-children">
        {Object.entries(steps).map(([key, step], index) => {
          const isEven = index % 2 === 0;

          const themeClass = isEven
            ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
            : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

          const iconBgClass = isEven
            ? "bg-blue-50 text-[var(--color-primary)]"
            : "bg-green-50 text-[var(--color-secondary)]";

          return (
            <div key={key} className="group relative">
              <div className={`h-full bg-gradient-to-br ${themeClass} border rounded-3xl p-4 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 shrink-0 rounded-xl ${iconBgClass} flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-bold text-[var(--color-ink)] break-words w-full"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[var(--color-ink)]">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-3 mt-auto">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-ink)] text-sm">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: isEven ? `color-mix(in srgb, var(--color-primary), transparent 85%)` : `color-mix(in srgb, var(--color-secondary), transparent 85%)` }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6L5 9L10 3"
                            stroke={isEven ? "var(--color-primary)" : "var(--color-secondary)"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engagement Models (Simplified) */}
      <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
        <div className="bg-[var(--color-paper-secondary)] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Image Side */}
          <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/process-whiteboard.png"
              alt="Developer collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-surface)]/30 mix-blend-multiply" />
          </div>

          {/* Content Side */}
          <div className="flex-1 p-5 md:p-12 lg:p-16">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-ink)] mb-4 break-words" style={{ fontFamily: "var(--font-display)" }}>
              {t("models.title")}
            </h3>
            <p className="text-[var(--color-ink)] mb-10 text-lg">
              {t("models.subtitle")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {[
                { id: "consulting", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
                { id: "project", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12" },
                { id: "augmentation", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                { id: "team", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                { id: "prototyping", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                { id: "billing", icon: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
              ].map((model) => (
                <div key={model.id} className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-lg transition-all duration-300`}>
                  <h4 className="text-lg font-bold text-[var(--color-ink)] mb-2 flex items-center gap-2">
                    {t(`models.${model.id}.title`)}
                  </h4>
                  <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                    {t(`models.${model.id}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
