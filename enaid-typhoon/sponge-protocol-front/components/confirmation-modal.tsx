"use client"

import Image from "next/image"
import { CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  txHash?: string
}

export function ConfirmationModal({ isOpen, onClose, title, message, txHash }: ConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm">
      <div className="relative w-full max-w-md border border-accent bg-card/95 p-8 shadow-2xl">
        {/* Glowing effect */}
        <div className="absolute inset-0 -z-10 bg-accent/20 blur-xl" />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Logo and animated checkmark */}
          <div className="mb-4 flex items-center gap-3">
            <Image 
              src="/logo.jpg" 
              alt="Sponge Protocol Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10 object-cover rounded border border-accent"
            />
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-accent/20 rounded-full" />
              <div className="relative flex h-10 w-10 items-center justify-center border-2 border-accent bg-background">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>

          <h2 className="mb-2 text-xl font-bold tracking-tighter">{"[ " + title + " ]"}</h2>
          <p className="mb-6 text-sm text-muted-foreground">{message}</p>

          {txHash && (
            <div className="mb-6 w-full border border-border bg-background p-4">
              <p className="mb-2 text-xs font-bold text-muted-foreground">TRANSACTION HASH</p>
              <p className="break-all font-mono text-xs text-accent">{txHash}</p>
            </div>
          )}

          <Button
            onClick={onClose}
            className="w-full border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-background font-bold"
          >
            {"> CONTINUE"}
          </Button>
        </div>
      </div>
    </div>
  )
}
