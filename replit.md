# Rebel Talent Systems Website

## Overview
Marketing website for Rebel Talent Systems - a fractional recruiting leadership firm run by Richie Lampani. Built as a React SPA with military/brutal aesthetic.

## Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Wouter routing
- **Backend**: Express.js (minimal - static site serving only)
- **Styling**: Dark theme with red accent (#DC2626), military/clean aesthetic
- **Fonts**: Inter (body), Oswald (display/headings), JetBrains Mono (code/labels)

## Pages
- `/` - Home (hero, stats, services overview, target clients, CTA)
- `/about` - About Richie Lampani (bio, credentials, books, engagement models)
- `/services` - Services (fractional, critical hire, training, workshops)
- `/how-it-works` - Process timeline, handoff items, FAQ
- `/testimonials` - Client testimonials
- `/case-studies` - EarthDaily Federal, Legal Managed Services
- `/podcast` - Podcast appearances
- `/free-tools` - Resume tools, LinkedIn tools, books, coaching

## Key Components
- `Navbar.tsx` - Fixed top nav with mobile hamburger menu
- `Footer.tsx` - 4-column footer with links and contact info
- `PageLayout.tsx` - Wrapper with Navbar + Footer

## Logo
The new globe/planet logo is at `client/public/logo.png` (from attached_assets/loooogoRTC_1773066224840.png)

## Design Tokens
- Primary red: `rebel-red` (#DC2626)
- Dark backgrounds: rebel-black (#0A0A0A), rebel-charcoal (#111111)
- All pages use dark mode by default (class="dark" on html)
- Square/minimal border radius - military aesthetic
- Font display class uses Oswald
- Monospace labels use JetBrains Mono

## External Links
- Calendar booking: https://calendar.app.google/TqhGeNMKZPcRmb4o8
- LinkedIn: https://linkedin.com/in/richielampani
- Email: richie@rebeltalentsystems.com
- Phone: (770) 233-7548
