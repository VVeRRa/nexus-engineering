import { getTranslations } from "next-intl/server";

export async function JsonLd({ locale }: { locale: string }) {
    const tBrand = await getTranslations({ locale, namespace: "Brand" });
    const tMeta = await getTranslations({ locale, namespace: "Metadata" });
    const tFaq = await getTranslations({ locale, namespace: "FAQ" });

    const faqKeys = ['start', 'timezone', 'pricing', 'pm', 'security'];
    const faqItems = faqKeys.map(key => ({
        "@type": "Question",
        "name": tFaq(`items.${key}.question`),
        "acceptedAnswer": {
            "@type": "Answer",
            "text": tFaq(`items.${key}.answer`)
        }
    }));

    const baseUrl = "https://blait.eu";
    const canonicalUrl = `${baseUrl}/${locale}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "BLAiT Engineering",
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/icon.png`,
                    "width": 512,
                    "height": 512,
                },
                "description": tMeta("description"),
                "areaServed": ["EU", "US", "Worldwide"],
                "sameAs": [
                    "https://twitter.com/blaitengineering",
                    "https://www.linkedin.com/company/blait-engineering",
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "areaServed": ["US", "EU"],
                    "availableLanguage": ["English", "German", "French", "Spanish", "Czech", "Ukrainian"]
                }
            },
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "BLAiT Engineering",
                "description": tBrand("description"),
                "publisher": {
                    "@id": `${baseUrl}/#organization`,
                },
            },
            {
                "@type": "WebPage",
                "@id": `${canonicalUrl}/#webpage`,
                "url": canonicalUrl,
                "inLanguage": locale,
                "name": tMeta("title"),
                "description": tMeta("description"),
                "isPartOf": {
                    "@id": `${baseUrl}/#website`,
                },
                "about": {
                    "@id": `${baseUrl}/#organization`,
                },
                "breadcrumb": {
                    "@id": `${canonicalUrl}/#breadcrumb`
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${canonicalUrl}/#breadcrumb`,
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": canonicalUrl
                }]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqItems
            },
            {
                "@type": "Service",
                "name": "Software Development & Product Engineering",
                "description": "Expert software development and product engineering for FinTech, PropTech, and RegTech. Specializing in high-performance microservices, event-driven Java architecture, and cloud-native infrastructure.",
                "provider": {
                    "@id": `${baseUrl}/#organization`
                },
                "areaServed": "Global",
                "serviceType": "Software Engineering"
            },
            {
                "@type": "Service",
                "name": "FinTech Engineering Solutions",
                "description": "Custom FinTech software development including payment integrations, mortgage automation, and PSD2 compliance.",
                "provider": {
                    "@id": `${baseUrl}/#organization`
                }
            },
            {
                "@type": "Service",
                "name": "PropTech & RegTech Development",
                "description": "Building scalable PropTech platforms and RegTech compliance solutions with automated KYC/AML and geospatial data integration.",
                "provider": {
                    "@id": `${baseUrl}/#organization`
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
