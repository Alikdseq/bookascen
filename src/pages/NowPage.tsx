export function NowPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl flex-col justify-center px-5 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-ascen-muted">Сейчас</p>
      <p className="mt-4 text-sm text-ascen-accent">05.09.2026</p>

      <h1 className="mt-10 font-display text-4xl leading-tight tracking-wide md:text-5xl">
        Я только начал.
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ascen-muted">
        <p>
          У меня нет готового ответа на вопрос,
          <br />
          чем закончится эта история.
        </p>
        <p>
          Поэтому я начинаю писать её
          <br />с сегодняшнего дня.
        </p>
      </div>

      <div className="mt-14 border-t border-ascen-line pt-6 text-sm text-ascen-muted">
        <p>Сезон I — 2026</p>
        <p className="mt-2 text-ascen-text">Статус: история открыта. Первая глава ещё впереди.</p>
      </div>
    </section>
  )
}
