import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TechBadge } from '@/components/ui/TechBadge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const allTechs = [
    ...(project.technologies.backend ?? []),
    ...(project.technologies.database ?? []),
    ...(project.technologies.frontend ?? []),
  ].slice(0, compact ? 4 : 6)

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card hover:border-blue-500/30 transition-all duration-200 overflow-hidden">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {project.category.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium text-blue-500 uppercase tracking-wide"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Company + period */}
        <p className="text-xs text-muted-foreground mb-3 font-mono">
          {project.role} · {project.company} · {project.period}
        </p>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Tech badges */}
        {allTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {allTechs.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        )}
      </div>

      {/* Footer link */}
      <div className="px-6 py-3 border-t border-border/50">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
        >
          View Case Study
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
