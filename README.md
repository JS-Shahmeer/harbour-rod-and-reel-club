# Harbour Rod & Reel Club

Next.js website for Harbour Rod & Reel Club (Huntington Harbour, CA), rebuilt from the client-approved Base44 design.

## Stack

- Next.js 15 (App Router, TypeScript) and Tailwind CSS 3, with the Base44 colours, fonts and components
- Club content is static in `src/lib/content.ts` (moves to the database with the CMS module)
- PostgreSQL through Prisma for members (Supabase, Neon or Vercel Postgres)
- Auth.js (email and password) for member login

## Getting started

```bash
npm install
cp .env.example .env       # set DATABASE_URL, AUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npm run db:deploy          # create the tables
npm run db:seed            # create the first admin account
npm run dev
```

## Pages

Home, About (history and leadership), Membership, Fishing, Tournaments, Events, Gallery and album pages,
H.O.P.E., News and article pages, Charters, Contact (form UI with validation), plus the member area: login, register, password reset, Members' Dock, member directory, account page, and `/admin/members` for officers.

## Modules

See [docs/MODULES.md](docs/MODULES.md) for the module breakdown.

## Roadmap (summary)

1. Public site at design parity (this step)
2. Member login, members-only area, directory, Stripe membership payments
3. Leaderboard, content management for newsletters/articles/reports, merchandise store
4. Testing and launch
