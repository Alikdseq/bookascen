import { Link } from 'react-router-dom'
import type { BookPart } from '../content/book'

type ChapterNavigationProps = {
  prev?: BookPart
  next?: BookPart
  position: number
  total: number
}

export function ChapterNavigation({ prev, next, position, total }: ChapterNavigationProps) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-ascen-line pt-8 text-sm">
      {prev ? (
        <Link to={`/book/${prev.slug}`} className="text-ascen-muted transition-colors hover:text-ascen-accent">
          ← {prev.title}
        </Link>
      ) : (
        <Link to="/book" className="text-ascen-muted transition-colors hover:text-ascen-accent">
          ← Оглавление
        </Link>
      )}

      <span className="text-ascen-muted">
        {position} / {total}
      </span>

      {next ? (
        <Link to={`/book/${next.slug}`} className="text-ascen-muted transition-colors hover:text-ascen-accent">
          {next.title} →
        </Link>
      ) : (
        <span className="text-ascen-muted/60">История продолжается →</span>
      )}
    </div>
  )
}
