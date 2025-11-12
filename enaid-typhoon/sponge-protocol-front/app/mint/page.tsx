"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ConfirmationModal } from "@/components/confirmation-modal"
import { GlobalLoader } from "@/components/global-loader"
import { Upload, Lock } from "lucide-react"

export default function MintPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [encryptMetadata, setEncryptMetadata] = useState(true)
  const [mockTxHash] = useState("0x7f3a2b8c9d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowModal(true)
    }, 3000)
  }

  return (
    <>
      <div className="relative min-h-screen bg-background">
        <MatrixBackground />
        <Sidebar />

        <main className="relative z-10 ml-20 p-8">
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold tracking-tighter">{"[ GENERATE_PROOF ]"}</h1>
              <p className="text-sm text-muted-foreground">Create a zero-knowledge proof for your private asset. Ownership verification without identity disclosure.</p>
            </div>

            {/* Mint Form */}
            <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-card/90 backdrop-blur-sm p-8">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider">Asset Data</Label>
                <div className="border-2 border-dashed border-border hover:border-accent transition-colors p-12 text-center cursor-pointer group">
                  <Upload className="mx-auto mb-4 h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors" />
                  <p className="text-sm text-muted-foreground">Upload asset information for proof generation</p>
                  <p className="text-xs text-muted-foreground">Data will be encrypted and used for ZK-proof computation</p>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">
                  Asset Identifier
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Private Asset #001"
                  className="font-mono border-border bg-background focus:border-accent"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-xs font-bold uppercase tracking-wider">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="A unique private asset protected by zero-knowledge proofs..."
                  className="font-mono border-border bg-background focus:border-accent min-h-24"
                  required
                />
              </div>

              {/* Encrypt Metadata Toggle */}
              <div className="flex items-center justify-between border border-border bg-background p-4">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-bold">Encrypt Data</p>
                    <p className="text-xs text-muted-foreground">Proof data hidden from on-chain visibility</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEncryptMetadata(!encryptMetadata)}
                  className={`relative h-6 w-12 rounded-full border-2 transition-colors ${
                    encryptMetadata ? "border-accent bg-accent" : "border-border bg-transparent"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-foreground transition-transform ${
                      encryptMetadata ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold py-6 text-lg"
                disabled={isLoading}
              >
                {"> GENERATE_ZK_PROOF"}
              </Button>
            </form>
          </div>
        </main>
      </div>

      <GlobalLoader isLoading={isLoading} />
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="PROOF_GENERATED"
        message="Your private NFT has been successfully minted with encrypted metadata."
        txHash={mockTxHash}
      />
    </>
  )
}
