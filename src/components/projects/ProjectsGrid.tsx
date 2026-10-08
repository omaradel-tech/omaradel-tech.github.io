'use client'

import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { useFilteredProjects } from '@/hooks/useFilteredProjects'
import type { Project } from '@/types'

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const {
    filtered,
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    activeTech,
    setActiveTech,
    categories,
    techs,
  } = useFilteredProjects(projects)

  return (
    <div>
      <ProjectFilter
        query={query}
        setQuery={setQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeTech={activeTech}
        setActiveTech={setActiveTech}
        categories={categories}
        techs={techs}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground">
          <p className="text-sm">No projects match your filters.</p>
          <button
            onClick={() => {
              setQuery('')
              setActiveCategory('All')
              setActiveTech('All')
            }}
            className="mt-3 text-sm text-blue-500 hover:text-blue-400 transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
