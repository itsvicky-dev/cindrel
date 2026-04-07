import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar      from '@/components/layout/Navbar'
import Footer      from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import AiChatBar   from '@/components/ui/AiChatBar'
import HomePage    from '@/pages/Home'
import ServicesPage from '@/pages/Services'
import AboutPage   from '@/pages/About'
import CasesPage   from '@/pages/Cases'
import BlogPage    from '@/pages/Blog'
import ContactPage from '@/pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="noise-overlay">
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/cases"    element={<CasesPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <AiChatBar />
    </div>
  )
}
