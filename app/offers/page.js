import Link from "next/link";
import AmenityIcon from "@/components/AmenityIcon";

export const metadata = {
  title: "Dalhousie Hotel Deals & Offers",
  description: "Current Dalhousie hotel deals and hotel booking offers at Luxe Vista by Snow Crest, Banikhet — message us on WhatsApp for the best available rate.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Offers</p>
          <h1>Dalhousie hotel deals &amp; current offers</h1>
          <p>
            Seasonal rates and hotel booking offers change through the
            year — message us on WhatsApp with your dates and we&apos;ll
            share whatever&apos;s currently running, along with the best
            available rate for your stay in Dalhousie.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">Why book direct</p>
              <h2>Skip the booking-site markup</h2>
              <p>
                Rates booked directly on WhatsApp go straight to us — no
                third-party platform taking a cut, and no reason for us to
                pad the price to cover one. What we quote is what you pay.
              </p>
              <p>
                Send your dates and we&apos;ll confirm the room and the
                rate the same day, along with any seasonal offer that
                applies.
              </p>
              <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
                <Link href="/contact" className="btn btn--copper">
                  Message us on WhatsApp
                </Link>
              </div>
            </div>
            <div className="split-art">
              <img className="photo" src="/images/valley-views.webp" alt="Valley views from Luxe Vista, Banikhet" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--linen">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What direct booking gets you</p>
            <h2 style={{ fontSize: "1.6rem" }}>No markup, no middleman</h2>
          </div>
          <div className="amenity-grid">
            <div className="amenity">
              <AmenityIcon name="chat" />
              <h3>A direct answer</h3>
              <p>Message a person who knows the property and the current rates — not a call centre script.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="calendar" />
              <h3>One calendar</h3>
              <p>The same calendar we quote from is the one your room gets held on — no double-booked dates.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="receipt" />
              <h3>No surprise charges</h3>
              <p>The rate we confirm on WhatsApp is the rate you pay at checkout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--linen-soft" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ maxWidth: "30rem", margin: "0 auto 1.5rem" }}>
            Ask us directly for the best current rate
          </h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: "28rem", margin: "0 auto 2rem" }}>
            The simplest way to book a hotel in Dalhousie: message us your
            dates and get a direct answer.
          </p>
          <Link href="/contact" className="btn btn--copper">
            Message us on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
