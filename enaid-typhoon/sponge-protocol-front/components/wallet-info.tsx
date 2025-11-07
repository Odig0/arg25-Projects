'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useWallet } from '@/lib/hooks/use-wallet'

export function WalletInfo() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected, balance, displayAddress } = useWallet()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (!isConnected) {
    return (
      <div className="p-6 border border-border/50 bg-background/50 rounded-lg">
        <p className="text-muted-foreground">Conecta tu billetera para ver información</p>
      </div>
    )
  }

  return (
    <div className="p-6 border border-border/50 bg-background/50 rounded-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Image 
            src="/logo.jpg" 
            alt="Sponge Protocol Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10 object-cover rounded border border-accent"
          />
          <div>
            <p className="text-sm font-bold text-foreground">SPONGE PROTOCOL</p>
            <p className="text-xs text-muted-foreground">Connected Wallet</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Dirección</p>
          <p className="text-lg font-mono text-accent">{address}</p>
        </div>
        {balance && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Balance</p>
            <p className="text-lg font-mono text-accent">
              {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
