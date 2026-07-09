export default function Footer() {
  return (
    <footer className="border-t bg-bg py-12">
      <div className="max-w-4xl mx-auto">
        {/* Top section with social links */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://github.com/yugaaank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/yugaaank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/yugank-rathore-617614317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/yugaaank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://yugank.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Fun credits */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted/60 flex-wrap">
            <span>Built with Next.js 16</span>
            <span>by Yugank Rathore</span>
            <span>Powered by coffee</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Yugank Rathore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}