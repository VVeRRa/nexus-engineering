"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function FAQSection() {
    const t = useTranslations();

    const keys = ['start', 'timezone', 'pricing', 'pm'] as const;

    return (
        <section className="section bg-[var(--color-paper)] relative overflow-hidden py-24 transition-colors duration-300">
            <div className="container max-w-4xl relative z-10">
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                        FAQ
                    </span>
                    <h2
                        className="text-4xl md:text-5xl text-[var(--color-ink)] font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        {t('FAQ.title')}
                    </h2>
                </div>

                <div className="space-y-4 animate-on-scroll stagger-children">
                    {keys.map((key) => (
                        <AccordionItem
                            key={key}
                            question={t(`FAQ.items.${key}.question`)}
                            answer={t(`FAQ.items.${key}.answer`)}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to-blue)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-semibold text-[var(--color-ink)]">{question}</span>
                <span className={`transform transition-transform duration-300 text-[var(--color-primary)] ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}
            >
                <div className="p-6 pt-0 text-[var(--color-text-secondary)]">
                    {answer}
                </div>
            </div>
        </div>
    );
}
