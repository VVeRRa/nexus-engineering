"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[var(--color-ink)] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[150px] animate-blob"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "linear-gradient(135deg, var(--color-fintech) 0%, transparent 70%)",
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "linear-gradient(135deg, var(--color-cloud) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal Lines Accent */}
      <div className="absolute inset-0 bg-diagonal opacity-50" />

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-screen flex flex-col justify-center">
        {/* Top Badge */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-slate-900)]/80 backdrop-blur-sm border border-[var(--color-slate-700)]/50 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]" />
            </span>
            <span
              className="text-[var(--color-slate-300)] text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t('kicker')}
            </span>
          </div>
        </div>

        {/* Main Headline - Bold and Distinctive */}
        <div className="max-w-5xl">
          <h1
            className="text-display-xl text-[var(--color-paper)] animate-fade-up opacity-0"
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
          className="text-xl md:text-2xl text-[var(--color-slate-400)] max-w-2xl mt-10 leading-relaxed animate-fade-up opacity-0"
          style={{
            fontFamily: "var(--font-body)",
            animationDelay: "300ms",
            animationFillMode: "forwards",
          }}
        >
          {t('subheadline')}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <a href="#contact" className="btn btn-accent btn-lg group">
            {t('ctaPrimary')}
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#services" className="btn btn-ghost btn-lg">
            {t('ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
        <span
          className="text-[var(--color-slate-600)] text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t('scroll')}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-slate-700)] flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" />
        </div>
      </div>

      {/* Side Accent Text */}
      <div
        className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="text-[var(--color-slate-700)] text-xs tracking-[0.3em] uppercase">
          {t('sideText')}
        </span>
      </div>
    </section>
  );
}
