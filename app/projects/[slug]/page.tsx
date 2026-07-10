import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Project } from "../projects";
import { posts } from "@/app/blog/posts";
import ScrambledHeading from "@/app/components/ScrambledHeading";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b">
      <h2 className="border-b px-8 py-3 text-sm font-bold tracking-wider text-accent">
        {title}
      </h2>
      <div className="px-8 py-6">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return <span className="border px-2 py-0.5 text-xs text-muted">{children}</span>;
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <div className="divide-y divide-border">
      {/* Header */}
      <div className="border-b px-8 py-12">
        <ScrambledHeading as="h1" className="text-4xl font-bold font-geist">{project.title}</ScrambledHeading>
        <p className="mt-2 text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Description */}
      <Section title="Overview">
        <p className="leading-relaxed text-fg font-geist">{project.description}</p>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-accent/30 px-3 py-1 text-sm text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Timeline">
        <div className="space-y-4">
          {project.timeline.map((entry, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-2 rounded-full bg-accent" />
                {i < project.timeline.length - 1 && (
                  <div className="w-px flex-1 bg-accent/30" />
                )}
              </div>
              <div className="pb-4">
                <span className="text-xs text-muted">{entry.date}</span>
                <h3 className="font-bold text-accent font-geist">{entry.phase}</h3>
                <p className="mt-1 text-sm text-muted">{entry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section title="Features">
        <ul className="space-y-3">
          {project.features.map((l, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-fg font-geist">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-green/50" />
              {l}
            </li>
          ))}
        </ul>
      </Section>

      {/* Challenges */}
      <Section title="Challenges">
        <ul className="space-y-3">
          {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-fg font-geist">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red/50" />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* Future Improvements */}
      <Section title="Future Improvements">
        <ul className="space-y-2">
          {project.future.map((f, i) => (
            <li key={i} className="leading-relaxed text-fg font-geist">
              → {f}
            </li>
          ))}
        </ul>
      </Section>

      {/* Related Posts */}
      {project.relatedPosts && project.relatedPosts.length > 0 && (
        <Section title="Related Posts">
          <div className="divide-y divide-border">
            {project.relatedPosts.map((slug) => {
              const post = posts.find((p) => p.slug === slug);
              if (!post) return null;
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="flex items-center justify-between gap-4 px-4 py-3 transition hover:bg-surface"
                >
                  <span className="font-bold text-accent">{post.title}</span>
                  <span className="text-xs text-muted">{post.date}</span>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      {/* Links */}
      <div className="flex gap-4 px-8 py-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-bg"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-bg"
          >
            Live Demo
          </a>
        )}
        <Link
          href="/projects"
          className="border px-4 py-2 text-sm text-muted transition hover:bg-surface"
        >
          ← All Projects
        </Link>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
