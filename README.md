# Luxe Vista by Snow Crest — Next.js Site

Rebuilt on the App Router using the property's real content: real location
(Banikhet, Dalhousie), real room categories, real WhatsApp/phone/email.
No stock photography anywhere yet — every visual is a generated ridge-line
illustration (`components/ScenicArt.jsx`) as a placeholder. Replace these
with real property photos as soon as you have them (see "Adding real
photos" below).

## Local development

```bash
npm install
npm run dev
```

## Production build (test before deploying)

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo in Vercel (vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Deploy

## Site structure

- `app/page.js` — homepage
- `app/luxe-vista/` — property overview page
- `app/rooms/` — room listing + one dynamic page per category (`app/rooms/[slug]`)
- `app/offers/` — current offers (message on WhatsApp for the latest rate)
- `app/about/` — about Snow Crest / Luxe Vista
- `app/blog/` — journal, reads from `content/blog/*.md`
- `app/contact/` — booking form
- `app/api/booking/` — receives booking form submissions
- `lib/rooms.js` — all room data (name, price label, features, photos) lives in one file
- `lib/posts.js` — markdown loader for the journal (gray-matter + marked)
- `components/ScenicArt.jsx` / `components/DuplexArt.jsx` — illustrated placeholders used until a room has real photos
- `components/RoomVisual.jsx` — picks a room's real photo if one exists, otherwise the right placeholder illustration
- `components/RidgeDivider.jsx` — the gold skyline divider used between sections

## Adding a new blog post

Create a new file in `content/blog/your-post-slug.md` with this format:

```
---
title: "Your Post Title"
date: "2026-09-01"
excerpt: "One or two sentence summary shown on the journal listing page."
---

Your post content here, in Markdown.
```

Commit and redeploy — the post appears automatically at `/blog/your-post-slug`
and on the homepage's journal teaser (most recent 3 posts).

## Editing room data

Open `lib/rooms.js` and edit the `rooms` array directly — every page (home,
rooms listing, room detail, the contact form's room dropdown) reads from
this one file. Prices are stored as a display string (`priceLabel`, e.g.
`"From ₹2,300 / night"`) rather than a number, since not every category has
a fixed public rate — edit this string per room whenever rates change.

## Adding real photos

1. Add your image files to `public/images/` (create the folder if it
   doesn't exist)
2. In any page, replace a `<ScenicArt tone="..." seed={...} />` call with
   a plain image tag, e.g.:
   ```jsx
   <img src="/images/king-mountain-view.jpg" alt="King Mountain View room" />
   ```
3. Do this per room / per section as you get real photos — there's no
   need to replace everything at once.

## Booking requests

The Contact page form (`components/ContactForm.jsx`) validates name + phone,
then sends the request via:

- **WhatsApp** — opens a `wa.me` link with the request pre-filled, addressed
  to +91 70185 12267. Update `HOTEL_WHATSAPP` at the top of
  `components/ContactForm.jsx` if this number ever changes (country code,
  digits only, no `+` or spaces).
- **Email** — opens a `mailto:` link addressed to `snowcresthotels@gmail.com`
  (the `HOTEL_EMAIL` constant in the same file).
- **API** — also POSTs to `/api/booking`, which currently just logs to the
  Vercel function logs. To receive these as real emails automatically, sign
  up for a free [Resend.com](https://resend.com) account, add `RESEND_API_KEY`
  as a Vercel environment variable, and uncomment the fetch call in
  `app/api/booking/route.js`.

## Design notes

Colors, fonts, and spacing all live as CSS custom properties at the top of
`app/globals.css` — change the values in `:root` to retheme the whole site.
