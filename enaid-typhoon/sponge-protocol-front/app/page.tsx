'use client'

import { MatrixBackground } from "@/components/matrix-background"
import { GlitchText } from "@/components/glitch-text"
import { ProtocolCard } from "@/components/protocol-card"
import { Button } from "@/components/ui/button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Shield, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <MatrixBackground />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo.jpg" 
              alt="Sponge Protocol Logo" 
              width={80} 
              height={80} 
              className="h-20 w-20 object-cover rounded border border-foreground"
            />
            <span className="text-2xl font-bold tracking-tighter">SPONGE_PROTOCOL</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#protocol" className="text-sm hover:text-accent transition-colors">
              Protocol
            </Link>
            <Link href="#docs" className="text-sm hover:text-accent transition-colors">
              Docs
            </Link>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent">
              {"[ PRIVACY_LAYER_PROTOCOL ]"}
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter sm:text-6xl lg:text-7xl text-balance">
              <GlitchText>Anonymous NFTs.</GlitchText>
              <br />
              <span className="text-muted-foreground">Zero Knowledge.</span>
              <br />
              <span className="text-foreground">Absolute Privacy.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Sponge Protocol enables truly private NFT transactions through zero-knowledge proofs and cryptographic
              anonymity. Mint, transfer, and verify ownership without revealing your identity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-background font-bold"
                >
                  {"> ENTER_PROTOCOL"}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground hover:border-accent hover:bg-accent/10 hover:text-accent bg-transparent"
              >
                {"> READ_DOCS"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Functions */}
      <section
        id="protocol"
        className="relative z-10 border-t border-border/50 bg-background/90 py-20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter">{"[ CORE_PROTOCOL_FUNCTIONS ]"}</h2>
            <p className="text-muted-foreground">Three pillars of cryptographic privacy</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProtocolCard
              icon={Shield}
              title="Mint Privately"
              description="Create NFTs with encrypted metadata. Your ownership remains cryptographically shielded from public view."
            />
            <ProtocolCard
              icon={Send}
              title="Transfer Anonymously"
              description="Gift or sell NFTs without revealing sender or receiver addresses through zero-knowledge circuits."
            />
            <ProtocolCard
              icon={CheckCircle2}
              title="Verify Ownership"
              description="Prove you own an NFT via zero-knowledge proofs without exposing your wallet or transaction history."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">{"© 2025 SPONGE_PROTOCOL // PRIVACY_FIRST"}</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Discord
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
