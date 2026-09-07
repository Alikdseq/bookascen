import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-ascen-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ascen-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display tracking-[0.2em] text-ascen-text">ASCEN</p>
        <p>История, которая ещё не написана.</p>
        <div className="flex gap-5">
          <Link to="/book" className="hover:text-ascen-accent">
            Читать
          </Link>
          <Link to="/now" className="hover:text-ascen-accent">
            Сейчас
          </Link>
          <Link to="/about" className="hover:text-ascen-accent">
            О проекте
          </Link>
        </div>
      </div>
    </footer>
  )
}
