import { NextResponse } from "next/server";
import { repairTrackingConfig } from "@/businessConfig";

export const runtime = "nodejs";

/**
 * Server-side proxy for CRM repair tracking.
 *
 * Credentials live ONLY in environment variables and never reach the browser.
 * The upstream CRM contract is configured via env so we never hard-code an
 * unverified API shape:
 *
 *   CRM_API_URL   e.g. https://red-apple-crm.vercel.app/api/jobs
 *   CRM_API_KEY   secret token used as a Bearer token upstream
 *
 * If these are not configured, the endpoint returns a clear, honest message
 * instead of inventing data.
 */

type SafeJob = Record<string, unknown>;

const SAFE_FIELDS = new Set(repairTrackingConfig.safeFields);

function pickSafeJob(raw: any): SafeJob {
  const source = raw?.job ?? raw?.data ?? raw ?? {};
  const out: SafeJob = {};

  for (const key of Object.keys(source)) {
    if (SAFE_FIELDS.has(key)) {
      out[key] = source[key];
    }
  }

  // jobId is required for the UI
  if (!out.jobId) {
    out.jobId = source.jobId ?? source.id ?? null;
  }

  return out;
}

export async function POST(req: Request) {
  let jobId = "";
  try {
    const body = await req.json();
    jobId = typeof body?.jobId === "string" ? body.jobId.trim() : "";
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 },
    );
  }

  // Basic validation — Job IDs in this system are short alphanumeric tokens.
  if (!jobId || jobId.length > 40 || !/^[A-Za-z0-9._-]+$/.test(jobId)) {
    return NextResponse.json(
      { message: "Please enter a valid Job ID / Receipt ID." },
      { status: 400 },
    );
  }

  const baseUrl = process.env.CRM_API_URL;
  const apiKey = process.env.CRM_API_KEY;

  if (!baseUrl) {
    return NextResponse.json(
      {
        message:
          "Repair tracking is being connected to our service system. In the meantime, message us on WhatsApp with your Job ID and we'll check it for you right away.",
      },
      { status: 503 },
    );
  }

  try {
    const url = new URL(baseUrl);
    url.searchParams.set("jobId", jobId);

    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      // Never cache customer records.
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (upstream.status === 404) {
      return NextResponse.json(
        { message: "We couldn't find that Job ID. Please check your receipt or contact us on WhatsApp." },
        { status: 404 },
      );
    }

    if (!upstream.ok) {
      return NextResponse.json(
        {
          message:
            "We couldn't retrieve that repair right now. Please try again shortly or message us on WhatsApp.",
        },
        { status: 502 },
      );
    }

    const data = await upstream.json();
    const job = pickSafeJob(data);

    if (!job.jobId) {
      return NextResponse.json(
        { message: "We couldn't find that Job ID. Please check your receipt or contact us on WhatsApp." },
        { status: 404 },
      );
    }

    return NextResponse.json({ job });
  } catch {
    return NextResponse.json(
      {
        message:
          "We couldn't reach our repair system. Please try again shortly or message us on WhatsApp.",
      },
      { status: 502 },
    );
  }
}
