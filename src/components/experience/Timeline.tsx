import { TechBadge } from '@/components/ui/TechBadge'
import { cn } from '@/lib/utils'
import type { ExperienceEntry } from '@/types'

interface TimelineProps {
  entries: ExperienceEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-10">
        {entries.map((entry, i) => (
          <div key={i} className="relative pl-12 sm:pl-14">
            {/* Dot */}
            <div
              className={cn(
                'absolute left-[13px] sm:left-[17px] top-1.5 h-3 w-3 rounded-full border-2 bg-background',
                entry.current
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-border'
              )}
            />

            {/* Entry */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-base font-bold text-foreground">{entry.role}</h3>
                  <p className="text-sm font-medium text-blue-500">{entry.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-mono text-muted-foreground">{entry.period}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{entry.location}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">
                {entry.summary}
              </p>

              {entry.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {entry.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {entry.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
