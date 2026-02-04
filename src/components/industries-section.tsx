"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function IndustriesSection() {
  const t = useTranslations("Industries");

  const industries = [
    {
      name: t("fintech.name"),
      color: "var(--color-fintech)",
      tagline: t("fintech.tagline"),
      description: t("fintech.description"),
      highlights: (t.raw("fintech.highlights") as string[]) || [],
      stats: { value: "", label: t("fintech.stats") },
    },
    {
      name: t("proptech.name"),
      color: "var(--color-proptech)",
      tagline: t("proptech.tagline"),
      description: t("proptech.description"),
      highlights: (t.raw("proptech.highlights") as string[]) || [],
      stats: { value: "", label: t("proptech.stats") },
    },
    {
      name: t("regtech.name"),
      color: "var(--color-cloud)",
      tagline: t("regtech.tagline"),
      description: t("regtech.description"),
      highlights: (t.raw("regtech.highlights") as string[]) || [],
      stats: { value: "", label: t("regtech.stats") },
    },
    {
      name: t("ecosystems.name"),
      color: "var(--color-accent)",
      tagline: t("ecosystems.tagline"),
      description: t("ecosystems.description"),
      highlights: (t.raw("ecosystems.highlights") as string[]) || [],
      stats: { value: "", label: t("ecosystems.stats") },
    },
  ];

  const specializations = [
    { name: t("specializations.cloud"), icon: "cloud" },
    { name: t("specializations.distArch"), icon: "network" },
    { name: t("specializations.scaling"), icon: "scale" },
    { name: t("specializations.product"), icon: "rocket" },
    { name: t("specializations.ai"), icon: "ai" },
    { name: t("specializations.migration"), icon: "migrate" },
  ];

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars = {
    initial: { y: 40, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  return (
    <Section id="industries" className="bg-black overflow-hidden relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <SectionHeader
          align="center"
          label={t("label")}
          title={t("title")}
          description={t("description")}
          className="mb-16"
        />

        {/* Industries Grid */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden"
        >

          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative bg-[#050505] p-5 md:p-14 transition-all duration-700 overflow-hidden hover:bg-[#0a0a0a]"
            >
              {/* Glow Aura - Desktop Only */}
              <div
                className="hidden md:block absolute -top-32 -right-32 w-80 h-80 blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: industry.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4 md:mb-8 text-white/50">
                  <div className="w-10 h-px bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-700" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                    {industry.tagline}
                  </span>
                </div>

                <h3 className="text-2xl md:text-6xl font-black text-white mb-4 md:mb-8 tracking-tighter">
                  {industry.name}
                </h3>

                <p className="text-muted text-lg mb-6 md:mb-12 leading-tight tracking-tight font-medium">
                  {industry.description}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pb-2">
                  {industry.highlights.map((highlight: string, hIndex: number) => (
                    <div key={hIndex} className="flex items-center gap-4">
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:scale-125 transition-all duration-700"
                        style={{ backgroundColor: industry.color }}
                      />
                      <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specializations & Value Props */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Legend/Value Props */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h4 className="text-3xl font-bold text-white tracking-tight">
                {t("valueProps.startups.label")} & {t("valueProps.smes.label")}
              </h4>
              <div className="grid gap-6">
                <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] transition-colors group">
                  <p className="text-white/40 group-hover:text-white/70 transition-colors text-lg font-light leading-relaxed">
                    {t("valueProps.startups.text")}
                  </p>
                </div>
                <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] transition-colors group">
                  <p className="text-white/40 group-hover:text-white/70 transition-colors text-lg font-light leading-relaxed">
                    {t("valueProps.smes.text")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Specializations Tags */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-white mb-12 tracking-tight">
                {t("specializations.title")}
              </h4>
              <div className="flex flex-wrap gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-full border border-white/5 bg-white/[0.02] text-[11px] font-mono tracking-widest text-white/50 hover:text-white/90 hover:border-white/20 transition-all uppercase"
                  >
                    {spec.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

