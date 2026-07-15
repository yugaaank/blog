export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedProjects?: string[];
}

export const posts: Post[] = [
  // This week
  {
    slug: "asm-is-hard",
    title: "Assembly language is..not for beginners",
    description: "Why it will take me little more time to learn OS dev",
    date: "2026-07-15"
  },
  {
    slug: "my-first-post",
    title: "My First Post",
    description: "Welcome to my blog, built with Next.js and MDX.",
    date: "2026-07-09",
    relatedProjects: ["this-website"],
  },
  {
    slug: "midweek-thoughts",
    title: "Midweek Thoughts",
    description: "Some midweek reflections on building with Next.js.",
    date: "2026-07-08",
  },
  {
    slug: "monday-morning-musings",
    title: "Monday Morning Musings",
    description: "Kicking off the week with fresh ideas.",
    date: "2026-07-07",
  },

  // Last 4 weeks
  {
    slug: "a-post-from-last-week",
    title: "A Post from Last Week",
    description: "This one falls within the last 4 weeks.",
    date: "2026-07-02",
  },
  {
    slug: "july-kickoff",
    title: "July Kickoff",
    description: "Starting July with a fresh post.",
    date: "2026-07-01",
  },
  {
    slug: "second-post",
    title: "Second Post",
    description: "Another blog post using MDX with rich content.",
    date: "2026-06-28",
  },
  {
    slug: "summer-solstice-notes",
    title: "Summer Solstice Notes",
    description: "Thoughts on the longest day of the year.",
    date: "2026-06-21",
  },
  {
    slug: "weekend-update",
    title: "Weekend Update",
    description: "A quick recap of the weekend.",
    date: "2026-06-14",
  },

  // Earlier this year
  {
    slug: "late-may-thoughts",
    title: "Late May Thoughts",
    description: "Wrapping up May with some reflections.",
    date: "2026-05-22",
  },
  {
    slug: "mid-may-update",
    title: "Mid-May Update",
    description: "A post from earlier this year.",
    date: "2026-05-15",
  },
  {
    slug: "early-may-checkin",
    title: "Early May Check-in",
    description: "Checking in at the start of May.",
    date: "2026-05-08",
  },

  // 2025
  {
    slug: "last-year-recap",
    title: "Last Year Recap",
    description: "Looking back at 2025.",
    date: "2025-12-10",
  },
  {
    slug: "october-surprise",
    title: "October Surprise",
    description: "An unexpected discovery from last October.",
    date: "2025-10-05",
  },
  {
    slug: "august-adventures",
    title: "August Adventures",
    description: "Summer adventures from August 2025.",
    date: "2025-08-20",
  },
  {
    slug: "building-a-shell-in-rust",
    title: "Building a Shell in Rust",
    description: "What I learned writing a Unix shell from scratch.",
    date: "2026-06-20",
    relatedProjects: ["rusty-shell"],
  },
  {
    slug: "my-arch-linux-setup",
    title: "My Arch Linux Setup",
    description: "A tour of my dotfiles and why I config everything by hand.",
    date: "2026-05-10",
    relatedProjects: ["arch-dotfiles"],
  },
  {
    slug: "canvas-fun-with-pixel-art",
    title: "Canvas Fun with Pixel Art",
    description: "Building a pixel editor with nothing but the Canvas API.",
    date: "2026-04-15",
    relatedProjects: ["pixel-paint"],
  },
  {
    slug: "writing-an-http-server-in-c",
    title: "Writing an HTTP Server in C",
    description: "No libraries, no frameworks — just sockets and structs.",
    date: "2026-02-25",
    relatedProjects: ["http-server"],
  },
  {
    slug: "learning-rust-in-2026",
    title: "Learning Rust in 2026",
    description: "Impressions after a year of fighting the borrow checker.",
    date: "2026-03-01",
  },
  {
    slug: "vim-vs-neovim",
    title: "Vim vs Neovim in 2026",
    description: "Why I switched and what I miss from each.",
    date: "2026-01-18",
  },
];
