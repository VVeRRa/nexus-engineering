"use client";

import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "design",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      )
    },
    {
      id: "leadership",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      id: "backend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
      )
    },
    {
      id: "frontend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      )
    },
    {
      id: "qa",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      )
    },
    {
      id: "devops",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
      )
    },
    {
      id: "product",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      )
    }
  ];

  return (
    <section id="services" className="section bg-[var(--color-paper)] relative overflow-hidden py-24 transition-colors duration-300">
      {/* Background with Green Gradient Accent */}
      {/* Background with Green Gradient Accent - Radial Gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-0 -z-10"
        style={{ background: 'radial-gradient(circle, var(--color-green-200) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
            {t("title")}
          </span>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-ink)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("lead")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const tags = (t.raw(`list.${service.id}.tags`) as string[]) || [];
            const isEven = index % 2 === 0;

            const themeClass = isEven
              ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
              : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${themeClass} border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-100`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${isEven
                    ? "bg-blue-50 text-[var(--color-primary)]"
                    : "bg-green-50 text-[var(--color-secondary)]"
                    }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-xl font-bold text-[var(--color-ink)] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`list.${service.id}.title`)}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed text-sm">
                    {t(`list.${service.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-0 py-1 text-xs font-medium ${isEven
                          ? "text-[var(--color-primary)] dark:text-blue-300"
                          : "text-[var(--color-secondary)] dark:text-green-300"
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
          <a href="#contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:gap-3 transition-all">
            {t('cta.button')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
