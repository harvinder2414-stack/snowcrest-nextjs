"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingWidget() {
  const router = useRouter();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    if (guests) params.set("guests", guests);
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <form className="booking-widget" onSubmit={handleSubmit}>
      <h2>Check availability</h2>
      <div className="booking-row">
        <div className="field">
          <label htmlFor="checkin">Check in</label>
          <input
            id="checkin"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="checkout">Check out</label>
          <input
            id="checkout"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="guests">Guests</label>
        <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
        </select>
      </div>
      <button type="submit" className="btn btn--copper">
        Check availability
      </button>
    </form>
  );
}
