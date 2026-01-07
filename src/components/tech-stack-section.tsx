export function TechStackSection() {
  const techCategories = [
    {
      name: "Languages & Frameworks",
      color: "var(--color-cloud)",
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
      name: "Data & Storage",
      color: "var(--color-fintech)",
      techs: [
        { name: "PostgreSQL", abbr: "Pg" },
        { name: "Redis", abbr: "Rd" },
        { name: "Elasticsearch", abbr: "Es" },
        { name: "MongoDB", abbr: "Mg" },
      ],
    },
    {
      name: "Cloud & DevOps",
      color: "var(--color-proptech)",
      techs: [
        { name: "AWS", abbr: "Aw" },
        { name: "Kubernetes", abbr: "K8" },
        { name: "Docker", abbr: "Dk" },
        { name: "Terraform", abbr: "Tf" },
      ],
    },
    {
      name: "Methodology & AI",
      color: "var(--color-ai)",
      techs: [
        { name: "Agile", abbr: "Ag" },
        { name: "AI/ML", abbr: "AI" },
        { name: "CI/CD", abbr: "CI" },
      ],
    },
  ];

  return (
    <section id="tech" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Floating Accent Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[var(--color-cloud)] rounded-full blur-[120px] opacity-10" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label justify-center">Technology</span>
          <h2
            className="text-display-md text-[var(--color-ink)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Battle-tested stack
          </h2>
          <p className="text-xl text-[var(--color-slate-600)]">
            We work with the technologies that power the world&apos;s most demanding
            applications. No experiments on your dime—proven tools, proven results.
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
                  className="text-sm uppercase tracking-[0.15em] text-[var(--color-slate-500)]"
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
                >
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-[var(--color-slate-200)]" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group/item relative bg-[var(--color-paper)] border border-[var(--color-slate-200)] rounded-xl p-4 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
                  >
                    {/* Hover Gradient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}10 0%, transparent 60%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Abbreviation */}
                      <div
                        className="text-2xl mb-2 transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                          color: category.color,
                        }}
                      >
                        {tech.abbr}
                      </div>

                      {/* Name */}
                      <div
                        className="text-sm text-[var(--color-ink)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
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
        <div className="mt-20 pt-12 border-t border-[var(--color-slate-200)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <p className="text-lg text-[var(--color-slate-600)] max-w-2xl">
              Our engineers stay current with evolving technologies while maintaining
              deep expertise in battle-tested solutions. We choose the right tool for
              each job.
            </p>
            <a href="#contact" className="btn btn-primary">
              Discuss Your Tech Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
