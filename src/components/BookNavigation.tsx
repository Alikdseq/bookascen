import { Link } from 'react-router-dom'
import { bookParts } from '../content/book'

type BookNavigationProps = {
  currentSlug: string
}

export function BookNavigation({ currentSlug }: BookNavigationProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-8 space-y-8">
        <div>
          <p className="font-display text-2xl tracking-[0.25em]">ASCEN</p>
          <p className="mt-2 text-sm text-ascen-muted">Цифровая книга</p>
        </div>

        <nav className="space-y-3 text-sm">
          <Link
            to="/book"
            className={`block transition-colors ${
              currentSlug === 'toc' ? 'text-ascen-accent' : 'text-ascen-muted hover:text-ascen-text'
            }`}
          >
            Оглавление
          </Link>
          {bookParts.map((part) => (
            <Link
              key={part.id}
              to={`/book/${part.slug}`}
              className={`block transition-colors ${
                currentSlug === part.slug
                  ? 'text-ascen-accent'
                  : 'text-ascen-muted hover:text-ascen-text'
              }`}
            >
              {part.title}
            </Link>
          ))}
          <p className="pt-2 text-ascen-muted/70">Глава 001 — скоро</p>
        </nav>
      </div>
    </aside>
  )
}
