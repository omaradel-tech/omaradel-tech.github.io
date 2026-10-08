import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillsGrid } from '@/components/skills/SkillsGrid'
import { skillCategories } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills — PHP, Laravel, Go, REST APIs, PostgreSQL, MySQL, Redis, payment gateways, Nginx, PHPUnit, and more.',
}

export default function SkillsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies, tools, and practices with confirmed production experience. No invented or aspirational skills."
        />
        <SkillsGrid categories={skillCategories} />
      </Container>
    </div>
  )
}
