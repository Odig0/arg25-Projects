'use client'

import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'
import dynamic from 'next/dynamic'

// Carga dinámicamente el componente que usa wagmi hooks
// ssr: false previene que se renderice en servidor
const ConnectWalletContent = dynamic(
  () => import('@/components/connect-wallet-content').then(mod => ({ default: mod.ConnectWalletContent })),
  {
    loading: () => (
      <Button
        disabled
        variant="outline"
        size="sm"
        className="border-foreground bg-transparent"
      >
        <Wallet className="w-4 h-4 mr-2" />
        Loading...
      </Button>
    ),
    ssr: false,
  }
)

export function ConnectWalletButton() {
  return <ConnectWalletContent />
}
