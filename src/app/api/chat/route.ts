import { NextResponse } from "next/server";
import {
  iphonePrices,
  ipadPrices,
  appleWatchPrices,
  frontGlassRestorationInfo,
  physicalStoreHours,
  customerCommunicationHours,
  pickupDrop,
  warrantyPeriod,
} from "@/businessConfig";

export const runtime = "nodejs";

const datasets: Record<string, Record<string, number>> = {
  iPhone: iphonePrices,
  iPad: ipadPrices,
  "Apple Watch": appleWatchPrices,
};

/** Whole-word intent match, so "iPhone" never matches the word "phone". */
function has(text: string, ...words: string[]) {
  const lower = text.toLowerCase();
  return words.some((w) =>
    new RegExp(`(^|[^a-z0-9])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z0-9])`, "i").test(
      lower,
    ),
  );
}

/** Find a model mentioned in free text, longest match first. */
function matchModel(text: string): { family: string; model: string; price: number } | null {
  const lower = text.toLowerCase();
  const candidates: Array<{ family: string; model: string; price: number }> = [];

  for (const [family, table] of Object.entries(datasets)) {
    for (const [model, price] of Object.entries(table)) {
      const key = model.toLowerCase();
      const short = key.replace(/^iphone\s*/, "");
      if (
        lower.includes(key) ||
        (family === "iPhone" && short.length > 2 && lower.includes(short))
      ) {
        candidates.push({ family, model, price });
      }
    }
  }

  if (candidates.length === 0) return null;
  candidates.sort((a, b) => b.model.length - a.model.length);
  return candidates[0];
}

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export async function POST(req: Request) {
  let message = "";
  try {
    const body = await req.json();
    message = typeof body?.message === "string" ? body.message : "";
  } catch {
    return NextResponse.json({ reply: "I didn't catch that. Could you rephrase?" });
  }

  const text = message.trim();
  if (!text) {
    return NextResponse.json({ reply: "Ask me anything about your repair." });
  }

  // 1) Front glass restoration
  if (has(text, "front glass", "glass restoration", "only glass", "front-glass")) {
    return NextResponse.json({
      reply:
        `${frontGlassRestorationInfo.title}\n\n${frontGlassRestorationInfo.description}\n\n` +
        `Warranty: ${frontGlassRestorationInfo.warranty}. ${frontGlassRestorationInfo.warrantyNote}\n\n` +
        `Share your model on WhatsApp and we'll confirm eligibility after inspection.`,
      handoff: true,
    });
  }

  // 2) Warranty
  if (has(text, "warranty", "guarantee", "guaranteed")) {
    return NextResponse.json({
      reply:
        `We back repairs with a ${warrantyPeriod} warranty depending on the service. ` +
        `Front Glass Restoration carries a 6-month hardware warranty, subject to the applicable repair warranty terms. ` +
        `Accidental damage after the repair is not covered.`,
    });
  }

  // 3) Repair tracking
  if (has(text, "track", "tracking", "status", "job id", "jobid", "receipt")) {
    return NextResponse.json({
      reply:
        "You can check your repair with your Job ID / Receipt ID in the Repair Tracking box on this page. " +
        "Only customer-safe details are shown. If you don't have your Job ID, message us on WhatsApp with the phone number used at drop-off.",
    });
  }

  // 4) Hours
  if (has(text, "hour", "hours", "open", "opening", "timing", "timings", "close", "closed")) {
    return NextResponse.json({
      reply:
        `Our physical repair centre is open ${physicalStoreHours}. ` +
        `Customer assistance is available ${customerCommunicationHours}. ` +
        `So you can message us any time and we'll respond.`,
    });
  }

  // 5) Pickup / doorstep
  if (has(text, "pickup", "pick up", "doorstep", "collect", "drop off", "drop-off")) {
    return NextResponse.json({
      reply: `${pickupDrop}. Share your area and device on WhatsApp to schedule a pickup.`,
      handoff: true,
    });
  }

  // 6) Model-specific pricing
  const match = matchModel(text);
  const priceIntent = has(
    text,
    "price",
    "prices",
    "cost",
    "much",
    "quote",
    "estimate",
    "charge",
    "charges",
    "rate",
    "screen",
    "display",
    "replace",
    "replacement",
  );

  if (match && priceIntent) {
    return NextResponse.json({
      reply:
        `${match.model}: Full Display Replacement is indicative ${formatINR(match.price)}. ` +
        `Final price is confirmed after technician inspection.\n\n` +
        `If only the front glass/touch layer is damaged and the original display is suitable, ` +
        `Front Glass Restoration may be possible instead — confirmed after inspection, with a 6-month hardware warranty.`,
      handoff: true,
    });
  }

  if (match && !priceIntent) {
    return NextResponse.json({
      reply:
        `Thanks — tell me what's happening with your ${match.model} (cracked screen, battery, won't charge, water damage) ` +
        `and I'll point you to the right service. You can also send a photo on WhatsApp for a faster answer.`,
      handoff: true,
    });
  }

  // 7) Contact / store
  if (
    has(
      text,
      "phone",
      "call",
      "whatsapp",
      "number",
      "contact",
      "address",
      "location",
      "store",
      "where",
      "visit",
    )
  ) {
    return NextResponse.json({
      reply:
        "You can reach us on +91 98765 43210 or on WhatsApp. We're in Halasuru, Bengaluru. " +
        `Store hours: ${physicalStoreHours}.`,
      handoff: true,
    });
  }

  // 8) Generic price question without a model
  if (has(text, "price", "prices", "cost", "much", "quote", "estimate", "charges")) {
    return NextResponse.json({
      reply:
        "I can give an indicative display price if you tell me the model (for example \u201ciPhone 14 Pro\u201d or \u201ciPad Air 5th Gen\u201d). " +
        "You can also use the Instant Estimate box on this page. Final pricing is confirmed after inspection.",
    });
  }

  // 9) Honest fallback — hand to a human instead of guessing
  return NextResponse.json({
    reply:
      "I want to get this exactly right, so let me hand you to a technician. " +
      "Message us on WhatsApp with your device model and what's happening — they'll reply with a clear answer.",
    handoff: true,
  });
}
