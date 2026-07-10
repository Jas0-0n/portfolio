# Jason Chen · Portfolio

> **Build systems that matter**

Personal portfolio website — dark minimal design inspired by modern designer portfolios.
Migrated to **React + TypeScript + TailwindCSS** with full test coverage.

## Tech Stack

- **React 18+** — Component-based UI with concurrent rendering
- **TypeScript** — Strong typing, zero `any`
- **Vite** — Fast dev server and build tool (replaced zero-dependency HTML)
- **TailwindCSS** — Utility-first styling with custom design tokens
- **Vitest + React Testing Library** — Unit and interaction testing
- **Playwright** — End-to-end testing
- **Biome** — Unified lint and format (replaces ESLint + Prettier)
- **Husky + Commitlint** — Git hooks and conventional commits

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# http://localhost:5173

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment

Push to GitHub and deploy the `dist/` folder to any static hosting (Vercel, Cloudflare Pages, GitHub Pages).

> **BREAKING CHANGE**: This is no longer a zero-dependency static HTML site. The `dist/` folder is produced by `pnpm build` and must be served by a static file server — opening `index.html` directly will not work.

## Maintenance

Content is now data-driven. Edit the files in `src/data/` to update:

-   `profile.ts` — Hero status, location, headline, subline
-   `about.ts` — Bio paragraphs and skill tags
-   `experience.ts` — Timeline items and education
-   `work.ts` — Project cards (update emoji, title, description, tags)
-   `navigation.ts` — Nav links
-   `social.ts` — Social links (replace placeholders with your real URLs)

## Sections

| Section    | Content                                                      |
|------------|--------------------------------------------------------------|
| Hero       | Headline, tagline, CTA buttons                               |
| About      | Bio, photo placeholder, skill tags                           |
| Experience | Timeline (YOHO), Education card (HKBU, Zhaoqing U)           |
| Work       | 4 featured project cards                                      |
| Footer     | Social links, email contact                                  |

## Placeholders (need your real content)

-   [ ] Replace About photo placeholder with your actual headshot
-   [ ] Replace Work emoji icons (`🔍📊📡⚡`) with real project screenshots
-   [ ] Update social links in `src/data/social.ts` (currently `your.email@example.com`, `https://github.com/`, `https://linkedin.com/in/`, `#`)
-   [ ] Customize the headline if desired
-   [ ] Deploy to your preferred static host

## Project Structure

```
src/
├── app/              # App root component
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Experience, Work
│   └── ui/           # Button, SectionLabel, SkillTag, BackToTop, WorkCard, TimelineItem, EducationCard
├── data/             # Content data files (TypeScript)
├── hooks/            # Custom React hooks
├── types/            # Shared TypeScript interfaces
└── tests/            # Test setup

tests/
└── e2e/              # Playwright E2E tests
```

## License

Built with React + TypeScript + TailwindCSS · © 2026 Jason Chen
