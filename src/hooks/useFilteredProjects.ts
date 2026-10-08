'use client'

import { useMemo, useState } from 'react'
import type { Project } from '@/types'

function getAllTechs(project: Project): string[] {
  return [
    ...(project.technologies.backend ?? []),
    ...(project.technologies.frontend ?? []),
    ...(project.technologies.database ?? []),
    ...(project.technologies.infrastructure ?? []),
    ...(project.technologies.integrations ?? []),
    ...(project.technologies.tools ?? []),
  ]
}

export function useFilteredProjects(projects: Project[]) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTech, setActiveTech] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return projects.filter((p) => {
      const matchesQuery =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        getAllTechs(p).some((t) => t.toLowerCase().includes(q)) ||
        p.role.toLowerCase().includes(q) ||
        p.company.toLowerCase().includes(q)

      const matchesCategory =
        activeCategory === 'All' || p.category.includes(activeCategory)

      const matchesTech =
        activeTech === 'All' || getAllTechs(p).includes(activeTech)

      return matchesQuery && matchesCategory && matchesTech
    })
  }, [projects, query, activeCategory, activeTech])

  const categories = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.category))
    return ['All', ...Array.from(set).sort()]
  }, [projects])

  const techs = useMemo(() => {
    const set = new Set(projects.flatMap((p) => getAllTechs(p)))
    return ['All', ...Array.from(set).sort()]
  }, [projects])

  return {
    filtered,
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    activeTech,
    setActiveTech,
    categories,
    techs,
  }
}
