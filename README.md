# Joshua Panicker — Personal Portfolio

A personal portfolio website built progressively across 4 milestones as part of the Hack4Impact Cal Poly 2025 bootcamp. The project evolves from a static HTML/CSS site into a full-stack Next.js application with a database, animations, and third-party integrations.

Live site: https://joshuapanicker-bootcamp-project-202.vercel.app

---

## Project Design & Architecture

The project is structured as a series of milestones, each building on the last. Every milestone lives in its own folder and represents a distinct phase of development.

```
/
├── bootcamp-milestone-1/   # Static HTML/CSS site
├── bootcamp-milestone-2/   # Next.js conversion (transitional)
├── bootcamp-milestone-3A/  # MongoDB integration
├── bootcamp-milestone-3B/  # MongoDB refinement
└── bootcamp-milestone-4/   # Full-stack with UI redesign (current)
```

---

## Milestone Breakdown

### Milestone 1 — Static HTML/CSS
The foundation. A hand-coded portfolio with plain HTML, CSS, and minimal TypeScript.

- Pages: Home, Blog, Portfolio, Resume, Contact
- No framework, no build step
- Styling via a single `styles.css`

### Milestone 2 — Next.js Conversion
Migrated the static site into a Next.js app with React components and file-based routing.

- Introduced the App Router and TypeScript throughout
- Blog data moved to a static `blogData.ts` file
- Server-side rendering with no database yet

### Milestone 3A — MongoDB Integration
Added a real backend with MongoDB Atlas and Mongoose.

- Blog posts and portfolio projects stored in and fetched from MongoDB
- API routes: `/api/blogs/[slug]`, `/api/blogs/[slug]/comments`, `/api/projects`
- Comment system built as a client component
- Server components handle all data fetching

### Milestone 3B — MongoDB Refinement
Stabilization and hardening of the database layer from 3A.

- Same feature set as 3A
- Focused on connection reliability, error handling, and Atlas configuration
- Added extensive setup and troubleshooting documentation

### Milestone 4 — Full-Stack Redesign (Current)
A full UI redesign with interactive features and third-party service integration.

- Tailwind CSS replaces CSS Modules for styling
- Framer Motion for scroll animations and transitions
- Radix UI + shadcn/ui component primitives
- Contact form powered by EmailJS
- `"use client"` components with `useState` for form state management
- Custom cursor, marquee strip, tilt cards, and scroll reveal effects

---

## Tech Stack (Milestone 4)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| UI Components | Radix UI, shadcn/ui, Lucide Icons |
| Database | MongoDB Atlas + Mongoose |
| Email | EmailJS |
| Deployment | Vercel |

---

## Running Locally (Milestone 4)

```bash
cd bootcamp-milestone-4
npm install
cp .env.local.example .env.local  # fill in your MongoDB URI and EmailJS keys
npm run dev
```

Open http://localhost:3000.
