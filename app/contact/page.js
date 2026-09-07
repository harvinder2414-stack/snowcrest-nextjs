import BookingForm from "../../components/BookingForm";

export const metadata = {
  title: "Contact & Book | Snow Crest Hotels",
  description: "Check availability and book Luxe Vista directly via WhatsApp or email. FAQs answered.",
};

export default function Contact() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: "<section class=\"page-banner\">\n  <img src=\"/images/img-af5b5a939f.jpg\" alt=\"Plan Your Stay\">\n  <div class=\"wrap page-banner-content\">\n    <div class=\"breadcrumb\"><a href=\"/\">Home</a> / Contact</div>\n    <h1>Plan Your Stay</h1>\n    <p>Check availability, ask a question, or send a booking request directly.</p>\n  </div>\n</section>\n<section class=\"faq\" id=\"faq\">\n  <div class=\"wrap\">\n    <div class=\"section-head center reveal\">\n      <div class=\"eyebrow\" style=\"justify-content:center; display:flex;\">Frequently Asked Questions</div>\n      <h2>Quick answers before you book</h2>\n    </div>\n    <div class=\"faq-list\">\n      <details class=\"faq-item\" open>\n        <summary>Is this the same property as \"Hotel Luxe Vista Dalhousie\" on Tripadvisor?<span class=\"plus\">+</span></summary>\n        <p>Yes \u2014 same property in Banikhet, now under new management. Snow Crest Hotels took over operations in 2026; it was previously run by Nomad.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Where exactly is Luxe Vista by Snow Crest located?<span class=\"plus\">+</span></summary>\n        <p>In Banikhet, about 10 km above the main Dalhousie highway and roughly 15 km from Dalhousie town centre, at about 6,000 ft elevation.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>How far is the hotel from Khajjiar?<span class=\"plus\">+</span></summary>\n        <p>About 20 km from Luxe Vista by Snow Crest.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Does the hotel have mountain-view rooms and free parking?<span class=\"plus\">+</span></summary>\n        <p>Yes \u2014 mountain views from every room, balconies from most, across four room categories, plus free on-site parking.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>What is the starting rate?<span class=\"plus\">+</span></summary>\n        <p>From \u20b92,300 per night, depending on room category and season.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Can I book directly without an OTA?<span class=\"plus\">+</span></summary>\n        <p>Yes \u2014 directly via WhatsApp at 7018512267, by phone at 9317190212, or by email at Snowcresthotels@gmail.com, with one calendar and no added charges at check-in.</p>\n      </details>\n    </div>\n  </div>\n</section>\n" }} />

      <section className="request" id="contact">
        <div className="wrap">
          <div className="section-head center reveal">
            <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Request a Booking</div>
            <h2>Send us your dates — we&apos;ll confirm directly</h2>
            <p>Fill this in and send it straight to Luxe Vista over WhatsApp or email. No account, no hold on your card.</p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
