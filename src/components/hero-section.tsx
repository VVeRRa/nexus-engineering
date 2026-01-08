"use client";

import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden">

      {/* Background Decor - Very subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-slate-100)_0%,_transparent_50%)]" />

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-20 text-center">

        {/* Top Badge - Optional bubble */}
        <div className="flex justify-center mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <span className="text-[var(--color-primary)] font-bold text-sm tracking-wider uppercase bg-blue-50 px-4 py-1.5 rounded-full">
            {t('kicker')}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] animate-fade-up opacity-0"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              animationDelay: "100ms",
              animationFillMode: "forwards",
            }}
          >
            {t('highlights.h1.title')}
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mt-8 leading-relaxed animate-fade-up opacity-0"
          style={{
            fontFamily: "var(--font-body)",
            animationDelay: "200ms",
            animationFillMode: "forwards",
          }}
        >
          {t('subheadline')}
        </p>

        {/* Action Area - Centered Pill Button */}
        <div
          className="flex flex-col items-center mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {t('ctaBlock.button')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>EU-based team</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>Start in 48h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button (Visual Only CTA) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <a href="#contact" className="flex items-center gap-3 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full shadow-lg hover:bg-[var(--color-primary-dark)] transition-colors">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </div>
          <span className="font-semibold">Chat with us</span>
        </a>
      </div>

    </section>
  );
}
