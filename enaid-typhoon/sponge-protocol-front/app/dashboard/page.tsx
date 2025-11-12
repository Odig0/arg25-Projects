"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { WalletInfo } from "@/components/wallet-info"
import { useWallet } from "@/lib/hooks/use-wallet"
import { Shield, Zap, Lock, Eye, TrendingUp, Activity, BookOpen } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected, balance } = useWallet()

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
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tighter">{"[ PROTOCOL_STATUS ]"}</h1>
          <p className="text-sm text-muted-foreground">Real-time ZK-SNARK Protocol Metrics & Cryptographic State</p>
        </div>

        {/* Wallet Info Card */}
        <div className="mb-8">
          <WalletInfo />
        </div>

        {/* Protocol Health Grid */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-bold text-accent uppercase tracking-wider">{"// PROTOCOL_METRICS"}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {/* Proof Generation Rate */}
            <div className="border border-accent/30 bg-background/50 backdrop-blur-sm p-6 hover:border-accent/60 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">PROOF_GEN_RATE</p>
                  <p className="text-2xl font-bold font-mono">24/h</p>
                </div>
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-accent" />
              </div>
            </div>

            {/* Anonymity Score */}
            <div className="border border-accent/30 bg-background/50 backdrop-blur-sm p-6 hover:border-accent/60 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">ANONYMITY_SCORE</p>
                  <p className="text-2xl font-bold font-mono">98%</p>
                </div>
                <Lock className="h-5 w-5 text-accent" />
              </div>
              <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-accent" />
              </div>
            </div>

            {/* Stealth Transfers Active */}
            <div className="border border-accent/30 bg-background/50 backdrop-blur-sm p-6 hover:border-accent/60 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">STEALTH_ACTIVE</p>
                  <p className="text-2xl font-bold font-mono">8/12</p>
                </div>
                <Eye className="h-5 w-5 text-accent" />
              </div>
              <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-accent" />
              </div>
            </div>

            {/* Network Latency */}
            <div className="border border-accent/30 bg-background/50 backdrop-blur-sm p-6 hover:border-accent/60 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">AVG_LATENCY</p>
                  <p className="text-2xl font-bold font-mono">42ms</p>
                </div>
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Protocol Operations */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-bold text-accent uppercase tracking-wider">{"// PROTOCOL_OPERATIONS"}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/mint">
              <Button className="w-full border border-accent/50 bg-background/50 text-accent hover:bg-accent/10 hover:border-accent font-bold py-6 flex flex-col items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                {"> GENERATE_PROOF"}
              </Button>
            </Link>
            <Link href="/transfer">
              <Button className="w-full border border-accent/50 bg-background/50 text-accent hover:bg-accent/10 hover:border-accent font-bold py-6 flex flex-col items-center justify-center gap-2">
                <Zap className="h-5 w-5" />
                {"> STEALTH_TRANSFER"}
              </Button>
            </Link>
            <Link href="/verify">
              <Button className="w-full border border-accent/50 bg-background/50 text-accent hover:bg-accent/10 hover:border-accent font-bold py-6 flex flex-col items-center justify-center gap-2">
                <Eye className="h-5 w-5" />
                {"> VERIFY_PROOF"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-bold text-accent uppercase tracking-wider">{"// DOCUMENTATION"}</h2>
          <Link href="/docs">
            <div className="border border-accent/40 bg-background/50 backdrop-blur-sm p-8 hover:border-accent/70 hover:bg-accent/5 transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Technical Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete reference guide covering ZK-SNARK implementation, stealth addresses, privacy guarantees, and API documentation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 border border-accent/30 text-accent rounded">ZK-SNARK</span>
                      <span className="text-xs px-2 py-1 border border-accent/30 text-accent rounded">Stealth Addresses</span>
                      <span className="text-xs px-2 py-1 border border-accent/30 text-accent rounded">Privacy Proofs</span>
                      <span className="text-xs px-2 py-1 border border-accent/30 text-accent rounded">API Reference</span>
                    </div>
                  </div>
                </div>
                <span className="text-accent text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Data Sections */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Proof History */}
          <div className="border border-border/50 bg-background/30 backdrop-blur-sm p-8">
            <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// PROOF_GENERATION_HISTORY"}</h2>
            <div className="space-y-4">
              {[
                { id: 1, type: "zkSNARK", timestamp: "2 hours ago", status: "VERIFIED", circuit: "asset-mint" },
                { id: 2, type: "zkSNARK", timestamp: "5 hours ago", status: "VERIFIED", circuit: "stealth-transfer" },
                { id: 3, type: "zkSNARK", timestamp: "1 day ago", status: "VERIFIED", circuit: "ownership-proof" },
                { id: 4, type: "zkPLONK", timestamp: "2 days ago", status: "VERIFIED", circuit: "asset-mint" },
              ].map((proof) => (
                <div
                  key={proof.id}
                  className="border border-border/30 bg-background/50 p-4 hover:border-accent/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <div>
                        <p className="text-sm font-bold font-mono text-foreground">{proof.type}</p>
                        <p className="text-xs text-muted-foreground">{proof.circuit}</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent font-bold">✓ {proof.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-5">{proof.timestamp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stealth Address Activity */}
          <div className="border border-border/50 bg-background/30 backdrop-blur-sm p-8">
            <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// STEALTH_ADDRESS_ACTIVITY"}</h2>
            <div className="space-y-4">
              {[
                { id: 1, address: "0x7a3f...2c1e", type: "SENDER", time: "15 mins ago", state: "INACTIVE" },
                { id: 2, address: "0x9b2d...8a4f", type: "RECIPIENT", time: "1 hour ago", state: "ACTIVE" },
                { id: 3, address: "0x3c1f...d92b", type: "SENDER", time: "4 hours ago", state: "INACTIVE" },
                { id: 4, address: "0x5e2a...7f1d", type: "RECIPIENT", time: "1 day ago", state: "INACTIVE" },
              ].map((activity) => (
                <div
                  key={activity.id}
                  className="border border-border/30 bg-background/50 p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${activity.state === "ACTIVE" ? "bg-accent animate-pulse" : "bg-muted-foreground"}`} />
                      <div>
                        <p className="text-sm font-bold font-mono text-foreground">{activity.address}</p>
                        <p className="text-xs text-muted-foreground">{activity.type}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${activity.state === "ACTIVE" ? "text-accent" : "text-muted-foreground"}`}>
                      {activity.state}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-5">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-12 border-t border-border/20 pt-8">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Total Private Assets</p>
              <p className="text-3xl font-bold text-accent">12</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Anonymous Transfers</p>
              <p className="text-3xl font-bold text-accent">8</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">ZK-Proofs Generated</p>
              <p className="text-3xl font-bold text-accent">24</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
