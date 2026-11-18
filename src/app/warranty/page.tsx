import type { Metadata } from "next";
import Link from "next/link";
import { warrantyPeriod, frontGlassRestorationInfo } from "@/businessConfig";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Warranty terms for repairs at Red Apple Mobile Repair, including the 6-month hardware warranty on Front Glass Restoration.",
  alternates: { canonical: "/warranty" },
};

export default function WarrantyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Warranty</p>
        <h1 style={{ marginTop: 10, fontSize: "clamp(28px, 4vw, 44px)" }}>
          Warranty terms
        </h1>

        <div className="card" style={{ marginTop: 26 }}>
          <h3>Coverage</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Repairs are backed by a {warrantyPeriod} warranty depending on the
            service performed. The exact period is stated on your service receipt.
            {` ${frontGlassRestorationInfo.title} carries a ${frontGlassRestorationInfo.warranty}.`}
          </p>

          <h3 style={{ marginTop: 22 }}>What is covered</h3>
          <ul className="clean">
            <li>
              <span className="tick">✓</span>
              <span>Defects in parts supplied by us</span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>Workmanship on the repair performed</span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>Hardware faults directly related to the repaired component</span>
            </li>
          </ul>

          <h3 style={{ marginTop: 22 }}>What is not covered</h3>
          <ul className="clean">
            <li>
              <span className="cross">✕</span>
              <span>New accidental damage after the repair</span>
            </li>
            <li>
              <span className="cross">✕</span>
              <span>Liquid damage occurring after the repair</span>
            </li>
            <li>
              <span className="cross">✕</span>
              <span>Damage from unauthorised repairs or tampering</span>
            </li>
            <li>
              <span className="cross">✕</span>
              <span>Faults in components not part of the original repair</span>
            </li>
          </ul>

          <p className="muted" style={{ marginTop: 18, fontSize: 14 }}>
            {frontGlassRestorationInfo.warrantyNote}
          </p>
        </div>

        <p style={{ marginTop: 24 }}>
          <Link className="btn btn-ghost" href="/contact">
            Ask about your repair
          </Link>
        </p>
      </div>
    </section>
  );
}
