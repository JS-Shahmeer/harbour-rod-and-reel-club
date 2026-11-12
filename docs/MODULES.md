# Project modules

The build is split into seven modules that follow the client brief. Each module is developed on its own
branch and merged into `main` through a pull request.

| # | Module | Branch | Status |
|---|--------|--------|--------|
| 1 | Website design & development (UI) | `module-1-ui` | Done |
| 2 | Member area | `module-2-member-area` | In review |
| 3 | Membership & payments | `module-3-membership-payments` | Next |
| 4 | Leaderboard management | `module-4-leaderboard` | Planned |
| 5 | Newsletter & content management | `module-5-cms` | Planned |
| 6 | Merchandise store | `module-6-store` | Planned |
| 7 | Testing & launch | `module-7-testing-launch` | Planned |

## 1. Website design & development (UI)

Next.js port of the approved Base44 design, responsive on mobile, tablet and desktop. UI only: content is static
in `src/lib/content.ts` and the site needs no database or environment variables.

- Club information and history (About, history timeline, leadership)
- Meetings, events and fishing updates (Events, Tournaments, Fishing)
- Newsletter and articles (News list and article pages)
- Club contact information and contact/inquiry form (saved to the database)
- Charter information page with inquiry link
- Gallery, H.O.P.E. conservation page, Members' Dock placeholder

## 2. Member area

- Secure member login, logout and password reset
- Members-only section (Members' Dock)
- Member directory with per-member privacy setting
- Access restricted by membership status (active / pending / expired)
- Roles: member, contributor, admin
- Admin page (`/admin/members`) to approve members, set status, plan, paid-through date and role

Needs `DATABASE_URL` and `AUTH_SECRET` (see `.env.example`). Public pages stay static.

## 3. Membership & payments

- Online membership registration form with membership plans
- Online dues payment with Stripe Checkout
- Member status management for admins (activate, expire, renew)
- Webhook that activates the member automatically after payment, with expiry date

## 4. Leaderboard management

- Leaderboard by season and category, easy to update
- Authorised members can record catches (species, weight, date, angler, photo) and update scores
- Rankings calculated from recorded catches
- Admin control over who can edit the leaderboard

## 5. Newsletter & content management

- Admin area to write and publish newsletters, articles and fishing reports
- Contributor and administrator access levels (contributors draft, admins publish)
- Manage events, tournaments, gallery albums and history from the admin area

## 6. Merchandise store

- Product catalog with images, descriptions, sizes and prices
- Cart and Stripe checkout
- Basic order management (paid, fulfilled, cancelled) for admins

## 7. Testing & launch

- Automated tests for pages, login and access rules, membership payments, leaderboard updates and store orders
- Fix issues, client review on a preview deployment, revisions, production launch
