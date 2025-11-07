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
import { Send, Sparkles } from "lucide-react"

export default function TransferPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [stealthAddress, setStealthAddress] = useState("")
  const [mockTxHash] = useState("0x9b2d4c1a3e5f7d8b6a9c0e2f4d6b8a1c3e5f7d9b2a4c6e8f0b2d4a6c8e0f2a")

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
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold tracking-tighter">{"[ PRIVATE_TRANSFER ]"}</h1>
              <p className="text-sm text-muted-foreground">Send NFTs anonymously using stealth addresses</p>
            </div>

            {/* Transfer Form */}
            <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-card/90 backdrop-blur-sm p-8">
              {/* NFT Selection */}
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider">Select NFT to Transfer</Label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((id) => (
                    <button
                      key={id}
                      type="button"
                      className="border border-border hover:border-accent bg-background p-3 text-left transition-colors group"
                    >
                      <div className="mb-2 aspect-square bg-muted">
                        <img
                          src={`/nft-.jpg?height=150&width=150&query=nft+${id}`}
                          alt={`Private Asset #${id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-bold">Private Asset #{id.toString().padStart(3, "0")}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipient Address */}
              <div className="space-y-2">
                <Label htmlFor="recipient" className="text-xs font-bold uppercase tracking-wider">
                  Recipient Stealth Address
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="recipient"
                    type="text"
                    placeholder="0x..."
                    value={stealthAddress}
                    onChange={(e) => setStealthAddress(e.target.value)}
                    className="flex-1 font-mono border-border bg-background focus:border-accent"
                    required
                  />
                  <Button
                    type="button"
                    onClick={generateStealthAddress}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    GENERATE
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Use a stealth address to protect recipient privacy</p>
              </div>

              {/* Privacy Notice */}
              <div className="border border-accent/50 bg-accent/10 p-4">
                <p className="text-xs text-accent">
                  <strong>PRIVACY ENABLED:</strong> This transfer will be executed through zero-knowledge circuits,
                  hiding both sender and receiver addresses from public view.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold py-6 text-lg"
                disabled={isLoading}
              >
                <Send className="mr-2 h-5 w-5" />
                {"> TRANSFER_PRIVATELY"}
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
        message="NFT has been transferred privately. The transaction is shielded from public view."
        txHash={mockTxHash}
      />
    </>
  )
}
