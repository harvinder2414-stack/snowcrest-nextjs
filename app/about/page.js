import Link from "next/link";
import RidgeDivider from "@/components/RidgeDivider";

export const metadata = {
  title: "About Us — Hotel in Dalhousie, Himachal Pradesh",
  description: "About Snow Crest and Luxe Vista, a hotel in Dalhousie, Himachal Pradesh, located in Banikhet.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>A hotel in Dalhousie, Himachal Pradesh, built around the view</h1>
          <p>
            Snow Crest is a small hill-hospitality group. Luxe Vista, in
            Banikhet, near Dalhousie, is its flagship property.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">Our approach</p>
              <h2>What we mean by &ldquo;worth remembering&rdquo;</h2>
              <p>
                We keep things simple: every room is verified in person,
                every photo on this site shows the actual room, and every
                booking sits on a single calendar — so when we tell you a
                date is open, it genuinely is.
              </p>
              <p>
                Banikhet sits roughly 6,000 ft up and about 7 km from
                Dalhousie Mall Road — close enough for an easy day in town,
                far enough to be genuinely quiet at night. It&apos;s also a
                comfortable base for a day trip to Khajjiar.
              </p>
            </div>
            <div className="split-art">
              <img className="photo" src="/images/lobby.avif" alt="The lobby at Luxe Vista" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--night">
        <div className="container">
          <RidgeDivider tone="night" />
          <div className="section-head" style={{ marginTop: "2.5rem" }}>
            <p className="eyebrow">In practice</p>
            <h2>How that shows up during your stay</h2>
          </div>
          <div className="amenity-grid">
            <div className="amenity">
              <h3>Direct communication</h3>
              <p>Message us on WhatsApp and speak to a person who knows the property, not a call centre.</p>
            </div>
            <div className="amenity">
              <h3>Consistent comfort</h3>
              <p>Heated rooms and hot water year-round, including through the colder months.</p>
            </div>
            <div className="amenity">
              <h3>No surprise charges</h3>
              <p>The rate we quote is the rate you pay — nothing added at checkout.</p>
            </div>
            <div className="amenity">
              <h3>Small enough to notice</h3>
              <p>27 rooms means the staff get to know returning guests, not just their booking number.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--linen" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ maxWidth: "28rem", margin: "0 auto 1.5rem" }}>Come see it for yourself</h2>
          <Link href="/contact" className="btn btn--copper">
            Message us on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
