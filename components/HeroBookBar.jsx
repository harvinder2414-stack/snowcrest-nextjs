"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// A full-width booking bar docked to the bottom edge of the hero photo —
// check-in, check-out, guests, and a single prominent CTA in one row.
export default function HeroBookBar() {
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
    <form className="hero-bookbar" onSubmit={handleSubmit}>
      <div className="hero-bookbar-inner">
        <div className="field field--bar">
          <label htmlFor="bar-checkin">Check in</label>
          <input
            id="bar-checkin"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
          />
        </div>
        <div className="field field--bar">
          <label htmlFor="bar-checkout">Check out</label>
          <input
            id="bar-checkout"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </div>
        <div className="field field--bar">
          <label htmlFor="bar-guests">Guests</label>
          <select id="bar-guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
        <div className="hero-bookbar-price">
          <span>From</span>
          <strong>₹2,300</strong>
          <span>/ night</span>
        </div>
        <button type="submit" className="btn btn--copper hero-bookbar-submit">
          Check Availability
        </button>
      </div>
    </form>
  );
}
