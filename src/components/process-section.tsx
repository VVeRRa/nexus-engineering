export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We dive deep into your requirements, technical landscape, and team dynamics. Understanding context is everything.",
      duration: "1-2 weeks",
      details: ["Requirements analysis", "Technical assessment", "Team fit evaluation"],
    },
    {
      number: "02",
      title: "Matching",
      description:
        "Precision talent selection based on technical skills, domain experience, and cultural fit. No resume roulette.",
      duration: "1 week",
      details: ["Skills matching", "Domain expertise", "Culture alignment"],
    },
    {
      number: "03",
      title: "Integration",
      description:
        "Seamless onboarding into your workflows, tools, and ceremonies. Our engineers become your engineers.",
      duration: "1-2 weeks",
      details: ["Workflow setup", "Tool integration", "Team embedding"],
    },
    {
      number: "04",
      title: "Delivery",
      description:
        "Continuous value delivery with transparent communication. Regular check-ins ensure alignment and momentum.",
      duration: "Ongoing",
      details: ["Sprint planning", "Progress tracking", "Quality assurance"],
    },
  ];

  const engagementModels = [
    {
      title: "Staff Augmentation",
      description: "Individual engineers embedded in your team, working your hours, using your tools.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Dedicated Team",
      description: "A full squad with complementary skills, managed as a cohesive unit.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11V13M16 11V13M10 14.5L12 13M14 14.5L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Project-Based",
      description: "End-to-end delivery of defined scope with fixed timeline and budget.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 10L11 13L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="section bg-[var(--color-ink)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-accent)] rounded-full blur-[400px] opacity-5" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label section-label-light">Process</span>
          <h2
            className="text-display-md text-[var(--color-paper)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            How we work
          </h2>
          <p className="text-xl text-[var(--color-slate-400)]">
            A proven methodology refined across hundreds of engagements.
            Fast time-to-value without cutting corners.
          </p>
        </div>

        {/* Process Steps - Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-slate-700)] to-[var(--color-slate-800)]" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:col-start-2 lg:text-left lg:pl-16"
                  }`}
                >
                  <div className="relative bg-[var(--color-slate-900)] rounded-2xl p-8 border border-[var(--color-slate-800)] hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-5xl text-[var(--color-accent)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                      >
                        {step.number}
                      </span>
                      <div className="flex-1 lg:hidden">
                        <span
                          className="text-xs text-[var(--color-slate-500)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl text-[var(--color-paper)] mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-slate-400)] mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, dIndex) => (
                        <span key={dIndex} className="tag tag-dark">
                          {detail}
                        </span>
                      ))}
                    </div>

                    {/* Duration Badge - Desktop */}
                    <div className="hidden lg:block absolute top-8 right-8">
                      <span
                        className="text-xs text-[var(--color-slate-500)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-ink)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mt-24 pt-16 border-t border-[var(--color-slate-800)]">
          <div className="text-center mb-12">
            <h3
              className="text-2xl text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Engagement Models
            </h3>
            <p className="text-[var(--color-slate-500)]">
              Flexible arrangements to fit your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-[var(--color-slate-800)] hover:border-[var(--color-accent)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-800)] flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)] transition-all duration-300">
                    {model.icon}
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl text-[var(--color-paper)] mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {model.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[var(--color-slate-400)] text-sm">
                    {model.description}
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
