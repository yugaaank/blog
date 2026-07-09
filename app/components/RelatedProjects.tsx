import Link from "next/link";
import { projects } from "@/app/projects/projects";

export default function RelatedProjects({ slugs }: { slugs: string[] }) {
  const matched = projects.filter((p) => slugs.includes(p.slug));
  if (matched.length === 0) return null;

  return (
    <div className="my-8 border">
      <h2 className="border-b px-6 py-3 text-sm font-bold tracking-wider text-accent">
        Related Projects
      </h2>
      <div className="divide-y divide-border">
        {matched.map((project) => (
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
  );
}
