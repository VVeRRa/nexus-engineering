"use client";

import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/logo";
import LanguageSwitcher from "./language-switcher";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: t("links.leadership"), href: "#services" },
      { label: t("links.backend"), href: "#services" },
      { label: t("links.frontend"), href: "#services" },
      { label: t("links.devops"), href: "#services" },
    ],
    company: [
      { label: t("links.about"), href: "#about" },
      // { label: t("links.caseStudies"), href: "#case-studies" }, TODO
      { label: t("links.process"), href: "#process" },
      // { label: t("links.security"), href: "/security" },TODO
      { label: t("links.contact"), href: "#contact" },
    ],
    industries: [
      { label: t("links.fintech"), href: "#industries" },
      { label: t("links.proptech"), href: "#industries" },
      { label: t("links.regtech"), href: "#industries" },
      { label: t("links.enterprise"), href: "#industries" },
      { label: t("links.startups"), href: "#industries" },
    ],
  };

  return (
    <footer className="bg-[var(--color-paper)] pt-20 pb-8 border-t border-[var(--color-border)] transition-colors duration-300 relative z-50">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Logo />
            </a>
            <p className="text-[var(--color-ink)] mb-6 max-w-sm leading-relaxed">
              {t("brandDesc")}
            </p>
            <a
              href="mailto:sales@blait.eu"
              className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-blue-700 transition-colors font-medium"
            >
              sales@blait.eu
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-[var(--color-ink)] font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-ink)] hover:scale-110 origin-left inline-block transition-transform text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-[var(--color-ink)] font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-ink)] hover:scale-110 origin-left inline-block transition-transform text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4
              className="text-[var(--color-ink)] font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("industries")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-ink)] hover:scale-110 origin-left inline-block transition-transform text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-ink)]">
            &copy; {currentYear} {t("rights")}
          </p>

          <div className="flex items-center gap-4">
            <LanguageSwitcher direction="up" />
          </div>
        </div>
      </div>
    </footer>
  );
}
