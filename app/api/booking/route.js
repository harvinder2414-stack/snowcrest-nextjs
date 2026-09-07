import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Missing name or phone" }, { status: 400 });
    }
    console.log("New booking request:", JSON.stringify(data, null, 2));
    // Optional: wire a real email service here (e.g. Resend) using an env var API key.
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
