"use client";

import Image from "next/image";
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
    TechnicalSpecializations,
} from "@/components";

export function HomeContent() {
    return (
        <div className="bg-black text-white selection:bg-accent/30 font-sans antialiased">
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <TechnicalSpecializations />

                <div className="bg-black">
                    <IndustriesSection />
                </div>

                <div className="bg-black">
                    <ProcessSection />
                </div>

                <ProvenImpactSection />
                <AboutSection />
                <TechStackSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

