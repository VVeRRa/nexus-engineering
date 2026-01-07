import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Engineering | Elite IT Staff Augmentation",
  description: "Transform your technical capacity with precision-matched engineering talent. Enterprise-grade IT outsourcing for FinTech, PropTech, and Cloud solutions.",
  keywords: "IT outsourcing, staff augmentation, software development, FinTech, PropTech, cloud solutions, React, Java, Go, AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
