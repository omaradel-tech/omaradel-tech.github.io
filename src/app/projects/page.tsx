import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectsGrid } from '@/components/projects/ProjectsGrid'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Engineering case studies covering ILORA (Go/ERP/CRM), Turbo for Shipping (Laravel/logistics), Daashop (ecommerce), and more.',
}

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Engineering case studies — detailed breakdowns of systems I worked on, extended, or maintained in production."
        />
        <ProjectsGrid projects={projects} />
      </Container>
    </div>
  )
}
