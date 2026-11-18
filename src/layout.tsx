// =============================================================================
// RED APPLE — Root Layout
// Preserves existing structure, adds Red Apple branding
// =============================================================================

import "./globals.css";
import { businessConfig } from "./businessConfig";
import { footerCopy } from "./businessConfig";
import { seoConfig } from "./businessConfig";
import { pwaConfig } from "./businessConfig";

// Basic metadata — will be overridden per-page
export const metadata = {
  title: "Red Apple Mobile Repair | Bengaluru",
  description:
    "Premium mobile repair service in Halasuru, Bengaluru. iPhone, iPad, MacBook & Apple Watch repair with transparent pricing, 90-day warranty, and doorstep pickup.",
  keywords:
    "mobile repair, iPhone repair, iPad repair, MacBook repair, Apple Watch repair, Bengaluru repair service, doorstep pickup, 90-day warranty",
  // OpenGraph
  openGraph: {
    title: "Red Apple Mobile Repair | Bengaluru",
    description:
      "Premium mobile repair service in Halasuru, Bengaluru. iPhone, iPad, MacBook & Apple Watch repair with transparent pricing, 90-day warranty, and doorstep pickup.",
    images: ["/hero-image.jpg"],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Red Apple Mobile Repair | Bengaluru",
    description:
      "Premium mobile repair service in Halasuru, Bengaluru. iPhone, iPad, MacBook & Apple Watch repair with transparent pricing, 90-day warranty, and doorstep pickup.",
    images: ["/hero-image.jpg"],
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    // Do NOT index private CRM or admin routes
    // index: false, follow: false // for private routes
  },
};

// Export for per-page overwrites
export { businessConfig, footerCopy, seoConfig, pwaConfig };