"use client"

import { useState } from "react"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Loader2, Wallet } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleWalletConnect = () => {
    setIsLoading(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <MatrixBackground />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="h-px w-full bg-accent animate-[scan_3s_linear_infinite]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-accent/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <Link href="/" className="absolute top-6 left-6 z-20">
        <Button
          variant="ghost"
          size="sm"
          className="border border-border hover:border-accent hover:bg-accent/10 hover:text-accent"
        >
          {"< BACK"}
        </Button>
      </Link>

      {/* Auth card */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="border border-border bg-card/95 backdrop-blur-md p-8 shadow-2xl">
          {/* Glowing border effect */}
          <div className="absolute inset-0 -z-10 bg-accent/20 blur-xl animate-pulse" />

          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center border border-accent bg-background">
              <Wallet className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-bold tracking-tighter">{"[ WALLET_CONNECTION ]"}</h1>
            <p className="text-sm text-muted-foreground">Connect your wallet to access the protocol</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleWalletConnect}
              className="w-full border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold py-6 text-lg transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  CONNECTING...
                </>
              ) : (
                <>
                  <Wallet className="mr-2 h-5 w-5" />
                  {"> CONNECT_WALLET"}
                </>
              )}
            </Button>

            <div className="space-y-2">
              <p className="text-center text-xs font-bold text-muted-foreground">SUPPORTED WALLETS</p>
              <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                <span>MetaMask</span>
                <span>•</span>
                <span>WalletConnect</span>
                <span>•</span>
                <span>Coinbase</span>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-center text-xs text-muted-foreground">
                By connecting, you agree to the protocol terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
