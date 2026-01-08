"use client";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  const values = [
    {
      title: t("values.excellence.title"),
      description: t("values.excellence.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.transparent.title"),
      description: t("values.transparent.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("values.impact.title"),
      description: t("values.impact.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.longterm.title"),
      description: t("values.longterm.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section bg-[var(--color-ink)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-[300px] opacity-5" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="section-label section-label-light">{t("label")}</span>
            <h2
              className="text-display-md text-[var(--color-paper)] mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {t.rich("title", {
                br: () => <br />,
                span: (chunks) => <span className="text-[var(--color-accent)]">{chunks}</span>
              })}
            </h2>
            <div className="space-y-6 text-lg text-[var(--color-slate-400)]">
              <p>
                {t("description1")}
              </p>
              <p>
                {t("description2")}
              </p>
            </div>

            {/* Stats Removed per user request */}
          </div>

          {/* Right Column - Values */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-[var(--color-slate-800)] hover:border-[var(--color-accent)]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-800)] flex items-center justify-center text-[var(--color-accent)] mb-5 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)] transition-all duration-300">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg text-[var(--color-paper)] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-slate-400)]">
                    {value.description}
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
