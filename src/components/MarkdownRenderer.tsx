type MarkdownRendererProps = {
  markdown: string
}

type BlockKind = 'h1' | 'h2' | 'hr' | 'quote' | 'beat' | 'question' | 'body'

type ParsedBlock = {
  kind: BlockKind
  text: string
}

/** Нормализация CRLF — иначе весь текст склеивается в один абзац на Windows */
function normalizeMarkdown(markdown: string): string {
  return markdown.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim()
}

function classifyBlock(raw: string): ParsedBlock | null {
  const text = raw.trim()
  if (!text) return null

  if (/^#{1}\s+/.test(text) && !text.includes('\n')) {
    return { kind: 'h1', text: text.replace(/^#\s+/, '') }
  }
  if (/^#{2}\s+/.test(text) && !text.includes('\n')) {
    return { kind: 'h2', text: text.replace(/^##\s+/, '') }
  }
  if (/^---+$/.test(text)) {
    return { kind: 'hr', text: '' }
  }
  if (text.startsWith('>')) {
    const quote = text
      .split('\n')
      .map((line) => line.replace(/^>\s?/, ''))
      .join(' ')
      .trim()
    return { kind: 'quote', text: quote }
  }

  const flat = text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  const isShort = flat.length <= 72 && !flat.includes('. ')
  const isQuestion = /[?？]$/.test(flat)

  if (isQuestion) return { kind: 'question', text: flat }
  if (isShort) return { kind: 'beat', text: flat }
  return { kind: 'body', text: flat }
}

function parseBlocks(markdown: string): ParsedBlock[] {
  return normalizeMarkdown(markdown)
    .split(/\n{2,}/)
    .map(classifyBlock)
    .filter((b): b is ParsedBlock => b !== null)
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const blocks = parseBlocks(markdown)
  let bodyIndex = 0

  return (
    <div className="book-prose mx-auto w-full max-w-[34rem]">
      {blocks.map((block, index) => {
        const prev = blocks[index - 1]
        const next = blocks[index + 1]

        if (block.kind === 'h1') {
          return (
            <h1
              key={index}
              className="font-display text-[2.35rem] font-medium leading-[1.15] tracking-[0.04em] text-ascen-text md:text-[3rem]"
            >
              {block.text}
            </h1>
          )
        }

        if (block.kind === 'h2') {
          return (
            <h2
              key={index}
              className="mt-5 font-display text-[1.65rem] font-medium leading-snug tracking-wide text-ascen-accent md:text-[2rem]"
            >
              {block.text}
            </h2>
          )
        }

        if (block.kind === 'hr') {
          return (
            <div key={index} className="flex items-center justify-center gap-3 py-10" aria-hidden>
              <span className="h-px w-8 bg-ascen-line" />
              <span className="font-display text-ascen-accent/70">❖</span>
              <span className="h-px w-8 bg-ascen-line" />
            </div>
          )
        }

        if (block.kind === 'quote') {
          return (
            <blockquote
              key={index}
              className="my-8 border-l border-ascen-accent/45 pl-5 font-display text-[1.35rem] italic leading-[1.55] text-ascen-accent md:text-[1.55rem]"
            >
              {renderInline(block.text)}
            </blockquote>
          )
        }

        if (block.kind === 'question') {
          return (
            <p
              key={index}
              className="my-5 font-display text-[1.25rem] leading-snug text-ascen-accent md:text-[1.4rem]"
            >
              {renderInline(block.text)}
            </p>
          )
        }

        if (block.kind === 'beat') {
          const afterBreak = prev?.kind === 'hr' || prev?.kind === 'h1' || prev?.kind === 'h2'
          const beforeBreak = next?.kind === 'hr'
          return (
            <p
              key={index}
              className={`font-display text-[1.2rem] leading-snug tracking-wide text-ascen-text md:text-[1.35rem] ${
                afterBreak ? 'mt-2' : 'mt-5'
              } ${beforeBreak ? 'mb-1' : ''}`}
            >
              {renderInline(block.text)}
            </p>
          )
        }

        const isLead = bodyIndex === 0 && index < 6
        bodyIndex += 1

        return (
          <p
            key={index}
            className={`mt-5 text-[1.05rem] leading-[1.85] text-ascen-text/92 md:text-[1.125rem] md:leading-[1.9] ${
              isLead ? 'text-ascen-text' : ''
            }`}
          >
            {renderInline(block.text)}
          </p>
        )
      })}
    </div>
  )
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ascen-text">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}
