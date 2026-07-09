export default function Footer() {
  return (
    <footer className="border-t bg-bg py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-6 text-sm">
          <a href="https://github.com/yugaaank" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://x.com/yugaaank" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            X
          </a>
          <a href="https://www.linkedin.com/in/yugank-rathore-617614317" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/yugaaank" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            Instagram
          </a>
          <a href="https://yugank.vercel.app" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            Portfolio
          </a>
        </div>
        <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} Yugank Rathore</p>
      </div>
    </footer>
  );
}