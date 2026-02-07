# CLAUDE.md

## ⚠️ CRITICAL WORKFLOW REQUIREMENTS

### 1. Feature Branch Requirement
**ALL new work MUST be done on feature branches. NEVER commit directly to `main`.**

Before starting any work:
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

Branch naming:
- `feature/description` — New features
- `fix/description` — Bug fixes
- `docs/description` — Documentation
- `refactor/description` — Code refactoring

### 2. Test-Driven Development (TDD)
**ALL new features and bug fixes MUST follow TDD practices.**

TDD Cycle:
1. **Red:** Write a failing test first
2. **Green:** Write minimal code to make it pass
3. **Refactor:** Improve code while keeping tests green

Always write tests for:
- New components (at minimum, render without crashing)
- New utility functions
- Bug fixes (test reproduces bug first, then fix)
- Complex logic or calculations
- User interactions (clicks, forms, navigation)

**Current status:** Vitest + React Testing Library configured. All tests passing (73/73).

### 3. Pre-Push Checklist
Before pushing ANY code:
```bash
npm run build  # MUST succeed
npm run lint   # MUST pass with no warnings
npm test       # MUST pass (when tests exist)
```

---

## Quick Reference

### Commands
- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Build static export to `out/`
- `npm run lint` — Run ESLint
- `npm test` — Run tests with Vitest
- `npm run test:watch` — Run tests in watch mode (for TDD)
- `npm run test:coverage` — Generate coverage report

### Tech Stack
- Next.js 16 (App Router, static export)
- React 19, TypeScript 5
- Tailwind CSS 4

### Architecture
- Static site, no backend/database
- `app/` — Pages and layouts
- `components/` — Reusable components
- `content/blog/` — Future blog MDX files
- `public/` — Static assets

### Styling
- Chicago blues/greens palette in `app/globals.css` as CSS custom properties
- All color changes go through CSS variables
- Component markup uses Tailwind utility classes

---

## Detailed Development Workflow

### Branching Strategy

**Never commit to `main`. Always use feature branches.**

#### Full Workflow

1. **Start new work:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **During development:**
   - Make incremental commits with clear messages
   - Run `npm run build` periodically
   - Run `npm run lint` to catch errors early

3. **Before pushing:**
   ```bash
   npm run build  # Must succeed
   npm run lint   # Must pass
   npm test       # Must pass (when tests exist)
   ```

4. **Push and create PR:**
   ```bash
   git push -u origin feature/your-feature-name
   gh pr create --title "Brief description" --body "Detailed changes"
   ```

5. **After PR merged:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/your-feature-name
   ```

### Test-Driven Development (TDD)

**TDD Cycle: Red → Green → Refactor**

#### Example: Adding a scroll-to-top button

1. **Red - Write failing test:**
   ```tsx
   // components/ScrollToTop.test.tsx
   import { describe, it, expect } from 'vitest';
   import { render, screen, fireEvent } from '@/test/utils';
   import ScrollToTop from './ScrollToTop';

   describe('ScrollToTop Component', () => {
     it('scrolls to top when clicked', () => {
       render(<ScrollToTop />);
       window.scrollTo(0, 500);
       const button = screen.getByRole('button', { name: /scroll to top/i });
       fireEvent.click(button);
       expect(window.scrollY).toBe(0);
     });
   });
   ```

2. **Run test → fails (component doesn't exist)**

3. **Green - Write minimal code:**
   ```tsx
   // components/ScrollToTop.tsx
   export default function ScrollToTop() {
     return (
       <button onClick={() => window.scrollTo(0, 0)} aria-label="Scroll to top">
         ↑
       </button>
     );
   }
   ```

4. **Run test → passes ✓**

5. **Refactor - Improve while tests stay green:**
   - Add animations
   - Style the button
   - Extract logic to custom hook

#### Test File Structure
```
app/page.tsx
app/page.test.tsx
components/Navigation.tsx
components/Navigation.test.tsx
```

### Code Quality Standards

#### TypeScript
- Use strict type checking (enabled in `tsconfig.json`)
- Avoid `any` types
- Define interfaces for props and data structures
- Use type inference where possible

#### Components
- Keep focused and single-purpose
- Extract reusable logic into custom hooks
- Server components by default (add `"use client"` only when needed)
- Props must have TypeScript interfaces

#### Commit Messages
```
<type>: <short description>

<optional detailed description>

<optional footer>
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

**Examples:**
```
feat: add blog post listing page

Implements /blog route with MDX parsing.
Displays posts in reverse chronological order.

Closes #12
```

```
fix: navigation menu not closing on mobile

Hamburger menu stayed open after clicking links.
Added onClick handler to close on navigation.

Fixes #8
```

### Pre-Deployment Checklist

Before merging to `main` or deploying:

- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes with no warnings
- [ ] All tests pass (`npm test`)
- [ ] Manual testing on localhost:3000 looks correct
- [ ] No console errors in browser DevTools
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] Accessibility: keyboard navigation, screen reader friendly
- [ ] No hardcoded `localhost` URLs
- [ ] Environment variables documented (if any)

### Adding New Features

1. **Create feature branch:**
   ```bash
   git checkout -b feature/blog-posts
   ```

2. **Write tests first (TDD):**
   - Define expected behavior in tests
   - Run tests to verify they fail

3. **Implement incrementally:**
   - Small, focused commits
   - Keep tests passing throughout

4. **Update documentation:**
   - Update CLAUDE.md if workflow changes
   - Add comments for complex logic
   - Update README.md if user-facing

5. **Create PR:**
   ```bash
   gh pr create
   ```

### Future Planned Features

Architecturally supported, not yet implemented:

- **Blog posts** (`content/blog/` exists, needs MDX setup)
- **Projects page** (`app/projects/page.tsx`)
- **Contact form** (Formspree integration, keep mailto fallback)
- **Dark mode** (CSS variables already structured for it)
- **Analytics** (Vercel one-click setup)
- **RSS feed** (when blog added)
- **Search** (when blog has multiple posts)

Follow TDD and branching workflow when implementing.

---

## Common Tasks

### Changing Colors
Edit `app/globals.css` `:root` block. All colors are CSS custom properties.

### Adding a New Page
1. Create feature branch: `git checkout -b feature/new-page`
2. Write test for page rendering
3. Create `app/new-page/page.tsx`
4. Add link in `components/Navigation.tsx`
5. Update `app/sitemap.ts`
6. Run `npm run build` to verify
7. Create PR

### Updating Content
- **Resume/experience:** `app/page.tsx`
- **Contact info:** `app/contact/page.tsx`
- **Social links:** `components/Footer.tsx` and page components
- **Meta tags:** `app/layout.tsx` metadata

### Testing Locally
```bash
npm run build    # Verify static export works
npm run lint     # Check TypeScript/ESLint
npm test         # Run test suite (when exists)
```

If all pass → good to push.

---

## Static Export Constraints

- Images use `unoptimized: true`
- No Server Actions
- No API routes
- Future contact form uses external service (Formspree)
