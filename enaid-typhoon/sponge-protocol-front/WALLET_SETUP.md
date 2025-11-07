# Integración de MetaMask con Wagmi y RainbowKit

## ✅ Configuración Completada

Se ha integrado exitosamente la funcionalidad de conexión de billetera MetaMask en tu proyecto Sponge Protocol.

## 📦 Librerías Instaladas

- **wagmi** (2.19.2) - Librería de React para Ethereum
- **@wagmi/core** (2.22.1) - Core de wagmi
- **viem** (2.38.6) - Cliente Ethereum de bajo nivel
- **@rainbow-me/rainbowkit** (2.2.9) - UI para conexión de billeteras

## 📁 Archivos Creados

### 1. `components/wallet-provider.tsx`
Proveedor de contexto que envuelve la aplicación con Wagmi y RainbowKit. Configura:
- Redes soportadas: Mainnet y Sepolia (testnet)
- Conector: MetaMask
- Transporte HTTP

### 2. `components/connect-wallet-button.tsx`
Componente de botón que:
- Muestra "Connect Wallet" cuando la billetera NO está conectada
- Muestra la dirección acortada cuando SÍ está conectada
- Permite desconectar la billetera
- Integra el ícono de Wallet de lucide-react

### 3. `lib/hooks/use-wallet.ts`
Hook personalizado que proporciona:
- `address` - Dirección de la billetera
- `isConnected` - Estado de conexión
- `isConnecting` - Si está en proceso de conexión
- `balance` - Balance de ETH
- `displayAddress` - Dirección acortada (0x1234...5678)

### 4. Actualizaciones a `app/layout.tsx`
- Agregado `WalletProvider` que envuelve toda la app
- Agregado `ThemeProvider` para gestionar temas

### 5. Actualizaciones a `app/page.tsx`
- Importado `ConnectWalletButton`
- Reemplazado el botón hardcodeado con el componente dinámico

## 🚀 Cómo Usar

### En el Navbar (ya implementado)
```tsx
import { ConnectWalletButton } from "@/components/connect-wallet-button"

// En tu componente:
<ConnectWalletButton />
```

### Acceder a datos de la billetera en cualquier componente
```tsx
'use client'

import { useWallet } from '@/lib/hooks/use-wallet'

export function MyComponent() {
  const { address, isConnected, balance, displayAddress } = useWallet()
  
  return (
    <>
      {isConnected && (
        <div>
          <p>Dirección: {displayAddress}</p>
          <p>Balance: {balance?.formatted} {balance?.symbol}</p>
        </div>
      )}
    </>
  )
}
```

### Usar wagmi directamente
```tsx
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function CustomComponent() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  
  // Tu lógica aquí...
}
```

## 🔧 Configuración de Redes

Por defecto está configurado para:
- **Mainnet** (Red principal de Ethereum)
- **Sepolia** (Testnet)

Para agregar más redes, edita `components/wallet-provider.tsx`:

```tsx
import { mainnet, sepolia, polygon, arbitrum } from 'wagmi/chains'

const config = createConfig({
  chains: [mainnet, sepolia, polygon, arbitrum],
  // ...
})
```

## 📝 Redes Disponibles en wagmi

Algunos ejemplos:
- `mainnet` - Ethereum Mainnet
- `sepolia` - Ethereum Testnet
- `polygon` - Polygon
- `arbitrum` - Arbitrum One
- `optimism` - Optimism
- `base` - Base
- `gnosis` - Gnosis Chain

## ⚙️ Próximos Pasos (Sugerencias)

1. **Agregar funcionalidad de Smart Contracts**: Usa wagmi para llamar a funciones de Smart Contracts
   ```tsx
   import { useContractWrite } from 'wagmi'
   ```

2. **Guardar datos en localStorage**: Persiste la billetera conectada
   ```tsx
   import { useLocalStorage } from '@wagmi/core/chains'
   ```

3. **Agregar notificaciones**: Usa Sonner (ya instalado) para notificaciones de transacciones
   ```tsx
   import { toast } from 'sonner'
   ```

4. **Agregar seguridad**: Valida firmas (EIP-712)
   ```tsx
   import { useSignMessage } from 'wagmi'
   ```

## 🔐 Consideraciones de Seguridad

- **No guardes claves privadas en el frontend** ✅ Wagmi maneja esto automáticamente
- **Valida direcciones** antes de hacer transacciones
- **Confirma con el usuario** antes de hacer transacciones
- **Usa testnet** durante desarrollo

## 🆘 Troubleshooting

### MetaMask no aparece como opción
- Asegúrate de tener MetaMask instalado
- Recarga la página
- Verifica la consola del navegador

### Error de peer dependencies
Los warnings de TypeScript son normales y no afectan la funcionalidad.

### No se conecta a la billetera
- Asegúrate de estar en una cadena soportada (Mainnet o Sepolia)
- Verifica que `WalletProvider` esté en el layout

## 📚 Documentación Oficial

- [Wagmi Docs](https://wagmi.sh)
- [RainbowKit Docs](https://www.rainbowkit.com)
- [Viem Docs](https://viem.sh)
- [Ethereum RPC Methods](https://ethereum.org/en/developers/docs/apis/json-rpc)

---

¡La integración está lista! 🎉
