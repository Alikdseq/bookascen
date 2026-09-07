import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="font-display text-6xl text-ascen-accent">404</p>
      <h1 className="mt-6 font-display text-3xl">Этой страницы ещё нет</h1>
      <p className="mt-4 text-ascen-muted">Возможно, она появится вместе с новой главой.</p>
      <Link to="/" className="mt-10 text-ascen-accent hover:underline">
        Вернуться на главную
      </Link>
    </section>
  )
}
