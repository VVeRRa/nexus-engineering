"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

export function ProvenImpactSection() {
    const t = useTranslations("CaseStudies");
    const tNav = useTranslations("Nav");

    const projects = [
        { id: "fintech" },
        { id: "proptech" },
        { id: "enterprise" },
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
        <Section id="work">
            <SectionHeader
                align="center"
                label={tNav("work")}
                title={t("title")}
                className="mb-20"
            />

            <motion.div
                variants={containerVars}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className="group relative bg-[#050505] p-10 md:p-12 transition-all duration-500 hover:bg-[#0a0a0a] overflow-hidden"
                    >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-px bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-700" />
                                <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                                    {t(`${project.id}.category`)}
                                </span>
                            </div>

                            <motion.h3
                                className={`text-3xl font-black mb-12 tracking-tighter leading-tight ${project.id === 'fintech' ? 'text-[#22d3ee]' : project.id === 'proptech' ? 'text-[#a855f7]' : 'text-[#3b82f6]'}`}
                            >
                                {t(`${project.id}.title`)}
                            </motion.h3>

                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-3">Challenge</h4>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {t(`${project.id}.challenge`)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-3">Solution</h4>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {t(`${project.id}.solution`)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-4">Outcome</h4>
                                    <p className="text-white text-xl font-black tracking-tighter transition-transform origin-left">
                                        {t(`${project.id}.outcome`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section >
    );
}
