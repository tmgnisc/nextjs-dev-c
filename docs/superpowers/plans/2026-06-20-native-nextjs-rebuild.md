# Native Next.js Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the vendored WordPress/Elementor pages with a native Next.js component architecture (design system + component library + typed content layer), ship six reference pages, and delete `public/wp-content`.

**Architecture:** Tailwind v4 design tokens drive a small `ui/` primitive library; `layout/` and `sections/` compose those; `templates/` build the repeating page types from typed `content/` modules; routes stay thin. Non-rebuilt routes render a `ComingSoon` section. No `dangerouslySetInnerHTML`.

**Tech Stack:** Next.js 16 App Router, TypeScript (strict), Tailwind CSS v4, `next/font` (Sora + Inter), no new runtime deps.

## Global Constraints

- Next.js 16 App Router; TypeScript strict; React 19.
- Tailwind CSS v4 via `@import "tailwindcss"`; brand tokens in `@theme`.
- No new runtime dependencies. `cn()` helper for class merging.
- Brand name: **Dev Community Nepal**. No lorem ipsum — professional copy for a Nepal-based digital growth studio.
- Palette: ink `#0E1419`, surface `#161D24`, surface-2 `#1E2730`, brand `#3D7EAA`, accent `#FFE47A`, text `#F4F7FA`, muted `#9DB0BF`. Gradient `linear-gradient(90deg,#3D7EAA,#FFE47A)`.
- Accessibility: visible focus, semantic landmarks, labelled controls, `prefers-reduced-motion` respected.
- Verification per task: `npx tsc --noEmit` passes; at integration tasks `npm run build` passes and screenshots reviewed.

---

### Task 1: Tailwind foundation — tokens, fonts, base layer, `cn()`

**Files:**
- Rewrite: `src/app/globals.css`
- Modify: `src/app/layout.tsx` (fonts + remove WP global `<link>`s/scripts; keep `<Header/>`/`<Footer/>` once Task 4 lands — for now render `{children}`)
- Create: `src/lib/cn.ts`

**Interfaces:**
- Produces: `cn(...classes)` → `string`; CSS custom properties/utilities from `@theme` (e.g. `bg-ink`, `text-accent`, `bg-surface`, `rounded-pill`, `rounded-card`, `bg-brand-gradient`).

- [ ] **Step 1: `cn()` helper**
```ts
// src/lib/cn.ts
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
```
- [ ] **Step 2: globals.css** — `@import "tailwindcss";` then `@theme { --color-ink:#0E1419; --color-surface:#161D24; --color-surface-2:#1E2730; --color-brand:#3D7EAA; --color-accent:#FFE47A; --color-text:#F4F7FA; --color-muted:#9DB0BF; --radius-card:22px; --font-display: var(--font-sora); --font-sans: var(--font-inter); }`. Add a base layer: `body{ background:var(--color-ink); color:var(--color-text); font-family:var(--font-sans);}`, `.bg-brand-gradient{ background-image:linear-gradient(90deg,#3D7EAA,#FFE47A);}`, focus-visible ring, `@media (prefers-reduced-motion: reduce)` reset. Remove all old Elementor overrides.
- [ ] **Step 3: layout.tsx fonts** — `import { Sora, Inter } from 'next/font/google'` with `variable: '--font-sora' / '--font-inter'`, apply both variables to `<html className>`. Remove the `GLOBAL_STYLES` WP `<link>` array and jQuery `<script>`s. Keep `<body>{children}</body>` for now (Header/Footer added in Task 4).
- [ ] **Step 4: Verify** — `npx tsc --noEmit` passes; `npm run dev` renders a dark page with the new font (a temporary `app/page.tsx` heading is fine).
- [ ] **Step 5: Commit** — `feat: tailwind v4 design tokens, fonts, cn helper`

---

### Task 2: UI primitives

**Files:**
- Create: `src/components/ui/{Container,Section,Eyebrow,Heading,Button,Card,Stat,Avatar,Badge}.tsx`

**Interfaces (Produces):**
- `Container({children, className})` — `max-w-[1200px] mx-auto px-5 md:px-8`.
- `Section({children, className, id})` — `<section>` with `py-20 md:py-28`.
- `Eyebrow({children})` — pill label, uppercase, gold-tinted border.
- `Heading({as='h2', children, className})` — display font, responsive scale.
- `Button({href?, variant='primary'|'ghost'|'link', children, className})` — renders `<a>` (next/link if internal). primary = gradient pill, dark ink text, hover lift.
- `Card({children, className})` — `bg-surface rounded-card border border-white/10 p-6`.
- `Stat({value, label})` — big gradient number + muted label.
- `Avatar({src, alt, size})`; `Badge({children})`.

- [ ] **Step 1:** Implement each primitive (presentational, typed props, `cn()` for class merging, forward `className`). `Button` uses `next/link` when `href` starts with `/`.
- [ ] **Step 2: Verify** — `npx tsc --noEmit` passes. Temporary smoke page renders one of each.
- [ ] **Step 3: Commit** — `feat: ui primitive component library`

---

### Task 3: Typed content layer

**Files:**
- Create: `src/content/{site,nav,services,projects,team,testimonials}.ts`

**Interfaces (Produces):**
- `site: { name; tagline; description; email; phone; address; socials: {label;href}[]; footerColumns: {title; links:{label;href}[]}[] }`
- `nav: { label; href }[]`
- `services: Service[]` where `Service = { slug; title; tagline; summary; features:{title;body}[]; faq:{q;a}[]; image }` (15 entries; real slugs: `seo, ppc, content-marketing, data-and-analytics, cro, website-development, ai-geo, ecommerce-seo, google-ads, local-seo, organic-search-growth, search-engine-optimization, seo-content-marketing, seo-strategy-execution, branding-identity`).
- `projects: Project[]` = `{ slug; client; title; summary; results:{value;label}[]; image; gallery }` (6).
- `team: Member[]` = `{ slug; name; role; bio; skills:{label;level}[]; image; socials }` (4).
- `testimonials: { quote; name; role; avatar }[]`.

- [ ] **Step 1:** Author the typed modules with `export type` + `export const`. Real, concise professional copy. Image paths point to `/images/...` (relocated in Task 8). For services/projects/team not built as reference pages this pass, a title + summary is enough (used by lists/`ComingSoon`).
- [ ] **Step 2: Verify** — `npx tsc --noEmit` passes.
- [ ] **Step 3: Commit** — `feat: typed content layer (site, nav, services, projects, team)`

---

### Task 4: Layout — Header, Nav, MobileMenu, Footer

**Files:**
- Create: `src/components/layout/{Header,Nav,MobileMenu,Footer}.tsx`
- Modify: `src/app/layout.tsx` (render `<Header/>{children}<Footer/>`)

**Interfaces:**
- Consumes: `site`, `nav` from `content/`; `ui/` primitives.
- `Nav` is a client component (`usePathname` for active link). `MobileMenu` client (toggle). `Header`/`Footer` server components.

- [ ] **Step 1:** `Header` = logo wordmark (Container) + `Nav` + primary `Button` CTA ("Get Started"). Sticky, `bg-ink/80 backdrop-blur` with bottom hairline.
- [ ] **Step 2:** `Nav` maps `nav`; active item (matches `usePathname`) gets gradient underline/accent. `MobileMenu` shows a hamburger < md, slide-down panel.
- [ ] **Step 3:** `Footer` from `site.footerColumns` + contact + socials + copyright.
- [ ] **Step 4:** Wire into `layout.tsx`.
- [ ] **Step 5: Verify** — `npm run build` passes; screenshot home shows header+footer, mobile menu toggles.
- [ ] **Step 6: Commit** — `feat: native header, nav, footer`

---

### Task 5: Page sections

**Files:**
- Create: `src/components/sections/{Hero,ServicesMarquee,StatsBand,FeatureGrid,ServiceList,Testimonials,CTASection,FAQ,ContactForm,TeamGrid,ComingSoon}.tsx`

**Interfaces (Produces):** each takes typed props and renders one band.
- `Hero({eyebrow,title,highlight,subtitle,cta,image?})`
- `ServicesMarquee({items})` — CSS-animated marquee, pauses on reduced-motion.
- `StatsBand({stats})`; `FeatureGrid({items, columns})`
- `ServiceList({services})` — cards linking to each service.
- `Testimonials({items})`; `CTASection({title,body,cta})`
- `FAQ({items})` — accessible `<details>`-based accordion.
- `ContactForm()` — client component; controlled fields, required validation, accessible labels, success state. No backend (logs/console + success message).
- `TeamGrid({members})`; `ComingSoon({title})` — on-brand placeholder with back-home CTA.

- [ ] **Step 1:** Implement sections using `ui/` primitives.
- [ ] **Step 2: Verify** — `npx tsc --noEmit`; smoke page renders each section.
- [ ] **Step 3: Commit** — `feat: page section components`

---

### Task 6: Page templates

**Files:**
- Create: `src/components/templates/{ServicePage,ProjectPage,TeamMemberPage}.tsx`

**Interfaces:**
- Consumes: `Service`, `Project`, `Member` types; sections.
- `ServicePage({service})`, `ProjectPage({project})`, `TeamMemberPage({member})`.

- [ ] **Step 1:** `ServicePage` = Hero + overview + `FeatureGrid(service.features)` + `FAQ(service.faq)` + `CTASection`. `ProjectPage` = Hero + summary + `StatsBand(project.results)` + gallery. `TeamMemberPage` = bio + skills bars + contact.
- [ ] **Step 2: Verify** — `npx tsc --noEmit`.
- [ ] **Step 3: Commit** — `feat: service/project/team page templates`

---

### Task 7: Reference pages + ComingSoon routing

**Files:**
- Rewrite: `src/app/page.tsx`, `src/app/about-us/page.tsx`, `src/app/contact-us/page.tsx`, `src/app/seo/page.tsx`, `src/app/project/seo-audits-reporting/page.tsx`, `src/app/team/sarah-mitchell/page.tsx`
- Rewrite (to `<ComingSoon>`): all other `src/app/**/page.tsx`

**Interfaces:** Consumes templates, sections, content.

- [ ] **Step 1:** Home composes Hero + ServicesMarquee + StatsBand + FeatureGrid + ServiceList + Testimonials + CTASection. About composes Hero + StatsBand + FeatureGrid + TeamGrid + CTA. Contact composes Hero + ContactForm + info cards.
- [ ] **Step 2:** Reference template pages pull their record: `<ServicePage service={services.find(s=>s.slug==='seo')!} />`, etc.
- [ ] **Step 3:** Every other route file becomes `export default function Page(){ return <ComingSoon title="..." /> }` with a fitting title from content. Each keeps its own `metadata`.
- [ ] **Step 4: Verify** — `npm run build` passes (all 34 routes); screenshot the 6 reference pages + one ComingSoon.
- [ ] **Step 5: Commit** — `feat: six native reference pages + coming-soon routes`

---

### Task 8: Asset cleanup

**Files:**
- Move: photos from `public/wp-content/uploads/**` → `public/images/**` (only ones referenced in `content/`)
- Delete: `public/wp-content`, `public/wp-includes`
- Delete: `src/components/layout/markup/`, `src/components/layout/ElementorStyles.tsx`, `src/components/layout/SiteStyles.tsx` (Elementor-era), and any now-unused `Header`/`Footer` markup variants superseded by Task 4.

- [ ] **Step 1:** Identify referenced images via `grep -ro "/images/[^\"']*" src/content`; copy the matching source photos into `public/images/`.
- [ ] **Step 2:** Delete the WP folders and dead Elementor components/markup.
- [ ] **Step 3: Verify** — `grep -rn "wp-content\|dangerouslySetInnerHTML\|ElementorStyles" src` returns nothing; `npm run build` passes; screenshots unchanged.
- [ ] **Step 4: Commit** — `chore: remove WordPress assets and Elementor scaffolding`

---

### Task 9: Final verification

- [ ] **Step 1:** `npm run build` — all routes static, no errors.
- [ ] **Step 2:** `npx tsc --noEmit` clean; `npm run lint` no new errors.
- [ ] **Step 3:** Screenshot home, about, contact, /seo, project ref, team ref, one ComingSoon (desktop + mobile). Confirm brand, responsiveness, focus states.
- [ ] **Step 4:** Confirm `public/` contains only `images/` (+ favicon). Commit any fixups.

## Self-Review

- **Spec coverage:** tokens/fonts (T1), ui (T2), content (T3), layout (T4), sections (T5), templates (T6), reference pages + ComingSoon (T7), asset deletion + image relocation (T8), build/a11y/responsive verification (T9). All spec sections covered.
- **Placeholder scan:** none — each task names exact files, interfaces, and concrete code/criteria.
- **Type consistency:** `Service/Project/Member` types defined in T3 are consumed by T6/T7 with matching names; `cn` (T1) used throughout; section prop names fixed in T5 and reused in T6/T7.
