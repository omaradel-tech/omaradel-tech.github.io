import type { SkillCategory } from '@/types'

interface SkillsGridProps {
  categories: SkillCategory[]
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {categories.map((category) => (
        <div key={category.name} className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-bold text-foreground mb-1">{category.name}</h3>
          <p className="text-xs text-muted-foreground mb-4">{category.description}</p>
          <div className="space-y-2.5">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-start justify-between gap-2">
                <span className="text-sm text-foreground">{skill.name}</span>
                {skill.note && (
                  <span className="text-xs text-muted-foreground text-right shrink-0 max-w-[120px]">
                    {skill.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
