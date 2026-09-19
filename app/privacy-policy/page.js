import Link from "next/link";
import LegalPage from "../legal/LegalPage";
import { HOTEL_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy — Hotel Luxe Vista by Snow Crest, Dalhousie",
  description:
    "How Hotel Luxe Vista by Snow Crest collects, uses and protects personal information from guests and website visitors.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Privacy Policy"
      intro="What personal information we collect when you enquire or book, why we hold it, and what you can ask us to do with it."
      updated="REVIEW DATE BEFORE PUBLISHING"
    >
      <div className="legal-flag">
        <strong>Action needed before this page goes live.</strong> Confirm the
        list of third parties below matches the services you actually use
        (booking engine, payment gateway, analytics, email), and name the
        registered entity. India&apos;s Digital Personal Data Protection Act
        applies to you — worth a legal review.
      </div>

      <h2>What we collect</h2>
      <ul>
        <li>
          Contact and booking details you give us: name, phone number, email
          address, dates of stay, number of guests and any special requests.
        </li>
        <li>
          Identification details we are legally required to record at
          check-in, including government photo ID and, for foreign nationals,
          passport and visa details.
        </li>
        <li>
          Payment information, which is handled by our payment provider. We do
          not store full card numbers on our own systems.
        </li>
        <li>
          Basic technical information about your visit to this website, such
          as pages viewed and approximate location, where analytics is in use.
        </li>
      </ul>

      <h2>Why we hold it</h2>
      <p>
        To confirm and service your reservation, to meet legal obligations
        including guest registration and tax records, and to respond to your
        enquiries. We do not sell personal information.
      </p>

      <h2>Who we share it with</h2>
      <p>
        Our booking engine and payment provider, so a reservation can be taken
        and paid for. Government authorities, where the law requires guest
        records to be provided. Nobody else, unless you ask us to.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Booking and guest-register records are kept for as long as tax and
        hospitality regulations require, and then deleted. Enquiries that do
        not become bookings are kept for <strong>XX months</strong>.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us what we hold about you, ask for it to be corrected, or
        ask for it to be deleted where we are not legally required to keep it.
        Write to <a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a> and we
        will respond within a reasonable period.
      </p>

      <h2>Cookies</h2>
      <p>
        This site uses only what is needed to make it work, plus analytics
        where enabled. Our booking engine sets its own cookies during the
        payment flow, governed by its own policy.
      </p>

      <h2>Security</h2>
      <p>
        This site is served over HTTPS and access to guest records is limited
        to staff who need it. No system is perfectly secure, so we cannot
        guarantee against every eventuality.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a> or use our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
