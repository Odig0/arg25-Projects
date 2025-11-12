"use client"

export function GlobalLoader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm">
      <div className="relative">
        {/* Rotating cryptographic symbols */}
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-[hash-rotate_2s_linear_infinite] border-4 border-transparent border-t-accent" />
          <div className="absolute inset-4 animate-[hash-rotate_1.5s_linear_infinite_reverse] border-4 border-transparent border-t-foreground" />
          <div className="absolute inset-8 animate-[hash-rotate_1s_linear_infinite] border-4 border-transparent border-t-accent/50" />
        </div>

        {/* Cascading hex code */}
        <div className="mt-8 flex justify-center gap-1 font-mono text-xs text-accent">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-block animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase()}
            </span>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">{"[ PROCESSING ]"}</p>
      </div>
    </div>
  )
}
