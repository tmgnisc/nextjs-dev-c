# Native Next.js Rebuild — Design

**Date:** 2026-06-20
**Status:** Approved (foundation pass)

## Goal

Remove the vendored WordPress/Elementor assets (`public/wp-content`, `public/wp-includes`)
and replace the Elementor-HTML pages with a real, senior-level Next.js component
architecture. This pass establishes the foundation and a set of reference pages;
the remaining routes are migrated incrementally afterward.

## Decisions (locked)

- **Scope:** Foundation + reference pages. Build the design system, component
  library, shared layout, and a typed content layer, plus six fully-native
  reference pages. Migrate the rest in later passes.
- **Visual direction:** Keep the existing brand — dark-navy background, blue→gold
  gradient accents, familiar section rhythm — rebuilt as intentional, responsive
  components.
- **Interim routes:** The ~28 not-yet-rebuilt routes render a clean, on-brand
  "coming soon" placeholder built with the new design system. No broken pages,
  no WordPress dependency.
- **Assets:** Delete `public/wp-content` and `public/wp-includes`. Relocate the
  ~50 real photos to `/public/images`. Remove all `dangerouslySetInnerHTML` and
  per-page Elementor CSS `<link>` loading.

## Tech

- Next.js 16 App Router, TypeScript strict (existing).
- Tailwind CSS v4 (already installed) via `@import "tailwindcss"`; brand tokens
  declared in `@theme`.
- `next/font` for Sora (display) + Inter (body) — self-hosted.
- No new runtime dependencies. A 3-line `cn()` helper for class merging.

## Design tokens (`@theme` in `globals.css`)

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0E1419` | page background |
| `--color-surface` | `#161D24` | cards/sections |
| `--color-surface-2` | `#1E2730` | elevated cards |
| `--color-brand` | `#3D7EAA` | primary blue |
| `--color-accent` | `#FFE47A` | gold |
| `--color-text` | `#F4F7FA` | body text |
| `--color-muted` | `#9DB0BF` | secondary text |
| gradient | `linear-gradient(90deg,#3D7EAA,#FFE47A)` | CTAs, highlights |
| radius | `--radius-pill: 100px`, `--radius-card: 22px` | |

## Folder structure

```
src/
  app/
    layout.tsx                       # fonts, <Header/>, <Footer/>, metadata from site config
    page.tsx                         # home
    about-us/page.tsx
    contact-us/page.tsx
    seo/page.tsx                     # service reference -> <ServicePage>
    project/seo-audits-reporting/page.tsx   # project reference -> <ProjectPage>
    team/sarah-mitchell/page.tsx     # team reference -> <TeamMemberPage>
    <other routes>/page.tsx          # <ComingSoon> placeholder
    globals.css                      # tailwind import + @theme tokens + base layer
  components/
    ui/        Button, Container, Section, Eyebrow, Heading, Card, Stat, Avatar, Badge
    layout/    Header, Nav, MobileMenu, Footer
    sections/  Hero, ServicesMarquee, StatsBand, FeatureGrid, ServiceList,
               Testimonials, CTASection, FAQ, ContactForm, TeamGrid, ComingSoon
    templates/ ServicePage, ProjectPage, TeamMemberPage
  content/
    site.ts        # brand, contact, social, footer columns
    nav.ts         # primary nav + services dropdown
    services.ts    # 15 services (slug, title, summary, features, faq…)
    projects.ts    # 6 case studies
    team.ts        # 4 members
    testimonials.ts
  lib/
    cn.ts
```

## Components & responsibilities

- **ui/** — presentational primitives, no data. `Button` (variants:
  primary/ghost/link, gradient pill), `Container` (max-width + gutters),
  `Section` (vertical rhythm + optional eyebrow/heading), `Card`, `Stat`,
  `Eyebrow`, `Heading`, `Avatar`, `Badge`.
- **layout/** — `Header` (logo + `Nav` + CTA), `Nav`/`MobileMenu` (active state
  via `usePathname`, driven by `content/nav.ts`), `Footer` (driven by
  `content/site.ts`).
- **sections/** — composed, reusable page sections. Each takes typed props and
  renders one band of a page. `ComingSoon` is a self-contained placeholder.
- **templates/** — full page bodies for the repeating types, each taking a
  single typed content object and composing sections.

## Data flow

Routes are thin. A route either composes sections directly (home/about/contact)
or renders a template with one content record:

```tsx
// app/seo/page.tsx
import { services } from '@/content/services';
import ServicePage from '@/components/templates/ServicePage';
export default function Page() {
  return <ServicePage service={services.find(s => s.slug === 'seo')!} />;
}
```

Content lives in typed modules under `content/`. Each domain exports a typed
array/record plus a `Type`. This is the single source of truth and what later
passes extend (and what dynamic routes will iterate).

## Reference pages (this pass)

1. `/` — Hero, ServicesMarquee, StatsBand, FeatureGrid, Testimonials, CTASection
2. `/about-us` — Hero, StatsBand, FeatureGrid, TeamGrid (preview), CTASection
3. `/contact-us` — Hero, ContactForm (client component, accessible, validated), info cards
4. `/seo` — `ServicePage` (hero, overview, FeatureGrid, FAQ, CTA)
5. `/project/seo-audits-reporting` — `ProjectPage` (hero, summary, results stats, gallery)
6. `/team/sarah-mitchell` — `TeamMemberPage` (bio, skills, contact)

All other routes: `<ComingSoon>` section inside the standard layout.

## Content

Professional copy for a Nepal-based digital growth/marketing studio (matching the
existing service set: SEO, PPC, Content Marketing, Data & Analytics, CRO, Website
Development). Brand name **Dev Community Nepal**. No lorem ipsum.

## Quality bar

- Mobile-first responsive (single breakpoint system from Tailwind).
- Keyboard accessible: visible focus, semantic landmarks, labelled form controls.
- `prefers-reduced-motion` respected for all transitions/marquee.
- No `dangerouslySetInnerHTML`. No runtime WordPress dependency.
- `npm run build` passes; all routes prerender static.

## Out of scope (later passes)

- Full content for the remaining 28 routes.
- Converting per-route service/project/team pages to dynamic `[slug]` routes
  (the data layer is built to support it; URLs preserved for now).
- CMS integration, blog post content, search.

## Migration / cleanup steps

1. Wire Tailwind + tokens + fonts; add `cn()`.
2. Build `ui/`, then `layout/`, then `sections/`, then `templates/`.
3. Author `content/` modules.
4. Build the six reference pages; convert all other routes to `<ComingSoon>`.
5. Relocate needed photos to `/public/images`; update references.
6. Delete `public/wp-content` and `public/wp-includes`; remove the
   `components/layout/markup/*` Elementor blobs and `ElementorStyles`.
7. `npm run build` + screenshot verification.
