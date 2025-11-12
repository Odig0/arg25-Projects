"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Shield, Send, CheckCircle2, Settings } from "lucide-react"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/mint", icon: Shield, label: "Mint" },
  { href: "/transfer", icon: Send, label: "Transfer" },
  { href: "/verify", icon: CheckCircle2, label: "Verify" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-20 border-r border-border bg-background/95 backdrop-blur-sm">
      <div className="flex h-full flex-col items-center py-8">
        <Link
          href="/"
          className="mb-12 h-10 w-10 border border-foreground bg-background hover:border-accent transition-colors rounded overflow-hidden"
        >
          <Image 
            src="/logo.jpg" 
            alt="Sponge Protocol Logo" 
            width={40} 
            height={40} 
            className="h-full w-full object-cover"
          />
        </Link>

        <nav className="flex flex-col gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex flex-col items-center gap-1 transition-colors ${
                  isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
                title={item.label}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-accent" : ""}`} />
                <span className="text-[10px] font-bold tracking-tighter">{item.label.toUpperCase()}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
