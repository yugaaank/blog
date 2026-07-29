# ygnk.dev — Personal Blog & Portfolio

A personal website for a blog, a projects page, and an about section. Built with the Next.js 16 App Router. This site is deployed on Vercel. The whole thing runs on Bun as the package manager and bundler runtime.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Architecture](#architecture)
5. [Project Structure](#project-structure)
6. [Content Model](#content-model)
7. [UI Components](#ui-components)
8. [Configuration](#configuration)
9. [Development](#development)
10. [Build & Deployment](#build--deployment)
11. [Adding a New Blog Post](#adding-a-new-blog-post)
12. [Adding a New Project](#adding-a-new-project)
13. [Design System](#design-system)
14. [Infrastructure](#infrastructure)
15. [License](#license)

---

## Overview

ygnk.dev is a personal project I put together. Its basically a Next.js 16 App Router app. It hosts a technical blog, a projects showcase, and an about/contact page. The blog posts are written in MDX. Framer Motion and GSAP handle the animations. Tailwind CSS v4 does the styling.

The project followts a content-driven architecture. Blog posts are defined as typed TypeScript arrays. Project data is also defined as typed TypeScript arrays. Everything renders as static pages at build time. There is also an RSS feed and a sitemap that work out of the box. The RSS feed is at `/feed.xml`. The sitemap is at `/sitemap.xml`.

So basically its a static site with dynamic-ish features. The sitemap updates on rebuild. The feed updates on rebuild too. Nothing runs at request time for content pages.

---

## Features

- **Blog** — MDX-based blog with syntax-highlighted code blocks, table support, and structured metadata.
- **Projects** — Project detail pages with overview, tech stack, timeline, features, challenges, future plans, and links.
- **Blog-Project Linking** — Blog posts can reference related projects. Project pages show linked posts automatically.
- **RSS Feed** — Auto-generated XML feed at `/feed.xml`. It lists all blog posts sorted by date.
- **Sitemap** — Auto-generated sitemap at `/sitemap.xml` with change frequencies and priorities.
- **Animations** — GSAP ScrambleText for on-hover text scrambling. Framer Motion for animated background patterns.
- **Dark Theme** — Dracula-inspired color palette with structural border-based layout divions.
- **Responsive Design** — Mobile-first responsive layout using Tailwind CSS breakpoints.
- **Static Generation** — All pages are statically generated at build time via `generateStaticParams`.

---

## Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 16.2.10 | App Router, SSG, routing, metadata |
| Language | TypeScript | 5.x | Type-safe code |
| Runtime | React | 19.2.4 | Component rendering |
| Styling | Tailwind CSS | v4 | Utility-first CSS with `@theme` custom properties |
| Animations | Framer Motion | ^12 | Background pattern animations |
| Animations | GSAP + ScrambleText Plugin | ^3.15.0 | Text scrambling on hover |
| Content | MDX | via `next-mdx-remote` | Blog post authoring with JSX |
| Fonts | Google Fonts | — | JetBrains Mono (code), Geist (UI), Merriweather (editorial) |
| Bundler | Bun | — | Package manager and runtime |
| Deploy | Vercel | — | Hosting |

---

## Architecture

### Rendering Model

The application uses Static Site Generation (SSG). All blog and project pages are pre-rendered at build time using `generateStaticParams`. No server-side rendering or client-side data fetching is used for content pages.

### Content Flow

```
content/blog/*.mdx    → read at build time via fs.readFileSync
app/blog/posts.ts     → typed Post[] array (source of truth for post metadata)
app/blog/[slug]/page.tsx → compiles MDX source with compileMDX, renders HTML
```

```
app/projects/projects.ts   → typed Project[] array (source of truth for projects)
app/projects/[slug]/page.tsx → renders project details, features, timeline, links
```

### Infrastructure Routes

| Route | File | Output |
|-------|------|--------|
| `/feed.xml` | `app/feed.xml/route.ts` | RSS 2.0 XML feed |
| `/sitemap.xml` | `app/sitemap.ts` | XML sitemap |

---

## Project Structure

```
blog/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, navbar, footer, dot pattern)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind @theme, custom CSS variables, animations
│   ├── mdx-components.tsx         # MDX component overrides (h1-h6, code, blockquote, table, etc.)
│   ├── sitemap.ts                 # Sitemap generator
│   ├── feed.xml/
│   │   └── route.ts              # RSS feed route
│   ├── blog/
│   │   ├── layout.tsx            # Blog section layout (wraps children in <main>)
│   │   ├── page.tsx              # Blog list page with time-grouped post listing
│   │   ├── posts.ts              # Post interface and posts[] data array
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page (MDX compilation, related projects)
│   ├── projects/
│   │   ├── page.tsx              # Projects list page
│   │   ├── projects.ts           # Project interface and projects[] data array
│   │   └── [slug]/
│   │       └── page.tsx          # Individual project detail page
│   └── components/               # Shared app components
│       ├── Navbar.tsx            # Sticky navigation bar
│       ├── Footer.tsx            # Site footer with social links
│       ├── HeroTitle.tsx         # Animated hero heading on home page
│       ├── ScrambledHeading.tsx  # Heading wrapper with ScrambleText effect
│       ├── AnimatedFavicon.tsx   # Injects static SVG favicon via <Head>
│       └── ScrambledText/
│           ├── ScrambledText.jsx   # GSAP ScrambleText effect component
│           └── ScrambledText.css   # CSS for scrambled text blocks
├── components/
│   └── ui/                       # Reusable UI primitives
│       ├── dot-pattern.tsx       # Radial-gradient dot background pattern
│       └── falling-pattern.tsx   # Framer Motion animated falling gradient background
├── content/
│   └── blog/                     # MDX blog post source files
│       ├── my-first-post.mdx
│       ├── asm-is-hard.mdx
│       └── i-built-shy.mdx
├── lib/
│   └── utils.ts                  # `cn()` utility for conditional class name joining
├── public/
│   └── favicon.svg               # Site favicon (SVG)
├── next.config.ts                # Next.js configuration (currently empty)
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.mjs             # ESLint config (Next.js core-web-vitals + TypeScript)
├── postcss.config.mjs            # PostCSS config (Tailwind CSS v4 plugin)
├── package.json                  # Dependencies and scripts
├── VISION.md                     # Long-term project vision and roadmap
└── README.md                     # This file
```

---

## Content Model

### Post

Each blog post is defined in `app/blog/posts.ts` as a `Post` object:

```typescript
interface Post {
  slug: string;           // URL-safe identifier, maps to content/blog/<slug>.mdx
  title: string;          // Display title
  description: string;    // Short description shown on list pages
  date: string;           // ISO 8601 date (YYYY-MM-DD)
  relatedProjects?: string[]; // Optional slugs of related Project objects
}
```

Blog post source files live in `content/blog/` as `.mdx` files. The slug from `posts.ts` maps to the filename: `<slug>.mdx`. The content is read at request time via `fs.readFileSync` and compiled using `compileMDX` from `next-mdx-remote/rsc`.

### Project

Each project is defined in `app/projects/projects.ts` as a `Project` object:

```typescript
interface Project {
  slug: string;           // URL-safe identifier
  title: string;          // Display title
  summary: string;        // One-line description
  description: string;    // Full description
  techStack: string[];    // Technologies used
  github?: string;        // GitHub repository URL
  demo?: string;          // Live demo URL
  date: string;           // ISO 8601 date
  tags: string[];         // Category tags
  relatedPosts?: string[];// Optional slugs of related Post objects
  challenges: string[];   // Challenges encountered
  features: string[];     // Implemented features
  future: string[];       // Planned future improvements
  timeline: {             // Project timeline entries
    phase: string;
    date: string;
    desc: string;
  }[];
}
```

---

## UI Components

### Navbar (`app/components/Navbar.tsx`)

Sticky top navigation bar with links to Blog, Projects, and Portfolio. Uses the `ScrambledText` component for animated link text. Separators between links are vertial border lines.

### Footer (`app/components/Footer.tsx`)

Site footer with social media links (GitHub, X, LinkedIn, Instagram, Portfolio) and a copyright notice. The year auto-updates via `new Date().getFullYear()`.

### HeroTitle (`app/components/HeroTitle.tsx`)

Large hero heading on the home page using the `ScrambledText` component with a higher radius and duration for a more dramatic effect.

### ScrambledHeading (`app/components/ScrambledHeading.tsx`)

Reusable heading component that wraps content in the GSAP ScrambleText animation. It accepts an `as` prop to render as any heading level (`h1`–`h6`).

### ScrambledText (`app/components/ScrambledText/ScrambledText.jsx`)

Core animation component that uses GSAP's ScrambleTextPlugin. On mouse movement within a radius, each character in the text scrambles and then resolves to its correct value. Props:

- `radius` — distance (px) from the cursor where scrambling activates (default: 100)
- `duration` — scramble animation duration in seconds (default: 1.2)
- `speed` — scramble speed (default: 0.5)
- `scrambleChars` — characters used in the scramble pattern (default: `".:"`)

### DotPattern (`components/ui/dot-pattern.tsx`)

CSS-based dot background pattern using `radial-gradient`. Supports static, pulsed, and staggered multi-layer varients. Props control color, spacing, dot size, and animation.

### FallingPattern (`components/ui/falling-pattern.tsx`)

Framer Motion animated background with layered radial gradients that scroll downward continuously. Creates a "falling" visual effect. Props control color, blur intensity, density, and animation duration.

---

## Configuration

### Tailwind CSS v4

Tailwind v4 uses the `@theme` directive in `app/globals.css` for custom configuration. There is no separate `tailwind.config.*` file. The theme defines CSS custom properties for all colors and fonts.

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-bg` | `#121316` | Page background |
| `--color-fg` | `#f7f7f2` | Foreground text |
| `--color-muted` | `#7a7a7a` | Muted/secondary text |
| `--color-surface` | `#1a1b1f` | Card/surface backgrounds |
| `--color-border` | `#555` | Border color |
| `--color-accent` | `#bd93f9` | Accent (purple, Dracula-inspired) |
| `--color-pink` | `#ff79c6` | Inline code text |
| `--color-green` | `#96ce98` | Labels, active states |
| `--color-orange` | `#ffb86c` | Warnings/highlights |
| `--color-red` | `#ff5555` | Error/challenge indicators |
| `--color-cyan` | `#8be9fd` | Code syntax |
| `--color-yellow` | `#f1fa8c` | Highlights |

Fonts configured in `@theme`: Geist (UI), Merriweather (serif/editorial), and JetBrains Mono (code, applied globally on `<html>`).

### ESLint

Uses `eslint-config-next` with two extension configs: `core-web-vitals` and `typescript`. It ignores standard Next.js output directories like `.next/` and `out/`. The config is in `eslint.config.mjs`.

### PostCSS

Single plugin only: `@tailwindcss/postcss`. No autoprefixer or additional plugins. The config is in `postcss.config.mjs`.

### TypeScript

Standard Next.js + React 19 types are used. There are no custom strict flags beyond what Next.js provides by default. The config is in `tsconfig.json`.

---

## Development

### Prerequisites

You need [Bun](https://bun.sh) installed. Bun is both the package manager and the runtime for this project. Node.js is not required for development.

### Setup

1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the development server:
   ```bash
   bun run dev
   ```
3. Open `http://localhost:3000` in a browser.

### Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun run dev` | Start Next.js development server |
| `build` | `bun run build` | Create production build |
| `start` | `bun start` | Start production server |
| `lint` | `eslint` | Run ESLint on the project |

---

## Build & Deployment

The project uses `bun run build` to create a production build. The output is a `.next` directory containing the rendered pages. By default, Next.js is configured for static export-like behavior. All pages are generated at build time.

### Deployment Options

- **Vercel** — This is the recommended deployment target. It provides automatic builds and deployments from Git.
- **Any Node.js-compatible host** — Build the project and serve the `.next`输出, or export as static HTML.

The site is currently deployed at `yugank.vercel.app` and `ygnk.dev`.

---

## Adding a New Blog Post

1. Create a new MDX file in `content/blog/` using the slug as the filename:
   ```
   content/blog/my-new-post.mdx
   ```

2. Add an entry to the `posts` array in `app/blog/posts.ts`:
   ```typescript
   {
     slug: "my-new-post",
     title: "My New Post",
     description: "A short summary of the post",
     date: "2026-07-30",
   }
   ```

3. Write the post content in MDX. Supported elements are headings (`#`–`###`), paragraphs, lists, code blocks (`` ``` ``), inline code (`` ` ``), blockquotes (`>`), tables, bold, and italic.

4. If the post is related to a project, add the project's `slug` to the `relatedProjects` field.

5. Rebuild the project to generate the new page.

---

## Adding a New Project

1. Add an entry to the `projects` array in `app/projects/projects.ts` with all required fields (`slug`, `title`, `summary`, `description`, `techStack`, `tags`, `challenges`, `features`, `future`, `timeline`).

2. Optionally add `github` and/or `demo` URLs for links on the project page.

3. Optionally add `relatedPosts` with slugs of blog posts that discuss the project.

4. Rebuild the project to generate the new project page.

---

## Design System

### Color Palette

The site uses a Dracula-inspired dark color palette:

- **Background**: `#121316` — near-black with a slight blue undertone
- **Foreground**: `#f7f7f2` — off-white for primary text
- **Muted**: `#7a7a7a` — gray for secondary text and timestamps
- **Surface**: `#1a1b1f` — slightly lighter than background for cards and code blocks
- **Border**: `#555` — medium gray for all borders and dividers
- **Accent**: `#bd93f9` — purple (Dracula's purple) for links, headings, and interactive elements

### Typography

| Font | Use | Applied To |
|------|-----|------------|
| JetBrains Mono | Code display and monospace | Global (`<html>` element) |
| Geist | UI text | Project descriptions, labels |
| Merriweather | Serif content | Not actively used in current template |
| System fonts | Editorial prose | MDX headings and paragraphs (`font-editorial` class) |

### Layout

- The site uses a centered content area with max-w-4xl-like constraints via percentage-based padding (`px-4 md:px-[20%]` on the root layout).
- All content pages are wrapped in a bordered container (`border-x flex-1`) with the dot pattern background visible behind it.
- Sections are separated by horizontal borders (`h-4 border-b` blocks).
- The home page uses a two-column card grid for Blog and Projects navigation at the top.

### Animations

Animations are subtel and purposeful:
- **ScrambleText** — Text characters scramble on hover via GSAP ScrambleTextPlugin, resolving to the correct text.
- **FallingPattern** — Radial gradient blobs scroll downward using Framer Motion, creating ambient depth.
- **DotPattern** — Subtle dot grid pulsing animation for background texture.

All animations respect user preferences and are not critical to content readability.

---

## Infrastructure

### RSS Feed (`/feed.xml`)

Auto-generated RSS 2.0 feed. It lists all posts sorted by date (newest first). Each item includes a title, link, description, publication date, and GUID. A self-referencing `atom:link` element is included for feed discovery.

### Sitemap (`/sitemap.xml`)

Auto-generated XML sitemap. It includes:

- Homepage (priority 1.0, weekly)
- Blog list (priority 0.8, weekly)
- Projects list (priority 0.8, weekly)
- Each blog post (priority 0.6, monthly)
- Each project page (priority 0.6, monthly)

---

## License

MIT
