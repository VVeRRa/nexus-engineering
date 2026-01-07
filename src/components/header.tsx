"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#process", label: "Process" },
    { href: "#case-studies", label: "Work" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--color-ink)]/98 backdrop-blur-xl py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-10">
          <div className="relative">
            <div className="w-11 h-11 bg-[var(--color-accent)] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="var(--color-ink)"
                  stroke="var(--color-ink)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="var(--color-ink)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="var(--color-ink)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[var(--color-accent)] rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[var(--color-paper)] text-xl tracking-tight leading-none"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              NEXUS
            </span>
            <span
              className="text-[var(--color-slate-500)] text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[var(--color-slate-300)] hover:text-[var(--color-paper)] text-sm transition-colors duration-200 group"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:hello@nexus.engineering"
            className="text-[var(--color-slate-400)] hover:text-[var(--color-paper)] text-sm transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            hello@nexus.engineering
          </a>
          <a href="#contact" className="btn btn-accent">
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[var(--color-paper)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[var(--color-ink)] transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: -1 }}
      >
        <nav className="container h-full flex flex-col justify-center gap-2 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-4xl text-[var(--color-paper)] py-3 transform transition-all duration-500 hover:text-[var(--color-accent)] hover:translate-x-4 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div
            className={`mt-8 pt-8 border-t border-[var(--color-slate-800)] transform transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 50}ms`
                : "0ms",
            }}
          >
            <a href="#contact" className="btn btn-accent btn-lg w-full">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p
              className="mt-6 text-[var(--color-slate-500)] text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              hello@nexus.engineering
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
