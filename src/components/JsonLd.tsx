export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://nexus-engineering.com/#organization",
                name: "BLAiT Engineering",
                url: "https://nexus-engineering.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://nexus-engineering.com/icon.png",
                    width: 512,
                    height: 512,
                },
                sameAs: [
                    "https://twitter.com/blaitengineering",
                    "https://www.linkedin.com/company/blait-engineering",
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-555-0123-4567",
                    contactType: "sales",
                    areaServed: ["US", "EU"],
                    availableLanguage: ["English", "German", "French", "Spanish"],
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://nexus-engineering.com/#website",
                url: "https://nexus-engineering.com",
                name: "BLAiT Engineering",
                description: "Elite IT Staff Augmentation & Software Development",
                publisher: {
                    "@id": "https://nexus-engineering.com/#organization",
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: "https://nexus-engineering.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "WebPage",
                "@id": "https://nexus-engineering.com/#webpage",
                url: "https://nexus-engineering.com",
                inLanguage: "en",
                name: "Home | BLAiT Engineering",
                isPartOf: {
                    "@id": "https://nexus-engineering.com/#website",
                },
                about: {
                    "@id": "https://nexus-engineering.com/#organization",
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
