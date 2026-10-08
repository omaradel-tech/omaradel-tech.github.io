import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectFilterProps {
  query: string
  setQuery: (v: string) => void
  activeCategory: string
  setActiveCategory: (v: string) => void
  activeTech: string
  setActiveTech: (v: string) => void
  categories: string[]
  techs: string[]
  resultCount: number
}

export function ProjectFilter({
  query,
  setQuery,
  activeCategory,
  setActiveCategory,
  activeTech,
  setActiveTech,
  categories,
  techs,
  resultCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, technologies, modules…"
          className="w-full rounded-lg border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'rounded-full px-3.5 py-1 text-xs font-medium transition-colors',
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Technology filter */}
      <div className="flex items-center gap-2">
        <label className="text-xs text-muted-foreground shrink-0">Technology:</label>
        <select
          value={activeTech}
          onChange={(e) => setActiveTech(e.target.value)}
          className="rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
        >
          {techs.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        <span className="text-xs text-muted-foreground ml-auto">
          {resultCount} project{resultCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}
