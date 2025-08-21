interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
