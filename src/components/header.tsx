"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";


export function Header() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t('services') },
    { href: "#industries", label: t('expertise') },
    { href: "#process", label: t('process') },
    { href: "#work", label: t('work') },
    { href: "#about", label: t('about') },
    { href: "#tech", label: t('technology') },
    { href: "#faq", label: t('faq') },
    { href: "#contact", label: t('contact') },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "shadow-lg py-3 px-6" : "shadow-md py-4 px-8"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <div className="text-2xl tracking-tighter font-extrabold text-[var(--color-ink)]" style={{ fontFamily: "var(--font-display)" }}>
              BLAiT<span className="text-[var(--color-primary)]">.</span>
            </div>
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:scale-110 transition-transform duration-200 inline-block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">

            <LanguageSwitcher />
            <a
              href="tel:8005551234"
              className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(800) 555-1234</span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse ml-1"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 text-[var(--color-ink)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[var(--color-surface)] z-40 transition-all duration-500 overflow-y-auto ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="container min-h-full flex flex-col justify-center gap-6 pt-24 pb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl text-[var(--color-ink)] font-bold tracking-tight hover:scale-105 origin-left inline-block transition-transform duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
            <a
              href="tel:8005551234"
              className="flex w-full justify-center items-center gap-2 px-6 py-4 bg-[var(--color-slate-900)] text-white rounded-full text-lg font-medium shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>(800) 555-1234</span>
            </a>
            <div className="mt-8 flex justify-center gap-4">

              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
