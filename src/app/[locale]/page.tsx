"use client";

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ServicesSection,
  IndustriesSection,
  TechStackSection,
  ProcessSection,
  ProvenImpactSection,
  CaseStudiesSection,
  FAQSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "200px", // Trigger well before element enters viewport
      }
    );

    // Initial check and observe - small delay to ensure hydration
    const initTimer = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Fail-safe: If observer doesn't trigger within 2000ms (e.g. rapid scroll or mobile lag), force visibility
    // This prevents the "white gap" issue where users scroll faster than the observer fires.
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          el.classList.add("is-visible");
        }
      });
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(initTimer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <TechStackSection />
        <ProcessSection />
        <ProvenImpactSection />
        {/* CaseStudiesSection removed per user request */}

        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
