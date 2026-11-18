import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Red Apple Mobile Repair handles the information you share when requesting a repair or quotation.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Legal</p>
        <h1 style={{ marginTop: 10, fontSize: "clamp(28px, 4vw, 44px)" }}>
          Privacy Policy
        </h1>

        <div className="card" style={{ marginTop: 26 }}>
          <h3>What we collect</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            When you request a quotation or arrange a pickup, we collect the
            details you choose to share — typically your name, device and model,
            repair type, contact number and any notes about the fault. If you
            contact us through the WhatsApp handoff, that conversation is handled
            by WhatsApp under its own terms.
          </p>

          <h3 style={{ marginTop: 22 }}>How we use it</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            We use these details only to provide the repair service: preparing a
            quotation, diagnosing the device, updating you on status, and
            honouring warranty. We do not sell your information.
          </p>

          <h3 style={{ marginTop: 22 }}>Repair tracking</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Repair tracking shows only customer-safe fields. Internal notes, staff
            information and cost margins are never displayed. Repair records are
            retrieved server-side and are not cached in your browser.
          </p>

          <h3 style={{ marginTop: 22 }}>Your choices</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            You can ask us to correct or delete the contact details we hold at any
            time by messaging us on WhatsApp or calling the store.
          </p>
        </div>

        <p style={{ marginTop: 24 }}>
          <Link className="btn btn-ghost" href="/contact">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
