import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 620, textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ marginTop: 10, fontSize: "clamp(30px, 5vw, 52px)" }}>
          This page isn&apos;t here.
        </h1>
        <p className="lead" style={{ marginTop: 14, marginBottom: 28 }}>
          The link may be old, but your repair still matters. Head back home or
          message a technician directly.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <a
            className="btn btn-whatsapp"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
