# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the OpenFlowLabs company website built with Astro, a modern static site generator. The site uses server-side rendering (SSR) with Deno as the deployment adapter, Svelte for interactive components, TailwindCSS for styling, and MDX for blog content.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev
# or
npm start

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro ...
npm run astro --help
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with SSR mode
- **Deployment**: Deno adapter (@astrojs/deno)
- **Styling**: TailwindCSS with @tailwindcss/typography plugin
- **Components**: Svelte 5.x for reactive components
- **Content**: MDX for blog posts with frontmatter support
- **Map Integration**: Leaflet for interactive maps
- **Icons**: FontAwesome (local copy in src/fontawesome/)

### Path Aliases

TypeScript path aliases use the `$` prefix:
```typescript
import Component from '$components/Component.astro';
import { SITE_TITLE } from '$config';
import action from '$shared/actions/action.ts';
```

This maps `$*` to `src/*` (defined in tsconfig.json).

### Directory Structure

```
src/
├── components/          # Astro and Svelte components
│   ├── BaseHead.astro   # HTML head meta tags
│   ├── Header.astro     # Site header
│   ├── Footer.astro     # Site footer
│   ├── HeaderLink.astro # Navigation links
│   ├── Link.astro       # Custom link component
│   └── Map.svelte       # Leaflet map component
├── layouts/             # Page layouts
│   └── BlogPost.astro   # Blog post layout with metadata
├── pages/               # File-based routing (routes are auto-generated)
│   ├── index.astro      # Homepage
│   ├── blog.astro       # Blog listing page
│   ├── about.md         # About page
│   ├── rss.xml.js       # RSS feed generation
│   └── blog/            # Blog posts (MDX and Markdown)
├── shared/              # Shared utilities and actions
│   └── actions/         # Svelte actions
│       └── map.ts       # Leaflet map initialization
├── fontawesome/         # Local FontAwesome assets
├── config.ts            # Site configuration (SITE_TITLE, SITE_DESCRIPTION)
└── env.d.ts             # TypeScript environment types
```

### Component Patterns

**Astro Components**: Use `.astro` files for static content and layouts. Import paths with `$` prefix.

**Svelte Components**: Use for client-side interactivity. Load with `client:visible` directive for lazy loading:
```astro
<Map client:visible {location} zoom={15} markerMarkup="<p>Text</p>" />
```

**Svelte Actions**: The Map component uses a Svelte action (`use:setMap`) that dynamically imports Leaflet to reduce bundle size.

### Configuration

- **Site URL**: Set in `astro.config.mjs` (currently placeholder: `https://example.com`)
- **Tailwind**: Custom theme extends in `tailwind.config.cjs` (includes OFL logo background image)
- **Content**: Supports Markdown, MDX with sitemap and RSS feed generation

### Mapbox Integration

The site uses Leaflet with Mapbox tiles. The access token is hardcoded in `src/shared/actions/map.ts`. Mapbox configuration includes:
- Tile layer: `mapbox/streets-v11`
- Custom marker icons (imported from leaflet/dist/images)
- Popup support for markers

## Development Notes

- The site uses SSR (`output: "server"`) so pages are rendered on request
- Blog posts support both `.md` and `.mdx` formats with frontmatter (title, description, pubDate, updatedDate, heroImage)
- FontAwesome is bundled locally rather than using a CDN
- TailwindCSS scans all files in `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- Preview command uses Deno runtime to simulate production environment
