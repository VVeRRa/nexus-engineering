"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
    const t = useTranslations();

    const keys = ['start', 'timezone', 'pricing', 'pm'] as const;

    const containerVars = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <Section id="faq" className="bg-black py-24">
            <div className="max-w-4xl mx-auto container">
                <SectionHeader
                    align="center"
                    label="FAQ"
                    title={t('FAQ.title')}
                    className="mb-20"
                />

                <motion.div
                    variants={containerVars}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-px bg-white/10 border border-white/10 overflow-hidden"
                >

                    {keys.map((key, index) => (
                        <AccordionItem
                            key={key}
                            index={index}
                            question={t(`FAQ.items.${key}.question`)}
                            answer={t(`FAQ.items.${key}.answer`)}
                        />
                    ))}
                </motion.div>
            </div>
        </Section >
    );
}

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    const itemVars = {
        initial: { y: 20, opacity: 0 },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as any,
            },
        },
    };


    return (
        <motion.div
            variants={itemVars}
            className="bg-black border-b border-white/5 last:border-0 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-white/[0.01] transition-all group"
            >
                <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${isOpen ? 'text-blue-400' : 'text-white'}`}>
                    {question}
                </span>
                <span className={`transform transition-all duration-500 text-white/10 group-hover:text-white/30 ${isOpen ? 'rotate-180 text-blue-500/50' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                    >
                        <div className="p-10 pt-0 text-white/40 leading-relaxed max-w-3xl text-lg font-light group-hover:text-white/50 transition-colors">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


