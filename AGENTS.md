# Repository Guidelines

## Project Structure & Module Organization

This repository is a single-page React portfolio built with TypeScript and Vite. Application entry points are `src/main.tsx` and `src/App.tsx`. Put page sections in `src/sections/`, reusable UI in `src/components/`, structured portfolio content in `src/data/`, and shared TypeScript types in `src/types/`. Store imported images and other source assets in `src/assets/`. Files served directly without bundling, including `robots.txt` and `sitemap.xml`, belong in `public/`.

## Build, Test, and Development Commands

- `npm run dev` starts the Vite development server.
- `npm run build` runs TypeScript project checks, then creates a production build in `dist/`.
- `npm run preview` serves the production build locally; run `npm run build` first.
- `npm run lint` runs ESLint across the repository.

There is currently no test script or test framework configured. For a change, run the build and lint commands that cover the affected code.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing four-space indentation and double-quoted imports/strings. Name components and section files in PascalCase (for example, `ProjectCard.tsx` and `About.tsx`); use lower camel case for local variables and functions. Keep page-specific content in its section and extract a component when it is reusable. Style with the existing Tailwind CSS utility classes; global styles belong in `src/index.css`. ESLint is the configured style and correctness check; no formatter is configured.

## Testing Guidelines

No automated tests or coverage requirements are currently defined. Before submitting UI changes, run `npm run lint` and `npm run build`. Manually check responsive layouts and navigation in the browser when a change affects presentation or interaction.

## Commit & Pull Request Guidelines

Recent commits use short, lowercase, descriptive summaries (for example, `seo` or `styling redesign`). Keep commit subjects concise and focused on one change. Pull requests should explain the user-visible change, list relevant verification commands, and include screenshots for visual updates. Link an issue when one exists; call out any changed metadata, URLs, or deployment assumptions.

## Configuration & Content

Do not commit secrets or local environment files. When changing the deployed site URL, update related canonical/social metadata in `index.html` and the sitemap reference in `public/robots.txt` and `public/sitemap.xml` together.
