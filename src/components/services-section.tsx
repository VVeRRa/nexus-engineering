"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "leadership",
      color: "var(--color-accent)", // Lime
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "product-design",
      color: "var(--color-proptech)", // Orange
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: "backend",
      color: "var(--color-cloud)", // Blue
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: "frontend",
      color: "var(--color-fintech)", // Teal
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "qa",
      color: "var(--color-ai)", // Purple
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "devops",
      color: "var(--color-accent-secondary)", // Light Lime
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars = {
    initial: { y: 30, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  return (
    <section id="services" className="py-10 md:py-24 bg-black relative">
      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          align="center"
          label={t("title")}
          title={t("leadTitle")}
          description={t("leadText")}
          className="mb-24"
        />

        {/* Services Bento Grid */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden"
        >
          {services.map((service, index) => {
            const spans = [
              "lg:col-span-1",
              "lg:col-span-1",
              "lg:col-span-1",
              "lg:col-span-1",
              "lg:col-span-1",
              "lg:col-span-1",
            ];

            const tags = (t.raw(`list.${service.id}.tags`) as string[]) || [];

            return (
              <motion.div
                key={index}
                variants={itemVars}
                className={`group bg-[#050505] p-4 md:p-10 flex flex-col h-full relative overflow-hidden transition-colors duration-500 hover:bg-[#0a0a0a] ${spans[index % spans.length]}`}
              >
                <div className="flex items-start justify-between mb-4 md:mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-white/40 group-hover:text-[var(--service-color)] transition-all duration-500"
                    style={{ "--service-color": service.color } as React.CSSProperties}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <div
                    className="text-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-[var(--service-color)]"
                    style={{ "--service-color": service.color } as React.CSSProperties}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight break-words">
                    {t(`list.${service.id}.title`)}
                  </h3>

                  <p className="text-muted mb-6 md:mb-8 leading-relaxed text-sm max-w-sm">
                    {t(`list.${service.id}.description`)}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border bg-white/[0.02] border-white/10 text-white/60 transition-colors"
                        style={{
                          borderColor: `${service.color}30`, // 20% opacity approx
                          color: service.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-4 group text-white/40 font-bold tracking-[0.3em] uppercase text-[10px] transition-all duration-300 hover:text-white">
            {t('cta.button')}
            <span className="w-10 h-px bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

