import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import "../globals.css";

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
  title: "Nexus Engineering | Elite IT Staff Augmentation",
  description: "Transform your technical capacity with precision-matched engineering talent. Enterprise-grade IT outsourcing for FinTech, PropTech, and Cloud solutions.",
  keywords: "IT outsourcing, staff augmentation, software development, FinTech, PropTech, cloud solutions, React, Java, Go, AWS",
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
    <html lang={locale}>
      <body className={`${jakarta.variable} ${mono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
