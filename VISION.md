# Project Context

This repository is my personal website. It is intended to become a long term portfolio, technical notebook, and personal blog.

Current state:

* Built with Next.js 16.
* Tailwind CSS v4.
* Existing homepage with a custom layout.
* Dracula inspired design.
* JetBrains Mono typography.
* Structural border based design.
* `Perf.json` is a standalone Zed editor theme artifact and must remain untouched. It is not part of the web application.

## Critical Rules

Do **not** delete, rewrite, or replace existing code unless explicitly instructed.

Do **not** redesign existing pages from scratch.

Do **not** remove existing components, styling, configuration, or project structure.

Every change should be incremental and integrate naturally into the current codebase.

Preserve existing styling decisions unless there is a compelling technical reason to change them.

When adding new features, prefer extending existing components over replacing them.

Before making major architectural changes, explain why they are necessary.

## Vision

The website should feel like a mix of:

* personal portfolio
* engineering notebook
* project documentation site
* technical blog
* digital garden

The emphasis is on thoughtful documentation rather than marketing.

## Primary Sections

### Home

Acts as an introduction.

Contains:

* About Me
* Short introduction
* Featured projects
* Recent blog posts
* Skills
* Links

### Projects

Each project has its own page.

Each project should support:

* title
* summary
* long description
* screenshots
* architecture diagrams
* technology stack
* timeline
* challenges
* lessons learned
* future improvements
* GitHub link
* live demo
* related blog posts

Projects should automatically display all linked blog posts.

### Blog

A manually written blog.

Each post should support:

* Markdown or MDX
* syntax highlighting
* images
* headings
* reading time
* tags
* publish date
* project references

A post may belong to:

* zero projects
* one project
* multiple projects

### Search

Search should work across:

* blog posts
* projects

## Content Organization

Preferred structure:

```
content/
  blog/
  projects/
```

Components should remain reusable and composable.

Avoid tightly coupling page logic with content.

## Design Goals

Keep the current aesthetic.

Maintain:

* dark theme
* structural borders
* generous whitespace
* developer focused appearance
* minimal visual noise
* excellent typography
* responsive layout

Animations should be subtle and purposeful.

## Code Standards

Use:

* TypeScript
* App Router
* Server Components where appropriate
* Tailwind CSS v4
* Modern React patterns

Prefer simple solutions over unnecessary abstractions.

Keep components small and reusable.

Avoid duplicate code.

Avoid premature optimization.

## Future Features

Design new code so the following can be added later without major rewrites:

* RSS
* sitemap
* analytics
* comments
* authentication
* admin dashboard
* project timelines
* image galleries
* dark/light themes
* database-backed content
* API endpoints

## When implementing features

1. Understand the current architecture.
2. Reuse existing code whenever possible.
3. Add new functionality incrementally.
4. Preserve backwards compatibility.
5. Explain tradeoffs before large refactors.
6. Never remove existing functionality unless explicitly requested.
