import { Server, Plug, Database, ShoppingCart, Building2, HardDrive } from 'lucide-react'
import { engineeringDomains } from '@/data/skills'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Plug,
  Database,
  ShoppingCart,
  Building2,
  HardDrive,
}

export function EngineeringSnapshot() {
  return (
    <section className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground">Engineering Snapshot</h2>
          <p className="mt-1 text-muted-foreground">
            Technical domains with confirmed production experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineeringDomains.map((domain) => {
            const Icon = iconMap[domain.icon] || Server
            return (
              <div
                key={domain.title}
                className="group rounded-xl border border-border bg-card p-5 hover:border-blue-500/30 hover:bg-card/80 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="h-4.5 w-4.5 text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{domain.title}</h3>
                    <p className="text-xs text-muted-foreground">{domain.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex text-xs text-muted-foreground font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
