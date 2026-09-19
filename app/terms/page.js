import Link from "next/link";
import LegalPage from "../legal/LegalPage";

export const metadata = {
  title: "Terms & Conditions — Hotel Luxe Vista by Snow Crest, Dalhousie",
  description:
    "Terms and conditions governing use of the Hotel Luxe Vista by Snow Crest website and reservations at the property in Banikhet, near Dalhousie.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Terms &amp; Conditions"
      intro="The terms on which we provide this website and accept reservations at Hotel Luxe Vista by Snow Crest."
      updated="REVIEW DATE BEFORE PUBLISHING"
    >
      <div className="legal-flag">
        <strong>Action needed before this page goes live.</strong> Fill in the
        registered entity name, address and GSTIN below, and have a lawyer
        review the liability and governing-law clauses. This is a template,
        not legal advice.
      </div>

      <h2>Who we are</h2>
      <p>
        This website is operated by <strong>XX (registered entity name)</strong>,
        trading as Hotel Luxe Vista by Snow Crest, registered at{" "}
        <strong>XX (registered address)</strong>, GSTIN{" "}
        <strong>XX</strong>. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;
        and &ldquo;the hotel&rdquo; mean that entity.
      </p>

      <h2>Using this website</h2>
      <p>
        We try to keep rates, availability and property information on this
        site accurate and current, but we do not warrant that every detail is
        free of error. Where a published rate is clearly wrong, we reserve the
        right to decline or cancel the booking and refund any amount paid.
      </p>

      <h2>Reservations</h2>
      <p>
        Reservations are governed by our{" "}
        <Link href="/booking-policy">booking policy</Link> and{" "}
        <Link href="/cancellation-policy">cancellation policy</Link>, which
        form part of these terms. By confirming a booking you accept all
        three.
      </p>

      <h2>Rates and taxes</h2>
      <p>
        Rates are per room per night unless stated otherwise, and are subject
        to change until a booking is confirmed. Government taxes and levies
        are applied at the rate in force on the date of stay.
      </p>

      <h2>Third-party booking engine</h2>
      <p>
        Payments are processed by our third-party booking and payment
        providers. Your use of those services is also subject to their own
        terms, and we are not responsible for their availability or for
        interruptions in their service.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Photographs, text and design on this site belong to the hotel or are
        used with permission, and may not be reproduced without written
        consent.
      </p>

      <h2>Liability</h2>
      <p>
        The hotel is not liable for loss or damage to guests&apos; personal
        belongings except to the extent required by law. Guests are advised to
        use the in-room storage provided and to carry their own travel
        insurance, particularly during the winter months when mountain roads
        may close.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India, and the courts at{" "}
        <strong>XX (jurisdiction)</strong> have exclusive jurisdiction over any
        dispute arising from them.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The version published on
        this page at the time you make a booking is the version that applies
        to it.
      </p>
    </LegalPage>
  );
}
