import { getTranslations } from "next-intl/server";

export async function JsonLd({ locale }: { locale: string }) {
    const tBrand = await getTranslations({ locale, namespace: "Brand" });
    const tMeta = await getTranslations({ locale, namespace: "Metadata" });
    const tFaq = await getTranslations({ locale, namespace: "FAQ" });

    const faqKeys = ['start', 'timezone', 'pricing', 'pm'];
    const faqItems = faqKeys.map(key => ({
        "@type": "Question",
        "name": tFaq(`items.${key}.question`),
        "acceptedAnswer": {
            "@type": "Answer",
            "text": tFaq(`items.${key}.answer`)
        }
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `https://nexus-engineering.com/${locale}/#organization`,
                "name": "BLAiT Engineering",
                "url": `https://nexus-engineering.com/${locale}`,
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://nexus-engineering.com/icon.png",
                    "width": 512,
                    "height": 512,
                },
                "sameAs": [
                    "https://twitter.com/blaitengineering",
                    "https://www.linkedin.com/company/blait-engineering",
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123-4567",
                    "contactType": "sales",
                    "areaServed": ["US", "EU"],
                    "availableLanguage": ["English", "German", "French", "Spanish", "Czech", "Ukrainian"],
                },
            },
            {
                "@type": "WebSite",
                "@id": `https://nexus-engineering.com/${locale}/#website`,
                "url": `https://nexus-engineering.com/${locale}`,
                "name": "BLAiT Engineering",
                "description": tBrand("description"),
                "publisher": {
                    "@id": `https://nexus-engineering.com/${locale}/#organization`,
                },
            },
            {
                "@type": "WebPage",
                "@id": `https://nexus-engineering.com/${locale}/#webpage`,
                "url": `https://nexus-engineering.com/${locale}`,
                "inLanguage": locale,
                "name": tMeta("title"),
                "description": tMeta("description"),
                "isPartOf": {
                    "@id": `https://nexus-engineering.com/${locale}/#website`,
                },
                "about": {
                    "@id": `https://nexus-engineering.com/${locale}/#organization`,
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqItems
            },
            {
                "@type": "Service",
                "name": "IT Staff Augmentation",
                "provider": {
                    "@id": `https://nexus-engineering.com/${locale}/#organization`
                },
                "areaServed": ["US", "EU"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Engineering Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Software Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "FinTech Solutions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Cloud Engineering"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `https://nexus-engineering.com/${locale}`
                }]
            }
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
