"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function SecurityPage() {
    const t = useTranslations("Security");

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% is visible
                rootMargin: "50px", // Trigger slightly earlier
            }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-10 md:pt-48 md:pb-16 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-flowing-ribbon opacity-50 pointer-events-none" />

                    <div className="container relative z-10 text-center">
                        <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-6 block animate-fade-up">
                            {t("hero.label")}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-ink)] mb-8 tracking-tight leading-[1.1] animate-fade-up delay-100" style={{ fontFamily: "var(--font-display)" }}>
                            {t("hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--color-ink)] opacity-80 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
                            {t("hero.subtitle")}
                        </p>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-20 md:py-24">
                    <div className="container relative z-10">
                        <SectionHeader
                            title={t("compliance.title")}
                            description={t("compliance.description")}
                            align="left"
                            className="mb-8 text-white"
                            animate={false}
                        />
                        <div className="grid md:grid-cols-3 gap-6">
                            {['gdpr', 'iso', 'soc2'].map((item, index) => {
                                const isEven = index % 2 === 0;
                                const themeClass = isEven
                                    ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                                    : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

                                return (
                                    <div key={item} className={`group bg-gradient-to-br ${themeClass} p-6 rounded-3xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll delay-${index * 100}`}>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isEven ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                                            {item === 'gdpr' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                            {item === 'iso' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
                                            {item === 'soc2' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--color-ink)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                                            {t(`compliance.items.${item}.title`)}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                                            {t(`compliance.items.${item}.text`)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Infrastructure Section */}
                <section className="py-20 md:py-24">
                    <div className="container relative z-10">
                        <SectionHeader
                            title={t("infrastructure.title")}
                            description={t("infrastructure.description")}
                            align="center"
                            className="mb-8 text-white"
                            animate={false}
                        />
                        <div className="max-w-4xl mx-auto space-y-6">
                            {['aws', 'encryption', 'access'].map((item, index) => {
                                const isEven = index % 2 === 0;
                                const themeClass = isEven
                                    ? "from-[var(--color-primary)]/10 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.1)]"
                                    : "from-[var(--color-secondary)]/10 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.1)]";

                                return (
                                    <div key={item} className={`group flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gradient-to-br ${themeClass} border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll delay-${index * 100}`}>
                                        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-1 ${isEven ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                                            {item === 'aws' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c0-3.037-2-6-6.5-6-4 0-6 2.444-6 6M12 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /></svg>}
                                            {item === 'encryption' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
                                            {item === 'access' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                                                {t(`infrastructure.items.${item}.title`)}
                                            </h3>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                                {t(`infrastructure.items.${item}.text`)}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SDLC Section */}
                <section className="py-20 md:py-24">
                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <SectionHeader
                                    title={t("sdlc.title")}
                                    description={t("sdlc.description")}
                                    align="left"
                                    className="mb-8 text-white relative z-10"
                                    animate={false}
                                />
                                <div className="space-y-6">
                                    {['review', 'scanning', 'supply'].map((item, index) => {
                                        const borderColor = index % 2 === 0 ? 'border-blue-500' : 'border-green-500';
                                        return (
                                            <div key={item} className={`pl-6 border-l-4 ${borderColor} bg-[var(--color-surface)]/50 p-4 rounded-r-xl transition-all duration-300 hover:bg-[var(--color-surface)] animate-on-scroll delay-${index * 100} hover:-translate-x-[-10px]`}>
                                                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                                                    {t(`sdlc.items.${item}.title`)}
                                                </h3>
                                                <p className="text-white">
                                                    {t(`sdlc.items.${item}.text`)}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center p-8 shadow-2xl">
                                {/* Abstract Java Code Illustration */}
                                <div className="space-y-3 font-mono text-xs sm:text-sm text-[var(--color-slate-500)] w-full opacity-80">
                                    <div className="flex gap-4"><span className="text-blue-500">import</span> <span className="text-white">com.security.Vault;</span></div>
                                    <div className="h-2"></div>
                                    <div className="flex gap-4"><span className="text-purple-500">@Service</span></div>
                                    <div className="flex gap-4"><span className="text-blue-500">public class</span> <span className="text-yellow-400">PaymentService</span> {'{'}</div>
                                    <div className="pl-8 flex gap-4"><span className="text-purple-500">@AuditLog</span></div>
                                    <div className="pl-8 flex gap-4"><span className="text-blue-500">public</span> <span className="text-white">Transaction</span> <span className="text-green-400">process</span>(<span className="text-white">Data</span> data) {'{'}</div>
                                    <div className="pl-16 text-slate-600">// Validate input schema</div>
                                    <div className="pl-16 dark:text-slate-300 text-slate-700">Schema.validate(data);</div>
                                    <div className="pl-16 text-slate-600">// Encrypt sensitive fields</div>
                                    <div className="pl-16 dark:text-slate-300 text-slate-700">var encrypted = Vault.encrypt(data.getNumber());</div>
                                    <div className="pl-16 dark:text-slate-300 text-slate-700">return transactionRepo.save(encrypted);</div>
                                    <div className="pl-8 text-white">{'}'}</div>
                                    <div className="text-white">{'}'}</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operational & CTA */}
                <section className="py-20 md:py-24">
                    <div className="container relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold !text-white mb-8 relative z-10" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
                            {t("operational.title")}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
                            {[0, 1, 2, 3].map((i) => {
                                const isEven = i % 2 === 0;
                                const themeClass = isEven
                                    ? "from-[var(--color-primary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                                    : "from-[var(--color-secondary)]/20 via-[var(--color-paper)] to-[var(--color-paper)] border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.15)]";

                                return (
                                    <div key={i} className={`group flex items-center gap-4 bg-gradient-to-br ${themeClass} p-6 rounded-3xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll delay-${i * 100}`}>
                                        <div className={`w-3 h-3 rounded-full shrink-0 shadow-lg ${isEven ? 'bg-blue-500 shadow-blue-500/50' : 'bg-green-500 shadow-green-500/50'}`}></div>
                                        <p className="text-lg font-bold text-[var(--color-ink)]" style={{ fontFamily: "var(--font-display)" }}>
                                            {t(`operational.items.${i}`)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-12 text-center relative overflow-hidden shadow-lg">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>{t("cta.title")}</h3>
                                <p className="text-white mb-8 max-w-xl mx-auto">{t("cta.text")}</p>
                                <a href="mailto:security@blait.eu" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                    {t("cta.button")}
                                </a>
                            </div>
                        </div>


                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
