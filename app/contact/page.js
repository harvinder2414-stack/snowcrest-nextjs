import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Dalhousie Hotel Booking",
  description: "Book your hotel in Dalhousie directly — check availability and send a booking request to Luxe Vista by Snow Crest, Banikhet.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ searchParams }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Plan your stay</p>
          <h1>Dalhousie hotel booking, direct and simple</h1>
          <p>
            Send us your dates and we&apos;ll confirm by WhatsApp, usually
            the same day.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <ContactForm
                initialValues={{
                  checkin: searchParams?.checkin || "",
                  checkout: searchParams?.checkout || "",
                  guests: searchParams?.guests || "2",
                }}
              />
            </div>
            <div className="split-copy">
              <p className="eyebrow">Prefer to reach us directly?</p>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Other ways to book</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <div>
                    <strong>WhatsApp</strong>
                    <span>+91 70185 12267 — fastest response.</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div>
                    <strong>Phone</strong>
                    <span>+91 93171 90212</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div>
                    <strong>Email</strong>
                    <span>harvinder2414@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--night">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What happens next</p>
            <h2>How booking works</h2>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Send your dates</h3>
              <p>Tell us when you&apos;d like to arrive, how many guests, and which room caught your eye.</p>
            </div>
            <div className="step">
              <h3>We confirm availability</h3>
              <p>We check the room and reply on WhatsApp, usually the same day.</p>
            </div>
            <div className="step">
              <h3>You get a confirmation</h3>
              <p>Once confirmed, your room is held for your dates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
