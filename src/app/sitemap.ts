import { MetadataRoute } from "next";

const locales = ["en", "de", "fr", "es", "ua", "pt", "cs"];
const baseUrl = "https://blait.eu";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["", "/security"];

    return locales.flatMap((locale) => {
        const languages = locales.reduce((acc, l) => ({
            ...acc,
            [l === "ua" ? "uk" : l]: `${baseUrl}/${l}`
        }), {});

        return pages.map((page) => ({
            url: `${baseUrl}/${locale}${page}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: page === "" ? 1 : 0.8,
            alternates: {
                languages: locales.reduce((acc, l) => ({
                    ...acc,
                    [l === "ua" ? "uk" : l]: `${baseUrl}/${l}${page}`
                }), {}),
            },
        }));
    });
}
