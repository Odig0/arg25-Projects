"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MatrixBackground } from "@/components/matrix-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"

export default function VerifyPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [generatedProof, setGeneratedProof] = useState("")
  const [verificationResult, setVerificationResult] = useState<"valid" | "invalid" | null>(null)

  const handleGenerateProof = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const mockProof = "0x" + Array.from({ length: 128 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
      setGeneratedProof(mockProof)
      setIsGenerating(false)
    }, 2000)
  }

  const handleVerifyProof = () => {
    setIsVerifying(true)
    setVerificationResult(null)
    setTimeout(() => {
      setVerificationResult(Math.random() > 0.2 ? "valid" : "invalid")
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="relative min-h-screen bg-background">
      <MatrixBackground />
      <Sidebar />

      <main className="relative z-10 ml-20 p-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter">{"[ VERIFY_OWNERSHIP ]"}</h1>
            <p className="text-sm text-muted-foreground">Generate and verify zero-knowledge proofs</p>
          </div>

          <div className="space-y-6">
            {/* Generate Proof Section */}
            <div className="border border-border bg-card/90 backdrop-blur-sm p-8">
              <h2 className="mb-4 text-xl font-bold tracking-tighter">{"[ GENERATE_PROOF ]"}</h2>

              <div className="mb-6 space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider">Select Your NFT</Label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((id) => (
                    <button
                      key={id}
                      type="button"
                      className="border border-border hover:border-accent bg-background p-3 text-left transition-colors"
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

              <Button
                onClick={handleGenerateProof}
                className="w-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    GENERATING_PROOF...
                  </>
                ) : (
                  "> GENERATE_PROOF"
                )}
              </Button>

              {generatedProof && (
                <div className="mt-6 border border-accent bg-background p-4">
                  <p className="mb-2 text-xs font-bold text-accent">GENERATED PROOF</p>
                  <p className="break-all font-mono text-xs text-foreground">{generatedProof}</p>
                </div>
              )}
            </div>

            {/* Verify Proof Section */}
            <div className="border border-border bg-card/90 backdrop-blur-sm p-8">
              <h2 className="mb-4 text-xl font-bold tracking-tighter">{"[ VERIFY_PROOF ]"}</h2>

              <div className="mb-6 space-y-2">
                <Label htmlFor="proof" className="text-xs font-bold uppercase tracking-wider">
                  Proof Hash
                </Label>
                <Input
                  id="proof"
                  type="text"
                  placeholder="0x..."
                  defaultValue={generatedProof}
                  className="font-mono border-border bg-background focus:border-accent"
                />
              </div>

              <Button
                onClick={handleVerifyProof}
                className="w-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-background font-bold"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    VERIFYING...
                  </>
                ) : (
                  "> VERIFY_PROOF"
                )}
              </Button>

              {verificationResult && (
                <div
                  className={`mt-6 border p-6 text-center ${
                    verificationResult === "valid"
                      ? "border-accent bg-accent/10"
                      : "border-destructive bg-destructive/10"
                  }`}
                >
                  {verificationResult === "valid" ? (
                    <>
                      <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-accent" />
                      <p className="text-xl font-bold text-accent">VALID PROOF</p>
                      <p className="mt-2 text-sm text-muted-foreground">Ownership verified via zero-knowledge proof</p>
                      <div className="mt-4 border border-accent bg-background p-3 font-mono text-xs">
                        Signature: zkp_valid_0x7a3...2e9f
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="mx-auto mb-3 h-12 w-12 text-destructive" />
                      <p className="text-xl font-bold text-destructive">INVALID PROOF</p>
                      <p className="mt-2 text-sm text-muted-foreground">This proof could not be verified</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
