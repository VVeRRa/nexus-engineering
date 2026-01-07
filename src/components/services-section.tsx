export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "IT Leadership",
      subtitle: "Strategic Direction",
      description:
        "Fractional CTOs and Technical Directors who align technology strategy with business objectives. Architecture reviews, tech debt assessment, and roadmap planning.",
      tags: ["CTO-as-a-Service", "Tech Strategy", "Architecture"],
      accent: "var(--color-accent)",
    },
    {
      number: "02",
      title: "Backend Development",
      subtitle: "Scalable Systems",
      description:
        "Robust, scalable APIs and microservices. High-performance systems handling millions of transactions. Event-driven architectures and distributed systems.",
      tags: ["Java", "Go", "Node.js", "PostgreSQL"],
      accent: "var(--color-fintech)",
    },
    {
      number: "03",
      title: "Frontend Development",
      subtitle: "Exceptional Interfaces",
      description:
        "Pixel-perfect interfaces with exceptional UX. Component libraries, design systems, and performant SPAs that users love and competitors envy.",
      tags: ["React", "TypeScript", "Next.js"],
      accent: "var(--color-cloud)",
    },
    {
      number: "04",
      title: "QA Engineering",
      subtitle: "Quality Assurance",
      description:
        "Comprehensive test strategies that catch bugs before users do. Manual and automated testing, performance testing, and security audits.",
      tags: ["Selenium", "Cypress", "Performance"],
      accent: "var(--color-ai)",
    },
    {
      number: "05",
      title: "DevOps Engineering",
      subtitle: "Infrastructure Excellence",
      description:
        "CI/CD pipelines that ship with confidence. Infrastructure as code, container orchestration, and observability that keeps systems humming.",
      tags: ["AWS", "Kubernetes", "Terraform"],
      accent: "var(--color-proptech)",
    },
    {
      number: "06",
      title: "Product Management",
      subtitle: "Vision to Execution",
      description:
        "Product leaders who bridge the gap between vision and execution. Roadmap development, stakeholder alignment, and data-driven prioritization.",
      tags: ["Strategy", "Agile", "Analytics"],
      accent: "var(--color-accent)",
    },
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
        06
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div>
            <span className="section-label">Services</span>
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
              From strategic leadership to hands-on implementation, we provide
              the technical expertise you need—when you need it, how you need it.
            </p>
          </div>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-[var(--color-paper)] border border-[var(--color-slate-200)] rounded-2xl p-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
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
                  {service.subtitle}
                </span>

                {/* Title */}
                <h3
                  className="text-2xl text-[var(--color-ink)] mb-4 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-slate-600)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-slate-500)] mb-6">
            Need a custom solution?
          </p>
          <a href="#contact" className="btn btn-secondary">
            Let&apos;s Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}
