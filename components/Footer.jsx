import Link from "next/link";
import RidgeDivider from "./RidgeDivider";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <RidgeDivider tone="night" />
        <div className="footer-grid" style={{ marginTop: "2.5rem" }}>
          <div>
            <div className="footer-mark">
              Luxe Vista
              <span className="footer-mark-byline">by Snow Crest</span>
            </div>
            <p style={{ marginTop: "1rem", maxWidth: "26rem", fontSize: "0.95rem" }}>
              A mountain-view hotel in Banikhet, Dalhousie — verified rooms,
              real photos, and direct WhatsApp booking. Snow Crest&apos;s
              flagship property.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/luxe-vista">Luxe Vista</Link></li>
              <li><Link href="/rooms">Rooms</Link></li>
              <li><Link href="/offers">Offers</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4>Visit</h4>
            <ul>
              <li>Banikhet, Dalhousie</li>
              <li>Himachal Pradesh, ~6,000 ft</li>
              <li>+91 93171 90212</li>
              <li>harvinder2414@gmail.com</li>
              <li>
                <a
                  href="https://www.instagram.com/hotelsnowcrest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Luxe Vista by Snow Crest</span>
          <span>Banikhet, Dalhousie, Himachal Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
