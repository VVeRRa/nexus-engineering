"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

export function Header() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t('services') },
    { href: "#industries", label: t('expertise') },
    { href: "#tech", label: t('technology') },
    { href: "#about", label: t('team') },
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
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white shadow-sm py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <div className="text-2xl tracking-tighter font-extrabold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
            bubuu<span className="text-[var(--color-primary)]">.</span>
          </div>
        </a>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-[var(--color-primary)] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-slate-900)] hover:bg-[var(--color-primary)] text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(800) 555-1234</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 ml-1"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2 text-slate-900"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 overflow-y-auto ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="container min-h-full flex flex-col justify-center gap-6 pt-24 pb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl text-slate-900 font-bold tracking-tight hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-slate-100">
            <a
              href="#contact"
              className="flex w-full justify-center items-center gap-2 px-6 py-4 bg-[var(--color-slate-900)] text-white rounded-full text-lg font-medium shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>(800) 555-1234</span>
            </a>
            <div className="mt-8 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
