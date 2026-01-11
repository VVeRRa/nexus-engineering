"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  const values = [
    {
      title: t("values.excellence.title"),
      description: t("values.excellence.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-primary)]">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.transparent.title"),
      description: t("values.transparent.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-secondary)]">
          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("values.impact.title"),
      description: t("values.impact.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-primary)]">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.longterm.title"),
      description: t("values.longterm.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-secondary)]">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <Section
      id="about"
      background={
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 -z-10"
          style={{ background: 'radial-gradient(circle, var(--color-green-100) 0%, transparent 70%)' }}
        />
      }
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-on-scroll">
        {/* Left Column */}
        <div>
          <SectionHeader
            label={<span className="text-[var(--color-secondary)]">{t("label")}</span>}
            title={t.rich("title", {
              br: () => <br />,
              span: (chunks) => <span className="text-[var(--color-secondary)]">{chunks}</span>
            })}
            className="mb-8"
          />
          <div className="space-y-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            <p>
              {t("description1")}
            </p>
            <p>
              {t("description2")}
            </p>
          </div>
        </div>

        {/* Right Column - Values */}
        <div className="grid sm:grid-cols-2 gap-5 animate-on-scroll stagger-fly-children">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to-green)] p-8 rounded-3xl shadow-sm border border-[var(--color-card-border-green)] hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5 text-[var(--color-secondary)]">
                {value.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg text-[var(--color-ink)] font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
