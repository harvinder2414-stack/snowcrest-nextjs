import Link from "next/link";
import LegalPage from "../legal/LegalPage";
import { HOTEL_PHONE_DISPLAY, HOTEL_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Booking Policy — Hotel Luxe Vista by Snow Crest, Dalhousie",
  description:
    "Booking, payment, check-in and guest policy for Hotel Luxe Vista by Snow Crest, Banikhet, near Dalhousie, Himachal Pradesh.",
  alternates: { canonical: "/booking-policy" },
};

export default function BookingPolicyPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Booking Policy"
      intro="What to expect when you reserve a room at Hotel Luxe Vista — payment, check-in, identification and house rules."
      updated="REVIEW DATE BEFORE PUBLISHING"
    >
      <div className="legal-flag">
        <strong>Action needed before this page goes live.</strong> Confirm
        every item marked <code>XX</code> against what your booking engine
        actually enforces, and delete any clause the hotel does not apply.
      </div>

      <h2>Making a booking</h2>
      <p>
        A reservation is confirmed only once you receive a written
        confirmation from us carrying a booking reference. An enquiry, a quote
        or a held date is not a confirmed booking.
      </p>

      <h2>Payment</h2>
      <ul>
        <li>
          An advance of <strong>XX%</strong> of the total is payable at the
          time of booking; the balance is due at check-in.
        </li>
        <li>
          Rates are quoted in Indian Rupees and are inclusive of applicable
          GST unless stated otherwise on your confirmation.
        </li>
        <li>
          We accept <strong>XX</strong> (list the methods you actually take —
          UPI, cards, bank transfer, cash).
        </li>
      </ul>

      <h2>Check-in and check-out</h2>
      <p>
        Check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in
        and late check-out are subject to availability on the day and may
        carry a charge. Please tell us your expected arrival time if you are
        driving up, since the road from Pathankot can be slow in bad weather.
      </p>

      <h2>Identification</h2>
      <p>
        Indian law requires every adult guest to present a valid
        government-issued photo ID at check-in. Foreign nationals must present
        a passport and valid visa, which we are required to record. Bookings
        cannot be honoured without this.
      </p>

      <h2>Occupancy and children</h2>
      <p>
        Each room has a stated maximum occupancy, shown on its{" "}
        <Link href="/rooms">room page</Link>. Extra beds or mattresses may be
        available in some categories at an additional charge. Please tell us
        the number and ages of everyone staying at the time of booking so we
        can put you in the right category.
      </p>

      <h2>House rules</h2>
      <ul>
        <li>Smoking is not permitted inside the rooms.</li>
        <li>Pets: <strong>XX</strong> (state whether you allow them).</li>
        <li>
          Visitors who are not registered guests are not permitted in the
          rooms.
        </li>
        <li>
          Guests are responsible for any damage to hotel property caused
          during their stay.
        </li>
      </ul>

      <h2>Right of admission</h2>
      <p>
        The hotel reserves the right to refuse or terminate a stay where a
        guest&apos;s conduct endangers or disturbs other guests or staff, or
        breaches these policies. No refund is due in that event.
      </p>

      <h2>Cancellations</h2>
      <p>
        Cancellations, date changes and refunds are covered separately in our{" "}
        <Link href="/cancellation-policy">cancellation policy</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        For anything not covered here, reach us at{" "}
        <a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a> or{" "}
        <a href={`tel:${HOTEL_PHONE_DISPLAY.replace(/\s/g, "")}`}>
          {HOTEL_PHONE_DISPLAY}
        </a>
        .
      </p>
    </LegalPage>
  );
}
