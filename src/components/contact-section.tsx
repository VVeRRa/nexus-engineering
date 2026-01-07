"use client";

import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formState);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section bg-[var(--color-paper)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full blur-[250px] opacity-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="section-label">Contact</span>
            <h2
              className="text-display-md text-[var(--color-ink)] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Let&apos;s build
              <br />
              something great
            </h2>
            <p className="text-xl text-[var(--color-slate-600)] mb-10">
              Whether you need a single specialist or a full team, we&apos;ll craft
              an engagement that fits your needs and budget.
            </p>

            {/* Contact Info */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:hello@nexus.engineering"
                className="group flex items-center gap-4 text-[var(--color-ink)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-100)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5H17V15H3V5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 5L10 11L17 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="group-hover:text-[var(--color-slate-600)] transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    hello@nexus.engineering
                  </p>
                  <p
                    className="text-sm text-[var(--color-slate-500)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Response within 24 hours
                  </p>
                </div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[var(--color-slate-200)]">
              <p
                className="text-xs text-[var(--color-slate-500)] uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap gap-6">
                {["FinTech Co.", "PropTech Inc.", "Enterprise Corp.", "Startup X"].map(
                  (company, index) => (
                    <span
                      key={index}
                      className="text-[var(--color-slate-400)] text-lg"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                    >
                      {company}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-[var(--color-ink)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Form Background Accent */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="form-label text-[var(--color-slate-400)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="form-input bg-[var(--color-slate-900)] border-[var(--color-slate-700)] text-[var(--color-paper)] placeholder:text-[var(--color-slate-600)]"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label text-[var(--color-slate-400)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="form-input bg-[var(--color-slate-900)] border-[var(--color-slate-700)] text-[var(--color-paper)] placeholder:text-[var(--color-slate-600)]"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="form-label text-[var(--color-slate-400)]">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="form-input bg-[var(--color-slate-900)] border-[var(--color-slate-700)] text-[var(--color-paper)] placeholder:text-[var(--color-slate-600)]"
                    placeholder="Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="form-label text-[var(--color-slate-400)]">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="form-input form-select bg-[var(--color-slate-900)] border-[var(--color-slate-700)] text-[var(--color-paper)]"
                  >
                    <option value="">Select project type</option>
                    <option value="augmentation">Staff Augmentation</option>
                    <option value="team">Dedicated Team</option>
                    <option value="project">Project-Based</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label text-[var(--color-slate-400)]">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-input form-textarea bg-[var(--color-slate-900)] border-[var(--color-slate-700)] text-[var(--color-paper)] placeholder:text-[var(--color-slate-600)]"
                    placeholder="What are you building? What skills do you need?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-accent btn-lg w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M14 2L7 9M14 2L10 14L7 9M14 2L2 6L7 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
