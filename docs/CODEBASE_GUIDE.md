# Suyash Portfolio – Codebase Guide

A quick-reference guide for maintaining and extending this React + TypeScript + Vite portfolio. Keep this close when making changes or onboarding.

## Overview

- Framework: React 19 (TypeScript)
- Build tool: Vite 7
- Styling: Tailwind CSS 3 + custom CSS variables in `src/index.css`
- Animations: Framer Motion
- UI: Headless UI, Lucide React
- Forms: React Hook Form
- Theming: Custom `ThemeContext` with localStorage persistence
- Routing style: Single-page, anchor-based navigation (`#hero`, `#skills`, …)

## Run, Build, Lint

- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

Vite base path is set to `/portfolio/` in `vite.config.ts:7`. Update if deploying under a different subpath.

## Project Structure

```
src/
├─ App.tsx                # App shell, section composition, loading overlay
├─ index.css              # Global styles, CSS variables, Tailwind layers
├─ main.tsx               # React root
├─ assets/                # Static assets (e.g., logos)
├─ contexts/
│  └─ ThemeContext.tsx    # Theme provider + persistence
├─ components/
│  ├─ sections/           # Page sections (Hero, Skills, Education, Projects, Experience, Contact)
│  └─ ui/                 # Reusable UI (Navigation, ThemeToggle, Footer, LoadingScreen, CustomCursor)
```

Other root files:
- `index.html`: App entry + mounting `#root`
- `tailwind.config.js`: Tailwind theme extensions and plugins
- `postcss.config.js`: Tailwind + Autoprefixer
- `eslint.config.js`: ESLint with TypeScript, React Hooks, React Refresh
- `tsconfig.*.json`: TS settings for app and Vite config

## Application Flow

1. `main.tsx` mounts `<App />` inside `StrictMode`.
2. `App.tsx` wraps app in `ThemeProvider`, shows `LoadingScreen` for ~3s, then renders:
   - `Navigation` (sticky header with scroll spy and mobile menu)
   - Sections in order: `Hero`, `Skills`, `Education`, `Projects`, `Experience`, `Contact`
   - `Footer`
   - `CustomCursor` overlays custom pointer styles
3. `Navigation` links use in-page anchors. Scroll behavior is set to smooth in `App.tsx`.

## Theming

- Provider: `src/contexts/ThemeContext.tsx`
- Persists selected theme (e.g., light/dark) to `localStorage`.
- The toggle: `src/components/ui/ThemeToggle.tsx` consumes the context.
- Tailwind integrates with CSS variables (see `src/index.css`) and extended palette in `tailwind.config.js`.

Tip: When adding colors, extend Tailwind tokens in `tailwind.config.js` and, if needed, define CSS variables in `index.css` so both utility classes and custom styles stay consistent.

## Navigation & Sections

- `Navigation.tsx` handles:
  - Mobile menu toggle
  - Active link highlighting via scroll position (scroll spy)
  - Theme toggle button
  - Uses `framer-motion` for subtle transitions
- Sections live under `src/components/sections/` and are placed within `<section id="...">` wrappers in `App.tsx`. IDs must match the nav items.

Add a new section:
1. Create `src/components/sections/YourSection.tsx` that exports a React component.
2. Import and add it to `App.tsx` inside `<motion.main>` with a unique `section id`.
3. Add a matching nav item in `Navigation.tsx` (`id`, `primary`, `href: '#your-id'`).

## Animations

- `framer-motion` used in `App.tsx` (fade-in for main), `Navigation`, and section components (reveals, transitions).
- Keep motion props minimal to avoid layout thrash. Prefer `transform` and `opacity`.

## Styling

- Tailwind-first approach with custom classes in `index.css` for themes, borders, and accents.
- Tailwind config extends:
  - Colors: `primary`, `secondary`, `highlight`, `background`, `text-primary`, etc.
  - Fonts: `'medieval'`, `'body'`
  - Animations/keyframes: `fade-in`, `slide-up`, `glow`

When adding utilities:
- Put global, reusable rules in `index.css`.
- Prefer Tailwind utilities over ad-hoc CSS where possible.

## Forms

- `react-hook-form` is available for forms (e.g., `Contact` section). Use controlled inputs, validation rules, and error states consistent with theme.

## Icons

- `lucide-react` used for icons in UI and sections. Import only needed icons to keep bundle small.

## Linting & Type Safety

- ESLint with TS rules is configured in `eslint.config.js`.
- TS is `strict` with noUnused* rules enabled per `tsconfig.app.json`.
- Follow patterns in existing components: typed props, minimal `any`, prefer React.FCless function components with explicit return types inferred.

## Deployment Notes

- `vite.config.ts` sets `base: '/portfolio/'` for subpath hosting (e.g., GitHub Pages under a repository). If deploying to a root domain, update or remove the base.
- Build output goes to `dist/` via `npm run build`.

## Common Tasks

Add a new UI component:
- Place in `src/components/ui/` with a descriptive name, default export, and props interface if needed.
- Add minimal animation with `framer-motion` only where it improves UX.

Add images/assets:
- Store under `src/assets/` and import statically in components. Use optimized formats (SVG/WEBP) when possible.

Tweak loading behavior:
- `LoadingScreen` is controlled in `App.tsx` via `isLoading`. Adjust timeout or hook it to real async work if integrating data fetch.

Adjust scroll behavior:
- Smooth scroll is set once in `App.tsx` (`document.documentElement.style.scrollBehavior = 'smooth'`). Change here if you need custom scrolling.

## Projects Section

- File: `src/components/sections/Projects.tsx:1`
- Features:
  - Status and technology filters (chips) with multi-select techs
  - Deep-link modal support via `#project=ID` in URL hash
  - A11y: cards are keyboard-activatable; modal has dialog semantics and ESC close
  - Lazy-loaded grid images and background scroll lock when modal is open
- Add projects by extending the `projects` array, following the schema already present.

## Troubleshooting

- Missing styles: Check Tailwind `content` paths in `tailwind.config.js` include all your files.
- Wrong paths on deploy: Confirm `base` in `vite.config.ts` matches your hosting path.
- Type errors: Ensure new files live under `src/` so they’re included by `tsconfig.app.json`.
- Lint failures: Run `npm run lint` and follow messages; most come from unused imports/vars in strict mode.

## Quick File Pointers

- App composition: `src/App.tsx:19`
- Theme provider: `src/contexts/ThemeContext.tsx:1`
- Navigation: `src/components/ui/Navigation.tsx:1`
- Theme toggle: `src/components/ui/ThemeToggle.tsx:1`
- Sections index: `src/components/sections/*.tsx`
- Tailwind theme: `tailwind.config.js:1`
- Global CSS: `src/index.css:1`
- Vite base path: `vite.config.ts:7`
