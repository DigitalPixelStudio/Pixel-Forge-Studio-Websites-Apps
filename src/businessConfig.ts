// =============================================================================
// RED APPLE MOBILE REPAIR — Central Business Configuration
// Single source of truth. Never hard-code contradictory values elsewhere.
// Secrets are NEVER stored here — they live in .env.local only.
// =============================================================================

export const businessName = "Red Apple Mobile Repair";
export const phone = "+91 98765 43210";
export const phoneDial = "+919876543210";
export const address = "Halasuru, Bengaluru";
export const whatsapp = "https://wa.me/919876543210";
export const reviewUrl =
  "https://www.google.com/search?q=Red+Apple+Mobile+Repair+reviews";

// --- Hours: physical store 10 AM – 12 AM midnight (NOT 12 PM) ---
export const customerCommunicationHours = "24 hours (customer assistance)";
export const physicalStoreHours = "10 AM – 12 AM midnight";
export const pickupDrop =
  "Bangalore-wide promotional pickup/drop available for the next 3 months";

export const businessHoursWording =
  "Open for customer assistance 24/7. Our physical repair centre operates from 10 AM to 12 AM. Bangalore-wide pickup and drop is currently available as part of our promotional service.";

export const warrantyPeriod = "90 days to 6 months";

export const serviceAreas = [
  "Halasuru",
  "Ulsoor",
  "Indiranagar",
  "Domlur",
  "MG Road",
  "Bengaluru",
  "Bangalore",
];

// =============================================================================
// Pricing dataset — SINGLE SOURCE OF TRUTH (₹)
// =============================================================================

export const iphonePrices: Record<string, number> = {
  "iPhone 18 Pro Max": 19500,
  "iPhone 18 Pro": 18500,
  "iPhone 18 Plus": 15500,
  "iPhone 18": 14500,
  "iPhone 17 Pro Max": 16500,
  "iPhone 17 Pro": 15500,
  "iPhone 17 Plus": 13000,
  "iPhone 17": 12000,
  "iPhone 16 Pro Max": 14500,
  "iPhone 16 Pro": 13500,
  "iPhone 16 Plus": 11000,
  "iPhone 16": 10000,
  "iPhone 15 Pro Max": 11500,
  "iPhone 15 Pro": 10500,
  "iPhone 15 Plus": 8500,
  "iPhone 15": 7500,
  "iPhone 14 Pro Max": 8500,
  "iPhone 14 Pro": 7500,
  "iPhone 14 Plus": 6500,
  "iPhone 14": 5500,
  "iPhone 13 Pro Max": 7000,
  "iPhone 13 Pro": 6000,
  "iPhone 13": 4500,
  "iPhone 13 Mini": 4000,
  "iPhone 12 Pro Max": 5500,
  "iPhone 12 Pro": 4500,
  "iPhone 12": 4000,
  "iPhone 12 Mini": 3500,
  "iPhone 11 Pro Max": 4000,
  "iPhone 11 Pro": 3500,
  "iPhone 11": 3500,
  "iPhone X / XS / XR": 3000,
  "iPhone 8 / SE Gen 2/3": 2500,
};

export const ipadPrices: Record<string, number> = {
  "iPad Pro 13-inch M4": 28500,
  "iPad Pro 12.9-inch 6th Gen M2": 25500,
  "iPad Pro 12.9-inch 5th Gen M1": 22500,
  "iPad Pro 12.9-inch 3rd / 4th Gen": 18500,
  "iPad Pro 11-inch M4": 24500,
  "iPad Pro 11-inch 4th Gen M2": 18500,
  "iPad Pro 11-inch 3rd Gen M1": 16500,
  "iPad Pro 11-inch 1st / 2nd Gen": 14500,
  "iPad Air 13-inch M2": 18500,
  "iPad Air 11-inch M2": 14500,
  "iPad Air 5th Gen M1": 14500,
  "iPad Air 4th Gen": 12500,
  "iPad Air 3rd Gen": 8500,
  "iPad mini A17 Pro": 12500,
  "iPad mini 6th Gen": 11500,
  "iPad mini 5th Gen": 8500,
  "iPad mini 4th Gen": 6500,
  "iPad 10th Gen": 10500,
  "iPad 9th Gen": 7500,
  "iPad 7th / 8th Gen": 6500,
};

export const appleWatchPrices: Record<string, number> = {
  "Apple Watch Ultra 3 49mm": 16500,
  "Apple Watch Ultra 2 49mm": 14500,
  "Apple Watch Ultra 49mm": 12500,
  "Series 12": 11500,
  "Series 11": 9500,
  "Series 10": 8500,
  "Series 9": 7500,
  "Series 8": 6500,
  "Series 7": 5500,
  "Series 6": 4500,
  "Series 5": 4000,
  "Series 4": 3500,
  "SE 3rd Gen": 5000,
  "SE 2nd Gen": 4000,
  "SE 1st Gen": 3500,
};

export const pricingConfig = {
  iphonePrices,
  ipadPrices,
  appleWatchPrices,
};

// =============================================================================
// Front Glass Restoration
// =============================================================================

export const frontGlassRestorationInfo = {
  title: "FRONT GLASS RESTORATION",
  description:
    "For devices where the original display/OLED assembly remains suitable and only the front glass/touch layer requires restoration. Final eligibility is determined after technician inspection.",
  warranty: "6-Month Hardware Warranty",
  warrantyNote:
    "Eligibility and warranty coverage are subject to the applicable repair warranty terms. Does not cover unrelated accidental damage.",
};

export const frontGlassDetailed = {
  title: "FRONT GLASS RESTORATION",
  body: "This service is intended for devices where the original display/OLED assembly remains suitable and only the front glass/touch layer requires restoration. Final eligibility is determined after technician inspection.",
  whatItIncludes: [
    "Front glass / touch layer restoration only",
    "Original display/OLED assembly retained where eligible",
    "Technician inspection required for final eligibility",
  ],
  whatItDoesNotInclude: [
    "Guaranteed original-display retention for every device",
    "Repair of displays with internal OLED damage",
    "Unlimited eligibility without inspection",
  ],
  credibleLanguage:
    "Eligibility and warranty coverage are subject to the applicable repair warranty terms.",
  warranty: "6-Month Hardware Warranty",
};

// =============================================================================
// Estimator flow
// =============================================================================

export const estimatorFlow = [
  "Device",
  "Model",
  "Repair type",
  "Front Glass Restoration OR Full Display Replacement",
  "Condition / eligibility notice",
  "Price",
  "Turnaround",
  "WhatsApp / Call / Pickup",
];

export const repairTypeDistinction = {
  frontGlassRestoration:
    "FRONT GLASS RESTORATION — only the front glass/touch layer requires restoration. Original display remains suitable. Eligibility after inspection.",
  fullDisplayReplacement:
    "FULL DISPLAY REPLACEMENT — complete display/OLED assembly replacement. Required when damage exceeds glass-only eligibility.",
};

// =============================================================================
// Footer — EXACT approved copy
// =============================================================================

export const footerHeading = "Apple Repairs, Mastered.";
export const footerBody =
  "Component-level micro-soldering, OEM displays, and 30-minute turnarounds right here in Bangalore. Backed by our rock-solid 90-days to 6 Months Warranty.";
export const footerCopy = `${footerHeading}\n\n${footerBody}`;

// =============================================================================
// Chatbot configuration
// =============================================================================

export const chatbotConfig = {
  quickActions: [
    "Get Repair Price",
    "Front Glass Repair",
    "Track My Repair",
    "Book Pickup",
    "WhatsApp Technician",
    "Call Red Apple",
    "Find Store",
  ],
  leadFields: [
    "device",
    "model",
    "repair",
    "estimatedPrice",
    "locationServiceMode",
    "preferredContact",
    "landingPage",
    "utmSource",
    "campaign",
    "adClickId",
    "conversationSource",
  ],
  timeoutMs: 8000,
  fallbackOptions: ["WhatsApp", "Call", "Leave details"],
};

// =============================================================================
// CRM (server-side only — never expose credentials client-side)
// =============================================================================

export const crmConfig = {
  endpoint: "https://red-apple-crm.vercel.app/",
};

export const repairTrackingConfig = {
  // Customer-safe fields only. No internal notes, no margins, no staff info.
  safeFields: [
    "jobId",
    "device",
    "model",
    "repairType",
    "status",
    "statusTimeline",
    "estimatedCompletion",
    "collectionStatus",
    "totalAmount",
    "amountPaid",
    "amountDue",
    "warranty",
  ],
};

// =============================================================================
// SEO
// =============================================================================

export const seoConfig = {
  businessName,
  siteUrl: "https://redmobilerepair.in",
  localAreas: serviceAreas,
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/manifest.webmanifest",
};

// =============================================================================
// Analytics events
// =============================================================================

export const analyticsEvents = [
  "quote_started",
  "device_selected",
  "model_selected",
  "repair_selected",
  "front_glass_selected",
  "quote_completed",
  "whatsapp_clicked",
  "call_clicked",
  "maps_clicked",
  "pickup_started",
  "repair_tracking_started",
  "repair_tracking_success",
  "repair_tracking_failed",
  "chat_started",
  "chat_lead_created",
  "chat_human_escalation",
  "pwa_install_prompt_shown",
  "pwa_install_clicked",
  "pwa_install_dismissed",
];

// =============================================================================
// Legal pages
// =============================================================================

export const legalPages = {
  privacy: "/privacy",
  terms: "/terms",
  warranty: "/warranty",
};
