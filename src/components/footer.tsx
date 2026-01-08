"use client";

import { useTranslations } from "next-intl";

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
      { label: t("links.caseStudies"), href: "#case-studies" },
      { label: t("links.process"), href: "#process" },
      { label: t("links.contact"), href: "#contact" },
    ],
    industries: [
      { label: t("links.fintech"), href: "#industries" },
      { label: t("links.proptech"), href: "#industries" },
      { label: t("links.enterprise"), href: "#industries" },
    ],
  };

  return (
    <footer className="bg-[var(--color-ink)] pt-20 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent)] rounded-full blur-[300px] opacity-5" />

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[var(--color-slate-800)]">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="var(--color-ink)"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                  />
                  <path d="M2 17L12 22L22 17" stroke="var(--color-ink)" strokeWidth="1.5" />
                  <path d="M2 12L12 17L22 12" stroke="var(--color-ink)" strokeWidth="1.5" />
                </svg>
              </div>
              <span
                className="text-[var(--color-paper)] text-xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                NEXUS
              </span>
            </a>
            <p className="text-[var(--color-slate-400)] mb-6 max-w-sm">
              {t("brandDesc")}
            </p>
            <a
              href="mailto:hello@nexus.engineering"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              hello@nexus.engineering
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-[var(--color-paper)] mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-slate-400)] hover:text-[var(--color-paper)] transition-colors text-sm"
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
              className="text-[var(--color-paper)] mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-slate-400)] hover:text-[var(--color-paper)] transition-colors text-sm"
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
              className="text-[var(--color-paper)] mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {t("industries")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--color-slate-400)] hover:text-[var(--color-paper)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-[var(--color-slate-500)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &copy; {currentYear} {t("rights")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", icon: "in" },
              { label: "GitHub", icon: "gh" },
              { label: "Twitter", icon: "tw" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-lg border border-[var(--color-slate-800)] flex items-center justify-center text-[var(--color-slate-500)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
                aria-label={social.label}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
