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
            <Link href="/docs" className="text-sm hover:text-accent transition-colors">
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
              <GlitchText>Zero-Knowledge</GlitchText>
              <br />
              <span className="text-muted-foreground">NFT Privacy Protocol</span>
              <br />
              <span className="text-foreground">Cryptographic Anonymity</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Sponge Protocol leverages zkSNARK technology to enable truly private NFT transactions. Verify ownership, 
              prove transfers, and maintain complete anonymity through stealth addresses and zero-knowledge proofs. 
              No transaction metadata, no sender/recipient identification, no on-chain privacy leaks.
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
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground hover:border-accent hover:bg-accent/10 hover:text-accent bg-transparent"
                >
                  {"> READ_DOCS"}
                </Button>
              </Link>
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
            <h2 className="mb-4 text-3xl font-bold tracking-tighter">{"[ PROTOCOL_TECHNOLOGY ]"}</h2>
            <p className="text-muted-foreground">Powered by zkSNARK cryptography and stealth address technology</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProtocolCard
              icon={Shield}
              title="Generate ZK-Proofs"
              description="Create zero-knowledge proofs to verify NFT ownership and eligibility without revealing sensitive cryptographic parameters or transaction details."
            />
            <ProtocolCard
              icon={Send}
              title="Stealth Transfers"
              description="Transfer assets through stealth addresses. Sender and recipient identities remain completely hidden on-chain. No address linking possible."
            />
            <ProtocolCard
              icon={CheckCircle2}
              title="Privacy Verification"
              description="Prove ownership and validate transfers using non-interactive zero-knowledge proofs. Verification without exposure of underlying data."
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
