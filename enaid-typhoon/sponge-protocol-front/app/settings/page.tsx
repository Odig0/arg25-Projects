"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Trash2, LogOut } from "lucide-react"
import { useWallet } from "@/lib/hooks/use-wallet"

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const { disconnect } = useWallet()
  const router = useRouter()

  const handleDisconnect = async () => {
    disconnect()
    // Pequeña pausa para asegurar que se complete la desconexión
    await new Promise(resolve => setTimeout(resolve, 500))
    router.push("/")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // No renderizar hasta que esté montado en el cliente
  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-background">
      <MatrixBackground />
      <Sidebar />

      <main className="relative z-10 ml-20 p-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter">{"[ SETTINGS ]"}</h1>
            <p className="text-sm text-muted-foreground">Configure your protocol preferences</p>
          </div>

          <div className="space-y-6">
            {/* Theme Settings */}
            <div className="border border-border bg-card/90 backdrop-blur-sm p-6">
              <h2 className="mb-4 text-lg font-bold tracking-tighter">{"[ APPEARANCE ]"}</h2>

              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-1 text-sm font-bold">Theme Mode</p>
                  <p className="text-xs text-muted-foreground">Toggle between dark and light terminal modes</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                      theme === "dark"
                        ? "border-accent bg-accent text-background"
                        : "border-border bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                      theme === "light"
                        ? "border-accent bg-accent text-background"
                        : "border-border bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="border border-border bg-card/90 backdrop-blur-sm p-6">
              <h2 className="mb-4 text-lg font-bold tracking-tighter">{"[ PRIVACY ]"}</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="mb-1 text-sm font-bold">Clear Local Proofs</p>
                    <p className="text-xs text-muted-foreground">Remove all cached zero-knowledge proofs</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-destructive hover:bg-destructive/10 hover:text-destructive bg-transparent"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    CLEAR
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm font-bold">Disconnect Wallet</p>
                    <p className="text-xs text-muted-foreground">Sign out and remove wallet connection</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDisconnect}
                    className="border-border hover:border-destructive hover:bg-destructive/10 hover:text-destructive bg-transparent"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    DISCONNECT
                  </Button>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="border border-border bg-card/90 backdrop-blur-sm p-6">
              <h2 className="mb-4 text-lg font-bold tracking-tighter">{"[ SYSTEM_INFO ]"}</h2>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protocol Version</span>
                  <span className="text-accent">v1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network</span>
                  <span className="text-accent">Ethereum Mainnet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gas Price</span>
                  <span className="text-accent">42 gwei</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Sync</span>
                  <span className="text-accent">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
