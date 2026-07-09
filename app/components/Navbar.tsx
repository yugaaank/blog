import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-bg/95 backdrop-blur px-8 py-4">
      <Link href="/" className="text-lg font-bold text-accent">
        ygnk
      </Link>
      <div className="flex gap-6 text-sm">
        <span className="cursor-pointer hover:text-accent">posts</span>
        <span className="cursor-pointer hover:text-accent">contact</span>
      </div>
    </nav>
  );
}
