"use client"

import { useState, useEffect } from "react"
import { MatrixBackground } from "@/components/matrix-background"
import { Loader2, Hash, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoadingDemo() {
  const [loadingType, setLoadingType] = useState<"hash" | "lock" | "cascade">("hash")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <MatrixBackground />

      <Link href="/" className="absolute top-6 left-6 z-20">
        <Button
          variant="ghost"
          size="sm"
          className="border border-border hover:border-accent hover:bg-accent/10 hover:text-accent"
        >
          {"< BACK"}
        </Button>
      </Link>

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Loading type selector */}
        <div className="mb-8 flex gap-2">
          <Button
            variant={loadingType === "hash" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoadingType("hash")}
            className={loadingType === "hash" ? "bg-accent text-background" : "border-border hover:border-accent"}
          >
            Hash
          </Button>
          <Button
            variant={loadingType === "lock" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoadingType("lock")}
            className={loadingType === "lock" ? "bg-accent text-background" : "border-border hover:border-accent"}
          >
            Lock
          </Button>
          <Button
            variant={loadingType === "cascade" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoadingType("cascade")}
            className={loadingType === "cascade" ? "bg-accent text-background" : "border-border hover:border-accent"}
          >
            Cascade
          </Button>
        </div>

        {/* Loading screens */}
        <div className="border border-border bg-card/95 backdrop-blur-md p-12">
          {loadingType === "hash" && (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative">
                <Hash className="h-16 w-16 text-accent animate-[hash-rotate_2s_linear_infinite]" />
                <div className="absolute inset-0 h-16 w-16 border-2 border-accent/30 animate-ping" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold tracking-tight">COMPUTING HASH</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  {`0x${Math.random().toString(16).substr(2, 8)}...`}
                </p>
              </div>
              <div className="w-full space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-accent transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>
                <p className="text-xs text-muted-foreground text-right">{progress}%</p>
              </div>
            </div>
          )}

          {loadingType === "lock" && (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative">
                <Lock className="h-16 w-16 text-accent animate-pulse" />
                <div className="absolute -inset-4 border border-accent/30 animate-[glitch_0.5s_infinite]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold tracking-tight">ENCRYPTING TRANSACTION</h2>
                <p className="text-sm text-muted-foreground">Generating zero-knowledge proof...</p>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-2 w-2 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {loadingType === "cascade" && (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative h-16 w-full overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-2 bg-accent/20"
                    style={{
                      top: `${i * 8}px`,
                      animation: `matrix-fall ${2 + i * 0.1}s linear infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold tracking-tight">PROCESSING CRYPTOGRAPHIC DATA</h2>
                <div className="space-y-1 font-mono text-xs text-muted-foreground">
                  <p>{"> Verifying merkle proof..."}</p>
                  <p>{"> Computing nullifier hash..."}</p>
                  <p className="text-accent">{"> Submitting to network..."}</p>
                </div>
              </div>
              <Loader2 className="h-6 w-6 text-accent animate-spin" />
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Loading state demonstrations for Sponge Protocol
        </p>
      </div>
    </div>
  )
}
