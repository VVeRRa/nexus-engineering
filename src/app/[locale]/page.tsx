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
      { threshold: 0 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Fail-safe: Ensure everything is visible after 1s in case observer fails
    const timeout = setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 1000);

    return () => {
      observer.disconnect();
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
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
