'use client'

import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Code, Shield, Zap, Lock, Eye, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DocsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <MatrixBackground />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/logo.jpg" 
              alt="Sponge Protocol Logo" 
              width={80} 
              height={80} 
              className="h-20 w-20 object-cover rounded border border-foreground"
            />
            <span className="text-2xl font-bold tracking-tighter">SPONGE_PROTOCOL</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#protocol" className="text-sm hover:text-accent transition-colors">
              Protocol
            </Link>
            <Link href="/docs" className="text-sm text-accent">
              Docs
            </Link>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>

      {/* Docs Content */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block border border-accent/50 bg-accent/10 px-3 py-1 text-xs text-accent">
                {"[ TECHNICAL_DOCUMENTATION ]"}
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter sm:text-6xl text-balance">
                Sponge Protocol
                <br />
                <span className="text-muted-foreground">Technical Reference</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete documentation for implementing and understanding the Sponge Protocol zero-knowledge privacy system.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8">
              <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// TABLE_OF_CONTENTS"}</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <Link href="#overview" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ Protocol Overview</p>
                </Link>
                <Link href="#architecture" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ System Architecture</p>
                </Link>
                <Link href="#zksnark" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ ZK-SNARK Implementation</p>
                </Link>
                <Link href="#stealth" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ Stealth Addresses</p>
                </Link>
                <Link href="#privacy" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ Privacy Guarantees</p>
                </Link>
                <Link href="#api" className="group p-3 border border-border/30 hover:border-accent/50 transition-colors">
                  <p className="text-sm font-bold text-accent group-hover:text-accent">→ API Reference</p>
                </Link>
              </div>
            </div>

            {/* Overview Section */}
            <div id="overview" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-accent" />
                Protocol Overview
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sponge Protocol is a privacy-preserving NFT system built on zero-knowledge proof technology. It enables users to mint, 
                  transfer, and verify ownership of digital assets without revealing any transaction metadata or participant identities.
                </p>
                <p>
                  The protocol leverages zkSNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) circuits to prove the validity 
                  of transactions while maintaining complete confidentiality. All transfers utilize stealth addresses to ensure sender and 
                  recipient privacy at the cryptographic level.
                </p>
                <div className="border border-accent/30 bg-accent/5 p-4 rounded mt-4">
                  <p className="text-sm font-mono text-accent">
                    <strong>Core Principle:</strong> Verify without revealing. Prove without exposing.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Section */}
            <div id="architecture" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <Zap className="h-6 w-6 text-accent" />
                System Architecture
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Component Stack</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-accent/20 bg-background/50">
                      <p className="text-sm font-mono font-bold text-foreground">Smart Contracts Layer</p>
                      <p className="text-xs text-muted-foreground">Verifies ZK-proofs and manages state transitions</p>
                    </div>
                    <div className="p-3 border border-accent/20 bg-background/50">
                      <p className="text-sm font-mono font-bold text-foreground">Proof Generation Circuit</p>
                      <p className="text-xs text-muted-foreground">Noir-based circuits for asset validation</p>
                    </div>
                    <div className="p-3 border border-accent/20 bg-background/50">
                      <p className="text-sm font-mono font-bold text-foreground">Privacy Pool</p>
                      <p className="text-xs text-muted-foreground">Aggregates transactions to break on-chain analysis</p>
                    </div>
                    <div className="p-3 border border-accent/20 bg-background/50">
                      <p className="text-sm font-mono font-bold text-foreground">Client SDK</p>
                      <p className="text-xs text-muted-foreground">Generates proofs and stealth addresses locally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ZK-SNARK Section */}
            <div id="zksnark" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <Shield className="h-6 w-6 text-accent" />
                ZK-SNARK Implementation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ZK-SNARKs enable the protocol to verify asset ownership and transaction validity without revealing the underlying data. 
                  The protocol uses efficient circuits compiled with Noir to minimize proof size and verification time.
                </p>
                <div className="border border-border/30 bg-background/50 p-4 my-4">
                  <p className="text-sm font-mono mb-3 text-foreground">// Proof Generation Flow</p>
                  <code className="text-xs text-muted-foreground block whitespace-pre-wrap">
{`1. User provides private inputs (asset data, private key)
2. Circuit validates proof conditions
3. SNARK proof generated in client environment
4. Proof submitted with stealth address
5. Smart contract verifies proof
6. Transaction executed if valid`}
                  </code>
                </div>
                <p>
                  <strong className="text-foreground">Proof Size:</strong> Approximately 128 bytes
                  <br />
                  <strong className="text-foreground">Verification Time:</strong> {"<"} 100ms on-chain
                  <br />
                  <strong className="text-foreground">Circuit Type:</strong> Noir zkSNARK
                </p>
              </div>
            </div>

            {/* Stealth Addresses Section */}
            <div id="stealth" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <Lock className="h-6 w-6 text-accent" />
                Stealth Addresses
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Stealth addresses are ephemeral, single-use addresses that break the link between transactions and real user identities. 
                  Each transfer uses a unique stealth address, making it computationally infeasible to trace transactions or link addresses to users.
                </p>
                <div className="grid gap-4 md:grid-cols-2 my-4">
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-accent mb-2">Generation</p>
                    <p className="text-xs">Derived from ephemeral public key and recipient's viewing key</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-accent mb-2">Privacy</p>
                    <p className="text-xs">Each address used only once, preventing address linking</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-accent mb-2">Detection</p>
                    <p className="text-xs">Only recipient can decrypt and recognize incoming transfers</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-accent mb-2">Traceability</p>
                    <p className="text-xs">Impossible to link stealth address to real user identity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Guarantees Section */}
            <div id="privacy" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <Eye className="h-6 w-6 text-accent" />
                Privacy Guarantees
              </h2>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-foreground mb-1">Sender Privacy</p>
                    <p className="text-xs text-muted-foreground">No on-chain link between sender wallet and transaction</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-foreground mb-1">Recipient Privacy</p>
                    <p className="text-xs text-muted-foreground">Stealth addresses prevent recipient identification</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-foreground mb-1">Amount Privacy</p>
                    <p className="text-xs text-muted-foreground">Transaction amounts encrypted in ZK proofs</p>
                  </div>
                  <div className="border border-accent/20 bg-background/50 p-4">
                    <p className="text-sm font-bold text-foreground mb-1">Metadata Privacy</p>
                    <p className="text-xs text-muted-foreground">No metadata exposed in transaction records</p>
                  </div>
                </div>
                <div className="border border-accent/30 bg-accent/5 p-4 rounded mt-4">
                  <p className="text-sm text-accent font-mono">
                    <strong>Security Model:</strong> Computational soundness with cryptographic hardness assumptions
                  </p>
                </div>
              </div>
            </div>

            {/* API Reference Section */}
            <div id="api" className="mb-16 border border-border/50 bg-background/50 backdrop-blur-sm p-8 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-bold tracking-tighter flex items-center gap-3">
                <Code className="h-6 w-6 text-accent" />
                API Reference
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Core Functions</h3>
                  <div className="space-y-3">
                    <div className="border border-border/30 bg-background/50 p-4 font-mono text-xs">
                      <p className="text-accent mb-2">generateProof(assetData, privateKey)</p>
                      <p className="text-muted-foreground">Generates ZK-SNARK proof for asset verification</p>
                    </div>
                    <div className="border border-border/30 bg-background/50 p-4 font-mono text-xs">
                      <p className="text-accent mb-2">generateStealthAddress(recipientKey)</p>
                      <p className="text-muted-foreground">Creates single-use ephemeral address for recipient</p>
                    </div>
                    <div className="border border-border/30 bg-background/50 p-4 font-mono text-xs">
                      <p className="text-accent mb-2">verifyProof(proof, publicInputs)</p>
                      <p className="text-muted-foreground">On-chain verification of ZK-SNARK proof</p>
                    </div>
                    <div className="border border-border/30 bg-background/50 p-4 font-mono text-xs">
                      <p className="text-accent mb-2">transfer(asset, stealthAddress, proof)</p>
                      <p className="text-muted-foreground">Executes private asset transfer with proof validation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center border-t border-border/20 pt-12">
              <p className="text-muted-foreground mb-6">Ready to implement Sponge Protocol?</p>
              <Link href="/auth">
                <Button
                  size="lg"
                  className="border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-background font-bold"
                >
                  {"> ENTER_PROTOCOL"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80 py-8 backdrop-blur-sm mt-20">
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
