# ASCEN Web

Цифровая оболочка книги ASCEN.

Путь в проекте:

```text
Моя КНИГА/
└── 07_PUBLICATION/
    ├── book/          ← публичный текст книги
    │   ├── introduction.md
    │   ├── index.md
    │   └── chapters/
    └── web/           ← этот сайт
```

## Связь с книгой

Публичный текст лежит в `content/book/` (копия из `07_PUBLICATION/book` для деплоя):

- `introduction.md` → `/book/introduction`
- `index.md` → оглавление

Перед публикацией новой главы: обновить `content/book/` и `src/content/book.ts`.

Деплой: репозиторий [Alikdseq/bookascen](https://github.com/Alikdseq/bookascen) → Vercel (Framework: Vite, Build: `npm run build`, Output: `dist`).

## Запуск

```bash
cd 07_PUBLICATION/web
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Страницы

| Маршрут | Содержание |
|---------|------------|
| `/` | Обложка / главная |
| `/book` | Оглавление |
| `/book/introduction` | Вступление |
| `/book/:slug` | Глава |
| `/now` | Текущее состояние истории |
| `/about` | О проекте |

## Дизайн

- Фон: `#0B0B0A`
- Текст: `#E9E2D5`
- Вторичный: `#9A958C`
- Акцент: тёплый золотисто-бежевый
- Display: Cormorant Garamond
- Body: Manrope

Тема: тёмная по умолчанию, светлая переключается в шапке.
