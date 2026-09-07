import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/book', label: 'Книга' },
  { to: '/now', label: 'Сейчас' },
  { to: '/about', label: 'О проекте' },
]

type HeaderProps = {
  onOpenMenu: () => void
}

export function Header({ onOpenMenu }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="relative z-20 border-b border-ascen-line/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl tracking-[0.28em] text-ascen-text">
          ASCEN
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-ascen-accent' : 'text-ascen-muted hover:text-ascen-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="text-sm text-ascen-muted transition-colors hover:text-ascen-accent"
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? 'Светлая' : 'Тёмная'}
          </button>
        </nav>

        <button
          type="button"
          onClick={onOpenMenu}
          className="text-ascen-muted md:hidden"
          aria-label="Открыть меню"
        >
          <span className="text-xl leading-none">☰</span>
        </button>
      </div>
    </header>
  )
}
