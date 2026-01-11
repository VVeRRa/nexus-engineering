"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

export function CaseStudiesSection() {
  const t = useTranslations("CaseStudies");

  const caseStudies = [
    {
      category: "FinTech",
      title: t("fintech.title"),
      description: t("fintech.description"),
      author: "Sarah Chen",
      role: "CTO, FinTech Startup",
      avatar: "SC",
      color: "var(--color-fintech)",
    },
    {
      category: "PropTech",
      title: t("proptech.title"),
      description: t("proptech.description"),
      author: "Mark Miller",
      role: "VP Eng, PropTech Inc",
      avatar: "MM",
      color: "var(--color-proptech)",
    },
    {
      category: "Enterprise",
      title: t("enterprise.title"),
      description: t("enterprise.description"),
      author: "David Ross",
      role: "Director, Enterprise Corp",
      avatar: "DR",
      color: "var(--color-cloud)",
    },
  ];

  return (

    <Section id="case-studies">
      <SectionHeader
        align="center"
        label={<span className="text-[var(--color-secondary)]">TESTIMONIALS</span>}
        title={t("title")}
        description="Join thousands who build better software with Nexus."
        className="mb-16"
      />

      {/* Case Studies Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
          >
            {/* Green Quote Icon */}
            <div className="mb-6 text-[var(--color-secondary)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16.5523 16 17 15.5523 17 15V9C17 8.44772 16.5523 8 16 8H12C11.4477 8 11 8.44772 11 9V18C11 19.6569 12.3431 21 14 21H21.017Z" />
              </svg>
            </div>

            {/* Description/Quote */}
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              &quot;{study.description}&quot;
            </p>

            {/* Green Stars */}
            <div className="flex gap-1 mb-6 text-[var(--color-secondary)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                {study.avatar}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{study.author}</h4>
                <p className="text-sm text-slate-500">{study.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}
