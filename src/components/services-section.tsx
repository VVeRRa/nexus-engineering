import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "leadership",
      number: "01",
      accent: "var(--color-accent)",
    },
    {
      id: "backend",
      number: "02",
      accent: "var(--color-fintech)",
    },
    {
      id: "frontend",
      number: "03",
      accent: "var(--color-cloud)",
    },
    {
      id: "qa",
      number: "04",
      accent: "var(--color-ai)",
    },
    {
      id: "devops",
      number: "05",
      accent: "var(--color-proptech)",
    },
    {
      id: "product",
      number: "06",
      accent: "var(--color-accent)",
    },
    {
      id: "design",
      number: "07",
      accent: "var(--color-cloud)",
    }
  ];

  return (
    <section id="services" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Large Background Number */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40rem] leading-none font-extrabold text-[var(--color-slate-100)] select-none pointer-events-none hidden xl:block"
        style={{ fontFamily: "var(--font-display)" }}
      >
        07
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div>
            <span className="section-label">{t('title')}</span>
            <h2
              className="text-display-md text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Full-spectrum
              <br />
              engineering
            </h2>
          </div>
          <div className="lg:flex lg:items-end">
            <p className="text-lg text-[var(--color-slate-600)] max-w-md">
              {t('lead')}
            </p>
          </div>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            // Get tags array from translation
            const tags = t.raw(`list.${service.id}.tags`) as string[];

            return (
              <div
                key={index}
                className={`group relative bg-[var(--color-paper)] border border-[var(--color-slate-200)] rounded-2xl p-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl ${index === 6 ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto" : ""
                  }`}
                style={{
                  ["--service-accent" as string]: service.accent,
                }}
              >
                {/* Hover Background Gradient */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}08 0%, transparent 50%)`,
                  }}
                />

                {/* Number */}
                <div
                  className="text-6xl font-extrabold text-[var(--color-slate-100)] mb-6 transition-colors duration-300 group-hover:text-[var(--color-slate-200)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Subtitle */}
                  <span
                    className="text-xs uppercase tracking-[0.2em] mb-2 block transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: service.accent,
                    }}
                  >
                    {t(`list.${service.id}.subtitle`)}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl text-[var(--color-ink)] mb-4 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {t(`list.${service.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-slate-600)] mb-6 leading-relaxed">
                    {t(`list.${service.id}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag transition-all duration-300 group-hover:bg-[var(--color-slate-200)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  style={{ background: service.accent }}
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
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-slate-500)] mb-6">
            {t('cta.question')}
          </p>
          <a href="#contact" className="btn btn-secondary">
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
