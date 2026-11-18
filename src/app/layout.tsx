import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { seoConfig } from "@/businessConfig";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: "Red Apple Mobile Repair | Premium Apple Repair in Bengaluru",
    template: "%s | Red Apple Mobile Repair",
  },
  description:
    "Premium iPhone, iPad, MacBook and Apple Watch repair in Halasuru, Bengaluru. Transparent pricing, component-level micro-soldering and a 90-day to 6-month warranty. Bangalore-wide pickup and drop.",
  keywords: [
    "iPhone repair Bengaluru",
    "iPad repair Bangalore",
    "MacBook repair Bengaluru",
    "Apple Watch repair",
    "front glass restoration",
    "mobile repair Halasuru",
  ],
  applicationName: "Red Apple Mobile Repair",
  manifest: seoConfig.manifest,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Red Apple Mobile Repair",
    title: "Red Apple Mobile Repair | Premium Apple Repair in Bengaluru",
    description:
      "Premium iPhone, iPad, MacBook and Apple Watch repair in Halasuru, Bengaluru. Transparent pricing and a 90-day to 6-month warranty.",
    url: seoConfig.siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Apple Mobile Repair | Bengaluru",
    description:
      "Premium Apple repair in Bengaluru. Transparent pricing, component-level micro-soldering, 90-day to 6-month warranty.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-ambient" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
