"use client";

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
    <section id="process" className="section bg-[var(--color-paper)] relative overflow-hidden py-24">
      {/* Background */}
      {/* Background - Radial Gradient */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, var(--color-blue-100) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
            {t("label")}
          </span>
          <h2
            className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("title")}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll stagger-children">
          {Object.entries(steps).map(([key, step], index) => {
            const isEven = index % 2 === 0;
            const themeClass = isEven
              ? "from-[var(--color-card-from)] to-[var(--color-card-to-blue)] border-[var(--color-card-border-blue)] shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
              : "from-[var(--color-card-from)] to-[var(--color-card-to-green)] border-[var(--color-card-border-green)] shadow-[0_20px_50px_rgba(34,197,94,0.15)]";
            const iconBgClass = isEven ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]";
            const iconColorClass = "text-white";

            return (
              <div key={key} className="group relative">
                <div className={`h-full bg-gradient-to-br ${themeClass} border dark:border-0 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col`}>
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-full ${iconBgClass} ${iconColorClass} flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                    <h3
                      className="text-2xl text-slate-900 dark:text-white mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mt-auto">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm">
                        <svg className={`w-5 h-5 ${iconColorClass} flex-shrink-0 mt-0.5`} viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
          <div className="bg-[var(--color-paper-secondary)] rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {t("models.title")}
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
              {t("models.subtitle")}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { id: "augmentation", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                { id: "team", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                { id: "project", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12" }
              ].map((model, idx) => (
                <div key={model.id} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-[var(--color-ink)] mb-2">
                    {t(`models.${model.id}.title`)}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {t(`models.${model.id}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
