import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-semibold text-foreground">
              Omar Adel
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Senior Backend Engineer · PHP / Laravel · Go
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/omaradel-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/omar-adel-605196196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:omar.adel.omar818@gmail.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/experience', 'Experience'],
              ['/projects', 'Projects'],
              ['/skills', 'Skills'],
              ['/engineering', 'Engineering'],
              ['/cv', 'CV'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
