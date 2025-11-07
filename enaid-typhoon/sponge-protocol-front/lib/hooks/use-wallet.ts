'use client'

import { useEffect, useState } from 'react'
import { useAccount, useBalance, useDisconnect } from 'wagmi'

export function useWallet() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Only call wagmi hooks after hydration to prevent SSR errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Use wagmi hooks unconditionally - they're safe on client after mount
  const { address, isConnected, isConnecting, isDisconnected } = useAccount()
  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address: isMounted ? address : undefined,
  })
  const { disconnect } = useDisconnect()

  const handleDisconnect = () => {
    disconnect()
  }

  return {
    address: isMounted ? address : null,
    isConnected: isMounted ? isConnected : false,
    isConnecting: isMounted ? isConnecting : false,
    isDisconnected: isMounted ? isDisconnected : true,
    balance: isMounted ? balanceData : null,
    balanceLoading: isMounted ? balanceLoading : false,
    displayAddress: isMounted && address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null,
    isMounted,
    disconnect: handleDisconnect,
  }
}
