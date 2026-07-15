export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedProjects?: string[];
}

export const posts: Post[] = [
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
  },
];
