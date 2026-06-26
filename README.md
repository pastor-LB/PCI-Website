# Park City Initiative — Website

A production-quality Next.js (App Router, TypeScript, Tailwind CSS) rebuild of the
parkcityinitiative.org website for Park City Initiative (PCI), a Bridgeport, CT nonprofit.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (brand theme defined in `app/globals.css` via `@theme`)
- Framer Motion (animations), Embla Carousel (testimonials)
- React Hook Form + Zod (form validation)
- react-hot-toast (form feedback)
- lucide-react (icons)
- Resend (transactional email for forms) — optional, falls back to console logging
- Zeffy (donation embed) — placeholder ID until a real account is created

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify a production build locally:

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in real values:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata/sitemap |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (omit to disable GA) |
| `RESEND_API_KEY` | Enables real email delivery for the 4 forms (Get Help, Volunteer, Contact, Newsletter via Mailchimp fallback). Without this key, form submissions are validated and logged to the server console but no email is sent — useful for local development. |
| `EMAIL_TO` / `EMAIL_FROM` | Destination/sender addresses for Resend emails |
| `MAILCHIMP_API_KEY` / `MAILCHIMP_LIST_ID` / `MAILCHIMP_SERVER_PREFIX` | Optional newsletter list integration (used by `/api/newsletter`) |
| `NEXT_PUBLIC_ZEFFY_FORM_ID` | Your Zeffy donation form ID, used to embed the secure donation iframe on `/donate` |

None of these are required for `npm run build` to succeed — the site builds and runs fully
without secrets, with graceful fallbacks everywhere a real API key would normally be used.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the repo at https://vercel.com/new.
3. Add the environment variables above in the Vercel project settings.
4. Deploy. `vercel.json` already contains the legacy URL redirects from the old Wix site
   (e.g. `/copy-of-what-we-do` → `/our-impact`).
5. Point your domain (parkcityinitiative.org) at the Vercel deployment via Vercel's domain
   settings.

## Updating Content

- **Site-wide constants** (phone, address, social links, stats): `lib/constants.ts`
- **Page copy**: each route lives under `app/<route>/page.tsx` (e.g. `app/one-meal/page.tsx`)
- **Shared sections** (Hero, ImpactStats, ProgramCards, FoundingStory, TestimonialCarousel,
  PartnerLogos, DonateWidget, NewsletterSignup, CTABanner, PageHero): `components/sections/`
- **Reusable UI** (Button, Card, Section, Badge, StatCard, Breadcrumbs): `components/ui/`
- **Forms**: `components/forms/*.tsx`, validated by Zod schemas in `lib/validations.ts`,
  submitted to route handlers in `app/api/*/route.ts`
- **SEO metadata**: generated per-page via `generatePageMetadata()` in `lib/metadata.ts`;
  JSON-LD structured data generated via helpers in `lib/schema.ts`

## Where to Plug In Real Content

- **Photography**: Every image currently uses a placeholder Unsplash URL. Search the codebase
  for `// TODO: Replace with actual PCI photography` to find every instance (Hero, Mission
  section, Programs page, About page volunteer grid, One Child gallery, Programs cards).
  Swap the `src` for real PCI photos (ideally hosted in `/public/images` or a CDN) — `next/image`
  is already configured with `images.remotePatterns` for `images.unsplash.com` in
  `next.config.ts`, so you'll want to update that config if switching to a different image host.
- **Testimonials**: All testimonial copy in `components/sections/TestimonialCarousel.tsx` is
  marked `// PLACEHOLDER` — replace with real community member quotes (with permission).
- **Staff bios**: `app/about/page.tsx` has placeholder leadership cards — replace names, roles,
  and headshots.
- **EIN**: `lib/constants.ts` has `ein: '[ INSERT EIN ]'` — update with PCI's real EIN once
  available; it's referenced on `/donate` and `/transparency`.
- **Zeffy donation form**: set `NEXT_PUBLIC_ZEFFY_FORM_ID` once a real Zeffy account/form exists.
- **Annual Report PDF**: `/transparency` has a "Coming Soon" placeholder card — link it to the
  real PDF once published.
- **Partner logos**: currently styled text in gray boxes (`components/sections/PartnerLogos.tsx`)
  per project requirements — swap for real logo images if/when available.

## Notes on Implementation

- Built on the Next.js version available in this environment (App Router, modern file
  conventions). `app/sitemap.ts` and `app/robots.ts` use the programmatic `MetadataRoute`
  convention (still served at `/sitemap.xml` and `/robots.txt`).
- Tailwind v4 is configured via the CSS-based `@theme` block in `app/globals.css` (the brand
  color system and font variables). A `tailwind.config.ts` is also included for editor/tooling
  support and documents the same tokens.
- `lucide-react` in this environment does not ship brand icons (Facebook/Instagram); the footer
  uses small inline SVGs for those two icons instead.
- All four forms (Get Help, Volunteer, Contact, Newsletter) work end-to-end without any API
  keys configured — they validate with Zod, POST to their route handler, and return a success
  response (logged server-side) so the UX is fully testable in development.
