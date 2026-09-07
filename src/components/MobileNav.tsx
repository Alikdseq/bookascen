import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/book', label: 'Книга' },
  { to: '/book/introduction', label: 'Вступление' },
  { to: '/now', label: 'Сейчас' },
  { to: '/about', label: 'О проекте' },
]

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { theme, toggleTheme } = useTheme()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Закрыть меню"
        onClick={onClose}
      />
      <aside className="absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col bg-ascen-bg-elevated px-6 py-6 shadow-2xl">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-display text-xl tracking-[0.25em]">ASCEN</span>
          <button type="button" onClick={onClose} className="text-ascen-muted" aria-label="Закрыть">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-ascen-accent' : 'text-ascen-text'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => {
            toggleTheme()
            onClose()
          }}
          className="mt-auto border-t border-ascen-line pt-5 text-left text-sm text-ascen-muted"
        >
          Тема: {theme === 'dark' ? 'тёмная' : 'светлая'} — переключить
        </button>
      </aside>
    </div>
  )
}
