import { Link } from 'react-router-dom'
import { BOOK_META } from '../content/book'

const letters = 'ASCEN'.split('')

export function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(180deg, transparent 0%, rgba(11,11,10,0.35) 40%, rgba(11,11,10,0.92) 100%), radial-gradient(ellipse at 50% 30%, rgba(200,180,138,0.08), transparent 55%)',
        }}
        aria-hidden
      />

      {/* Symbolic path / horizon visual */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] opacity-30" aria-hidden>
        <svg viewBox="0 0 1200 400" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0 280 C200 240 350 300 500 250 C650 200 780 220 900 180 C1000 150 1100 160 1200 140 L1200 400 L0 400 Z"
            fill="currentColor"
            className="text-ascen-accent"
            opacity="0.12"
          />
          <path
            d="M0 310 C250 270 400 330 580 280 C760 230 900 250 1200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-ascen-accent"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center md:px-8">
        <h1 className="letter-reveal font-display text-6xl tracking-[0.35em] text-ascen-text md:text-8xl">
          {letters.map((letter, i) => (
            <span key={letter} style={{ animationDelay: `${i * 0.12}s` }}>
              {letter}
            </span>
          ))}
        </h1>

        <p className="fade-in-up fade-in-delay-2 mt-8 font-display text-2xl text-ascen-accent md:text-3xl">
          {BOOK_META.tagline}
        </p>

        <p className="fade-in-up fade-in-delay-3 mt-8 max-w-xl text-base leading-relaxed text-ascen-muted md:text-lg">
          Это не история человека, который уже добился всего.
          <br />
          Это история человека, который пытается этого добиться.
        </p>

        <Link
          to="/book/introduction"
          className="fade-in-up fade-in-delay-3 mt-12 inline-flex items-center gap-3 border border-ascen-accent/40 bg-ascen-accent/10 px-8 py-3 text-sm tracking-[0.15em] text-ascen-accent transition-all hover:border-ascen-accent hover:bg-ascen-accent/20"
        >
          Начать читать →
        </Link>

        <p className="fade-in mt-16 text-xs uppercase tracking-[0.2em] text-ascen-muted/70">
          Начало · {BOOK_META.startedAt}
        </p>
      </div>
    </section>
  )
}
