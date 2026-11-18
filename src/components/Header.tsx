import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand" aria-label="Red Apple Mobile Repair home">
          <span className="dot" aria-hidden="true">
            &#63743;
          </span>
          <span>Red Apple</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/#services">Services</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/front-glass">Front Glass</Link>
          <Link href="/#tracking">Track Repair</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="header-cta">
          <a className="btn btn-ghost" href="tel:+919876543210">
            Call
          </a>
          <a
            className="btn btn-whatsapp"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
