# ygnk.dev — Personal Blog & Portfolio

This project is a personal website. It serves three purposes: a technical blog, a projects showcase, and an about/contact page. The site uses Next.js 16 App Router. Deploy target is Vercel. The package manager is Bun.

## Features

- **Blog** — Authors write posts in MDX. Code blocks render with syntax highlighting. Tables render correctly. Each post has a slug, title, description, date, and optional list of related projects.
- **Projects** — Each project page shows a summary, description, tech stack, timeline, features, challenges, and future plans. Links to GitHub and live demos are included.
- **Blog-Project Linking** — Blog posts reference related projects by slug. Project pages list linked posts automatically.
- **RSS Feed** — A route at `/feed.xml` returns an XML feed of all posts sorted by date. The feed includes title, link, description, pubDate, and guid for each item.
- **Sitemap** — A route at `/sitemap.xml` returns XML sitemap data. The sitemap lists the homepage, blog page, projects page, and all post and project pages with priorities and change frequencies.
- **Animations** — GSAP ScrambleText scrambles text on hover. Framer Motion animates background patterns. Dot patterns pulse. All animations are decorative and do not affect usability.
- **Dark Theme** — The color palette uses dark backgrounds and purple accent colors. The design follows Dracula color conventions.
- **Responsive Design** — Layout adapts to screen size. Mobile uses single-column layout. Tablet and desktop use wider padding and two-column grids.
- **Static Generation** — All pages build at compile time. No server-side rendering is used for content pages. Dynamic infrastructure routes (feed, sitemap) generate output at build time.

## Technology Stack

| Layer | Tool | Version | Role |
|-------|------|---------|------|
| Framework | Next.js | 16.2.10 | Routing, SSG, metadata |
| Language | TypeScript | 5.x | Type checking |
| Runtime | React | 19.2.4 | Component rendering |
| Styling | Tailwind CSS | v4 | Utility-first CSS |
| Animations | Framer Motion | ^12 | Background pattern motion |
| Animations | GSAP | ^3.15.0 | Text scramble effects |
| Content | MDX | via `next-mdx-remote` | Blog authoring with JSX |
| Fonts | Google Fonts | — | JetBrains Mono, Geist, Merriweather |
| Package Manager | Bun | — | Dependency management |
| Deploy | Vercel | — | Hosting |

## Architecture

### Rendering

The application uses Static Site Generation (SSG). All content pages pre-render at build time. The function `generateStaticParams` provides the list of pages to generate. Content pages do not fetch data at request time. They read from the file system during build.

### Content Flow

Blog posts live in two places:

1. `app/blog/posts.ts` — defines the `Post` type and a `posts` array
2. `content/blog/*.mdx` — contains the post body in MDX format

At build time, each post page reads its `.mdx` file with `fs.readFileSync`. The `compileMDX` function from `next-mdx-remote/rsc` converts MDX source to React elements. The result renders as HTML.

Project data lives in `app/projects/projects.ts` as a typed `Project` array. Project pages read from this array at build time. They do not access the file system for content.

### Infrastructure Routes

Two dynamic routes provide metadata files:

| Route | File | Output |
|-------|------|--------|
| `/feed.xml` | `app/feed.xml/route.ts` | RSS 2.0 XML |
| `/sitemap.xml` | `app/sitemap.ts` | XML sitemap |

Both routes run at build time and return static text responses with XML content-type headers.

## Project Structure

```
blog/
├── app/
│   ├── layout.tsx          # Root shell: fonts, navbar, footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind theme, CSS variables
│   ├── mdx-components.tsx  # Overrides for MDX elements
│   ├── sitemap.ts           # Sitemap route generator
│   ├── feed.xml/
│   │   └── route.ts        # RSS feed route generator
│   ├── blog/
│   │   ├── layout.tsx      # Blog section layout wrapper
│   │   ├── page.tsx        # Blog list with time-grouped sections
│   │   ├── posts.ts         # Post type and post data array
│   │   └── [slug]/
│   │       └── page.tsx    # Individual post page
│   ├── projects/
│   │   ├── page.tsx         # Projects list page
│   │   ├── projects.ts      # Project type and project data array
│   │   └── [slug]/
│   │       └── page.tsx    # Individual project page
│   └── components/
│       ├── Navbar.tsx       # Sticky header with nav links
│       ├── Footer.tsx       # Site footer with social links
│       ├── HeroTitle.tsx    # Home page hero heading component
│       ├── ScrambledHeading.tsx  # Heading with GSAP scramble
│       ├── AnimatedFavicon.tsx   # Injects SVG favicon
│       └── ScrambledText/
│           ├── ScrambledText.jsx  # GSAP ScrambleText impl
│           └── ScrambledText.css   # CSS for scramble blocks
├── components/ui/
│   ├── dot-pattern.tsx      # Radial-gradient dot grid
│   └── falling-pattern.tsx   # Framer Motion falling bg
├── content/blog/            # Raw MDX source files
│   ├── my-first-post.mdx
│   ├── asm-is-hard.mdx
│   └── i-built-shy.mdx
├── lib/
│   └── utils.ts             # `cn()` class name utility
├── public/
│   └── favicon.svg          # SVG site icon
├── next.config.ts            # Next.js build config (empty)
├── tsconfig.json             # TypeScript compiler config
├── eslint.config.mjs         # ESLint rules and extesions
├── postcss.config.mjs        # PostCSS plugin config
├── package.json              # Dependencies and scripts
└── VISION.md                 # Long-term project vision
```

## Content Model

### Post

The `Post` type has these fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | `string` | Yes | URL-safe identifier. Maps to `content/blog/<slug>.mdx` |
| `title` | `string` | Yes | Display title |
| `description` | `string` | Yes | Short summary shown on list pages |
| `date` | `string` | Yes | ISO 8601 date in `YYYY-MM-DD` format |
| `relatedProjects` | `string[]` | No | Slugs of related `Project` entries |

### Project

The `Project` type has these fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | `string` | Yes | URL-safe identifier |
| `title` | `string` | Yes | Display title |
| `summary` | `string` | Yes | One-line description |
| `description` | `string` | Yes | Full project description |
| `techStack` | `string[]` | Yes | List of technologies used |
| `github` | `string` | No | GitHub repo URL |
| `demo` | `string` | No | Live demo URL |
| `date` | `string` | Yes | ISO 8601 date |
| `tags` | `string[]` | Yes | Category tags |
| `relatedPosts` | `string[]` | No | Slugs of related `Post` entries |
| `challenges` | `string[]` | Yes | Problems during development |
| `features` | `string[]` | Yes | Implemented capabilities |
| `future` | `string[]` | Yes | Planned improvements |
| `timeline` | `Array<{phase,date,desc}>` | Yes | Development timeline entries |

## UI Components

### Navbar (`app/components/Navbar.tsx`)

Renders a sticky header. Contains links to Blog, Projects, and an external Portfolio page. Uses the `ScrambledText` component on all link labels. Vertical border lines separate links.

### Footer (`app/components/Footer.tsx`)

Renders a footer with social links (GitHub, X, LinkedIn, Instagram, Portfolio). The copyright year updates automatically using `new Date().getFullYear()`.

### HeroTitle (`app/components/HeroTitle.tsx`)

Renders the site name as a large heading on the home page. Wraps text in the `ScrambledText` component with increased radius and duration.

### ScrambledHeading (`app/components/ScrambledHeading.tsx`)

Renders a heading with the GSAP ScrambleText animation. Accepts an `as` prop to change the HTML tag (`h1`–`h6`).

### ScrambledText (`app/components/ScrambledText/ScrambledText.jsx`)

Applies GSAP ScrambleTextPlugin to text on the page. On pointer movement, characters within the configured `radius` scramble then resolve. Props: `radius` (default 100), `duration` (default 1.2s), `speed` (default 0.5), `scrambleChars` (default `".:"`).

### DotPattern (`components/ui/dot-pattern.tsx`)

Renders a CSS dot grid using `radial-gradient`. Supports static display, CSS pulse animation, and staggered multi-layer mode. Props control `color`, `backgroundColor`, `spacing`, `dotSize`, `absolute`, `pulse`, `staggered`, and `layers`.

### FallingPattern (`components/ui/falling-pattern.tsx`)

Renders a Framer Motion animated background with scrolling radial gradients. Creates a falling visual effect. Props control `color`, `backgroundColor`, `duration`, `blurIntensity`, and `density`.

## Configuration

### Tailwind CSS v4

No separate config file. Custom theme tokens live in `app/globals.css` in the `@theme` block. The theme defines CSS custom properties for colors and fonts. Tailwind v4 processes these at build time.

### ESLint

Uses `eslint-config-next` with `core-web-vitals` and `typescript` extension configs. Ignores `.next/`, `out/`, and `build/` directories. Config file: `eslint.config.mjs`.

### PostCSS

Uses `@tailwindcss/postcss` as the only plugin. Config file: `postcss.config.mjs`.

### TypeScript

Uses standard Next.js + React 19 type definitions. No custom compiler flags. Config file: `tsconfig.json`.

## Development

### Prerequisites

Install Bun from https://bun.sh. Bun handles both package management and the runtime. Node.js is not required.

### Setup

Run these commands in the project root:

```bash
bun install
bun run dev
```

Then open `http://localhost:3000` in a browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build production output |
| `bun start` | Start production server |
| `eslint` | Run ESLint checks |

## Build & Deployment

Run `bun run build` to generate the production output. The `.next` directory contains rendered pages. All content pages pre-render at build time. Two routes (`/feed.xml`, `/sitemap.xml`) also generate at build time.

Vercel is the recommended deploy target. It provides automatic builds from Git. The site also deploys to `yugank.vercel.app` and `ygnk.dev`.

## Adding a Blog Post

1. Create a new file at `content/blog/<slug>.mdx`.
2. Add the post metadata to the `posts` array in `app/blog/posts.ts`. The `slug` must match the filename without the `.mdx` extension.
3. Write the post body in MDX. Supported elements: headings, paragraphs, lists, code blocks, inline code, blockquotes, tables, bold, italic.
4. Add related project slugs to `relatedProjects` if applicable.
5. Rebuild the project. The new post page generates automatically.

## Adding a Project

1. Add a new entry to the `projects` array in `app/projects/projects.ts`.
2. Include all required fields: `slug`, `title`, `summary`, `description`, `techStack`, `tags`, `challenges`, `features`, `future`, `timeline`.
3. Add optional `github` and `demo` URLs for links.
4. Add `relatedPosts` slugs if the project connects to blog posts.
5. Rebuild the project. The new project page generates automatically.

## Design System

### Colors

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `#121316` | Page background |
| `--color-fg` | `#f7f7f2` | Primary text |
| `--color-muted` | `#7a7a7a` | Secondary text, timestamps |
| `--color-surface` | `#1a1b1f` | Cards, code blocks |
| `--color-border` | `#555` | Borders, dividers |
| `--color-accent` | `#bd93f9` | Links, headings, buttons |
| `--color-pink` | `#ff79c6` | Inline code text |
| `--color-green` | `#96ce98` | Feature labels |
| `--color-orange` | `#ffb86c` | Highlight warnings |
| `--color-red` | `#ff5555` | Challenge indicators |
| `--color-cyan` | `#8be9fd` | Code syntax |
| `--color-yellow` | `#f1fa8c` | Text highlights |

### Typography

Three font families apply to the site:

- **JetBrains Mono** — Applies globally. Used for code and monospace content.
- **Geist** — Used with `font-geist` class for UI text like project descriptions.
- **System fonts** — Used with `font-editorial` class for MDX prose.

### Layout

The site uses a centered content column. The root layout applies `px-4 md:px-[20%]` padding. Content pages sit inside a bordered container with the dot pattern behind it. Horizontal dividers separate sections on the home page.

### Animations

Three animation types exist:

1. **ScrambleText** — Characters rearrange on pointer hover. The effect resolves back to correct text.
2. **FallingPattern** — Radial gradient blobs scroll downward in a loop.
3. **DotPattern** — A dot grid pulse animation. It uses CSS `@keyframes` with a 4-second cycle.

All animations are decorative. They do not block content reading. They do not depend on content loading or user interaction.

## License

MIT
