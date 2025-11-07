"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { WalletInfo } from "@/components/wallet-info"
import { useWallet } from "@/lib/hooks/use-wallet"
import { Shield, Wallet } from "lucide-react"
import Link from "next/link"

const mockNFTs = [
  { id: 1, name: "Private Asset #001", image: "/abstract-nft-art.png", encrypted: true },
  { id: 2, name: "Private Asset #002", image: "/crypto-art.png", encrypted: true },
  { id: 3, name: "Private Asset #003", image: "/abstract-digital-composition.png", encrypted: true },
]

const recentTransactions = [
  { type: "Mint", hash: "0x7f3a...c21e", time: "2 hours ago" },
  { type: "Transfer", hash: "0x9b2d...8a4f", time: "5 hours ago" },
  { type: "Verify", hash: "0x3c1f...d92b", time: "1 day ago" },
]

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
          <h1 className="mb-2 text-3xl font-bold tracking-tighter">{"[ DASHBOARD ]"}</h1>
          <p className="text-sm text-muted-foreground">Monitor your private assets and activity</p>
        </div>

        {/* Wallet Info Card */}
        <div className="mb-8">
          <WalletInfo />
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="border border-border bg-card/90 backdrop-blur-sm p-6 relative overflow-hidden group hover:border-accent transition-colors">
            <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="mb-2 text-xs font-bold text-muted-foreground">TOTAL MINTED</p>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>

          <div className="border border-border bg-card/90 backdrop-blur-sm p-6 relative overflow-hidden group hover:border-accent transition-colors">
            <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="mb-2 text-xs font-bold text-muted-foreground">PRIVATE TRANSFERS</p>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>

          <div className="border border-border bg-card/90 backdrop-blur-sm p-6 relative overflow-hidden group hover:border-accent transition-colors">
            <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="mb-2 text-xs font-bold text-muted-foreground">PROOFS GENERATED</p>
              <p className="text-3xl font-bold">24</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold tracking-tighter">{"[ QUICK_ACTIONS ]"}</h2>
          <Link href="/mint">
            <Button className="border border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold">
              <Shield className="mr-2 h-4 w-4" />
              {"> MINT_PRIVATE_NFT"}
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent NFTs */}
          <div className="border border-border bg-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tighter">{"[ YOUR_NFTS ]"}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {mockNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className="border border-border bg-background p-4 group hover:border-accent transition-colors"
                >
                  <div className="mb-3 aspect-square bg-muted relative overflow-hidden">
                    <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mb-1 text-sm font-bold">{nft.name}</p>
                  <p className="text-xs text-accent flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    ENCRYPTED
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="border border-border bg-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tighter">{"[ RECENT_ACTIVITY ]"}</h2>
            <div className="space-y-4">
              {recentTransactions.map((tx, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0"
                >
                  <div>
                    <p className="mb-1 text-sm font-bold">{tx.type}</p>
                    <p className="font-mono text-xs text-muted-foreground">{tx.hash}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
