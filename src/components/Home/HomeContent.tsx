import Image from "next/image";
import {
    Header,
    HeroSection,
    ServicesSection,
    IndustriesSection,
    ProcessSection,
    // Below the fold components loaded dynamically
    Footer,
} from "@/components";

import dynamic from "next/dynamic";
import { ScrollObserver } from "@/components/ui/scroll-observer";

const TechnicalSpecializations = dynamic(() => import("@/components").then(mod => mod.TechnicalSpecializations));
const ProvenImpactSection = dynamic(() => import("@/components").then(mod => mod.ProvenImpactSection));
const AboutSection = dynamic(() => import("@/components").then(mod => mod.AboutSection));
const TechStackSection = dynamic(() => import("@/components").then(mod => mod.TechStackSection));
const FAQSection = dynamic(() => import("@/components").then(mod => mod.FAQSection));
const ContactSection = dynamic(() => import("@/components").then(mod => mod.ContactSection));

export function HomeContent() {
    return (
        <>
            <ScrollObserver />
            <Header />
            <main>
                <HeroSection />
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/services-hero.png"
                            alt="BLAiT Engineering - Senior-led product engineering partner for FinTech, PropTech, and RegTech"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />
                    </div>
                </div>
                <ServicesSection />
                <TechnicalSpecializations />
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
