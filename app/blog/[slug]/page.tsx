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

  return (
    <>
      {content}
      {relatedProjects.length > 0 && (
        <div className="mt-8 border">
          <h2 className="border-b px-6 py-3 text-sm font-bold tracking-wider text-accent">
            Related Projects
          </h2>
          <div className="divide-y divide-border">
            {relatedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-surface"
              >
                <span className="font-bold text-accent">{project.title}</span>
                <span className="text-xs text-muted">{project.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
