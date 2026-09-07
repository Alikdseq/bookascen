import introductionRaw from '@book/introduction.md?raw'
import indexRaw from '@book/index.md?raw'

export type BookPart = {
  id: string
  slug: string
  title: string
  subtitle?: string
  kind: 'introduction' | 'chapter'
  status: 'PUBLISHED' | 'COMING'
  dateLabel?: string
  markdown: string
}

function stripFrontMatter(md: string): string {
  return md.replace(/^---[\s\S]*?---\s*/, '').trim()
}

/** Разбивает markdown-вступление на абзацы/блоки для рендера */
export function parseMarkdownBlocks(markdown: string): string[] {
  return stripFrontMatter(markdown)
    .split(/\n---\n/)
    .map((block) => block.trim())
    .filter(Boolean)
}

export const BOOK_META = {
  title: 'ASCEN',
  tagline: 'История, которая ещё не написана.',
  startedAt: '05.09.2026',
  format: 'Онлайн-книга',
  idea: 'Ты читаешь не историю о том, кем я стал. Ты читаешь историю о том, кем я пытаюсь стать.',
}

export const bookParts: BookPart[] = [
  {
    id: 'introduction',
    slug: 'introduction',
    title: 'Вступление',
    subtitle: 'История, которая ещё не написана',
    kind: 'introduction',
    status: 'PUBLISHED',
    dateLabel: '05.09.2026',
    markdown: stripFrontMatter(introductionRaw),
  },
]

/** Пока глав нет — оглавление строится из published parts + placeholder */
export function getTableOfContents() {
  return {
    published: bookParts.filter((p) => p.status === 'PUBLISHED'),
    continuing: true,
    indexSource: indexRaw,
  }
}

export function getPartBySlug(slug?: string): BookPart | undefined {
  if (!slug) return bookParts[0]
  return bookParts.find((p) => p.slug === slug)
}

export function getAdjacentParts(slug: string) {
  const index = bookParts.findIndex((p) => p.slug === slug)
  if (index < 0) return { prev: undefined, next: undefined, position: 0, total: bookParts.length }
  return {
    prev: bookParts[index - 1],
    next: bookParts[index + 1],
    position: index + 1,
    total: bookParts.length,
  }
}
