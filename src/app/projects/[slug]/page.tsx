import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { TechBadge } from '@/components/ui/TechBadge'
import { CaseStudySection } from '@/components/projects/CaseStudySection'
import { getProjectBySlug, getAllSlugs } from '@/data/projects'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Omar Adel`,
      description: project.tagline,
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const allTechs = {
    ...(project.technologies.backend?.length
      ? { Backend: project.technologies.backend }
      : {}),
    ...(project.technologies.frontend?.length
      ? { Frontend: project.technologies.frontend }
      : {}),
    ...(project.technologies.database?.length
      ? { Database: project.technologies.database }
      : {}),
    ...(project.technologies.infrastructure?.length
      ? { Infrastructure: project.technologies.infrastructure }
      : {}),
    ...(project.technologies.integrations?.length
      ? { Integrations: project.technologies.integrations }
      : {}),
    ...(project.technologies.tools?.length
      ? { Tools: project.technologies.tools }
      : {}),
  }

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {project.category.map((cat) => (
              <span key={cat} className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground font-mono">
            <span>{project.role}</span>
            <span className="text-border">·</span>
            <span>{project.company}</span>
            <span className="text-border">·</span>
            <span>{project.period}</span>
          </div>
        </div>

        {/* Tech Stack summary */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">Technical Stack</h2>
          <div className="space-y-3">
            {Object.entries(allTechs).map(([category, techs]) => (
              <div key={category} className="flex flex-wrap items-start gap-2">
                <span className="text-xs text-muted-foreground w-20 shrink-0 pt-0.5">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="accent" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-3">
          {/* Overview */}
          <CaseStudySection title="Overview" defaultOpen>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
          </CaseStudySection>

          {/* Modules */}
          {project.modules && project.modules.length > 0 && (
            <CaseStudySection title={`Modules (${project.modules.length})`} defaultOpen>
              <div className="space-y-5">
                {project.modules.map((mod) => (
                  <div key={mod.name}>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{mod.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mod.description}
                    </p>
                    {mod.details && mod.details.length > 0 && (
                      <ul className="mt-2 space-y-1 ml-3">
                        {mod.details.map((detail, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5 shrink-0">·</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Integrations */}
          {project.integrations && project.integrations.length > 0 && (
            <CaseStudySection title="Integrations">
              <div className="space-y-4">
                {project.integrations.map((int) => (
                  <div key={int.name}>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{int.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {int.description}
                    </p>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Architecture */}
          {project.architecture && (
            <CaseStudySection title="Architecture">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.architecture}</p>
            </CaseStudySection>
          )}

          {/* Backend */}
          {project.backend && (
            <CaseStudySection title="Backend Engineering">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.backend}</p>
            </CaseStudySection>
          )}

          {/* Database */}
          {project.database && (
            <CaseStudySection title="Database">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.database}</p>
            </CaseStudySection>
          )}

          {/* Caching */}
          {project.caching && (
            <CaseStudySection title="Caching">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caching}</p>
            </CaseStudySection>
          )}

          {/* Performance */}
          {project.performance && (
            <CaseStudySection title="Performance">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.performance}</p>
            </CaseStudySection>
          )}

          {/* Authentication */}
          {project.authentication && (
            <CaseStudySection title="Authentication & Authorization">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.authentication}</p>
            </CaseStudySection>
          )}

          {/* Testing */}
          {project.testing && (
            <CaseStudySection title="Testing">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.testing}</p>
            </CaseStudySection>
          )}

          {/* Monitoring */}
          {project.monitoring && (
            <CaseStudySection title="Monitoring & Debugging">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.monitoring}</p>
            </CaseStudySection>
          )}

          {/* Deployment */}
          {project.deployment && (
            <CaseStudySection title="Deployment & Infrastructure">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.deployment}</p>
            </CaseStudySection>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <CaseStudySection title="Challenges & Solutions">
              <div className="space-y-5">
                {project.challenges.map((ch, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {ch.problem}
                    </p>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ch.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* My Contribution */}
          <CaseStudySection title="My Contribution" defaultOpen>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.contribution}</p>
          </CaseStudySection>

          {/* Missing info notice */}
          {project.missingInfo && project.missingInfo.length > 0 && (
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                    Additional information would expand this case study
                  </p>
                  <ul className="space-y-1">
                    {project.missingInfo.map((info, i) => (
                      <li key={i} className="text-xs text-muted-foreground">
                        · {info}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
