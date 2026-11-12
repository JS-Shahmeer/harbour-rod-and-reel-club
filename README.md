# Harbour Rod & Reel Club

Next.js website for Harbour Rod & Reel Club (Huntington Harbour, CA), rebuilt from the client-approved Base44 design.

## Stack

- Next.js 15 (App Router, TypeScript) and Tailwind CSS 3, with the Base44 colours, fonts and components
- Module 1 is UI only: club content is static in `src/lib/content.ts`. The database arrives with the member area module.

## Getting started

```bash
npm install
npm run dev
```

## Pages

Home, About (history and leadership), Membership, Fishing, Tournaments, Events, Gallery and album pages,
H.O.P.E., News and article pages, Charters, Contact (form UI with validation), and a Members' Dock placeholder.

## Modules

See [docs/MODULES.md](docs/MODULES.md) for the module breakdown.

## Roadmap (summary)

1. Public site at design parity (this step)
2. Member login, members-only area, directory, Stripe membership payments
3. Leaderboard, content management for newsletters/articles/reports, merchandise store
4. Testing and launch
