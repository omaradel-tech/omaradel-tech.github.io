import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-2xl">
            {/* Availability indicator */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Backend Engineer · IVERA · Jan 2026 – Present
            </div>

            {/* Name and title */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Omar Adel
            </h1>
            <p className="mt-3 text-xl font-semibold text-blue-500 sm:text-2xl">
              Senior Backend Engineer
            </p>
            <p className="mt-1 text-lg text-muted-foreground font-mono">
              PHP / Laravel · Go
            </p>

            {/* Positioning statement */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Senior software engineer specializing in backend development with production experience
              designing, extending, and maintaining Laravel/PHP systems — REST APIs, payment
              integrations, ecommerce and logistics workflows, database/query optimization — across
              SaaS, ecommerce, and logistics platforms. Also engineers backend functionality in Go
              for a multi-tenant enterprise platform spanning ERP, CRM, HR, performance management,
              ecommerce, and WhatsApp-based communication.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                View Experience
              </Link>
              <a
                href="/Omar-Adel-Senior-Backend-Engineer-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/omaradel-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/omar-adel-605196196"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <ProfilePhoto size="lg" className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
