// =============================================================================
// RED APPLE MOBILE REPAIR — Central Business Configuration
// Single source of truth for all website sections
// NEVER hard-code contradictory values in different components
// =============================================================================

// Business Information
export const businessName = "Red Apple Mobile Repair";
export const phone = "+91 98765 43210";
export const address = "Halasuru, Bengaluru";
export const whatsapp = "+91 98765 43210";
export const googleBusinessProfile = "https://www.google.com/maps/place/Red+Apple+Mobile+Repair";
export const reviewUrl = "https://www.google.com/search?q=Red+Apple+Mobile+Repair+reviews";

// Business Hours — CRITICAL: 10 AM – 12 AM midnight (NOT 12 PM)
export const customerCommunicationHours = "24 hours (customer assistance)";
export const physicalStoreHours = "10 AM – 12 AM midnight";
export const pickupDropHours = "Bangalore-wide promotional pickup/drop available for the next 3 months";
export const pickupDropNote = "Customers may arrange pickup/drop outside physical operating hours";

// Rating & Reviews
export const rating = "4.9";
export const reviewCount = "2,150";

// Warranty
export const warrantyPeriod = "90 days to 6 months";

// Service Areas
export const serviceAreas = ["Halasuru", "Ulsoor", "Indiranagar", "Domlur", "MG Road", "Bengaluru", "Bangalore"];

// =============================================================================
// iPhone Pricing Dataset — SINGLE SOURCE OF TRUTH
// Do NOT duplicate prices across components. This dataset powers:
// - Estimator component
// - Chatbot responses
// - Relevant page content
// =============================================================================

// iPhone Prices (₹)
export const iphonePrices: Record<string, number> = {
  // iPhone 18 series
  "iPhone 18 Pro Max": 19500,
  "iPhone 18 Pro": 18500,
  "iPhone 18 Plus": 15500,
  "iPhone 18": 14500,

  // iPhone 17 series
  "iPhone 17 Pro Max": 16500,
  "iPhone 17 Pro": 15500,
  "iPhone 17 Plus": 13000,
  "iPhone 17": 12000,

  // iPhone 16 series
  "iPhone 16 Pro Max": 14500,
  "iPhone 16 Pro": 13500,
  "iPhone 16 Plus": 11000,
  "iPhone 16": 10000,

  // iPhone 15 series
  "iPhone 15 Pro Max": 11500,
  "iPhone 15 Pro": 10500,
  "iPhone 15 Plus": 8500,
  "iPhone 15": 7500,

  // iPhone 14 series
  "iPhone 14 Pro Max": 8500,
  "iPhone 14 Pro": 7500,
  "iPhone 14 Plus": 6500,
  "iPhone 14": 5500,

  // iPhone 13 series
  "iPhone 13 Pro Max": 7000,
  "iPhone 13 Pro": 6000,
  "iPhone 13": 4500,
  "iPhone 13 Mini": 4000,

  // iPhone 12 series
  "iPhone 12 Pro Max": 5500,
  "iPhone 12 Pro": 4500,
  "iPhone 12": 4000,
  "iPhone 12 Mini": 3500,

  // iPhone 11 series
  "iPhone 11 Pro Max": 4000,
  "iPhone 11 Pro": 3500,
  "iPhone 11": 3500,

  // iPhone X / older
  "iPhone X / XS / XR": 3000,
  "iPhone 8 / SE Gen 2/3": 2500,
};

// iPad Prices (₹)
export const ipadPrices: Record<string, number> = {
  // iPad Pro
  "iPad Pro 13-inch M4": 28500,
  "iPad Pro 12.9-inch 6th Gen M2": 25500,
  "iPad Pro 12.9-inch 5th Gen M1": 22500,
  "iPad Pro 12.9-inch 3rd / 4th Gen": 18500,
  "iPad Pro 11-inch M4": 24500,
  "iPad Pro 11-inch 4th Gen M2": 18500,
  "iPad Pro 11-inch 3rd Gen M1": 16500,
  "iPad Pro 11-inch 1st / 2nd Gen": 14500,

  // iPad Air
  "iPad Air 13-inch M2": 18500,
  "iPad Air 11-inch M2": 14500,
  "iPad Air 5th Gen M1": 14500,
  "iPad Air 4th Gen": 12500,
  "iPad Air 3rd Gen": 8500,

  // iPad Mini
  "iPad mini A17 Pro": 12500,
  "iPad mini 6th Gen": 11500,
  "iPad mini 5th Gen": 8500,
  "iPad mini 4th Gen": 6500,

  // iPad Base
  "iPad 10th Gen": 10500,
  "iPad 9th Gen": 7500,
  "iPad 7th / 8th Gen": 6500,
};

// Apple Watch Prices (₹)
export const appleWatchPrices: Record<string, number> = {
  // Ultra
  "Apple Watch Ultra 3 49mm": 16500,
  "Apple Watch Ultra 2 49mm": 14500,
  "Apple Watch Ultra 49mm": 12500,

  // Mainline
  "Series 12": 11500,
  "Series 11": 9500,
  "Series 10": 8500,
  "Series 9": 7500,
  "Series 8": 6500,
  "Series 7": 5500,

  // Older
  "Series 6": 4500,
  "Series 5": 4000,
  "Series 4": 3500,

  // SE
  "SE 3rd Gen": 5000,
  "SE 2nd Gen": 4000,
  "SE 1st Gen": 3500,
};

// =============================================================================
// Front Glass Restoration — New Service
// =============================================================================

export const frontGlassRestorationInfo = {
  title: "FRONT GLASS RESTORATION",
  description:
    "The service is intended for devices where the original display/OLED assembly remains suitable and only the front glass/touch layer requires restoration. Final eligibility is determined after technician inspection. Do NOT promise that every damaged display can be repaired with glass-only restoration. Do NOT claim guaranteed original-display retention. Use credible language.",
  warranty: "6-Month Hardware Warranty",
  warrantyNote:
    "Eligibility and warranty coverage are subject to the applicable repair warranty terms. Does not imply that the warranty covers unrelated accidental damage.",
};

// =============================================================================
// Estimator UX Flow
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

// Distinction between front glass restoration and full display replacement
export const repairTypeDistinction = {
  frontGlassRestoration: "FRONT GLASS RESTORATION — Only the front glass/touch layer requires restoration. Original display/OLED assembly remains suitable. Eligibility determined after technician inspection.",
  fullDisplayReplacement: "FULL DISPLAY REPLACEMENT — Complete display/OLED assembly replacement. Required when display damage exceeds glass-only repair eligibility.",
};

// =============================================================================
// CRM Repair Tracking — Configuration
// =============================================================================

export const crmConfig = {
  endpoint: "https://red-apple-crm.vercel.app/",
  // NOTE: Do NOT expose CRM credentials in client-side JavaScript.
  // Use server-side API routes/server actions where appropriate.
  // For repair tracking, use customer-safe data only.
  // Test with safe record first: { repairId: "TEST-001", status: "pending" }
};

// =============================================================================
// Chatbot Configuration
// =============================================================================

export const chatbotConfig = {
  // Quick actions
  quickActions: [
    "Get Repair Price",
    "Front Glass Repair",
    "Track My Repair",
    "Book Pickup",
    "WhatsApp Technician",
    "Call Red Apple",
    "Find Store",
  ],

  // Lead capture fields (where consent allows)
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

  // WhatsApp context preservation
  whatsappContext: [
    "selectedDevice",
    "model",
    "repairType",
    "estimatedPrice",
    "sourceCampaign",
  ],

  // Fallback when AI fails
  fallbackOptions: [
    { label: "WhatsApp", action: "whatsapp" },
    { label: "Call", action: "call" },
    { label: "Leave details", action: "leaveDetails" },
  ],

  // AI must never get stuck indefinitely
  timeoutMs: 8000,

  // Mobile-friendly layout constraint
  mobileFirst: true,
};

// =============================================================================
// SEO & Structured Data Configuration
// =============================================================================

export const seoConfig = {
  // Business name for title/meta
  businessName,

  // Local SEO targets
  localAreas: ["Halasuru", "Ulsoor", "Indiranagar", "Domlur", "MG Road", "Bengaluru", "Bangalore"],

  // Schema.org types to implement
  schemaTypes: ["LocalBusiness", "Organization", "WebSite", "Service", "FAQPage"],

  // Avoid: spammy doorway pages, fake review schema, guaranteed-claim schema

  // Favicon / Google logo — use existing Red Apple logo asset
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/manifest.json",

  // Robots — do NOT expose private CRM/API routes
  robotsDisallow: ["/admin", "/api", "/crm"],

  // Canonical fixes — /contact and /repair-status must NOT canonicalize to homepage
  // Each page must have its own canonical URL
};

// =============================================================================
// Footer — EXACT APPROVED COPY
// =============================================================================

export const footerCopy = `# Apple Repairs, Mastered.

Component-level micro-soldering, OEM displays, and 30-minute turnarounds right here in Bangalore. Backed by our rock-solid 90-days to 6 Months Warranty.`;

// Do NOT alter this wording unless required for HTML formatting.

// =============================================================================
// Business Hours Wording (for website copy)
// =============================================================================

export const businessHoursWording =
  "Open for customer assistance 24/7. Our physical repair centre operates from 10 AM to 12 AM. Bangalore-wide pickup and drop is currently available as part of our promotional service.";

// Do NOT write: "10 AM – 12 PM"

// =============================================================================
// Reviews Configuration
// =============================================================================

export const reviewsConfig = {
  // Use genuine Google reviews where technically and legally supported
  // Do NOT create fake reviews
  // Do NOT fabricate review text
  // Do NOT hard-code fake rating data

  // If Google API integration is available: retrieve legitimate data
  // If API access is unavailable: create a proper link to the Google review/profile page
  // and use only verified rating/count information

  // Architecture should make future review synchronization easy
  googleReviewUrl: "https://www.google.com/search?q=Red+Apple+Mobile+Repair+reviews",
  // displayOnlyVerified: true, // if implementing API later
};

// =============================================================================
// PWA-Page Config
// =============================================================================

export const pwaConfig = {
  // Keep PWA installation available but non-intrusive
  // Install prompt should:
  // - appear after meaningful engagement
  // - never cover navigation
  // - never cover quote CTA
  // - never cover chatbot
  // - be dismissible
  // - respect dismissal
  // - return only after sensible delay
  // - work correctly on mobile

  // Correct manifest, icons, theme color
  manifestPath: "/manifest.json",
  icons: [
    "/favicon-32x32.png",
    "/favicon-16x16.png",
    "/apple-touch-icon.png",
  ],
  themeColor: "#ffffff",
  offlineFallback: true,

  // Prompt timing
  // - appear after meaningful engagement
  // - be dismissible
  // - respect dismissal
  // - work correctly on mobile
};

// =============================================================================
// Performance / Animation Config
// =============================================================================

export const performanceConfig = {
  // Target: smooth 120Hz-quality motion where supported
  // Do NOT promise literal 120 FPS on every device

  // Use: transform, opacity, CSS animation, requestAnimationFrame where necessary
  // IntersectionObserver for enter animations

  // Avoid: giant particle systems, continuously animated expensive blur,
  // huge canvas simulations, unnecessary WebGL, video backgrounds,
  // scroll handlers firing constantly, layout-triggering animations

  // Hero iPhone effects (subtle)
  heroEffects: [
    "subtle floating movement",
    "gentle rotation",
    "screen glow",
    "reflection/glint",
    "slight depth movement",
    "entrance animation",
  ],

  // Background animation — lightweight
  backgroundEffects: [
    "CSS pseudo-elements with slow gradient movement",
    "radial glow",
    "soft grid movement",
    "subtle particles using CSS where practical",
  ],

  // Respect prefers-reduced-motion
  respectReducedMotion: true,

  // Disable/reduce on constrained devices
  constrainedDeviceReduce: true,
};

// =============================================================================
// Ads Policy Readiness
// =============================================================================

export const adsReadiness = {
  // Prepare for: Google Ads, Meta Ads, Microsoft/Bing Ads
  // Website must clearly communicate:
  // - independent repair business
  // - no false Apple authorization claim
  // - accurate pricing
  // - inspection conditions
  // - warranty
  // - privacy
  // - business identity
  // - contact details
  // - location
  // - service availability

  // Avoid unsupported claims:
  // "100% guaranteed original display"
  // "zero risk"
  // "official Apple repair"
  // "factory-certified"

  // Use instead:
  // "designed to retain the original display where eligible after inspection."

  // Do not guarantee approval from any advertising platform
};

// =============================================================================
// Privacy / Terms / Warranty Pages
// =============================================================================

export const legalPages = {
  // Verify these pages exist and are usable
  // They should clearly cover:
  // - customer information
  // - repair information
  // - WhatsApp communication
  // - tracking
  // - pickup/drop
  // - warranty
  // - payment
  // - refunds/cancellations where applicable
  // - third-party services

  // Do not invent legal claims
  privacy: "/privacy",
  terms: "/terms",
  warranty: "/warranty",
};

// =============================================================================
// Service Pages Structure
// =============================================================================

export const servicePages = [
  "iPhone repair",
  "screen display repair",
  "front glass replacement",
  "battery replacement",
  "back glass",
  "water damage",
  "motherboard chip-level repair",
  "MacBook repair",
  "data recovery",
];

// Each service page should contain:
// - symptoms
// - repair type
// - eligibility
// - approximate pricing where approved
// - turnaround
// - warranty
// - FAQ
// - pickup/drop
// - walk-in information
// - WhatsApp CTA
// - call CTA

// Avoid keyword stuffing.

// =============================================================================
// Front Glass Restoration Detailed Config
// =============================================================================

export const frontGlassDetailed = {
  title: "FRONT GLASS RESTORATION",
  body: "The service is intended for devices where the original display/OLED assembly remains suitable and only the front glass/touch layer requires restoration. Final eligibility is determined after technician inspection.",

  whatItIncludes: [
    "Front glass/touch layer restoration only",
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
// Front Glass Pricing Table (from the brief)
// =============================================================================

// The pricing dataset above (iphonePrices, ipadPrices, appleWatchPrices) powers this.
// Do NOT duplicate prices across dozens of components.

// =============================================================================
// CRM Repair Tracking — Customer-Safe Data Structure
// =============================================================================

export const repairTrackingConfig = {
  // Customer enters: Job ID / Request ID / Receipt ID
  // Then retrieve customer-safe repair information.

  // Show (customer-safe only):
  // - Job/request/receipt ID
  // - Device
  // - Model
  // - Repair type
  // - Current repair status
  // - Status timeline
  // - Estimated completion
  // - Pickup/collection status
  // - Total repair amount
  // - Amount paid
  // - Amount due
  // - Warranty information
  // - Invoice/receipt link if available

  // Do NOT expose:
  // - internal technician notes
  // - internal CRM metadata
  // - passwords
  // - API keys
  // - unrelated customers
  // - internal margins
  // - private staff information

  // Security considerations:
  // - strict input validation
  // - rate limiting
  // - generic failure response (no error details leaked)
  // - no sensitive data in URL parameters
  // - no-store/cache prevention
  // - server-side authorization
  // - abuse protection
  // - audit logging where supported

  // Prefer stronger verification if the CRM supports it without damaging UX.
};

// =============================================================================
// WhatsApp Integration Config
// =============================================================================

export const whatsappConfig = {
  // Every major CTA should preserve context:
  // - selected device
  // - model
  // - repair type
  // - estimated price
  // - source/campaign where technically possible

  // Do not lose the customer's quote context during WhatsApp handoff.

  // API key: re_GzQMKErC_ELZbgH4H2LpFoXr5sLRyXdDu (from .env.local)
};

// =============================================================================
// Analytics Events Config
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

  // Preserve attribution where applicable:
  // UTM parameters, GCLID, Meta click ID, Microsoft/Bing click ID,
  // landing page, device type

  // Do NOT send unnecessary personal information to analytics platforms.
];

// =============================================================================
// SEO Validation Checklist
// =============================================================================

export const seoValidation = {
  // Check: canonical, title, description, robots, sitemap, JSON-LD, OpenGraph, favicon, manifest,
  // 404, redirects, broken links, duplicate metadata, heading hierarchy

  // Fix: /contact and /repair-status must NOT canonicalize to homepage
  // Each page should have its own canonical URL

  // Local SEO: target naturally: Halasuru, Ulsoor, Indiranagar, Domlur, MG Road, Bengaluru, Bangalore
  // Do NOT create spammy doorway pages

  // Add useful local information: nearby landmarks, pickup/drop, walk-in availability,
  // repair turnaround, service area, directions, relevant FAQs

  // Structured data: implement valid JSON-LD where appropriate.
  // LocalBusiness, Organization, WebSite, Service, FAQPage (ONLY when data qualifies and is genuinely sourced)
  // Ensure business logo points to correct Red Apple logo asset

  // Favicon/Google logo: correct Red Apple logo consistently for:
  // - favicon, icon, Apple touch icon, PWA icon, manifest icons,
  // - Organization/LocalBusiness logo, appropriate social metadata

  // Do NOT invent a new unrelated logo.

  // Sitemap + robots: verify /sitemap.xml and /robots.txt
  // Every important indexable URL must be represented correctly.
  // Remove obsolete/duplicate URLs.
  // Do NOT expose private CRM/API routes through sitemap.
};

// =============================================================================
// Performance Checklist
// =============================================================================

export const performanceValidation = {
  // Run Lighthouse or equivalent tests
  // Check: LCP, CLS, INP, TTFB, JS bundle, image weight, font loading, animation performance,
  // mobile performance

  // Do NOT sacrifice page performance merely to add animations

  // Target: smooth 120Hz-quality motion where supported
  // Do NOT promise literal 120 FPS on every device

  // Check: environment variables, client-side secrets, API routes, CORS, rate limiting,
  // input validation, XSS, CSRF where applicable, cache behavior, security headers, CSP

  // Do not expose CRM credentials.
};

// =============================================================================
// Git Safety
// =============================================================================

export const gitSafety = {
  // Before changes: create a new branch
  // Example: feature/red-apple-production-upgrade
  // Do not destroy existing history
  // Commit logically

  // Suggested commits:
  // 1. seo-business-consistency
  // 2. front-glass-estimator
  // 3. crm-repair-tracking
  // 4. chatbot-upgrade
  // 5. animation-performance
  // 6. accessibility-pwa
  // 7. analytics-ad-readiness
  // 8. final-polish
};

// =============================================================================
// Deployment Checklist
// =============================================================================

export const deploymentChecklist = {
  // FIRST: deploy preview
  // Test preview
  // Only after all tests pass: deploy production

  // Production: https://redmobilerepair.in
  // Verify: HTTP 200, HTTPS, canonical, favicon, sitemap, robots,
  // CRM tracking, chatbot, WhatsApp, analytics, PWA

  // After completion report should include:
  // 1. Production URL
  // 2. Preview URL
  // 3. Git branch
  // 4. Commit(s)
  // 5. Build result
  // 6. SEO result
  // 7. CRM result
  // 8. Chatbot result
  // 9. Performance result
  // 10. Mobile result
  // 11. PWA result
  // 12. Analytics result
  // 13. Ads-readiness result
  // 14. Any remaining warnings

  // DO NOT say "completed" for anything that was not actually tested
  // DO NOT fabricate successful CRM tests
  // DO NOT fabricate analytics verification
  // DO NOT fabricate Google review synchronization
};

// =============================================================================
// Final Principle
// =============================================================================

/*
The objective is NOT simply to make the website prettier.

The objective is:

RED APPLE MOBILE REPAIR
→ premium trust
→ stronger local SEO
→ better Google visibility
→ higher quote completion
→ better WhatsApp conversion
→ reliable chatbot
→ CRM-connected customer journey
→ transparent repair tracking
→ transparent payment status
→ advertising-ready landing experience
→ fast, smooth mobile UX
→ production-grade technical foundation.

Build carefully.
Preserve existing functionality.
Preserve existing store photographs.
Use the existing architecture wherever practical.
Do not make unnecessary framework changes.
Do not deploy until the implementation is tested.
*/