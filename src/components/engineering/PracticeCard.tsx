import type { EngineeringPractice } from '@/types'

interface PracticeCardProps {
  practice: EngineeringPractice
}

export function PracticeCard({ practice }: PracticeCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 hover:border-blue-500/20 transition-colors">
      <h3 className="text-sm font-bold text-foreground mb-2">{practice.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {practice.description}
      </p>
      {practice.details.length > 0 && (
        <ul className="space-y-1.5">
          {practice.details.map((detail, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-blue-500 mt-0.5 shrink-0">·</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
