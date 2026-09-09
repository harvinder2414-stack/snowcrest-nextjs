"use client";

import { useState } from "react";
import { rooms } from "@/lib/rooms";

// Real WhatsApp number for Luxe Vista by Snow Crest (country code 91, no + or spaces).
const HOTEL_WHATSAPP = "917018512267";
const HOTEL_EMAIL = "harvinder2414@gmail.com";

export default function ContactForm({ initialValues = {} }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: initialValues.checkin || "",
    checkout: initialValues.checkout || "",
    guests: initialValues.guests || "2",
    roomType: rooms[0]?.slug || "",
    message: "",
  });
  const [status, setStatus] = useState(null); // { type: 'ok' | 'error', text }
  const [submitting, setSubmitting] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function buildSummary() {
    const room = rooms.find((r) => r.slug === form.roomType);
    const lines = [
      `Booking request — Luxe Vista by Snow Crest`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      room ? `Room: ${room.name}` : null,
      form.checkin ? `Check in: ${form.checkin}` : null,
      form.checkout ? `Check out: ${form.checkout}` : null,
      `Guests: ${form.guests}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus({ type: "error", text: "Please add your name and phone number so we can confirm the booking." });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      // Non-fatal — WhatsApp and email below still carry the request.
      console.error("Booking API error:", err);
    }

    const summary = buildSummary();
    const waLink = `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(summary)}`;
    const mailLink = `mailto:${HOTEL_EMAIL}?subject=${encodeURIComponent(
      "Booking request — Luxe Vista by Snow Crest"
    )}&body=${encodeURIComponent(summary)}`;

    window.open(waLink, "_blank", "noopener,noreferrer");
    window.location.href = mailLink;

    setSubmitting(false);
    setStatus({
      type: "ok",
      text: "Opening WhatsApp and your email client with your request filled in — send either one and we'll confirm within a day.",
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid form-grid--2">
        <div className="field field-light">
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" value={form.name} onChange={update("name")} required />
        </div>
        <div className="field field-light">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} required />
        </div>
      </div>

      <div className="field field-light">
        <label htmlFor="email">Email (optional)</label>
        <input id="email" type="email" value={form.email} onChange={update("email")} />
      </div>

      <div className="form-grid form-grid--2">
        <div className="field field-light">
          <label htmlFor="checkin">Check in</label>
          <input id="checkin" type="date" value={form.checkin} onChange={update("checkin")} />
        </div>
        <div className="field field-light">
          <label htmlFor="checkout">Check out</label>
          <input id="checkout" type="date" value={form.checkout} onChange={update("checkout")} />
        </div>
      </div>

      <div className="form-grid form-grid--2">
        <div className="field field-light">
          <label htmlFor="guests">Guests</label>
          <select id="guests" value={form.guests} onChange={update("guests")}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
        <div className="field field-light">
          <label htmlFor="roomType">Room</label>
          <select id="roomType" value={form.roomType} onChange={update("roomType")}>
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field field-light">
        <label htmlFor="message">Anything we should know?</label>
        <textarea id="message" rows={4} value={form.message} onChange={update("message")} />
      </div>

      {status && (
        <div className={`form-status ${status.type === "ok" ? "form-status--ok" : "form-status--error"}`}>
          {status.text}
        </div>
      )}

      <button type="submit" className="btn btn--copper" style={{ marginTop: "1.25rem" }} disabled={submitting}>
        {submitting ? "Sending..." : "Send booking request"}
      </button>
    </form>
  );
}
