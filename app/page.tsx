import Link from "next/link";
import { posts } from "@/app/blog/posts";
import { projects } from "@/app/projects/projects";
import { FallingPattern } from "@/components/ui/falling-pattern";
import HeroTitle from "@/app/components/HeroTitle";
import ScrambledHeading from "@/app/components/ScrambledHeading";

export default function Home() {
  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const latestPost = sortedPosts[0];
  const latestProject = [...projects].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <main>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0">
          <FallingPattern
            color="#bd93f9"
            backgroundColor="var(--background)"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-16 py-32">
          <HeroTitle />
          <p className="mt-2 text-muted">3rd year CS · building things that actually work</p>
        </div>
      </section>
      <div className="h-4 border-b" />
      <section className="grid grid-cols-2 border-b">
        <Link href="/blog" className="flex flex-col items-center justify-center text-center border-r p-8 py-16 transition hover:bg-surface">
          <h2 className="font-bold text-accent">01</h2>
          <p className="mt-2 text-sm text-muted">Blog · {posts.length} posts</p>
          {latestPost && (
            <p className="mt-4 text-xs text-muted/60">
              Latest: {latestPost.title} · {latestPost.date}
            </p>
          )}
          <span className="mt-6 inline-block border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
            View Blog
          </span>
        </Link>
        <Link href="/projects" className="flex flex-col items-center justify-center text-center p-8 py-16 transition hover:bg-surface">
          <h2 className="font-bold text-accent">02</h2>
          <p className="mt-2 text-sm text-muted">Projects · {projects.length} project{projects.length !== 1 ? 's' : ''}</p>
          {latestProject && (
            <p className="mt-4 text-xs text-muted/60">
              Latest: {latestProject.title}
            </p>
          )}
          <span className="mt-6 inline-block border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
            View Projects
          </span>
        </Link>
      </section>
      <div className="h-4 border-b" />
      <section className="border-b">
        <div className="flex flex-col items-center justify-center px-16 py-32">
          <ScrambledHeading as="h2" className="text-2xl font-bold">About-Me</ScrambledHeading>
          <p className="mt-4 max-w-lg text-center text-muted">
            I&apos;m a 3rd year Computer Science student who enjoys building things that actually work,
            breaking them, and then fixing them properly. I like projects that feel real, not tutorial leftovers.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted">
            <span className="border px-2 py-0.5">Java</span>
            <span className="border px-2 py-0.5">Rust</span>
            <span className="border px-2 py-0.5">C/C++</span>
            <span className="border px-2 py-0.5">Python</span>
            <span className="border px-2 py-0.5">TypeScript</span>
            <span className="border px-2 py-0.5">React</span>
            <span className="border px-2 py-0.5">Next.js</span>
            <span className="border px-2 py-0.5">Angular</span>
            <span className="border px-2 py-0.5">Arch Linux</span>
          </div>
        </div>
      </section>
      <div className="h-4 border-b" />
      <section className="border-b">
        <div className="flex flex-col items-center justify-center px-16 py-32">
          <ScrambledHeading as="h2" className="text-2xl font-bold">Contact-Me</ScrambledHeading>
          <p className="mt-4 max-w-lg text-center text-muted">
            Feel free to reach out — I&apos;m always open to interesting conversations.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm">
            <a
              href="https://github.com/yugaaank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/yugaaank
            </a>
            <a
              href="https://x.com/yugaaank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              x.com/yugaaank
            </a>
            <a
              href="https://www.linkedin.com/in/yugank-rathore-617614317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
