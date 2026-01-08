"use client";

import { useTranslations } from "next-intl";

export function TechStackSection() {
  const t = useTranslations("TechStack");

  const techCategories = [
    {
      name: t("categories.languages"),
      color: "var(--color-primary)",
      techs: [
        { name: "Java", abbr: "Jv" },
        { name: "Go", abbr: "Go" },
        { name: "Node.js", abbr: "Nj" },
        { name: "React", abbr: "Re" },
        { name: "TypeScript", abbr: "Ts" },
        { name: "Next.js", abbr: "Nx" },
      ],
    },
    {
      name: t("categories.data"),
      color: "var(--color-secondary)",
      techs: [
        { name: "PostgreSQL", abbr: "Pg" },
        { name: "Redis", abbr: "Rd" },
        { name: "Elasticsearch", abbr: "Es" },
        { name: "MongoDB", abbr: "Mg" },
      ],
    },
    {
      name: t("categories.cloud"),
      color: "var(--color-primary)",
      techs: [
        { name: "AWS", abbr: "Aw" },
        { name: "Kubernetes", abbr: "K8" },
        { name: "Docker", abbr: "Dk" },
        { name: "Terraform", abbr: "Tf" },
      ],
    },
    {
      name: t("categories.methodology"),
      color: "var(--color-secondary)",
      techs: [
        { name: "Agile", abbr: "Ag" },
        { name: "AI", abbr: "AI" },
        { name: "CI/CD", abbr: "CI" },
      ],
    },
  ];

  return (
    <section id="tech" className="section bg-slate-50 relative overflow-hidden py-24 animate-on-scroll">
      {/* Background w/ Green Accent */}
      {/* Background w/ Green Accent - Radial Gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, var(--color-green-100) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">{t("label")}</span>
          <h2
            className="text-4xl md:text-5xl text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {t("title")}
          </h2>
          <p className="text-xl text-slate-500">
            {t("description")}
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: category.color }}
                />
                <h3
                  className="text-sm uppercase tracking-[0.15em] text-slate-500"
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
                >
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group/item relative bg-gradient-to-br from-white to-green-50/50 border border-green-100/50 rounded-xl p-4 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
                  >

                    <div className="relative z-10">
                      {/* Abbreviation */}
                      <div
                        className="text-2xl mb-2 transition-colors duration-300 font-bold"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: category.color,
                        }}
                      >
                        {tech.abbr}
                      </div>

                      {/* Name */}
                      <div
                        className="text-sm text-slate-700 font-medium"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
            <p className="text-lg text-slate-600 max-w-2xl">
              {t("statement")}
            </p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-primary)] text-white rounded-full font-bold hover:bg-blue-700 transition-colors">
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
