# Harbour Rod & Reel Club

Next.js website for Harbour Rod & Reel Club (Huntington Harbour, CA), rebuilt from the client-approved Base44 design.

## Stack

- Next.js 15 (App Router, TypeScript) and Tailwind CSS 3, with the Base44 colours, fonts and components
- PostgreSQL through Prisma (Supabase or Neon in production)

## Getting started

```bash
npm install
cp .env.example .env       # set DATABASE_URL
npx prisma db push         # create tables
npm run db:seed            # load the starter content from Base44
npm run dev
```

## Pages

Home, About (history and leadership), Membership, Fishing, Tournaments, Events, Gallery and album pages,
H.O.P.E., News and article pages, Charters, Contact (saves inquiries to the database), and a Members' Dock placeholder.

## Roadmap

1. Public site at design parity (this step)
2. Member login, members-only area, directory, Stripe membership payments
3. Leaderboard, content management for newsletters/articles/reports, merchandise store
4. Testing and launch
