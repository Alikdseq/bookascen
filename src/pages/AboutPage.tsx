import { Link } from 'react-router-dom'
import { BOOK_META } from '../content/book'

export function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-ascen-muted">О проекте</p>
      <h1 className="mt-4 font-display text-5xl tracking-wide">ASCEN</h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ascen-text/90">
        <p>
          ASCEN — живая электронная книга о реальной жизни, которая создаётся прямо во время пути.
        </p>
        <p className="font-display text-2xl italic text-ascen-accent">{BOOK_META.idea}</p>
        <p>
          Это не биография успешного человека, написанная после вершины. Это история человека,
          который пытается до неё добраться — с ошибками, сомнениями, работой, проектами и
          решениями, последствия которых ещё неизвестны.
        </p>
        <p>
          Формат: онлайн-книга. Новые главы появляются по мере реальных событий. Читатель может
          участвовать в важных развилках, но не управляет жизнью героя — реальное решение всегда
          остаётся тем, что произошло на самом деле.
        </p>
      </div>

      <Link
        to="/book/introduction"
        className="mt-12 inline-flex border border-ascen-accent/40 px-6 py-3 text-sm tracking-wide text-ascen-accent transition-colors hover:bg-ascen-accent/10"
      >
        Читать вступление →
      </Link>
    </section>
  )
}
