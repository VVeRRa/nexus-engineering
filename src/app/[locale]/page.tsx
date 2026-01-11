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
    // Immediate check for reduced motion or if JS is disabled fallback (though this is client side)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

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
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "50px", // Trigger slightly before it enters fully
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      observer.disconnect();
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
