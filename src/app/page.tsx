import Link from "next/link";
import {
  frontGlassRestorationInfo,
  businessHoursWording,
  physicalStoreHours,
  customerCommunicationHours,
  pickupDrop,
  warrantyPeriod,
  iphonePrices,
} from "@/businessConfig";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { RepairTracker } from "@/components/RepairTracker";
import { ChatAssistant } from "@/components/ChatAssistant";

const services = [
  {
    title: "iPhone Repair",
    body: "Display, battery, back glass, charging port, water damage and component-level motherboard repair across the iPhone range.",
    tag: "From ₹2,500",
  },
  {
    title: "iPad Repair",
    body: "Screen and glass, battery, charging issues, logic-board faults and data recovery on iPad, iPad Air and iPad Pro.",
    tag: "From ₹6,500",
  },
  {
    title: "Apple Watch Repair",
    body: "Display and glass replacement, battery service and water-damage diagnosis across Series and Ultra models.",
    tag: "From ₹3,500",
  },
  {
    title: "MacBook Repair",
    body: "Logic-board micro-soldering, keyboard, display, battery and data recovery with component-level diagnostics.",
    tag: "Quote after diagnosis",
  },
  {
    title: "Water Damage Recovery",
    body: "Ultrasonic board cleaning, corrosion treatment and component replacement after liquid exposure.",
    tag: "Quote after diagnosis",
  },
  {
    title: "Front Glass Restoration",
    body: frontGlassRestorationInfo.description,
    tag: "6-month hardware warranty",
    href: "/front-glass",
  },
];

const flagshipModels = [
  "iPhone 18 Pro Max",
  "iPhone 17 Pro Max",
  "iPhone 16 Pro Max",
  "iPhone 15 Pro Max",
  "iPhone 14 Pro Max",
  "iPhone 13",
  "iPhone 12",
  "iPhone 11",
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Halasuru · Bengaluru</p>
            <h1 style={{ marginTop: 10 }}>
              Apple repairs,
              <br />
              done at component level.
            </h1>
            <p className="lead" style={{ marginTop: 18 }}>
              Display and front-glass restoration, battery, board-level
              micro-soldering and data recovery for iPhone, iPad, MacBook and
              Apple Watch — with transparent pricing and a{" "}
              <strong>{warrantyPeriod}</strong> warranty.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-whatsapp"
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp a technician
              </a>
              <a className="btn btn-primary" href="#estimator">
                Get an instant estimate
              </a>
              <a className="btn btn-ghost" href="#tracking">
                Track my repair
              </a>
            </div>

            <div className="hero-hours">
              <strong style={{ color: "var(--text)" }}>Hours</strong>
              <br />
              {businessHoursWording}
            </div>
          </div>

          <div className="phone-wrap" aria-hidden="true">
            <div className="phone phone-hero">
              <div className="notch" />
              <div className="screen">
                <div>
                  <p className="eyebrow" style={{ color: "#fecdd3" }}>
                    Red Apple
                  </p>
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      marginTop: 6,
                    }}
                  >
                    Precision repair
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 8 }}>
                    Display · Battery · Board
                    <br />
                    Front glass restoration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- TRUST BAR --------------------------- */}
      <section className="section-tight">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <p className="from">Warranty</p>
              <h3 style={{ marginTop: 6 }}>{warrantyPeriod}</h3>
              <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
                Depending on the repair. Front Glass Restoration carries a
                6-month hardware warranty.
              </p>
            </div>
            <div className="card">
              <p className="from">Store hours</p>
              <h3 style={{ marginTop: 6 }}>{physicalStoreHours}</h3>
              <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
                Customer assistance {customerCommunicationHours}.
              </p>
            </div>
            <div className="card">
              <p className="from">Pickup &amp; drop</p>
              <h3 style={{ marginTop: 6 }}>Bangalore-wide</h3>
              <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
                {pickupDrop}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- SERVICES --------------------------- */}
      <section className="section" id="services">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2 style={{ marginTop: 8 }}>What we repair</h2>
          <p className="lead" style={{ marginBottom: 30 }}>
            Every job starts with a diagnosis. You get a clear price and
            turnaround before any work begins.
          </p>

          <div className="grid grid-3">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>
                  {s.body}
                </p>
                <div className="chip-list">
                  <span className="chip">{s.tag}</span>
                </div>
                {s.href ? (
                  <Link
                    href={s.href}
                    className="btn btn-ghost"
                    style={{ marginTop: 16, fontSize: 13 }}
                  >
                    Learn more
                  </Link>
                ) : (
                  <a
                    className="btn btn-ghost"
                    style={{ marginTop: 16, fontSize: 13 }}
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask about this
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- ESTIMATOR --------------------------- */}
      <section className="section" id="estimate">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Transparent pricing</p>
              <h2 style={{ marginTop: 8 }}>
                Know the price before you hand over your device.
              </h2>
              <p className="lead" style={{ marginTop: 12 }}>
                Our estimator uses the same live pricing dataset that powers our
                chatbot and this page — one source of truth, no surprises.
              </p>
              <ul className="clean" style={{ marginTop: 18 }}>
                <li>
                  <span className="tick">✓</span>
                  <span>Indicative display pricing for every listed model</span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    Front Glass Restoration kept separate from Full Display
                    Replacement
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>Your context carries straight into WhatsApp</span>
                </li>
              </ul>
            </div>

            <QuoteEstimator />
          </div>
        </div>
      </section>

      {/* --------------------------- PRICING --------------------------- */}
      <section className="section" id="pricing">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h2 style={{ marginTop: 8 }}>Indicative display replacement prices</h2>
          <p className="lead" style={{ marginBottom: 24 }}>
            Full display replacement for flagship iPhones. Final quote confirmed
            after technician inspection.
          </p>

          <div className="price-grid">
            {flagshipModels.map((model) => {
              const price = iphonePrices[model];
              return (
                <div className="price-cell" key={model}>
                  <p className="model">{model}</p>
                  <p className="amt">
                    {price != null
                      ? `₹${price.toLocaleString("en-IN")}`
                      : "On request"}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="muted" style={{ fontSize: 13, marginTop: 18 }}>
            Prices shown are for full display replacement and are indicative. A
            complete price list is confirmed after inspection. Front Glass
            Restoration is quoted separately and depends on eligibility.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#estimator">
              Estimate my model
            </a>
            <Link className="btn btn-ghost" href="/front-glass">
              Front Glass Restoration
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------- TRACKING --------------------------- */}
      <section className="section" id="tracking">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Repair tracking</p>
              <h2 style={{ marginTop: 8 }}>Track your repair securely</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                Your live status is fetched server-side from our service system.
                Only customer-safe fields are returned — never internal notes,
                staff information or cost margins.
              </p>
              <ul className="clean" style={{ marginTop: 18 }}>
                <li>
                  <span className="tick">✓</span>
                  <span>Status and timeline</span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>Estimated completion and collection status</span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>Amount paid and amount due</span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>Warranty on the completed repair</span>
                </li>
              </ul>
            </div>

            <RepairTracker />
          </div>
        </div>
      </section>

      {/* --------------------------- ASSISTANT --------------------------- */}
      <section className="section" id="assistant">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">AI repair assistant</p>
              <h2 style={{ marginTop: 8 }}>Answers from our live data</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                The assistant answers from the same pricing dataset and service
                policies shown on this page. When it can&apos;t be certain, it
                hands you to a human technician on WhatsApp instead of guessing.
              </p>
              <div className="callout" style={{ marginTop: 18 }}>
                No invented prices, no fake reviews. If something needs a
                diagnosis, we say so.
              </div>
            </div>

            <ChatAssistant />
          </div>
        </div>
      </section>
    </>
  );
}
