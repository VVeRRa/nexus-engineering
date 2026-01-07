export function CaseStudiesSection() {
  const caseStudies = [
    {
      category: "FinTech",
      title: "Payment Processing Platform",
      description:
        "Built a real-time payment gateway processing $2B+ annually with 99.99% uptime and sub-100ms latency.",
      metrics: [
        { value: "$2B+", label: "Annual Volume" },
        { value: "99.99%", label: "Uptime" },
        { value: "<100ms", label: "Latency" },
      ],
      tags: ["Java", "AWS", "PostgreSQL", "Redis"],
      color: "var(--color-fintech)",
      image: "/case-study-fintech.jpg",
    },
    {
      category: "PropTech",
      title: "Property Management Suite",
      description:
        "End-to-end platform managing 50,000+ rental units with IoT integrations and tenant self-service.",
      metrics: [
        { value: "50K+", label: "Units" },
        { value: "40%", label: "Cost Reduction" },
        { value: "4.8", label: "App Rating" },
      ],
      tags: ["React", "Node.js", "MongoDB", "IoT"],
      color: "var(--color-proptech)",
      image: "/case-study-proptech.jpg",
    },
    {
      category: "Enterprise",
      title: "Cloud Migration",
      description:
        "Migrated legacy monolith to microservices architecture, reducing infrastructure costs by 60%.",
      metrics: [
        { value: "60%", label: "Cost Savings" },
        { value: "10x", label: "Deploy Speed" },
        { value: "85%", label: "Faster TTM" },
      ],
      tags: ["Kubernetes", "Go", "Terraform", "AWS"],
      color: "var(--color-cloud)",
      image: "/case-study-cloud.jpg",
    },
  ];

  return (
    <section id="case-studies" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Case Studies</span>
            <h2
              className="text-display-md text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Proven impact
            </h2>
          </div>
          <a
            href="#contact"
            className="link-arrow text-[var(--color-ink)] self-start lg:self-auto"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-[var(--color-paper)] rounded-2xl overflow-hidden border border-[var(--color-slate-200)] hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              {/* Top Color Bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: study.color }}
              />

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <span
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{
                    color: study.color,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                  }}
                >
                  {study.category}
                </span>

                {/* Title */}
                <h3
                  className="text-2xl text-[var(--color-ink)] mt-3 mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-slate-600)] mb-8 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-[var(--color-slate-200)]">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <div
                        className="text-2xl text-[var(--color-ink)] mb-1"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                      >
                        {metric.value}
                      </div>
                      <div
                        className="text-[10px] text-[var(--color-slate-500)] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {study.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div
                className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                style={{ background: study.color }}
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

        {/* Testimonial Strip */}
        <div className="mt-20 p-10 bg-[var(--color-ink)] rounded-2xl relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full blur-[200px] opacity-10" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <svg
                className="w-10 h-10 text-[var(--color-accent)] mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.003z" />
              </svg>
              <p
                className="text-xl text-[var(--color-paper)] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;Nexus engineers integrated seamlessly with our team and delivered
                beyond expectations. They&apos;re not vendors—they&apos;re partners.&rdquo;
              </p>
              <div>
                <p
                  className="text-[var(--color-paper)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  Sarah Chen
                </p>
                <p
                  className="text-[var(--color-slate-500)] text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  CTO, FinTech Startup
                </p>
              </div>
            </div>
            <a href="#contact" className="btn btn-accent btn-lg flex-shrink-0">
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
