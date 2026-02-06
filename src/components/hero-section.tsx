"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section id="hero" className="bg-transparent relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-300">



      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 text-center md:pt-40">

        {/* Top Badge - Optional bubble */}
        {t('kicker') && (
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <span className="text-[var(--color-primary)] font-bold text-xs md:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
              {t('kicker')}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-ink)] tracking-tight leading-[1.1] animate-fade-up break-words"
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
          className="text-lg md:text-2xl text-[var(--color-ink)] max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed animate-fade-up px-4 md:px-0"
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
          className="flex flex-col items-center mt-8 md:mt-12 animate-fade-up"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <a href="#contact" className="gap-3">
              {t('ctaBlock.button')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-12 md:mt-16 text-xs md:text-sm text-[var(--color-ink)] font-medium max-w-xs md:max-w-none mx-auto">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span className="whitespace-nowrap">{t('trust.consultation')}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span className="whitespace-nowrap">{t('trust.euTeam')}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span className="whitespace-nowrap">{t('trust.startFast')}</span>
            </div>
          </div>
        </div>
      </div>




    </section >
  );
}
