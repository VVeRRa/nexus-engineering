"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function FAQSection() {
    const t = useTranslations("Common");

    const faqs = [
        {
            question: "How quickly can you start?",
            answer: "We typically start within 48 hours of our initial consultation. Our process is streamlined to get us integrated with your team as fast as possible."
        },
        {
            question: "Do you work in my time zone?",
            answer: "Yes, we are based in the EU but work across US and European time zones. We ensure at least 4 hours of overlap with your core working hours."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer both staff augmentation (hourly/monthly rates) and project-based fixed pricing, depending on your needs. Contact us for a detailed quote."
        },
        {
            question: "Do you provide Project Managers?",
            answer: "Yes, if needed. However, our senior engineers are self-organizing and capable of working directly with your product owners."
        }
    ];

    return (
        <section className="section bg-slate-50 relative overflow-hidden py-24" >
            <div className="container max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                        FAQ
                    </span>
                    <h2
                        className="text-4xl md:text-5xl text-slate-900 font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Common questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section >
    );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-white to-green-50/30 border border-green-100 rounded-2xl overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-semibold text-slate-900">{question}</span>
                <span className={`transform transition-transform duration-300 text-[var(--color-secondary)] ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600">
                    {answer}
                </div>
            </div>
        </div>
    );
}
