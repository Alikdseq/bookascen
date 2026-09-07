import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'
import { useState } from 'react'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="ascen-gradient ascen-noise min-h-screen flex flex-col">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
