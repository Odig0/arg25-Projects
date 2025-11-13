"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ConfirmationModal } from "@/components/confirmation-modal"
import { GlobalLoader } from "@/components/global-loader"
import { Send, Zap, Lock, Eye } from "lucide-react"

export default function TransferPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [stealthAddress, setStealthAddress] = useState("")
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)
  const [mockTxHash] = useState("0x9b2d4c1a3e5f7d8b6a9c0e2f4d6b8a1c3e5f7d9b2a4c6e8f0b2d4a6c8e0f2a")

  const privateAssets = [
    { id: 1, identifier: "0x7f3a...c21e", circuit: "asset-1", verified: true },
    { id: 2, identifier: "0x9b2d...8a4f", circuit: "asset-2", verified: true },
    { id: 3, identifier: "0x3c1f...d92b", circuit: "asset-3", verified: true },
  ]

  const generateStealthAddress = () => {
    const randomAddress = "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
    setStealthAddress(randomAddress)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowModal(true)
    }, 2500)
  }

  return (
    <>
      <div className="relative min-h-screen bg-background">
        <MatrixBackground />
        <Sidebar />

        <main className="relative z-10 ml-20 p-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-2 text-4xl font-bold tracking-tighter">{"[ STEALTH_TRANSFER ]"}</h1>
              <p className="text-sm text-muted-foreground">Execute anonymous asset transfer using stealth addresses and zero-knowledge proofs. No sender/recipient linking on-chain.</p>
            </div>

            {/* Transfer Process Steps */}
            <div className="mb-12">
              <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// TRANSFER_PROTOCOL_STEPS"}</h2>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="border border-accent/30 bg-background/50 p-4 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-xs font-bold text-accent">1</div>
                    <p className="text-xs font-bold uppercase">Select Asset</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Choose private asset to transfer</p>
                </div>
                <div className="border border-accent/30 bg-background/50 p-4 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-xs font-bold text-accent">2</div>
                    <p className="text-xs font-bold uppercase">Generate Stealth</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Create recipient stealth address</p>
                </div>
                <div className="border border-accent/30 bg-background/50 p-4 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-xs font-bold text-accent">3</div>
                    <p className="text-xs font-bold uppercase">Generate Proof</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Create ZK-proof of transfer</p>
                </div>
                <div className="border border-accent/30 bg-background/50 p-4 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-xs font-bold text-accent">4</div>
                    <p className="text-xs font-bold uppercase">Execute</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Submit shielded transaction</p>
                </div>
              </div>
            </div>

            {/* Transfer Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Asset Selection */}
              <div className="border border-border/50 bg-background/30 backdrop-blur-sm p-8">
                <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// SELECT_ASSET_TO_TRANSFER"}</h2>
                
                <div className="space-y-3">
                  {privateAssets.map((asset) => (
                    <button
                      key={asset.id}
                      type="button"
                      onClick={() => setSelectedAsset(asset.identifier)}
                      className={`w-full border-2 transition-all p-4 text-left ${
                        selectedAsset === asset.identifier
                          ? "border-accent bg-accent/10"
                          : "border-border/50 bg-background/50 hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${selectedAsset === asset.identifier ? "bg-accent" : "bg-muted-foreground"}`} />
                          <div>
                            <p className="text-sm font-bold font-mono text-foreground">{asset.identifier}</p>
                            <p className="text-xs text-muted-foreground">{asset.circuit}</p>
                          </div>
                        </div>
                        {asset.verified && <span className="text-xs text-accent font-bold">✓ VERIFIED</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stealth Address Generation */}
              <div className="border border-border/50 bg-background/30 backdrop-blur-sm p-8">
                <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// RECIPIENT_STEALTH_ADDRESS"}</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs font-bold uppercase tracking-wider mb-3 block">Stealth Address</Label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="0x..."
                        value={stealthAddress}
                        onChange={(e) => setStealthAddress(e.target.value)}
                        className="flex-1 font-mono text-xs border-border/50 bg-background/50 focus:border-accent"
                        required
                      />
                      <Button
                        type="button"
                        onClick={generateStealthAddress}
                        className="border border-accent/50 bg-background/50 text-accent hover:bg-accent/10 hover:border-accent font-bold"
                      >
                        <Zap className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Randomly generated stealth address protects recipient privacy</p>
                  </div>

                  {/* Stealth Address Info */}
                  <div className="grid gap-3 md:grid-cols-3 pt-4">
                    <div className="border border-accent/20 bg-background/50 p-3">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Address Type</p>
                      <p className="text-sm font-bold">STEALTH_EPHEMERAL</p>
                    </div>
                    <div className="border border-accent/20 bg-background/50 p-3">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Privacy Level</p>
                      <p className="text-sm font-bold text-accent">MAXIMUM</p>
                    </div>
                    <div className="border border-accent/20 bg-background/50 p-3">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Traceability</p>
                      <p className="text-sm font-bold text-accent">IMPOSSIBLE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Privacy Settings */}
              <div className="border border-border/50 bg-background/30 backdrop-blur-sm p-8">
                <h2 className="mb-6 text-sm font-bold text-accent uppercase tracking-wider">{"// TRANSFER_SECURITY_CONFIG"}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border border-accent/30 bg-accent/5">
                    <Lock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Encryption Protocol</p>
                      <p className="text-xs text-muted-foreground">All data encrypted with sender's ephemeral key</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-accent/30 bg-accent/5">
                    <Eye className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Proof Generation</p>
                      <p className="text-xs text-muted-foreground">ZK-SNARK proof validates ownership without exposing data</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-accent/30 bg-accent/5">
                    <Send className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Anonymous Submission</p>
                      <p className="text-xs text-muted-foreground">Transaction routed through privacy pool, no sender tracing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !selectedAsset || !stealthAddress}
                className="w-full border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold py-6 text-lg transition-all"
              >
                <Send className="mr-2 h-5 w-5" />
                {"> EXECUTE_STEALTH_TRANSFER"}
              </Button>
            </form>
          </div>
        </main>
      </div>

      <GlobalLoader isLoading={isLoading} />
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="TRANSFER_COMPLETE"
        message="Asset transferred anonymously through stealth address. Transaction shielded from public view. Sender and recipient identities protected."
        txHash={mockTxHash}
      />
    </>
  )
}
