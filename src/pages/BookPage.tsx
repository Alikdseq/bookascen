import { Link, useParams } from 'react-router-dom'
import { BookNavigation } from '../components/BookNavigation'
import { ChapterNavigation } from '../components/ChapterNavigation'
import { MarkdownRenderer } from '../components/MarkdownRenderer'
import { ReadingProgress } from '../components/ReadingProgress'
import {
  bookParts,
  getAdjacentParts,
  getPartBySlug,
  getTableOfContents,
} from '../content/book'

export function BookPage() {
  const { slug } = useParams()

  if (!slug || slug === 'toc') {
    return <TableOfContentsView />
  }

  const part = getPartBySlug(slug)
  if (!part) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="font-display text-3xl">Часть не найдена</p>
        <Link to="/book" className="mt-6 inline-block text-ascen-accent">
          Вернуться к оглавлению
        </Link>
      </div>
    )
  }

  const { prev, next, position, total } = getAdjacentParts(part.slug)

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[180px_minmax(0,1fr)_180px] lg:py-14">
      <BookNavigation currentSlug={part.slug} />

      <article className="fade-in-up min-w-0">
        <p className="mb-8 text-center text-[0.7rem] uppercase tracking-[0.28em] text-ascen-muted lg:text-left">
          {part.kind === 'introduction' ? 'Вступление' : 'Глава'}
          {part.dateLabel ? ` · ${part.dateLabel}` : ''}
        </p>
        <MarkdownRenderer markdown={part.markdown} />
        <div className="mx-auto w-full max-w-[34rem]">
          <ChapterNavigation prev={prev} next={next} position={position} total={total} />
        </div>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-8">
          <ReadingProgress
            position={position}
            total={total}
            label={part.kind === 'introduction' ? 'ВСТУПЛЕНИЕ' : part.title.toUpperCase()}
          />
        </div>
      </aside>
    </div>
  )
}

function TableOfContentsView() {
  const toc = getTableOfContents()

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[180px_minmax(0,1fr)_180px] lg:py-14">
      <BookNavigation currentSlug="toc" />

      <section className="fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-ascen-muted">Оглавление</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide md:text-5xl">ASCEN</h1>
        <p className="mt-4 max-w-xl text-ascen-muted">
          Книга растёт вместе с жизнью. Пока опубликовано {toc.published.length}{' '}
          {toc.published.length === 1 ? 'часть' : 'частей'}.
        </p>

        <ol className="mt-12 space-y-6">
          {bookParts.map((part, index) => (
            <li key={part.id}>
              <Link
                to={`/book/${part.slug}`}
                className="group flex items-baseline justify-between gap-4 border-b border-ascen-line pb-4"
              >
                <span className="font-display text-2xl transition-colors group-hover:text-ascen-accent">
                  <span className="mr-4 text-ascen-muted">{String(index + 1).padStart(2, '0')}</span>
                  {part.title}
                </span>
                <span className="shrink-0 text-xs text-ascen-muted">{part.dateLabel}</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 border border-dashed border-ascen-line px-5 py-6 text-ascen-muted">
          <p className="font-display text-xl text-ascen-accent">История продолжается.</p>
          <p className="mt-2 text-sm">Глава 001 появится после первой утверждённой публикации.</p>
        </div>
      </section>

      <aside className="hidden lg:block">
        <div className="sticky top-8">
          <ReadingProgress position={0} total={bookParts.length} label="ОГЛАВЛЕНИЕ" />
        </div>
      </aside>
    </div>
  )
}
