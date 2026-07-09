import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="border-x">
      <Navbar />
      <main>
        <section className="flex flex-col items-center justify-center border-b p-16 py-32">
          <h1 className="text-4xl font-bold">Yugank Rathore </h1>
          <p className="mt-2 text-muted">Blog / Projects</p>
        </section>
        <section className="grid grid-cols-2 border-b">
          <Link href="/blog" className="border-r p-8 py-16 transition hover:bg-surface">
            <h2 className="font-bold text-accent">01</h2>
            <p className="mt-2 text-sm text-muted">Blog</p>
            <span className="mt-4 inline-block rounded border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
              View Blog
            </span>
          </Link>
          <Link href="/projects" className="p-8 py-16 transition hover:bg-surface">
            <h2 className="font-bold text-accent">02</h2>
            <p className="mt-2 text-sm text-muted">Projects</p>
            <span className="mt-4 inline-block rounded border border-accent px-4 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-bg">
              View Projects
            </span>
          </Link>
        </section>
      </main>
    </div>
  );
}
