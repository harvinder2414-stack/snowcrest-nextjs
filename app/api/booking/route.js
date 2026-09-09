import { NextResponse } from "next/server";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  // For now this just logs to the server console (visible in your Vercel
  // function logs). To receive these as real emails automatically:
  //   1. Create a free account at https://resend.com
  //   2. Add RESEND_API_KEY as an environment variable in Vercel
  //   3. Uncomment the fetch call below
  console.log("Booking request:", data);

  /*
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Luxe Vista by Snow Crest <bookings@luxevistahotels.com>",
      to: "harvinder2414@gmail.com",
      subject: `Booking request from ${data.name}`,
      text: JSON.stringify(data, null, 2),
    }),
  });
  */

  return NextResponse.json({ ok: true });
}
