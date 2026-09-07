type ReadingProgressProps = {
  position: number
  total: number
  label?: string
}

export function ReadingProgress({ position, total, label }: ReadingProgressProps) {
  return (
    <div className="space-y-3">
      <p className="font-display text-3xl leading-none tracking-[0.2em]">ASCEN</p>
      <p className="max-w-[12rem] text-sm leading-relaxed text-ascen-muted">
        История,
        <br />
        которая ещё
        <br />
        не написана.
      </p>
      <div className="pt-4 text-xs uppercase tracking-[0.18em] text-ascen-muted">
        <p>Начало</p>
        <p className="mt-1 text-ascen-text normal-case tracking-normal">05.09.2026</p>
      </div>
      <div className="text-xs uppercase tracking-[0.18em] text-ascen-muted">
        <p>Формат</p>
        <p className="mt-1 text-ascen-text normal-case tracking-normal">Онлайн-книга</p>
      </div>
      <div className="pt-2 text-sm text-ascen-accent">
        {label ?? `ВСТУПЛЕНИЕ`}
        <div className="mt-2 h-px w-full bg-ascen-line" />
        <p className="mt-3 text-ascen-muted">
          {position} / {total}
        </p>
        <p className="mt-1 text-xs text-ascen-muted/80">История продолжается.</p>
      </div>
    </div>
  )
}
