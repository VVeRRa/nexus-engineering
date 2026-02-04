"use client";

import { useTranslations } from "next-intl";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { motion } from "framer-motion";

export function TechnicalSpecializations() {
    const t = useTranslations("Home.technicalCluster");

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
        initial: { y: 20, opacity: 0 },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9] as any,
            },
        },
    };

    // Check if the translations exist to avoid crash if other locales are not updated yet
    const itemsCount = 6;
    const items = [];
    for (let i = 0; i < itemsCount; i++) {
        try {
            const item = t(`items.${i}`);
            if (item) items.push(item);
        } catch (e) {
            // Silently fail if key is missing in other locales
        }
    }

    if (items.length === 0) return null;

    return (
        <Section
            id="specializations"
            className="overflow-hidden"
        >
            <SectionHeader
                align="center"
                label={t("title")}
                title={t("headline")}
                description={t("text")}
                className="mb-16"
                titleClassName="text-xl sm:text-5xl md:text-7xl lg:text-8xl"
            />

            <motion.div
                variants={containerVars}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl px-6"
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className="group glass-card p-6 rounded-lg flex items-center gap-4 cursor-default"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                        <h3 className="text-white font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                            {item}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
