import Link from "next/link";
import { posts } from "./posts";

export default function Blog() {
  return (
    <>
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-muted">All posts</p>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border p-6 transition hover:bg-surface"
          >
            <h2 className="text-lg font-bold text-accent">{post.title}</h2>
            <p className="mt-1 text-sm text-muted">{post.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
