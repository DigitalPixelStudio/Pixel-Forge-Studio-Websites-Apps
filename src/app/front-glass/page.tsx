import type { Metadata } from "next";
import Link from "next/link";
import { frontGlassDetailed } from "@/businessConfig";

export const metadata: Metadata = {
  title: "Front Glass Restoration",
  description:
    "Front Glass Restoration for Apple devices where the original display remains suitable and only the front glass/touch layer needs restoration. Eligibility confirmed after technician inspection. 6-month hardware warranty.",
  alternates: { canonical: "/front-glass" },
};

const steps = [
  {
    title: "1. Send us your model",
    body: "Tell us the device and model on WhatsApp, along with what happened to the screen.",
  },
  {
    title: "2. Technician inspection",
    body: "We check whether the original display/OLED assembly is intact and suitable for glass-only restoration.",
  },
  {
    title: "3. Eligibility confirmed",
    body: "If the display has internal damage, we tell you honestly and recommend Full Display Replacement instead.",
  },
  {
    title: "4. Restoration",
    body: "The front glass/touch layer is restored and the device is tested before handover, with a 6-month hardware warranty.",
  },
];

export default function FrontGlassPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Service</p>
          <h1 style={{ marginTop: 10, fontSize: "clamp(30px, 5vw, 52px)" }}>
            {frontGlassDetailed.title}
          </h1>
          <p className="lead" style={{ marginTop: 16, maxWidth: 760 }}>
            {frontGlassDetailed.body}
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/919876543210?text=Hi%20Red%20Apple%2C%20I%27d%20like%20to%20check%20Front%20Glass%20Restoration%20eligibility"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check eligibility on WhatsApp
            </a>
            <Link className="btn btn-ghost" href="/#estimator">
              Use the estimator
            </Link>
          </div>

          <div className="grid grid-2" style={{ marginTop: 36, alignItems: "start" }}>
            <article className="card">
              <h3 style={{ marginBottom: 12 }}>What it includes</h3>
              <ul className="clean">
                {frontGlassDetailed.whatItIncludes.map((item) => (
                  <li key={item}>
                    <span className="tick">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3 style={{ marginBottom: 12 }}>What it does not include</h3>
              <ul className="clean">
                {frontGlassDetailed.whatItDoesNotInclude.map((item) => (
                  <li key={item}>
                    <span className="cross">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="callout" style={{ marginTop: 24 }}>
            <strong>{frontGlassDetailed.warranty}.</strong>{" "}
            {frontGlassDetailed.credibleLanguage} Does not cover unrelated
            accidental damage after the repair.
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2>How it works</h2>
          <p className="lead" style={{ marginBottom: 26 }}>
            Front Glass Restoration is a different service from Full Display
            Replacement. We only recommend it when the existing display qualifies.
          </p>

          <div className="grid grid-3">
            {steps.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-2">
            <article className="card">
              <h3>Front Glass Restoration</h3>
              <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>
                Only the front glass/touch layer requires restoration and the
                original display remains suitable. Eligibility is confirmed after
                inspection.
              </p>
              <div className="chip-list">
                <span className="chip">6-month hardware warranty</span>
                <span className="chip">Inspection required</span>
              </div>
            </article>

            <article className="card">
              <h3>Full Display Replacement</h3>
              <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>
                The complete display/OLED assembly is replaced. Used when damage
                exceeds glass-only eligibility or the display itself is damaged.
              </p>
              <div className="chip-list">
                <span className="chip">Indicative pricing on the home page</span>
                <span className="chip">90 days – 6 months warranty</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
