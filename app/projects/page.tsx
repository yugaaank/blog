import Link from "next/link";
import { projects } from "./projects";

export default function Projects() {
  return (
    <div className="py-16">
      <h1 className="px-8 text-4xl font-bold">Projects</h1>
      <p className="mt-2 px-8 text-muted">Things I&apos;ve built</p>
      <div className="mt-8 divide-y divide-border border-b">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex items-center justify-between gap-4 px-8 py-6 transition hover:bg-surface"
          >
            <div>
              <h2 className="font-bold text-accent">{project.title}</h2>
              <p className="mt-1 text-sm text-muted">{project.summary}</p>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="border px-2 py-0.5 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
