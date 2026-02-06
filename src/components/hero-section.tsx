"use client";

import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section id="hero" className="bg-transparent relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-300">



      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20 text-center md:pt-40">

        {/* Top Badge - Optional bubble */}
        {t('kicker') && (
          <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <span className="text-[var(--color-primary)] font-bold text-sm tracking-wider uppercase bg-blue-50 px-4 py-1.5 rounded-full">
              {t('kicker')}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-[var(--color-ink)] tracking-tight leading-[1.1] animate-fade-up"
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
          className="text-xl md:text-2xl text-[var(--color-ink)] max-w-2xl mx-auto mt-8 leading-relaxed animate-fade-up"
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
          className="flex flex-col items-center mt-12 animate-fade-up"
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
          <div className="flex items-center gap-6 mt-16 text-sm text-[var(--color-ink)] font-medium">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>{t('trust.consultation')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>{t('trust.euTeam')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span>{t('trust.startFast')}</span>
            </div>
          </div>
        </div>
      </div>




    </section >
  );
}
