import { MetadataRoute } from "next";

const locales = ["en", "de", "fr", "es", "ua", "pt", "cs"];
const baseUrl = "https://nexus-engineering.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = locales.flatMap((locale) => {
        return [
            {
                url: `${baseUrl}/${locale}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 1,
            },
            // Add other routes here if necessary, e.g. /about, /services etc. if they have their own pages
            // For a single page app structure where sections are on the home page, this is sufficient.
        ];
    });

    return routes;
}
