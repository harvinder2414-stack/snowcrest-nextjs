import Link from "next/link";

export const metadata = {
  title: "Offers — Luxe Vista by Snow Crest",
  description: "Current offers and seasonal rates at Luxe Vista by Snow Crest, Banikhet, Dalhousie.",
};

export default function OffersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Offers</p>
          <h1>Current offers</h1>
          <p>
            Seasonal rates and offers change through the year — message us
            on WhatsApp with your dates and we&apos;ll share whatever&apos;s
            currently running, along with the best available rate.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ maxWidth: "30rem", margin: "0 auto 1.5rem" }}>
            Ask us directly for the best current rate
          </h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: "28rem", margin: "0 auto 2rem" }}>
            One calendar, one price — no surprise charge at checkout or at
            the front desk.
          </p>
          <Link href="/contact" className="btn btn--copper">
            Message us on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
