'use client'

import { ReactNode, useEffect, useState, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

// Create QueryClient outside to reuse
let queryClientInstance: QueryClient | null = null

function getQueryClient() {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient()
  }
  return queryClientInstance
}

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Create config only on client side
  const config = useMemo(() => {
    if (typeof window === 'undefined') {
      return null
    }
    
    return createConfig({
      chains: [mainnet, sepolia],
      connectors: [metaMask()],
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
      },
    })
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null during SSR and before mounting
  if (!mounted || !config) {
    return null
  }

  return (
    <QueryClientProvider client={getQueryClient()}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
