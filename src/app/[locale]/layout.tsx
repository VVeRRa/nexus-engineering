import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://blait.eu";
  const path = locale === 'en' ? '' : `/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | BLAiT Engineering`,
    },
    description: t("description"),
    authors: [{ name: "BLAiT Engineering" }],
    creator: "BLAiT Engineering",
    publisher: "BLAiT Engineering",
    applicationName: "BLAiT Engineering",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        fr: "/fr",
        es: "/es",
        uk: "/ua",
        pt: "/pt",
        cs: "/cs",
        'x-default': "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "BLAiT Engineering",
      title: t("title"),
      description: t("description"),
      locale: locale === 'en' ? 'en_US' : `${locale}_${locale.toUpperCase()}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "BLAiT Engineering",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@blaitengineering",
      creator: "@blaitengineering",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "swX-gmB3Kh2v1H3D50IDmBnejMZSl0NPEPdqdbCBxIY",
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-flowing-ribbon`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <JsonLd locale={locale} />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
