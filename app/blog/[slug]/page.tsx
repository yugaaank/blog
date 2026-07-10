import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/posts";
import { projects } from "@/app/projects/projects";
import { useMDXComponents } from "@/app/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "node:path";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
    components: useMDXComponents({}),
  });

  const relatedProjects = projects.filter((p) =>
    p.relatedPosts?.includes(slug),
  );

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <p className="text-center text-sm text-muted mb-6 md:mb-8">{date}</p>
      {content}
      {relatedProjects.length > 0 && (
        <div className="mt-8 border">
          <h2 className="border-b px-4 md:px-6 py-3 text-sm font-bold tracking-wider text-accent font-geist">
            Related Projects
          </h2>
          <div className="divide-y divide-border">
            {relatedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4 transition hover:bg-surface"
              >
                <span className="font-bold text-accent">{project.title}</span>
                <span className="text-xs text-muted hidden sm:inline">{project.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
