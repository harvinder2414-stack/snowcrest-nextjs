import Link from "next/link";
import RidgeDivider from "./RidgeDivider";
import { HOTEL_PHONE_DISPLAY, HOTEL_EMAIL, HOTEL_WHATSAPP, BOOKING_ENGINE_URL } from "@/lib/config";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Luxe+Vista+by+Snow+Crest%2C+Banikhet%2C+Dalhousie%2C+Himachal+Pradesh";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <RidgeDivider tone="night" />
        <div className="footer-grid footer-grid--wide" style={{ marginTop: "2.5rem" }}>
          <div>
            <div className="footer-mark">
              Hotel Luxe Vista
              <span className="footer-mark-byline">by Snow Crest</span>
            </div>
            <p style={{ marginTop: "1rem", maxWidth: "26rem", fontSize: "0.95rem" }}>
              A mountain view hotel in Banikhet, about 7 km from Dalhousie and
              22 km from Khajjiar, Himachal Pradesh. 27 rooms across four
              categories, private balconies, and direct booking with the hotel.
            </p>
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--copper"
              style={{ marginTop: "1.5rem" }}
            >
              Book Direct
            </a>
          </div>

          <div>
            <h4>The hotel</h4>
            <ul>
              <li><Link href="/rooms">Rooms &amp; rates</Link></li>
              <li><Link href="/luxe-vista">About Luxe Vista</Link></li>
              <li><Link href="/luxe-vista">Gallery</Link></li>
              <li><Link href="/offers">Offers</Link></li>
              <li><Link href="/about">About Snow Crest</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4>The area</h4>
            <ul>
              <li><Link href="/blog/places-to-visit-in-dalhousie">Dalhousie</Link></li>
              <li><Link href="/blog/khajjiar-day-trip-guide">Khajjiar</Link></li>
              <li><Link href="/blog/how-to-reach-dalhousie">How to reach us</Link></li>
              <li><Link href="/blog">Journal</Link></li>
              <li>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                  Location &amp; directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Policies</h4>
            <ul>
              <li><Link href="/booking-policy">Booking Policy</Link></li>
              <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Banikhet, Dalhousie</li>
              <li>Himachal Pradesh 176303</li>
              <li><a href={`tel:${HOTEL_PHONE_DISPLAY.replace(/\s/g, "")}`}>{HOTEL_PHONE_DISPLAY}</a></li>
              <li>
                <a href={`https://wa.me/${HOTEL_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li><a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a></li>
              <li><Link href="/contact">Enquiry form</Link></li>
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
          <span>© {new Date().getFullYear()} Hotel Luxe Vista by Snow Crest</span>
          <span>Banikhet, Dalhousie, Himachal Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
