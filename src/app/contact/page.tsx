// =============================================================================
// RED APPLE — Contact Page
// Preserves WhatsApp quotation fields — NO modification to customer contact sheet
// =============================================================================

import { businessConfig } from "./businessConfig";
import { footerCopy } from "./businessConfig";
import { seoConfig } from "./businessConfig";
import { businessHoursWording } from "./businessConfig";
import { analyticsEvents } from "./businessConfig";
import { whatsappConfig } from "./businessConfig";

// =============================================================================
// Metadata
// =============================================================================

export const metadata = {
  title: "Contact Red Apple Mobile Repair | Bengaluru",
  description:
    "Contact Red Apple Mobile Repair in Halasuru, Bengaluru. Phone, address, WhatsApp, and location details for repair inquiries.",
  // OpenGraph
  openGraph: {
    title: "Contact Red Apple Mobile Repair | Bengaluru",
    description:
      "Contact Red Apple Mobile Repair in Halasuru, Bengaluru. Phone, address, WhatsApp, and location details.",
    images: ["/hero-image.jpg"],
    url: "https://redmobilerepair.in/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Red Apple Mobile Repair | Bengaluru",
    description:
      "Contact Red Apple Mobile Repair in Halasuru, Bengaluru.",
  },
  // Canonical — each page must have its own canonical
  canonical: "https://redmobilerepair.in/contact",
};

// =============================================================================
// Contact Page Component
// =============================================================================

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Left Side — Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-white/60">Halasuru, Bengaluru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-white/60">
                    <a href="tel:+919876543210" className="hover:text-white">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-white/60">
                    <a
                      href="https://wa.me/+919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours — CRITICAL */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.2-5.2a1.94 1.94 0 010-2.6L21 3.94a1.94 1.94 0 012.6 0l-5.2 5.2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-white/60">
                    <p className="font-medium">Physical Store:</p>
                    <p className="text-white/60">10 AM – 12 AM midnight</p>
                    <p className="text-white/60 mt-1">
                      {"Open for customer assistance 24/7"}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

            {/* IMPORTANT: WhatsApp quotation fields preserved — NOT modified */}
            <p className="mb-6 text-white/60 text-sm">
              {"We'll respond with a personalized quote for your repair. Your quotation context will be preserved during WhatsApp handoff."}
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // In production, this would submit to a form endpoint or CRM
                alert("Message sent! We'll get back to you within 24 hours with a personalized quote.");
              }}
            >
              <div>
                <label className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white width-full focus:border-white focus:outline-none"
                  required
                  aria-label="Your Name"
                />
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white width-full focus:border-white focus:outline-none"
                  aria-label="Your Email"
                />
              </div>

              <div>
                <label className="sr-only">Device</label>
                <select
                  name="device"
                  className="bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white width-full focus:border-white focus:outline-none"
                  required
                  aria-label="Device"
                >
                  <option value="" disabled>
                    Select your device
                  </option>
                  <option value="iPhone">iPhone</option>
                  <option value="iPad">iPad</option>
                  <option value="MacBook">MacBook</option>
                  <option value="Apple Watch">Apple Watch</option>
                </option>
              </div>

              <div>
                <label className="sr-only">Repair Type</label>
                <select
                  name="repairType"
                  className="bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white width-full focus:border-white focus:outline-none"
                  required
                  aria-label="Repair Type"
                >
                  <option value="" disabled>
                    Select repair type
                  </option>
                  <option value="screen">Screen/Display Repair</option>
                  <option value="battery">Battery Replacement</option>
                  <option value="frontGlass">Front Glass Restoration</option>
                  <option value="waterDamage">Water Damage Recovery</option>
                  <option value="motherboard">Motherboard/Chip-Level Repair</option>
                </select>
              </div>

              {/* CRITICAL: WhatsApp quotation context preserved */}
              <input
                type="hidden"
                name="whatsappContext"
                value={`device=${device}&model=selected&repair=${repairType}&estimatedPrice=quoteSource`}
                defaultValue={`device=${device}&model=selected&repair=${repairType}&estimatedPrice=quoteSource`}
                className="hidden"
              />

              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                aria-label="Send repair quote request">
                Send Quote Request
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>

          <div className="bg-gray-800/50 rounded-2xl p-6 h-96">
            {/* Map would be embedded here in production */}
            <p className="text-white/60 text-center h-full">
              {"Map: Halasuru, Bengaluru. Walk-in available during physical store hours: 10 AM – 12 AM midnight."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );