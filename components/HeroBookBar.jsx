"use client";

import { useState } from "react";
import { BOOKING_ENGINE_URL } from "@/lib/config";

// A full-width booking bar docked to the bottom edge of the hero photo —
// check-in, check-out, guests, and a single prominent CTA in one row.
// Submits straight to the real booking engine (Yanolja Cloud / eZee).
// Dates are passed as best-effort URL params — if the engine's booking
// page recognises them it opens pre-filled, and if not, it still opens
// correctly and the guest just picks dates there themselves. Either way
// nothing breaks.
export default function HeroBookBar() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    if (guests) params.set("adults", guests);
    const query = params.toString();
    const url = query ? `${BOOKING_ENGINE_URL}?${query}` : BOOKING_ENGINE_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="hero-bookbar" id="hero-book-bar" onSubmit={handleSubmit}>
      <div className="hero-bookbar-inner">
        <div className="field field--bar">
          <label htmlFor="bar-checkin">Check in</label>
          <input
            id="bar-checkin"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>
        <div className="field field--bar">
          <label htmlFor="bar-checkout">Check out</label>
          <input
            id="bar-checkout"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
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
