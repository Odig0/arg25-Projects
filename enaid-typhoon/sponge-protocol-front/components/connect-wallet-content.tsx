'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'

export function ConnectWalletContent() {
  const router = useRouter()
  const pathname = usePathname()
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const metaMaskConnector = connectors.find((c) => c.name === 'MetaMask')

  // Redirige al dashboard cuando se conecte, pero SOLO en la página de home
  useEffect(() => {
    if (isConnected && address && pathname === '/') {
      const timer = setTimeout(() => {
        router.push('/dashboard')
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isConnected, address, pathname, router])

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.jpg" 
          alt="Sponge Protocol Logo" 
          width={24} 
          height={24} 
          className="h-6 w-6 object-cover rounded border border-accent"
        />
        <div className="text-sm text-accent font-mono">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <Button
          onClick={() => disconnect()}
          variant="outline"
          size="sm"
          className="border-foreground hover:border-accent hover:bg-accent/10 hover:text-accent bg-transparent"
        >
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={() => {
        if (metaMaskConnector) {
          connect({ connector: metaMaskConnector })
        }
      }}
      variant="outline"
      size="sm"
      className="border-foreground hover:border-accent hover:bg-accent/10 hover:text-accent bg-transparent flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </Button>
  )
}
