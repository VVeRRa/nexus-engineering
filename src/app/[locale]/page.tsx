"use client";

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ServicesSection,
  IndustriesSection,
  TechStackSection,
  ProcessSection,
  CaseStudiesSection,
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
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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
        <CaseStudiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
