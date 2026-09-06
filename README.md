# Snow Crest Hotels — Next.js Site

## Local development
npm install
npm run dev

## Production build (test before deploying)
npm run build
npm start

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. Import the repo in Vercel (vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Deploy

## Adding a new blog post
Create a new file in content/blog/your-post-slug.md with this format:

---
title: "Your Post Title"
date: "2026-09-01"
excerpt: "One or two sentence summary shown on the blog listing page."
image: "/images/img-af5b5a939f.jpg"
---

Your post content here, in Markdown.

Commit and redeploy — the post appears automatically at /blog/your-post-slug

## Booking requests
The Contact page form validates name+phone, then sends the request via:
- WhatsApp (wa.me link, opens immediately)
- Email (mailto:, opens the visitor's email client)
- Also POSTs to /api/booking, which currently just logs to the Vercel function logs.
  To receive these as real emails automatically, sign up for a free Resend.com
  account, add RESEND_API_KEY as a Vercel environment variable, and uncomment
  the fetch call in app/api/booking/route.js.
