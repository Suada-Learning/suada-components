# Suada Components

## Project Overview

Shared React UI component library consumed by `suada-students`, `suada-admin`, and other Suada front-ends. Built as an npm package with TypeScript, MUI, and styled-components. Bundled with Rollup, dev-previewed with Vite, documented with Storybook.

- **Package name**: `suada-components`
- **Version**: 1.2.1
- **Type**: ESM (`"type": "module"`)
- **License**: MIT
- **Repository**: github.com/Suada-Learning/suada-components

## Commit Cards (on request only)

Do **not** auto-emit a Commit Card at the end of every response. Only print one when the user explicitly asks (e.g. "give me a branch name", "what should I commit this as", "draft the Trello card") — at that point run the `/commit-card` slash command or invoke the `commit-card` / `suada-commit-card` skill, which prints the four-block branch / commit / Trello-title / Trello-description format. This library is consumed by multiple downstream apps — when you do print a card, flag any breaking change in the Trello `**Risk / regressions**` line. Print-only: never run `git checkout`, `git commit`, `git push`, `npm publish`, `yarn version:*`, or hit any Trello API unless explicitly asked.

## Comment Style (strict)

- **Keep code comments short.** One line max in the common case. Never multi-paragraph blocks above components, styled-components, or hooks.
- **Only comment the WHY, not the WHAT.** Skip comments that just restate the code.
- **Never leave "removed" / "deleted" / "previously had" / "was X, now Y" breadcrumbs.** Delete code cleanly. Git history is the source of truth.
- **Do not narrate refactors in comments.** No `// moved from`, `// renamed from`, `// refactored to use`.

## Tech Stack

- **Framework**: React 18.2 + TypeScript 5.7
- **Bundler**: Rollup 4 (publish output) + Vite 6 (dev/preview)
- **UI**: MUI 5 (`@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers`)
- **CSS**: Emotion 11, styled-components 6.1, SASS 1.83
- **Forms**: Formik 2.4
- **i18n**: i18next 24 + react-i18next 15
- **Date**: date-fns 2.30, moment 2.30
- **Media**: react-player 2.16, video-react 0.16, hls.js 1.5
- **Storybook**: 8.5

## Directory Structure

```
src/
├── components/     # Library components (exported)
├── helperFunctions/
├── icons/          # SVG icon components
├── theme/          # Theme tokens
├── types/          # Shared types
├── global.styles.tsx
└── index.ts        # Package entry point
```

Build output goes to `dist/`. Published files: `dist/**` + `svg/**`.

## Commands

```bash
yarn dev              # Vite dev server for local preview
yarn build            # Rollup build + tsc + copy-files (publishable output)
yarn lint             # ESLint
yarn preview          # Preview built site
yarn storybook        # Start Storybook on port 6006
yarn build-storybook  # Build static Storybook
yarn version:patch    # Bump patch version (CI uses semantic-release)
yarn version:minor    # Bump minor version
yarn version:major    # Bump major version
```

## Exports

Three entry points (see `package.json` → `exports`):

- `suada-components` → main library
- `suada-components/components` → components subpath
- `suada-components/icons` → icons subpath

## Commit Convention

Conventional commits. Release automation via `semantic-release` (`@semantic-release/changelog`, `@semantic-release/git`, `@semantic-release/github`, `@semantic-release/npm`). Bumping the version of a published package will propagate to downstream apps when they `yarn upgrade suada-components`.
