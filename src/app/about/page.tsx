import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'
import { education } from '@/data/experience'
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Omar Adel — Senior Backend Engineer specializing in Laravel/PHP and Go, based in Cairo, Egypt.',
}

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="About"
          subtitle="Senior Backend Engineer · PHP / Laravel · Go"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                I&apos;m a backend engineer specializing in Laravel/PHP, with a track record of
                owning backend business logic end-to-end — API design, payment integrations,
                database performance, and production deployment — across SaaS, ecommerce, and
                logistics platforms.
              </p>
              <p className="text-base leading-relaxed">
                I also contribute hands-on Go development to select modules of a multi-tenant
                enterprise platform (ERP, CRM, HR, Performance Management, Ecommerce,
                WhatsApp-based communication), bringing enterprise-scale backend exposure alongside
                my core Laravel/PHP expertise.
              </p>
              <p className="text-base leading-relaxed">
                I apply SOLID and clean-code principles consistently, and use AI-assisted
                engineering tools (Claude Code, Windsurf) as part of my modern backend workflow —
                for codebase exploration, implementation support, debugging, and code review.
              </p>
              <p className="text-base leading-relaxed">
                My experience spans the full backend lifecycle: from API design and business logic
                implementation, through database optimization and Redis/queue processing, to
                hands-on Linux server configuration, Nginx setup, and production troubleshooting.
              </p>
            </div>

            {/* What I work on */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold text-foreground mb-4">
                What I work on
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'REST API Design',
                  'Laravel / PHP',
                  'Go',
                  'Payment Integrations',
                  'Ecommerce Backends',
                  'Logistics Platforms',
                  'Multi-tenant SaaS',
                  'ERP / CRM / HR Systems',
                  'Database/Query Optimization',
                  'Redis & Queues',
                  'Background Job Processing',
                  'Filament Admin',
                  'PHPUnit Testing',
                  'Server Configuration',
                  'Production Debugging',
                ].map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Profile photo */}
            <div className="flex justify-center">
              <ProfilePhoto size="lg" />
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-semibold text-foreground mb-4">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Cairo, Egypt</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <a
                    href="mailto:omar.adel.omar818@gmail.com"
                    className="text-muted-foreground hover:text-blue-500 transition-colors break-all"
                  >
                    omar.adel.omar818@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <a
                    href="tel:+201550781783"
                    className="text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    +201550781783
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-foreground mb-1">Education</h2>
                  <p className="text-sm font-medium text-foreground">{education.degree}</p>
                  <p className="text-sm text-muted-foreground">{education.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {education.location} · {education.period}
                  </p>
                </div>
              </div>
            </div>

            {/* AI-assisted note */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-semibold text-foreground mb-2">
                AI-Assisted Development
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Uses AI-assisted development tools (Claude Code, Windsurf) as part of daily
                backend engineering workflow — codebase exploration, implementation support,
                debugging, and code review. A productivity practice supporting hands-on backend
                development, not a separate specialization.
              </p>
            </div>

            {/* Languages */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3">Languages</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Arabic</span>
                  <span className="text-foreground font-medium">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">English</span>
                  <span className="text-foreground font-medium text-right">Professional Working Proficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
