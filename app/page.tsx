import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center border-b p-16 py-32">
        <h1 className="text-4xl font-bold">Yugank Rathore </h1>
        <p className="mt-2 text-muted">Blog / Projects</p>
      </section>
      <section className="grid grid-cols-2 border-b">
        <Link href="/blog" className="border-r p-8 py-16 transition hover:bg-surface">
          <h2 className="font-bold text-accent">01</h2>
          <p className="mt-2 text-sm text-muted">Blog</p>
          <span className="mt-4 inline-block border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
            View Blog
          </span>
        </Link>
        <Link href="/projects" className="p-8 py-16 transition hover:bg-surface">
          <h2 className="font-bold text-accent">02</h2>
          <p className="mt-2 text-sm text-muted">Projects</p>
          <span className="mt-4 inline-block border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
            View Projects
          </span>
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center border-b p-16 py-32">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 max-w-lg text-center text-muted">
          I build things on the web. This is my corner of the internet where I
          share thoughts, projects, and everything in between.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center border-b p-16 py-32">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="mt-4 max-w-lg text-center text-muted">
          Feel free to reach out — I&apos;m always open to interesting conversations.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 text-sm">
          <a
            href="mailto:hello@ygnk.dev"
            className="text-accent hover:underline"
          >
            hello@ygnk.dev
          </a>
          <a
            href="https://github.com/ygnk2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            github.com/ygnk2
          </a>
          <a
            href="https://twitter.com/ygnk2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            twitter.com/ygnk2
          </a>
        </div>
      </section>
    </main>
  );
}