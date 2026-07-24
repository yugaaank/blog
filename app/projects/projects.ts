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
    slug: "shy",
    title: "shy",
    summary: "A floating window manager for Hyprland that keeps tiled workspaces clear.",
    description:
      "shy hides floating windows below the screen when a tiled window is focused, then restores them to their saved position when they are needed again. It is built for a Hyprland workflow where floating windows are useful, but should not stay visible all the time.",
    techStack: ["Rust", "Hyprland IPC", "UNIX sockets", "TOML"],
    github: "https://github.com/yugaaank/shy",
    date: "2026-07-24",
    tags: ["Hyprland", "Linux", "Window manager", "CLI"],
    relatedPosts: ["i-built-shy"],
    timeline: [
      {
        phase: "The problem",
        date: "Jul 2026",
        desc: "Floating windows were useful but kept cluttering tiled workspaces.",
      },
      {
        phase: "Built shy",
        date: "Jul 2026",
        desc: "Created an event-driven daemon that hides and restores floating windows.",
      },
    ],
    features: [
      "Hides floating windows when a tiled window receives focus.",
      "Restores a floating window to its saved position when it is focused again.",
      "Ignores hover focus so windows do not reappear just from moving the cursor.",
      "Supports multiple monitors and configurable window-class exclusions.",
      "Uses Hyprland events instead of polling, so it stays idle when nothing changes.",
    ],
    challenges: [
      "Keeping track of each window's original position before moving it off-screen.",
      "Separating intentional focus changes from focus caused by mouse hover.",
      "Handling window lifecycle and floating-state changes through Hyprland events.",
    ],
    future: [
      "Add more configuration options for different Hyprland workflows.",
      "Improve handling for edge cases around newly opened windows and layers.",
    ],
  },
];
