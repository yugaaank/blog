import Link from "next/link";
import { projects } from "./projects";
import { FallingPattern } from "@/components/ui/falling-pattern";
import ScrambledHeading from "@/app/components/ScrambledHeading";

export default function Projects() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <FallingPattern color="#bd93f9" backgroundColor="var(--background)" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-16 py-32">
          <ScrambledHeading as="h1" className="text-4xl font-bold">Projects</ScrambledHeading>
          <p className="mt-2 text-muted">Things I&apos;ve built</p>
        </div>
      </section>
      <div className="h-4 border-b border-border" />
      <div className="divide-y divide-border border-b">
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
    </>
  );
}
