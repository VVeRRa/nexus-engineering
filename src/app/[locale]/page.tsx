"use client";

import Image from "next/image";

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ServicesSection,
  IndustriesSection,
  TechStackSection,
  ProcessSection,
  ProvenImpactSection,

  FAQSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  // Scroll animation observer
  useEffect(() => {
    // Immediate check for reduced motion or if JS is disabled fallback (though this is client side)
    // Immediate check for reduced motion removed to allow JS observer to run


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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/services-hero.png"
              alt="Services Overview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <ProvenImpactSection />


        <AboutSection />
        <TechStackSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
