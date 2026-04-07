import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../../assets/images/logo.svg'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/[0.08] transition-all duration-300',
        'h-16 sm:h-[70px] lg:h-[78px]',
        'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
        scrolled ? 'bg-[rgba(8,10,18,.97)] backdrop-blur-2xl' : 'bg-[rgba(8,10,18,.88)] backdrop-blur-2xl'
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <img src={Logo} alt="Cindrel Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <span className="font-heading font-extrabold text-[17px] sm:text-[19px] lg:text-[20px] tracking-[0.05em] uppercase text-dk-text">
            Cindrel
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-4">
          {NAV_LINKS.map(link => (
            <Link key={link.href} to={link.href}
              className={cn(
                'relative font-body text-[13.5px] xl:text-[14.5px] font-medium transition-colors duration-200',
                'after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[1.5px]',
                'after:bg-brand-ind after:scale-x-0 after:origin-left after:transition-transform after:duration-300',
                pathname === link.href
                  ? 'text-dk-text border-2 border-brand-ind py-1.5 px-4 rounded-full'
                  : 'text-dk-muted hover:text-dk-text border-2 border-transparent hover:border-brand-ind py-1.5 px-4 rounded-full'
              )}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link to="/contact"
            className="hidden sm:flex items-center gap-1.5 bg-brand-ind text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-body text-[13px] sm:text-[13.5px] font-semibold transition-all hover:bg-brand-ind2 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,247,.45)]">
            Apply for Free Automation <span className="hidden md:inline">→</span>
          </Link>
          <button
            className="lg:hidden p-2 text-dk-text rounded-lg border border-white/[0.1] bg-white/[0.04] active:bg-white/[0.08] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={cn('fixed inset-0 z-40 lg:hidden transition-all duration-300', mobileOpen ? 'pointer-events-auto' : 'pointer-events-none')}>
        <div
          className={cn('absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300', mobileOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setMobileOpen(false)} />
        <div className={cn('absolute top-0 right-0 bottom-0 w-[280px] bg-dk-bg border-l border-white/[0.08] flex flex-col transition-transform duration-300 ease-out', mobileOpen ? 'translate-x-0' : 'translate-x-full')}>
          <div className="flex items-center justify-between px-6 h-16 sm:h-[70px] border-b border-white/[0.08]">
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <img src={Logo} alt="Cindrel Logo" className="w-7 h-7 object-contain" />
              <span className="font-heading font-extrabold text-[16px] tracking-[0.05em] uppercase text-dk-text">Cindrel</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-1.5 text-dk-muted hover:text-dk-text"><X size={20} /></button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            {NAV_LINKS.map(link => (
              <Link key={link.href} to={link.href}
                className={cn('py-3.5 px-4 rounded-xl font-body text-[15px] font-medium transition-colors',
                  pathname === link.href ? 'bg-brand-ind/15 text-dk-text border border-brand-ind/25' : 'text-dk-muted hover:bg-white/[0.04] hover:text-dk-text')}
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <Link to="/contact" onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-brand-ind text-white py-4 rounded-full font-body font-semibold text-[15px] transition-all hover:bg-brand-ind2">
              Book a Free Call →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
