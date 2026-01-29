import { MetadataRoute } from "next";

const locales = ["en", "de", "fr", "es", "ua", "pt", "cs"];
const baseUrl = "https://nexus-engineering.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return locales.flatMap((locale) => {
        const languages = locales.reduce((acc, l) => ({
            ...acc,
            [l]: `${baseUrl}/${l}`
        }), {});

        return [
            {
                url: `${baseUrl}/${locale}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 1,
                alternates: {
                    languages: languages,
                },
            },
        ];
    });
}
