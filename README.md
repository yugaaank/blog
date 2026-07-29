# ygnk.dev

Personal blog site. Built with Next.js 16. Covers Rust, C, Linux, and web development.

## Technology

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- MDX for content
- Framer Motion for animations
- GSAP for animations
- JetBrains Mono for code display

## Sections

- **Blog** — articles about systems programming, Rust, Linux, and web development
- **Projects** — technical projects with tool lists and timelines
- **About** — skills and contact information

## Local Development

1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the development server:
   ```bash
   bun run dev
   ```
3. Open `http://localhost:3000` in a web browser.

## Build

1. Create the production build:
   ```bash
   bun run build
   ```
2. Start the production server:
   ```bash
   bun start
   ```

## Project Structure

```
app/              # Next.js App Router pages
components/ui/    # Reusable user interface components
content/blog/     # Blog posts written in MDX
lib/              # Helper functions and utilities
```

## License

MIT
