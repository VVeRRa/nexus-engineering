"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

export function AboutSection() {
  const t = useTranslations("About");

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
    initial: { y: 30, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  const values = [
    {
      title: t("values.excellence.title"),
      description: t("values.excellence.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400 group-hover:text-blue-300 transition-colors">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.transparent.title"),
      description: t("values.transparent.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400 group-hover:text-purple-300 transition-colors">
          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("values.impact.title"),
      description: t("values.impact.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t("values.longterm.title"),
      description: t("values.longterm.desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <Section
      id="about"
      className="pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SectionHeader
            label={t("label")}
            title={t.rich("title", {
              br: () => <br />,
              span: (chunks) => <span className="text-white">{chunks}</span>
            })}
            className="mb-8"
          />
          <div className="space-y-8 text-xl text-white/50 leading-relaxed font-light">
            <p className="group-hover:text-white/70 transition-colors">
              {t("description1")}
            </p>
            <p className="text-white/30 text-lg group-hover:text-white/50 transition-colors">
              {t("description2")}
            </p>
          </div>
        </motion.div>

        {/* Right Column - Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group"
        >
          <img
            src="/images/team-informal.png"
            alt="BLAiT Engineering Team"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>

      {/* Values Grid */}
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden mt-24"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="group relative bg-black p-10 transition-all duration-500"
          >
            {/* Accent Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500"
            >
              {value.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
              {value.title}
            </h3>

            <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors font-light">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </Section >
  );
}
