import Link from "next/link";

// Shared shell for the four policy pages. Keeping them in one component means
// the legal pages can't drift apart in layout, and the "last updated" line and
// contact block are defined in exactly one place.
export default function LegalPage({ eyebrow, title, intro, updated, children }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container legal">
          {children}

          <p className="legal-updated">Last updated: {updated}</p>

          <p className="legal-contact">
            Questions about this policy? Write to us at{" "}
            <Link href="/contact">our contact page</Link>, or see our{" "}
            <Link href="/cancellation-policy">cancellation policy</Link>,{" "}
            <Link href="/booking-policy">booking policy</Link>,{" "}
            <Link href="/terms">terms &amp; conditions</Link> and{" "}
            <Link href="/privacy-policy">privacy policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
