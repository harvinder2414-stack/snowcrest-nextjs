"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuickBookingBar() {
  const router = useRouter();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  function search() {
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    if (guests) params.set("guests", guests);
    router.push(`/contact?${params.toString()}#contact`);
  }

  return (
    <div className="wrap booking-wrap">
      <div className="booking-bar reveal">
        <div className="bfield">
          <label>Property</label>
          <input type="text" value="Luxe Vista, Banikhet" readOnly style={{ cursor: "default" }} />
        </div>
        <div className="bfield">
          <label>Check-in</label>
          <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} />
        </div>
        <div className="bfield">
          <label>Check-out</label>
          <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
        </div>
        <div className="bfield">
          <label>Guests</label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option>2 Guests</option>
            <option>1 Guest</option>
            <option>3–4 Guests</option>
            <option>Family (5+)</option>
          </select>
        </div>
        <button className="btn btn-dark" onClick={search}>Check Availability</button>
      </div>
    </div>
  );
}
