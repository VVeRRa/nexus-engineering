"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function ProcessSection() {
  const t = useTranslations("Process");

  const steps = [
    {
      number: "01",
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
      details: (t.raw("steps.discovery.details") as string[]) || [],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      number: "02",
      title: t("steps.matching.title"),
      description: t("steps.matching.description"),
      details: (t.raw("steps.matching.details") as string[]) || [],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      number: "03",
      title: t("steps.integration.title"),
      description: t("steps.integration.description"),
      details: (t.raw("steps.integration.details") as string[]) || [],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      number: "04",
      title: t("steps.delivery.title"),
      description: t("steps.delivery.description"),
      details: (t.raw("steps.delivery.details") as string[]) || [],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
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
    <Section id="process" className="bg-black py-24">
      <div className="container relative z-10">
        <SectionHeader
          align="center"
          label={t("label")}
          title={t("title")}
          description={t("description")}
          className="mb-16"
        />

        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden"
        >

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative bg-[#050505] p-6 md:p-12 transition-all duration-500 hover:bg-[#0a0a0a]"
            >
              <div className="absolute top-8 right-8 text-8xl font-black text-[#3b82f6]/40 pointer-events-none group-hover:text-[#3b82f6]/50 transition-all duration-700">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center text-[#3b82f6] group-hover:text-white transition-all duration-500 mb-10">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-muted mb-10 leading-relaxed text-sm">
                  {step.description}
                </p>

                <ul className="space-y-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] group-hover:scale-125 transition-all duration-700" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Engagement Models */}
        <div className="mt-20 lg:mt-40 pt-24 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">
                {t("models.title")}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed mb-12 font-light">
                {t("models.subtitle")}
              </p>
              <div className="grid gap-6">
                {[
                  { id: "augmentation" },
                  { id: "team" },
                  { id: "project" }
                ].map((model) => (
                  <div key={model.id} className="p-6 md:p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] transition-colors group">
                    <h4 className="text-xl font-bold text-white mb-3 transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">{t(`models.${model.id}.title`)}</h4>
                    <p className="text-white/30 text-base font-medium leading-relaxed">{t(`models.${model.id}.desc`)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden border border-white/5 group bg-white/[0.02]"
            >
              <img
                src="/images/process-whiteboard.png"
                alt="Developer collaboration"
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase mb-4">Engineering Excellence</div>
                <div className="h-px w-24 bg-white/20 mb-6" />
                <div className="text-white/40 text-sm font-medium leading-relaxed max-w-sm">Senior engineering expertise integrated into your daily workflow.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

