import type { LucideIcon } from "lucide-react"

interface ProtocolCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ProtocolCard({ icon: Icon, title, description }: ProtocolCardProps) {
  return (
    <div className="group relative border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
      <div className="absolute inset-0 bg-accent/0 transition-all group-hover:bg-accent/5" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background group-hover:border-accent group-hover:text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
