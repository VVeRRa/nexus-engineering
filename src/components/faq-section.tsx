"use client";

import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function FAQSection() {
    const t = useTranslations();

    const keys = ['start', 'timezone', 'pricing', 'pm'] as const;

    return (
        <Section id="faq">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    align="center"
                    label={<span className="text-[var(--color-secondary)]">FAQ</span>}
                    title={t('FAQ.title')}
                    className="mb-16"
                />

                <div className="space-y-4 animate-on-scroll stagger-fly-children">
                    {keys.map((key, index) => (
                        <AccordionItem
                            key={key}
                            index={index}
                            question={t(`FAQ.items.${key}.question`)}
                            answer={t(`FAQ.items.${key}.answer`)}
                        />
                    ))}
                </div>
            </div>
        </Section >
    );
}

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const isEven = index % 2 === 0;

    const themeClass = isEven
        ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
        : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

    const iconColorClass = isEven ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]";

    return (
        <div className={`bg-gradient-to-br ${themeClass} border rounded-3xl overflow-hidden transition-all duration-300`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-semibold text-[var(--color-ink)]">{question}</span>
                <span className={`transform transition-transform duration-300 ${iconColorClass} ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}
            >
                <div className="p-6 pt-0 text-slate-400">
                    {answer}
                </div>
            </div>
        </div>
    );
}
