# CLAUDE.md

## Build & Development Commands
- `npm run dev` — Start development server at localhost:3000
- `npm run build` — Build static export to `out/` directory
- `npm run lint` — Run ESLint

## Technology Stack
- Next.js 16, App Router, static export (`output: 'export'`)
- React 19, TypeScript 5
- Tailwind CSS 4

## Architecture
- Static portfolio site. No backend, no database. All pages pre-rendered at build time.
- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable React components
- `content/` — Future: MDX blog content
- `public/` — Static assets (images, resume PDF)

## Styling
- Chicago blues/greens palette defined as CSS custom properties in `app/globals.css`
- All theming changes go through CSS custom properties; component markup uses Tailwind utility classes

## Static Export Constraints
- Images use `unoptimized: true`
- No Server Actions, no API routes
- Contact form (future) will use external service (Formspree)
