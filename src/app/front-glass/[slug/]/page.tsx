// =============================================================================
// RED APPLE — Front Glass Repair Page
// Adapted from the approved brief
// =============================================================================

import { businessConfig } from "./businessConfig";
import { frontGlassDetailed } from "./businessConfig";
import { pricingConfig } from "./businessConfig";
import { seoConfig } from "./businessConfig";
import { businessHoursWording } from "./businessConfig";

// Dynamic slug generation for iPhone/iPad models
const params = /** @type {import('next').NextPageContext['params']} */ ({
  slug: "front-glass",
});

// Export metadata with dynamic title
export const metadata = {
  title: `Front Glass Restoration — Red Apple Mobile Repair`,
  description:
    "Front glass restoration service for devices where original display/OLED assembly is suitable. Only the front glass/touch layer requires restoration. Technician inspection required for eligibility.",
  // OpenGraph
  openGraph: {
    title: "Front Glass Restoration — Red Apple Mobile Repair",
    description:
      "Front glass restoration for devices where original display is suitable. Eligibility after technician inspection.",
    images: ["/hero-image.jpg"],
    url: "https://redmobilerepair.in/front-glass",
  },
  twitter: {
    card: "summary",
    title: "Front Glass Restoration — Red Apple Mobile Repair",
    description:
      "Front glass restoration service where original display is suitable.",
  },
  // Canonical — each page must have its own canonical
  canonical: "https://redmobilerepair.in/front-glass",
};

// =============================================================================
// Front Glass Page Component
// =============================================================================

export default function FrontGlassPage() {
  return (
    <section className="min-h-screen">

      {/* Hero */}
      <header className="py-12 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            {frontGlassDetailed.title}
          </h1>
          <p className="text-white/80 mt-2">
            {frontGlassDetailed.body}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* What's Included */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What This Service Includes
          </h2>
          <ul className="space-y-3 text-white/80">
            {frontGlassDetailed.whatItIncludes.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l13-13l-13 13M5 13l13 13l-13-13"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What It Does NOT Include */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What This Service Does NOT Include
          </h2>
          <ul className="space-y-3 text-white/80">
            {frontGlassDetailed.whatItDoesNotInclude.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18M6 6l12 12"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Warranty Info */}
        <div className="bg-gray-900/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            Warranty
          </h3>
          <p className="text-white">
            {frontGlassDetailed.warranty}
          </p>
          <p className="text-white/60 text-sm">
            {frontGlassDetailed.warrantyNote}
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Pricing
          </h2>
          <p className="text-white/60 mb-4">
            Final eligibility and pricing determined after technician inspection.
          </p>

          {/* Centralized pricing powered from businessConfig */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PricingCard model="iPhone 16 Pro Max" price={pricingConfig.iphonePrices["iPhone 16 Pro Max"]} />
            <PricingCard model="iPad Pro 13-inch M4" price={pricingConfig.ipadPrices["iPad Pro 13-inch M4"]} />
          </div>

          <p className="mt-4 text-white/60 text-sm">
            {"Eligibility and final pricing determined after technician inspection. 6-Month Hardware Warranty on qualifying repairs."}
          </p>
        </section>

        {/* Eligibility Notice */}
        <div className="bg-gray-900/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            Eligibility Notice
          </h3>
          <p className="text-white/80">
            {"Final eligibility is determined after technician inspection. This service is intended for devices where the original display/OLED assembly remains suitable and only the front glass/touch layer requires restoration. Not every damaged display can be repaired with glass-only restoration."}
          </p>
        </section>

        {/* CTA Section */}
        <section className="mt-8">
          <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get a Personalized Quote
            </h3>
            <p className="text-white/60 mb-6">
              {"Book a free diagnosis or WhatsApp us for a preliminary estimate."}
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/+919876543210?text=Hi%20Red%20Apple%20I%20need%20front%20glass%20repair%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-green-700 transition-colors"
                aria-label="WhatsApp for front glass quote">
                WhatsApp Us
              </a>

              <a
                href="tel:+919876543210"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-gray-800 transition-colors"
                aria-label="Call Red Apple for front glass info">
                Call Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </section>
  );
}

/* Front Glass Page Sub-component */
const PricingCard = ({ model, price }) => {
  const priceDisplay = price !== "Custom quote" ? `₹${price}` : "Custom quote";

  return (
    <div
      className="group rounded-xl bg-gray-800 border border-white/10 p-4 hover:border-white/20 transition-colors text-center"
    >
      <p className="text-white/60 text-xs uppercase tracking-wider mb-2">
        {model}
      </p>
      <p className="text-3xl font-bold text-white">{priceDisplay}</p>
      <p className="text-white/60 text-xs mt-2">
        (Technician inspection required)
      </p>
    </div>
  );
};