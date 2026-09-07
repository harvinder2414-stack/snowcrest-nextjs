"use client";
import { useState, useEffect } from "react";

const WA_NUMBER = "917018512267";
const EMAIL = "Snowcresthotels@gmail.com";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "", phone: "", checkin: "", checkout: "",
    guests: "2 Guests", room: "Not sure yet", message: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  // Read query params directly from window.location on mount — avoids the
  // useSearchParams() Suspense requirement, so this form renders immediately
  // in server-rendered HTML instead of waiting for client-side hydration.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const checkin = params.get("checkin");
    const checkout = params.get("checkout");
    const guests = params.get("guests");
    if (checkin || checkout || guests) {
      setForm((f) => ({
        ...f,
        checkin: checkin || f.checkin,
        checkout: checkout || f.checkout,
        guests: guests || f.guests,
      }));
    }
  }, []);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function buildMessage() {
    const lines = [
      "Booking Request — Luxe Vista by Snow Crest",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Check-in: ${form.checkin || "Not specified"}`,
      `Check-out: ${form.checkout || "Not specified"}`,
      `Guests: ${form.guests}`,
      `Room Preference: ${form.room}`,
    ];
    if (form.message) lines.push(`Message: ${form.message}`);
    return lines.join("\n");
  }

  async function submitToApi() {
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch (e) {
      setStatus("failed");
    }
  }

  function handleSend(channel) {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone number so we can get back to you.");
      return;
    }
    setError("");
    submitToApi();

    const bodyText = buildMessage();
    if (channel === "whatsapp") {
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(bodyText)}`, "_blank");
    } else {
      const subject = encodeURIComponent(`Booking Request — ${form.name} — Luxe Vista`);
      const body = encodeURIComponent(bodyText);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <div className="request-form">
      <div className="rf-row">
        <div className="rf-field">
          <label htmlFor="rf-name">Full Name *</label>
          <input id="rf-name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
        </div>
        <div className="rf-field">
          <label htmlFor="rf-phone">Phone Number *</label>
          <input id="rf-phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div className="rf-row">
        <div className="rf-field">
          <label htmlFor="rf-checkin">Check-in</label>
          <input id="rf-checkin" type="date" value={form.checkin} onChange={(e) => update("checkin", e.target.value)} />
        </div>
        <div className="rf-field">
          <label htmlFor="rf-checkout">Check-out</label>
          <input id="rf-checkout" type="date" value={form.checkout} onChange={(e) => update("checkout", e.target.value)} />
        </div>
      </div>
      <div className="rf-row">
        <div className="rf-field">
          <label htmlFor="rf-guests">Guests</label>
          <select id="rf-guests" value={form.guests} onChange={(e) => update("guests", e.target.value)}>
            <option>2 Guests</option>
            <option>1 Guest</option>
            <option>3–4 Guests</option>
            <option>Family (5+)</option>
          </select>
        </div>
        <div className="rf-field">
          <label htmlFor="rf-room">Room Preference</label>
          <select id="rf-room" value={form.room} onChange={(e) => update("room", e.target.value)}>
            <option>Not sure yet</option>
            <option>King Mountain View</option>
            <option>Rooms Scenic View</option>
            <option>Panorama Balcony</option>
            <option>Family Suite</option>
          </select>
        </div>
      </div>
      <div className="rf-field" style={{ marginBottom: "6px" }}>
        <label htmlFor="rf-message">Message (optional)</label>
        <textarea id="rf-message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anything else we should know?" />
      </div>
      {error && <div className="rf-error show">{error}</div>}
      <div className="rf-actions">
        <button type="button" className="btn btn-whatsapp" onClick={() => handleSend("whatsapp")}>
          Send Request via WhatsApp
        </button>
        <button type="button" className="btn btn-dark" onClick={() => handleSend("email")}>
          Send Request via Email
        </button>
      </div>
      {status === "sent" && <p className="rf-note">Request logged — we&apos;ll follow up on WhatsApp/email shortly.</p>}
      {status === "failed" && <p className="rf-note">Note: background logging didn&apos;t go through, but your WhatsApp/email message above still sent normally.</p>}
      <p className="rf-note">
        WhatsApp: <strong>7018512267</strong> &nbsp;·&nbsp; Call: <strong><a href="tel:+919317190212" style={{ color: "inherit" }}>9317190212</a></strong> &nbsp;·&nbsp; Email: <strong>{EMAIL}</strong>
      </p>
    </div>
  );
}
