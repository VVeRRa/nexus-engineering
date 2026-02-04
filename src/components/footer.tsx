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
      { label: t("links.security"), href: "/security" },
      { label: t("links.contact"), href: "#contact" },
    ],
    industries: [
      { label: t("links.fintech"), href: "#industries" },
      { label: t("links.proptech"), href: "#industries" },
      { label: t("links.regtech"), href: "#industries" },
      { label: t("links.enterprise"), href: "#industries" },
    ],
  };

  return (
    <footer className="bg-black pt-16 lg:pt-32 pb-16 border-t border-white/5 transition-colors duration-300 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 pb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-10">
              <div className="text-3xl tracking-tighter font-black text-white">
                BLAiT<span className="text-white opacity-20">.</span>
              </div>
            </a>
            <p className="text-white/30 mb-8 max-w-xs leading-relaxed text-sm font-medium">
              {t("brandDesc")}
            </p>
            <a
              href="mailto:sales@blait.eu"
              className="text-white/40 font-bold text-[11px] tracking-[0.3em] hover:text-white transition-all duration-300 uppercase"
            >
              SALES@BLAIT.EU
            </a>
          </div>

          {[
            { title: t("services"), links: footerLinks.services },
            { title: t("industries"), links: footerLinks.industries },
            { title: t("company"), links: footerLinks.company }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase mb-8">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
            &copy; {currentYear} {t("rights")}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono tracking-widest text-white/50 uppercase hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono tracking-widest text-white/50 uppercase hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
