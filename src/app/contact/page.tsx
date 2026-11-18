import type { Metadata } from "next";
import {
  physicalStoreHours,
  customerCommunicationHours,
  pickupDrop,
} from "@/businessConfig";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Quotation",
  description:
    "Contact Red Apple Mobile Repair in Halasuru, Bengaluru. Ask for a quotation, check store hours, or arrange Bangalore-wide pickup and drop.",
  alternates: { canonical: "/contact" },
};

const details = [
  { label: "Address", value: "Halasuru, Bengaluru" },
  { label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  { label: "Physical store", value: physicalStoreHours },
  { label: "Customer assistance", value: customerCommunicationHours },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1 style={{ marginTop: 10, fontSize: "clamp(30px, 4vw, 48px)" }}>
          Talk to a technician
        </h1>
        <p className="lead" style={{ marginTop: 14, marginBottom: 34 }}>
          Ask for a quotation, book a pickup, or check on an existing repair.
          {` ${pickupDrop}.`}
        </p>

        <div className="grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <div className="card">
              <h3 style={{ marginBottom: 14 }}>Store details</h3>
              <ul className="clean">
                {details.map((d) => (
                  <li key={d.label}>
                    <span className="tick">•</span>
                    <span>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {d.label}
                      </span>
                      <br />
                      {d.href ? (
                        <a href={d.href} style={{ color: "var(--text)" }}>
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="hero-actions">
                <a
                  className="btn btn-whatsapp"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
                <a className="btn btn-ghost" href="tel:+919876543210">
                  Call the store
                </a>
              </div>
            </div>

            <div className="card" style={{ marginTop: 18 }}>
              <h3 style={{ marginBottom: 8 }}>Walk-in or pickup?</h3>
              <p className="muted" style={{ fontSize: 14 }}>
                You&apos;re welcome to walk in during store hours. Prefer not to
                travel? Bangalore-wide pickup and drop is available as part of
                our current promotional service — message us with your area to
                arrange it.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
