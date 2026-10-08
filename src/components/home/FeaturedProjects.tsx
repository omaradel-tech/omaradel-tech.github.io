import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getFeaturedProjects } from '@/data/projects'

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
            <p className="mt-1 text-muted-foreground">
              Most technically significant case studies
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
