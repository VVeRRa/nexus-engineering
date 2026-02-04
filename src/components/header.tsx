"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";


import { useScrollSpy } from "@/hooks/use-scroll-spy";

import { usePathname } from "next/navigation";

export function Header() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // If we are on a subpage (like /security), we need full paths for anchors
  // Assuming the home page is "/[locale]" or "/"
  // We can check if pathname ends with /security
  const isHomePage = !pathname.includes("/security");
  const locale = pathname.split("/")[1];

  const navLinks = [
    { href: isHomePage ? "#services" : `/${locale}/#services`, label: t('services') },
    { href: isHomePage ? "#industries" : `/${locale}/#industries`, label: t('expertise') },
    { href: isHomePage ? "#specializations" : `/${locale}/#specializations`, label: t('specializations') },
    { href: isHomePage ? "#process" : `/${locale}/#process`, label: t('process') },
    { href: isHomePage ? "#work" : `/${locale}/#work`, label: t('work') },
    { href: isHomePage ? "#about" : `/${locale}/#about`, label: t('about') },
    { href: isHomePage ? "#tech" : `/${locale}/#tech`, label: t('technology') },
    { href: isHomePage ? "#faq" : `/${locale}/#faq`, label: t('faq') },
    { href: isHomePage ? "#contact" : `/${locale}/#contact`, label: t('contact') },
  ];

  // Only spy on scroll when on the home page where these sections exist
  // using full URLs causes "not a valid selector" errors
  const spySelectors = isHomePage ? ["#hero", ...navLinks.map((link) => link.href)] : [];
  const activeId = useScrollSpy(spySelectors, { rootMargin: "-10% 0px -35% 0px" });

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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? "glass-morphism py-4" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="group relative z-50">
          <div className="text-2xl tracking-tighter font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
            BLAiT<span className="text-white opacity-20">.</span>
          </div>
        </a>

        {/* Desktop Navigation - Minimal & Centered */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-500 hover:text-white ${activeId === link.href.slice(1) ? "text-white" : "text-white/30"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center gap-10">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
          >
            {t("getInTouch")}
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black z-40 transition-all duration-700 ease-[0.16,1,0.3,1] ${isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
          }`}
      >
        <nav className="container min-h-full flex flex-col justify-center gap-8 pt-24 pb-10 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-5xl text-white font-black tracking-tighter hover:text-white/60 transition-all duration-300 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-8">
            <LanguageSwitcher direction="up" />
            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("getInTouch")}
            </a>
          </div>
        </nav>
      </div>

    </header>
  );
}
