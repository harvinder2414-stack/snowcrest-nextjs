import LegalPage from "../legal/LegalPage";
import { HOTEL_PHONE_DISPLAY, HOTEL_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Cancellation Policy — Hotel Luxe Vista by Snow Crest, Dalhousie",
  description:
    "Cancellation and refund policy for direct bookings at Hotel Luxe Vista by Snow Crest, Banikhet, near Dalhousie, Himachal Pradesh.",
  alternates: { canonical: "/cancellation-policy" },
};

export default function CancellationPolicyPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Cancellation &amp; Refund Policy"
      intro="How cancellations, date changes and refunds work for bookings made directly with Hotel Luxe Vista by Snow Crest."
      updated="REVIEW DATE BEFORE PUBLISHING"
    >
      <div className="legal-flag">
        <strong>Action needed before this page goes live.</strong> The windows
        and percentages below are placeholders, not the hotel&apos;s actual
        terms. Replace every <code>XX</code> with the real figures used by your
        booking engine, and have the final wording checked by your accountant
        or a lawyer — this page is contractually binding on your guests.
      </div>

      <h2>Scope</h2>
      <p>
        This policy covers reservations made directly with Hotel Luxe Vista by
        Snow Crest, through our website, our booking engine, WhatsApp,
        telephone or email. Bookings made through a travel agent or an online
        travel agency are governed by that platform&apos;s cancellation terms,
        not this one.
      </p>

      <h2>Standard cancellation terms</h2>
      <ul>
        <li>
          Cancelled more than <strong>XX days</strong> before the check-in
          date: full refund of any amount paid, less payment-gateway charges.
        </li>
        <li>
          Cancelled between <strong>XX and XX days</strong> before check-in:{" "}
          <strong>XX%</strong> of the total booking value is retained.
        </li>
        <li>
          Cancelled within <strong>XX days</strong> of check-in:{" "}
          <strong>XX%</strong> of the total booking value is retained.
        </li>
        <li>
          No-show, or cancellation on the day of arrival: the full booking
          value is retained.
        </li>
      </ul>

      <h2>Peak season and block bookings</h2>
      <p>
        Different terms may apply to stays over public holidays, the New Year
        period, and to group or full-property bookings. Where they do, the
        terms are stated on your confirmation at the time of booking, and
        those stated terms take precedence over this page.
      </p>

      <h2>Early departure</h2>
      <p>
        Where a guest checks out earlier than the confirmed departure date,
        the remaining nights are charged in full unless agreed otherwise in
        writing with the hotel in advance.
      </p>

      <h2>Date changes</h2>
      <p>
        We will try to accommodate a change of dates subject to availability.
        A date change requested within the non-refundable window above is
        treated as a cancellation and a fresh booking, and any rate difference
        for the new dates applies.
      </p>

      <h2>How to cancel</h2>
      <p>
        Send your booking reference to{" "}
        <a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a> or call{" "}
        <a href={`tel:${HOTEL_PHONE_DISPLAY.replace(/\s/g, "")}`}>
          {HOTEL_PHONE_DISPLAY}
        </a>
        . A cancellation takes effect from the time we receive your written
        request, and we will confirm it back to you in writing.
      </p>

      <h2>Refund timelines</h2>
      <p>
        Approved refunds are issued to the original payment method. Banks and
        payment gateways typically take <strong>XX working days</strong> to
        credit the amount after we process it. Payment-gateway fees, where
        charged, are not refundable.
      </p>

      <h2>Circumstances beyond our control</h2>
      <p>
        Road closures, heavy snowfall, landslides, strikes and similar events
        can make travel to Banikhet and Dalhousie difficult. Where a stay
        cannot go ahead for reasons outside either party&apos;s control, please
        contact us — we will do what we reasonably can to reschedule, though
        we cannot guarantee a refund in every case.
      </p>
    </LegalPage>
  );
}
