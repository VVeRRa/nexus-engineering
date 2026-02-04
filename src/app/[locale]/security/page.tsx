"use client";

import { useTranslations } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

export default function SecurityPage() {
    const t = useTranslations("Security");

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
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9] as any,
            },
        },
    };

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden bg-black">
                    <div className="container relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block"
                        >
                            {t("hero.label")}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[11vw] font-black text-white mb-12 tracking-[-0.05em] leading-none uppercase"
                        >
                            {t("hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-tight tracking-tight font-medium"
                        >
                            {t("hero.subtitle")}
                        </motion.p>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-24 bg-black border-t border-white/5">
                    <div className="container relative z-10">
                        <SectionHeader
                            title={t("compliance.title")}
                            description={t("compliance.description")}
                            align="left"
                            className="mb-24"
                        />
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden"
                        >
                            {['gdpr', 'iso', 'soc2'].map((item) => (
                                <motion.div
                                    key={item}
                                    variants={itemVars}
                                    className="group bg-[#050505] p-12 transition-all duration-500 hover:bg-[#0a0a0a]"
                                >
                                    <div className="w-14 h-14 bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 text-white/40 group-hover:text-white transition-all duration-500">
                                        {item === 'gdpr' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                        {item === 'iso' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
                                        {item === 'soc2' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                        {t(`compliance.items.${item}.title`)}
                                    </h3>
                                    <p className="text-muted leading-relaxed text-sm">
                                        {t(`compliance.items.${item}.text`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Infrastructure Section */}
                <section className="py-24 bg-[#030303]">
                    <div className="container relative z-10">
                        <SectionHeader
                            title={t("infrastructure.title")}
                            description={t("infrastructure.description")}
                            align="center"
                            className="mb-24"
                        />
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="max-w-5xl mx-auto space-y-px bg-white/10 border border-white/10 overflow-hidden"
                        >
                            {['aws', 'encryption', 'access'].map((item) => (
                                <motion.div
                                    key={item}
                                    variants={itemVars}
                                    className="group flex flex-col md:flex-row gap-12 p-12 bg-[#050505] hover:bg-[#0a0a0a] transition-all duration-500"
                                >
                                    <div className="shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-500">
                                        {item === 'aws' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19c0-3.037-2-6-6.5-6-4 0-6 2.444-6 6M12 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /></svg>}
                                        {item === 'encryption' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
                                        {item === 'access' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">
                                            {t(`infrastructure.items.${item}.title`)}
                                        </h3>
                                        <p className="text-muted leading-tight tracking-tight text-xl font-medium">
                                            {t(`infrastructure.items.${item}.text`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* SDLC Section */}
                <section className="py-24 bg-black">
                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-32 items-center">
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                <SectionHeader
                                    title={t("sdlc.title")}
                                    description={t("sdlc.description")}
                                    align="left"
                                    className="mb-16"
                                />
                                <div className="space-y-4">
                                    {['review', 'scanning', 'supply'].map((item) => (
                                        <motion.div
                                            key={item}
                                            variants={itemVars}
                                            className="p-8 bg-[#050505] border border-white/5 hover:border-white/10 transition-all duration-500"
                                        >
                                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                                {t(`sdlc.items.${item}.title`)}
                                            </h3>
                                            <p className="text-muted leading-relaxed font-medium">
                                                {t(`sdlc.items.${item}.text`)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#050505] border border-white/5 flex items-center justify-center p-16 shadow-3xl"
                            >
                                <div className="space-y-6 font-mono text-sm text-white/20 w-full">
                                    <div className="flex gap-4"><span className="text-white/40">import</span> <span className="text-white/60">com.security.Vault;</span></div>
                                    <div className="h-4"></div>
                                    <div className="flex gap-4"><span className="text-white/40">@Service</span></div>
                                    <div className="flex gap-4"><span className="text-white/40">public class</span> <span className="text-white">PaymentService</span> {'{'}</div>
                                    <div className="pl-8 flex gap-4"><span className="text-white/40">@AuditLog</span></div>
                                    <div className="pl-8 flex gap-4"><span className="text-white/40">public</span> <span className="text-white/60">Transaction</span> <span className="text-white">process</span>(<span className="text-white/60">Data</span> d) {'{'}</div>
                                    <div className="pl-16 text-white/10">// Secure scan pass</div>
                                    <div className="pl-16 text-white/40"> d.validateSchema();</div>
                                    <div className="pl-16 text-white/10">// Hardware security module</div>
                                    <div className="pl-16 text-white/40"> var enc = Vault.encrypt(d);</div>
                                    <div className="pl-16 text-white/40"> return repo.save(enc);</div>
                                    <div className="pl-8 text-white/60">{'}'}</div>
                                    <div className="text-white/60">{'}'}</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Operational Section */}
                <section className="py-24 bg-[#030303]">
                    <div className="container relative z-10">
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="max-w-5xl mx-auto text-center"
                        >
                            <h2 className="text-5xl font-black text-white mb-24 tracking-tighter uppercase">
                                {t("operational.title")}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden mb-32">
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVars}
                                        className="group flex items-center gap-8 bg-[#050505] p-12 transition-all duration-500 hover:bg-[#0a0a0a]"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-all duration-500" />
                                        <p className="text-2xl font-bold text-white text-left tracking-tight">
                                            {t(`operational.items.${i}`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-[#050505] border border-white/10 p-20 md:p-32 text-center relative overflow-hidden group rounded-[4rem]"
                            >
                                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative z-10">
                                    <h3 className="text-5xl font-black mb-8 text-white tracking-tighter uppercase">{t("cta.title")}</h3>
                                    <p className="text-muted mb-16 max-w-2xl mx-auto text-xl leading-tight tracking-tight font-medium">{t("cta.text")}</p>
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href="mailto:security@blait.eu"
                                        className="btn btn-primary px-16 py-8"
                                    >
                                        {t("cta.button")}
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
