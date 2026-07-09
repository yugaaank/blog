import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-bg px-8 py-4">
      <Link href="/" className="text-lg font-bold text-accent">
        ygnk
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/blog" className="hover:text-accent">blog</Link>
        <Link href="/projects" className="hover:text-accent">projects</Link>
      </div>
    </nav>
  );
}
