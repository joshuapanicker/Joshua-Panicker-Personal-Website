# Joshua Panicker — Personal Portfolio (Milestone 4)

A full-stack personal portfolio built with Next.js 15, Tailwind CSS, and MongoDB. Features a redesigned UI with smooth animations, a blog with comments, a projects showcase, and a contact form powered by EmailJS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, Framer Motion
- **Database:** MongoDB + Mongoose
- **Email:** EmailJS
- **UI Components:** Radix UI, shadcn/ui
- **Language:** TypeScript

## Pages

- `/` — Home (Hero, About, Projects, Resume, Blog, Contact)
- `/blog` — Blog listing
- `/blog/[slug]` — Individual blog post with comments
- `/portfolio` — Projects showcase
- `/resume` — Resume viewer
- `/contact` — Contact form

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example env file and fill in your values:
   ```bash
   cp .env.local.example .env.local
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

See `.env.local.example` for the required variables (MongoDB URI, EmailJS keys, etc.).
