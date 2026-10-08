import { cn } from '@/lib/utils'

interface TechBadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'muted'
  className?: string
}

const variantStyles = {
  default:
    'bg-muted text-muted-foreground border border-border hover:border-blue-400/50 hover:text-foreground',
  accent:
    'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20',
  muted: 'bg-muted/50 text-muted-foreground border border-border/50',
}

export function TechBadge({ label, variant = 'default', className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors duration-150',
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
