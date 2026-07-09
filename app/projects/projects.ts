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
  challenges: string[];
  features: string[];
  future: string[];
  timeline: { phase: string; date: string; desc: string }[];
}

export const projects: Project[] = [
  {
    slug: "this-website",
    title: "ygnk.dev",
    summary: "Personal portfolio and blog built with Next.js 16.",
    description:
      "This very website. A digital garden, portfolio, and technical blog built from scratch with Next.js 16, Tailwind CSS v4, and MDX. Features structural border-based design, Dracula-inspired dark theme, and a timeline-organized blog.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "MDX"],
    github: "https://github.com/yugaaank/blog",
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
  {
    slug: "rusty-shell",
    title: "Rusty Shell",
    summary: "A minimal Unix shell written in Rust.",
    description:
      "A from-scratch Unix shell implemented in Rust. Handles command execution, piping, redirection, and job control. Built to understand how shells actually work under the hood — process groups, signals, and terminal attributes.",
    techStack: ["Rust", "Unix"],
    github: "https://github.com/yugaaank/rusty-shell",
    date: "2026-06-15",
    tags: ["rust", "cli", "unix"],
    relatedPosts: ["building-a-shell-in-rust"],
    challenges: [
      "Getting job control right — foreground/background process groups and SIGTTOU handling is finicky.",
      "Parsing complex command lines with quoted strings, escapes, and nested redirects.",
    ],
    features: [
      "Pipeline support with arbitrary command chaining.",
      "Input/output/error redirection with append mode.",
      "Job control with bg/fg/jobs builtins.",
    ],
    future: [
      "Add command autocompletion.",
      "Implement a simple scripting language.",
      "Add vi-mode line editing.",
    ],
    timeline: [
      { phase: "MVP", date: "2026-05", desc: "Basic command execution with fork/exec." },
      { phase: "Pipes & redirects", date: "2026-05", desc: "Added piping and file redirection." },
      { phase: "Job control", date: "2026-06", desc: "Full job control with SIGTSTP handling." },
    ],
  },
  {
    slug: "pixel-paint",
    title: "Pixel Paint",
    summary: "Browser-based pixel art editor on an HTML canvas.",
    description:
      "A pixel art editor that runs entirely in the browser. Features a resizable grid, color picker, symmetric drawing modes, undo/redo stack, and PNG export. No dependencies — just vanilla TypeScript and the Canvas API.",
    techStack: ["TypeScript", "Canvas API", "Vite"],
    github: "https://github.com/yugaaank/pixel-paint",
    demo: "https://pixel-paint.vercel.app",
    date: "2026-04-10",
    tags: ["web", "typescript", "canvas"],
    relatedPosts: ["canvas-fun-with-pixel-art"],
    challenges: [
      "Implementing an efficient undo/redo system without cloning the entire grid every frame.",
      "Handling canvas scaling for crisp pixels on high-DPI displays.",
    ],
    features: [
      "Symmetric drawing — horizontal, vertical, and quadrant mirror modes.",
      "Undo/redo with a command pattern and snapshot compression.",
      "Export as PNG with configurable scale factor.",
    ],
    future: [
      "Add layers and layer blending.",
      "Implement animation frames and onion skinning.",
      "Add collaborative editing via WebRTC.",
    ],
    timeline: [
      { phase: "Grid & draw", date: "2026-03", desc: "Basic grid rendering and pixel placement." },
      { phase: "Tools", date: "2026-04", desc: "Eyedropper, fill, line, and shape tools." },
      { phase: "Export & polish", date: "2026-04", desc: "PNG export, undo/redo, symmetric modes." },
    ],
  },
  {
    slug: "http-server",
    title: "C HTTP Server",
    summary: "A barebones HTTP/1.1 server in C from scratch.",
    description:
      "A minimal HTTP/1.1 server implemented in C with no external dependencies. Handles GET/HEAD requests, serves static files with MIME type detection, and supports Keep-Alive connections. Built to understand the HTTP protocol at the socket level.",
    techStack: ["C", "POSIX sockets"],
    github: "https://github.com/yugaaank/http-server",
    date: "2026-02-20",
    tags: ["c", "networking", "http"],
    relatedPosts: ["writing-an-http-server-in-c"],
    challenges: [
      "Properly parsing HTTP request headers without a buffer overrun.",
      "Handling partial reads/writes on non-blocking sockets.",
    ],
    features: [
      "Static file serving with correct MIME types.",
      "Directory listing for index-less paths.",
      "Keep-Alive connection support.",
    ],
    future: [
      "Add HTTP/1.1 chunked transfer encoding.",
      "Implement a simple routing API for dynamic responses.",
      "Add TLS support via OpenSSL.",
    ],
    timeline: [
      { phase: "Socket setup", date: "2026-01", desc: "TCP socket, bind, listen, accept loop." },
      { phase: "Request parsing", date: "2026-02", desc: "HTTP GET/HEAD parsing and response generation." },
      { phase: "Static files", date: "2026-02", desc: "File serving with MIME detection and directory listing." },
    ],
  },
  {
    slug: "arch-dotfiles",
    title: "Arch Dotfiles",
    summary: "My Arch Linux configuration — minimal, documented, reproducible.",
    description:
      "A curated collection of Arch Linux dotfiles managed with GNU Stow. Covers Hyprland, Waybar, Neovim, Zsh, and Kitty. Every config has inline comments explaining what each option does — built for reproducibility, not just aesthetics.",
    techStack: ["Arch Linux", "Hyprland", "Neovim", "Zsh"],
    github: "https://github.com/yugaaank/dotfiles",
    date: "2026-05-01",
    tags: ["linux", "ricing", "neovim"],
    relatedPosts: ["my-arch-linux-setup"],
    challenges: [
      "Keeping configs portable between a laptop and a desktop with different GPUs and monitors.",
      "Writing Neovim configs that don't turn into an unmaintainable spaghetti of lazy-loading calls.",
    ],
    features: [
      "Hyprland with dynamic window management and per-monitor workspaces.",
      "Fully commented Neovim config — every plugin and option explained.",
      "GNU Stow-based deployment — one command to symlink everything.",
    ],
    future: [
      "Add install scripts that automate the full Arch setup from a live ISO.",
      "Document the wallpaper rotation pipeline.",
      "Add a sway fallback config for NVIDIA systems.",
    ],
    timeline: [
      { phase: "WM & bar", date: "2025-12", desc: "Hyprland + Waybar base config." },
      { phase: "Editor", date: "2026-01", desc: "Full Neovim config from scratch with LSP." },
      { phase: "Stow & docs", date: "2026-05", desc: "Organized into GNU Stow packages with README." },
    ],
  },
];
