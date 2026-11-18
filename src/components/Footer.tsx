import Link from "next/link";
import {
  footerHeading,
  footerBody,
  physicalStoreHours,
  customerCommunicationHours,
  pickupDrop,
  legalPages,
} from "@/businessConfig";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            {/* APPROVED FOOTER COPY — do not alter wording */}
            <p className="footer-heading">{footerHeading}</p>
            <p className="footer-body">{footerBody}</p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/#services">Services</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/front-glass">Front Glass Restoration</Link>
            <Link href="/#tracking">Track Your Repair</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Visit &amp; Call</h4>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <span>Halasuru, Bengaluru</span>
            <span>Store: {physicalStoreHours}</span>
            <span>Assistance: {customerCommunicationHours}</span>
          </div>
        </div>

        <p className="callout" style={{ marginTop: 28 }}>
          {pickupDrop}
        </p>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Red Apple Mobile Repair. All rights
            reserved.
          </span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link href={legalPages.privacy}>Privacy</Link>
            <Link href={legalPages.terms}>Terms</Link>
            <Link href={legalPages.warranty}>Warranty</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
