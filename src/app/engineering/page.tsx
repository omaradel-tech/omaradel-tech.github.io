import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PracticeCard } from '@/components/engineering/PracticeCard'
import { engineeringPractices } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'How I approach backend engineering — SOLID principles, REST API design, database optimization, Redis, queues, testing, monitoring, and server configuration.',
}

export default function EngineeringPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Engineering Practices"
          subtitle="How I approach backend development — practices with confirmed production application, not aspirational claims."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {engineeringPractices.map((practice) => (
            <PracticeCard key={practice.title} practice={practice} />
          ))}
        </div>
      </Container>
    </div>
  )
}
