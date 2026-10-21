# Lumos Frontend

Frontend skeleton for the Cooking landing page. No screens or design-specific
components have been implemented. The root route intentionally renders a blank
page.

## Stack

- Next.js App Router
- React and TypeScript (strict mode)
- Tailwind CSS v4
- ESLint with Next.js rules
- Yarn Classic 1.22.22

## Requirements

- Node.js 22 or newer (an active LTS release is recommended)
- Yarn Classic 1.22.22

## Getting started

```bash
yarn install --frozen-lockfile
yarn dev
```

Open http://localhost:3000. No environment variables or backend services are
required.

## Commands

| Command | Purpose |
| --- | --- |
| `yarn dev` | Start the development server |
| `yarn lint` | Check ESLint rules; warnings fail the check |
| `yarn typecheck` | Generate route types and check TypeScript |
| `yarn build` | Build for production |
| `yarn start` | Serve a production build (run `yarn build` first) |

## Structure (MVC adapted for Next.js)

```text
public/                 Static assets
src/
  app/
    globals.css         Tailwind import and baseline global styles
    layout.tsx          Root HTML layout and metadata
    page.tsx            Route entry point; connects controller and view
  controllers/
    home.controller.ts  Maps model data to a view model
  models/
    home.model.ts       Domain types and static example data
  views/
    pages/
      home/
        home-page.tsx   Blank home page presentation
    components/         Shared UI components
  lib/                  Shared utilities when implementation begins
```

### Responsibilities and dependency direction

- `app/`: Next.js routes, framework layouts, metadata, and route configuration.
  Route entry points invoke controllers and pass their results to page views.
- `models/`: domain types and data access, independent of React and view code.
- `controllers/`: coordinate model access and prepare typed view models.
  Controllers contain no JSX and do not import views.
- `views/pages/`: page-level presentation, receiving data through props.
  Views do not fetch model data or call controllers; importing a view-model
  type with `import type` is allowed.
- `views/components/`: reusable presentational components. Components specific
  to one page can live in a `components/` folder alongside that page.
- `lib/`: shared non-UI utilities; add helpers only when needed.

There is intentionally no `src/pages/`: Next.js reserves that directory for
the Pages Router, while this project uses the App Router.

### Example MVC flow

```text
app/page.tsx
  -> controllers/home.controller.ts
    -> models/home.model.ts
  -> views/pages/home/home-page.tsx (receives the view model as props)
```

The model returns a static `Home` record with the name `Cooking`. The controller
derives `mainLabel`, and the page view uses it as the empty `<main>` element's
accessible label. This demonstrates the complete flow without introducing
visible content, backend calls, or a sample business feature. The static data
is illustrative, not a backend integration or an error fallback.

When adding a page, create its model/controller as needed, add its page view
under `views/pages/`, and connect them in the appropriate `app/` route.
Do not add empty controller/model layers for purely presentational components.
For interactive client-side flows, use dedicated controller hooks when needed;
server credentials and privileged data access must remain on the server.

The `@/*` import alias maps to `src/*`. Components use React Server Components
by default; add `"use client"` only when browser APIs or interactivity require
it. System fonts are used for now, so builds do not download Google Fonts.

## Design reference

[Cooking Landing Page on Figma](https://www.figma.com/design/0dIvwSxVwTtVdPnHVKV6AN/Cooking-Landing-Page?node-id=0-1)

Design tokens, fonts, images, page sections, routing beyond the root route, and
API integration are intentionally deferred. No design details have been
extracted from Figma during this initialization.
