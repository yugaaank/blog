export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  date: string;
  tags: string[];
  relatedPosts?: string[];
  challenges?: string[];
  features?: string[];
  future?: string[];
  timeline?: { phase: string; date: string; desc: string }[];
}

export const projects: Project[] = [
  {
    slug: "this-website",
    title: "ygnk.dev",
    summary: "Personal portfolio and blog built with Next.js 16.",
    description:
      "This very website. A digital garden, portfolio, and technical blog built from scratch with Next.js 16, Tailwind CSS v4, and MDX. Features structural border-based design, Dracula-inspired dark theme, and a timeline-organized blog.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "MDX"],
    github: "https://github.com/ygnk2/blog",
    date: "2026-07-01",
    tags: ["web", "react", "nextjs"],
    relatedPosts: ["my-first-post", "midweek-thoughts"],
    challenges: [
      "Figuring out Tailwind CSS v4's new API — the theme system and border utilities work differently than v3.",
      "Getting MDX working smoothly with the App Router's file-based routing.",
      "Balancing structural borders with responsive design on smaller screens.",
    ],
    features: [
      "Next.js 16 with Turbopack is remarkably fast for development.",
      "Keeping a content-driven architecture from day one makes adding features painless.",
      "A well-defined visual system (border, spacing, color) eliminates arbitrary design decisions.",
    ],
    future: [
      "Add RSS feed and sitemap generation.",
      "Implement full-text search across blog and projects.",
      "Add dark/light theme toggle.",
    ],
    timeline: [
      { phase: "Initial setup", date: "2026-06", desc: "Scaffolded Next.js 16 with TypeScript and Tailwind v4." },
      { phase: "Theme & layout", date: "2026-06", desc: "Established Dracula-inspired palette, JetBrains Mono, and border-based layout." },
      { phase: "Blog", date: "2026-07", desc: "Added MDX blog with timeline-grouped listing." },
      { phase: "Projects", date: "2026-07", desc: "Added projects section with React-based pages." },
    ],
  },
];
