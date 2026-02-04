"use client";

import { useRef } from "react";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

export function TechStackSection() {
  const t = useTranslations("TechStack");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  const allTechs = [
    "Java", "Quarkus", "Spring Boot", "Node.js", "TypeScript", "Go", "React", "Next.js",
    "PostgreSQL", "Redis", "Elasticsearch", "NATS JetStream", "AWS", "Kubernetes",
    "Terraform", "Docker", "Prometheus", "Grafana", "Loki", "Playwright", "Figma",
    "CI/CD", "Testing", "Agile", "AI", "Cloud-Native", "Microservices"
  ];

  // Double the array for seamless looping
  const marqueeTechs = [...allTechs, ...allTechs];

  return (
    <Section id="tech" className="bg-black py-32 overflow-hidden">
      <div ref={containerRef} className="container relative z-10 mb-20 text-center">
        <SectionHeader
          align="center"
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex overflow-x-hidden group py-12"
      >
        <motion.div
          animate={isInView ? {
            x: ["0%", "-50%"],
          } : {}}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 px-4"
        >
          {marqueeTechs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="px-10 py-5 border border-white/5 bg-white/[0.01] rounded-full hover:border-white/20 transition-all duration-500 group/tag"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] text-white/50 group-hover/tag:text-white uppercase transition-all duration-300">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="container relative z-10 mt-32">
        {/* Bottom Statement Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="p-16 lg:p-20 border border-white/5 bg-white/[0.01] rounded-[4rem] relative overflow-hidden group"
        >
          {/* Subtle Glows inside Bottom Block */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[100px] -z-10 group-hover:bg-white/[0.04] transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.02] blur-[100px] -z-10 group-hover:bg-white/[0.04] transition-all duration-1000" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 relative z-10 text-center lg:text-left">
            <p className="text-2xl md:text-3xl text-white/50 max-w-2xl leading-tight font-medium tracking-tight">
              {t("statement")}
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="btn btn-primary px-14 py-6">
                {t("cta")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

