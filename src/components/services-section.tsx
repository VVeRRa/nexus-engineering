"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "leadership",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "product-design",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: "backend",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: "frontend",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "qa",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "devops",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (

    <Section
      id="services"
      background={
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 -z-10"
          style={{ background: 'radial-gradient(circle, var(--color-green-200) 0%, transparent 70%)' }}
        />
      }
    >
      <SectionHeader
        align="center"
        label={<span className="text-[var(--color-secondary)]">{t("title")}</span>}
        title={t("lead")}
        className="mb-20"
      />

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll stagger-fly-children">
        {services.map((service, index) => {
          const tags = (t.raw(`list.${service.id}.tags`) as string[]) || [];
          const isEven = index % 2 === 0;

          const themeClass = isEven
            ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
            : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

          return (
            <div
              key={index}
              className={`group bg-gradient-to-br ${themeClass} border rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-100`}
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon */}
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isEven
                      ? "bg-blue-50 text-[var(--color-primary)]"
                      : "bg-green-50 text-[var(--color-secondary)]"
                      }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-xl font-bold text-[var(--color-ink)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`list.${service.id}.title`)}
                  </h3>
                </div>

                <p className="text-[var(--color-ink)] mb-6 leading-relaxed text-sm">
                  {t(`list.${service.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-0 py-1 text-xs font-medium ${isEven
                        ? "text-blue-300"
                        : "text-green-300"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-bold hover:gap-3 transition-all">
          {t('cta.button')}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </Section>
  );
}
