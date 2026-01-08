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
    <footer className="bg-white pt-20 pb-8 border-t border-slate-100">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="text-2xl tracking-tighter font-extrabold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                bubuu<span className="text-[var(--color-primary)]">.</span>
              </div>
            </a>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              {t("brandDesc")}
            </p>
            <a
              href="mailto:hello@nexus.engineering"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-blue-700 transition-colors font-medium"
            >
              hello@nexus.engineering
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-slate-900 font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-[var(--color-primary)] transition-colors text-sm"
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
              className="text-slate-900 font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-[var(--color-primary)] transition-colors text-sm"
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
              className="text-slate-900 font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("industries")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} {t("rights")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", icon: "LinkedIn" },
              { label: "GitHub", icon: "GitHub" },
              { label: "Twitter", icon: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-slate-400 hover:text-[var(--color-primary)] transition-colors"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
