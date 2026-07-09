export interface Post {
  slug: string;
  title: string;
  description: string;
}

export const posts: Post[] = [
  {
    slug: "my-first-post",
    title: "My First Post",
    description: "Welcome to my blog, built with Next.js and MDX.",
  },
  {
    slug: "second-post",
    title: "Second Post",
    description: "Another blog post using MDX with rich content.",
  },
];
