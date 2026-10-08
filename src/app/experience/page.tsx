import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/experience/Timeline'
import { experience, education } from '@/data/experience'
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Career timeline — IVERA (2026–present), Algoriza (2023–2026), Buducloud (2021–2022), and freelance work.',
}

export default function ExperiencePage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Career timeline from freelance beginnings to production backend engineering across SaaS, ecommerce, and logistics platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3">
            <Timeline entries={experience} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            <div className="rounded-xl border border-border bg-card p-5 sticky top-24">
              <div className="flex items-start gap-2.5 mb-4">
                <GraduationCap className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <h2 className="text-sm font-semibold text-foreground">Education</h2>
              </div>
              <p className="text-sm font-medium text-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{education.institution}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {education.location}
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                {education.period}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
