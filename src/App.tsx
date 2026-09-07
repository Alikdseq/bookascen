import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BookPage } from './pages/BookPage'
import { AboutPage } from './pages/AboutPage'
import { NowPage } from './pages/NowPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/book/:slug" element={<BookPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
