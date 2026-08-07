# ABTalks — 60-Day Coding Challenge Platform

A premium, mobile-first redesign of the ABTalks 60-Day Coding Challenge platform. Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and an Express mock API server.

## Features

- **Landing Page** — Hero, stats, timeline, how-it-works, benefits, testimonials, FAQ, and CTA
- **Dashboard** — Welcome card with progress ring, streak, XP, rank, daily challenge, leaderboard preview, achievements, recent activity, consistency heatmap, recruiter visibility score, and AI Reflection Coach
- **Challenge Day** — Full challenge details with objectives, deliverables, requirements, resources, tips, and submission form with success animation
- **Unique Features** — AI Reflection Coach, Consistency Heatmap, Recruiter Visibility Score
- **Edge Cases** — Skeleton loaders, API error states, already-submitted state, empty states
- **Mobile-First** — Designed for 390px width with sticky bottom navigation, large touch targets, and safe area support

## Design System

Dark modern SaaS theme with:
- Background: `#0F172A` | Surface: `#1E293B` | Primary: `#6366F1`
- Success: `#22C55E` | Warning: `#F59E0B` | Danger: `#EF4444`
- Inter & Poppins typography
- 18–24px rounded corners, soft shadows, gradient accents

## Tech Stack

**Frontend:** React 19, Vite, React Router DOM, Tailwind CSS v4, Framer Motion, Lucide React, Recharts

**Backend:** Node.js, Express.js (mock JSON APIs only — no database)

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

### Backend (Mock API)

```bash
cd server
npm install
npm start
```

The mock API runs on `http://localhost:3001`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Student dashboard data |
| GET | `/api/day/:day` | Challenge details for a specific day |
| GET | `/api/leaderboard` | Full leaderboard |
| POST | `/api/submit` | Submit a challenge (returns mock success) |

## Routes

- `/` — Landing page
- `/dashboard` — Student dashboard
- `/day/:day` — Challenge day view (e.g., `/day/12`)

## Project Structure

```
ABTalks/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── dashboard/
│   │   ├── landing/
│   │   ├── challenge/
│   │   └── ui/
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   └── ChallengeDay.tsx
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   └── App.tsx
├── server/
│   ├── routes/
│   ├── data/
│   └── server.js
└── package.json
```

## Notes

- All data is mocked — no database, authentication, or persistence
- The frontend works standalone using the built-in mock data service
- The Express server provides the same data via REST API endpoints
