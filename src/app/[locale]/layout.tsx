import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-engineering.com"),
  title: {
    default: "BLAiT Engineering | Elite IT Staff Augmentation",
    template: "%s | BLAiT Engineering",
  },
  description: "Transform your technical capacity with precision-matched engineering talent. Enterprise-grade IT outsourcing for FinTech, PropTech, RegTech, and Cloud solutions.",
  authors: [{ name: "BLAiT Engineering" }],
  creator: "BLAiT Engineering",
  publisher: "BLAiT Engineering",
  applicationName: "BLAiT Engineering",
  alternates: {
    languages: {
      en: "/en",
      de: "/de",
      fr: "/fr",
      es: "/es",
      "uk-UA": "/ua",
      pt: "/pt",
      cs: "/cs",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BLAiT Engineering",
    title: "BLAiT Engineering | Elite IT Staff Augmentation",
    description: "Transform your technical capacity with precision-matched engineering talent.",
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
    google: "google-site-verification=YOUR_CODE_HERE", // User to provide
  },
};

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
      <body className={`${jakarta.variable} ${mono.variable} antialiased bg-flowing-ribbon`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <JsonLd />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
