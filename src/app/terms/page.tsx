import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms covering repair quotations, eligibility, turnaround and warranty at Red Apple Mobile Repair.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Legal</p>
        <h1 style={{ marginTop: 10, fontSize: "clamp(28px, 4vw, 44px)" }}>
          Terms of Service
        </h1>

        <div className="card" style={{ marginTop: 26 }}>
          <h3>Quotations</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Prices shown on this website are indicative and are confirmed after
            technician inspection. A quotation is valid for the device and fault
            described at the time it is given.
          </p>

          <h3 style={{ marginTop: 22 }}>Repair eligibility</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Front Glass Restoration depends on the original display/OLED assembly
            being suitable. Eligibility is determined after inspection. If the
            display itself is damaged, we recommend Full Display Replacement
            instead and will explain why before starting work.
          </p>

          <h3 style={{ marginTop: 22 }}>Turnaround</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Many repairs are completed quickly, but turnaround depends on the
            model, the fault and parts availability. We confirm an expected
            completion time when the device is booked in.
          </p>

          <h3 style={{ marginTop: 22 }}>Data and devices</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Please back up your device before handing it over. Where a repair
            requires data access, we use it only for testing and handover.
          </p>

          <h3 style={{ marginTop: 22 }}>Pickup and drop</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Bangalore-wide pickup and drop is currently offered as a promotional
            service and may be withdrawn or changed.
          </p>
        </div>

        <p style={{ marginTop: 24 }}>
          <Link className="btn btn-ghost" href="/warranty">
            Read the warranty terms
          </Link>
        </p>
      </div>
    </section>
  );
}
