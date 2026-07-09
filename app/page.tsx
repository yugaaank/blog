export default function Home() {
  return (
    <div className="border-x">
      <nav className="flex items-center justify-between border-b px-8 py-4">
        <span className="text-lg font-bold text-accent">blog</span>
        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer hover:text-accent">posts</span>
          <span className="cursor-pointer hover:text-accent">about</span>
          <span className="cursor-pointer hover:text-accent">contact</span>
        </div>
      </nav>
      <main>
        <section className="flex flex-col items-center justify-center border-b p-16 py-32">
          <h1 className="text-4xl font-bold">Yugank Rathore </h1>
          <p className="mt-2 text-muted">About/Blog/Projects</p>
        </section>
        <section className="grid grid-cols-3 border-b">
          <div className="border-r p-8 py-16">
            <h2 className="font-bold text-accent">01</h2>
            <p className="mt-2 text-sm text-muted">section one</p>
          </div>
          <div className="border-r p-8 py-16">
            <h2 className="font-bold text-accent">02</h2>
            <p className="mt-2 text-sm text-muted">section two</p>
          </div>
          <div className="p-8 py-16">
            <h2 className="font-bold text-accent">03</h2>
            <p className="mt-2 text-sm text-muted">section three</p>
          </div>
        </section>
      </main>
    </div>
  );
}
