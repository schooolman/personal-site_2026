# CLAUDE.md

## Build & Development Commands
- `npm run dev` — Start development server at localhost:3000
- `npm run build` — Build static export to `out/` directory
- `npm run lint` — Run ESLint
- `npm test` — Run test suite (when tests are added)
- `npm run test:watch` — Run tests in watch mode (when tests are added)

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

---

## Development Workflow

### Branching Strategy

**CRITICAL: All new work MUST be done on feature branches. Never commit directly to `main`.**

#### Branch Naming Convention
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-fix`
- Documentation: `docs/description-of-change`
- Refactoring: `refactor/description-of-refactor`

**Examples:**
- `feature/add-blog-posts`
- `feature/contact-form`
- `fix/navigation-mobile-menu`
- `docs/update-readme`
- `refactor/extract-experience-component`

#### Workflow Steps

1. **Before starting new work:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **During development:**
   - Make incremental commits with clear messages
   - Run `npm run build` to verify the static export works
   - Run `npm run lint` to catch TypeScript/ESLint errors

3. **Before pushing:**
   ```bash
   npm run build  # Must succeed
   npm run lint   # Must pass
   npm test       # Must pass (when tests exist)
   ```

4. **Push and create PR:**
   ```bash
   git push -u origin feature/your-feature-name
   gh pr create --title "Brief description" --body "Detailed description of changes"
   ```

5. **After PR is merged:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/your-feature-name  # Delete local branch
   ```

### Test-Driven Development (TDD)

**CRITICAL: All new features and bug fixes MUST follow TDD practices.**

#### TDD Cycle (Red-Green-Refactor)

1. **Red:** Write a failing test first
   - Test should describe the expected behavior
   - Run the test to verify it fails (proves test is valid)

2. **Green:** Write minimal code to make the test pass
   - Focus on functionality, not perfection
   - Get the test passing as quickly as possible

3. **Refactor:** Improve the code while keeping tests green
   - Clean up implementation
   - Remove duplication
   - Improve readability
   - Tests must remain passing

#### When to Write Tests

**Always write tests for:**
- New components (at minimum, test that they render without crashing)
- New utility functions
- Bug fixes (write a test that reproduces the bug first, then fix it)
- Complex logic or calculations
- User interactions (button clicks, form submissions, navigation)

**Current testing setup status:** Tests not yet configured. When adding tests, use:
- **Jest** for unit tests
- **React Testing Library** for component tests
- **Playwright** or **Cypress** for E2E tests (if needed)

#### Test File Structure
```
app/
  page.tsx
  page.test.tsx          # Tests for page.tsx
components/
  Navigation.tsx
  Navigation.test.tsx    # Tests for Navigation.tsx
```

#### Example TDD Workflow

**Scenario: Adding a "scroll to top" button**

1. **Write the test first (Red):**
   ```tsx
   // components/ScrollToTop.test.tsx
   test('ScrollToTop button scrolls to top when clicked', () => {
     render(<ScrollToTop />);
     window.scrollTo(0, 500); // Scroll down first
     const button = screen.getByRole('button', { name: /scroll to top/i });
     fireEvent.click(button);
     expect(window.scrollY).toBe(0);
   });
   ```

2. **Run test to see it fail:**
   ```bash
   npm test -- ScrollToTop
   # Test fails: Component doesn't exist
   ```

3. **Write minimal code (Green):**
   ```tsx
   // components/ScrollToTop.tsx
   export default function ScrollToTop() {
     return (
       <button
         onClick={() => window.scrollTo(0, 0)}
         aria-label="Scroll to top"
       >
         ↑
       </button>
     );
   }
   ```

4. **Run test to see it pass:**
   ```bash
   npm test -- ScrollToTop
   # Test passes ✓
   ```

5. **Refactor (if needed):**
   - Add animations
   - Style the button
   - Extract scroll logic to a hook
   - Tests stay green throughout

### Code Quality Standards

#### TypeScript
- Use strict type checking (already enabled in `tsconfig.json`)
- Avoid `any` types
- Define interfaces for props and data structures
- Use type inference where possible

#### Component Guidelines
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use server components by default (add `"use client"` only when needed)
- Props should have TypeScript interfaces

#### Commit Message Format
```
<type>: <short description>

<optional detailed description>

<optional footer>
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

**Examples:**
```
feat: add blog post listing page

Implements /blog route with MDX file parsing.
Displays posts in reverse chronological order.

Closes #12
```

```
fix: navigation menu not closing on mobile

The hamburger menu stayed open after clicking a link.
Added onClick handler to close menu on navigation.

Fixes #8
```

### Pre-Deployment Checklist

Before merging to `main` or deploying, verify:

- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes with no warnings
- [ ] All tests pass (`npm test`)
- [ ] Manual testing on localhost:3000 looks correct
- [ ] No console errors in browser DevTools
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility: keyboard navigation works, screen reader friendly
- [ ] No hardcoded `localhost` URLs in code
- [ ] Environment variables (if any) are documented

### Adding New Features

When adding features that were planned but not implemented:

1. **Create feature branch:**
   ```bash
   git checkout -b feature/blog-posts
   ```

2. **Write tests first (TDD):**
   - Define expected behavior in tests
   - Run tests to verify they fail

3. **Implement feature incrementally:**
   - Make small, focused commits
   - Keep tests passing as you go

4. **Update documentation:**
   - Update this CLAUDE.md if workflow changes
   - Add comments for complex logic
   - Update README.md if user-facing changes

5. **Create PR for review:**
   ```bash
   gh pr create
   ```

### Future Planned Features

These features are architecturally supported but not yet implemented:

- **Blog posts** (`content/blog/` exists, needs MDX setup)
- **Projects page** (add `app/projects/page.tsx`)
- **Contact form** (integrate Formspree, keep mailto fallback)
- **Dark mode** (CSS variables already structured for it)
- **Analytics** (Vercel has one-click setup)
- **RSS feed** (when blog is added)
- **Search** (when blog has multiple posts)

When implementing these, follow the TDD and branching workflow above.

---

## Common Tasks

### Changing Colors
Edit `app/globals.css` `:root` block. All color values are CSS custom properties.

### Adding a New Page
1. Create feature branch: `git checkout -b feature/new-page-name`
2. Write test for page rendering
3. Create `app/new-page/page.tsx`
4. Add navigation link in `components/Navigation.tsx`
5. Update `app/sitemap.ts` to include new route
6. Run `npm run build` to verify
7. Create PR

### Updating Content
- Resume/experience: Edit data in `app/page.tsx`
- Contact info: Edit `app/contact/page.tsx`
- Social links: Edit `components/Footer.tsx` and page components
- Meta tags: Edit `app/layout.tsx` metadata

### Testing Locally Before Push
```bash
npm run build    # Verify static export works
npm run lint     # Check for TypeScript/ESLint errors
npm test         # Run test suite (when tests exist)
```

If all pass, you're good to push.
