import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/* ── Button ────────────────────────────────────── */
type BtnVariant = 'primary' | 'ghost-dk' | 'ghost-lt' | 'solid-dk'
interface BtnProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: BtnVariant
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, href, onClick, variant = 'primary', className, type = 'button', disabled }: BtnProps) {
  const base = 'relative inline-flex items-center justify-center gap-2.5 rounded-full font-body font-semibold transition-all duration-300 overflow-hidden select-none group'
  const variants: Record<BtnVariant, string> = {
    'primary':  'bg-brand-ind text-white px-7 py-[14px] text-[15px] shadow-[0_4px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.18)] hover:-translate-y-0.5 hover:bg-brand-ind2 hover:shadow-[0_14px_40px_rgba(79,110,247,0.5),0_4px_0_rgba(0,0,0,0.2)]',
    'ghost-dk': 'border border-white/15 text-dk-text bg-transparent px-7 py-[14px] text-[15px] hover:bg-white/6 hover:border-white/25 hover:-translate-y-0.5',
    'ghost-lt': 'border border-black/15 text-lt-text bg-transparent px-7 py-[14px] text-[15px] hover:bg-black/4 hover:border-black/25 hover:-translate-y-0.5',
    'solid-dk': 'bg-lt-text text-white px-7 py-[14px] text-[15px] shadow-[0_4px_0_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35),0_4px_0_rgba(0,0,0,0.3)] hover:bg-[#1a1d2e]',
  }
  const cls = cn(base, variants[variant], className)
  const shimmer = <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.13] to-transparent transition-[left] duration-500 group-hover:left-full" />

  if (href) return <Link to={href} className={cls}>{shimmer}{children}</Link>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{shimmer}{children}</button>
}

/* ── Eyebrow ────────────────────────────────────── */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={cn('inline-flex items-center gap-2.5 mb-4', center && 'justify-center')}>
      <span className="w-5 h-[1.5px] bg-brand-ind opacity-70" />
      <span className="font-dm font-[1000] text-[14px] tracking-[0.18em] uppercase text-brand-ind">{children}</span>
      {center && <span className="w-5 h-[1.5px] bg-brand-ind opacity-70" />}
    </div>
  )
}

/* ── Section Heading ────────────────────────────── */
export function SectionHeading({ children, light = false, center = false, className }: {
  children: ReactNode; light?: boolean; center?: boolean; className?: string
}) {
  return (
    <h2 className={cn(
      'font-heading font-extrabold leading-[1.09] tracking-[-1.4px] mb-4',
      'text-[clamp(32px,3.6vw,54px)]',
      light ? 'text-lt-text' : 'text-dk-text',
      center && 'text-center', className
    )}>
      {children}
    </h2>
  )
}

/* ── Reveal on scroll ───────────────────────────── */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.07 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={cn('reveal', className)} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

/* ── Page Hero (used by sub-pages) ─────────────── */
export function PageHero({ badge, title, sub }: { badge: string; title: ReactNode; sub: ReactNode }) {
  return (
    <div className="relative bg-dk-bg overflow-hidden border-b border-white/[0.08]">
      <div className="absolute rounded-full blur-[80px] pointer-events-none"
        style={{ width:'clamp(280px,40vw,500px)', height:'clamp(220px,32vw,400px)', top:-80, right:-60, background:'radial-gradient(circle,rgba(79,110,247,.18) 0%,transparent 65%)' }} />
      <div className="absolute rounded-full blur-[80px] pointer-events-none"
        style={{ width:'clamp(200px,28vw,350px)', height:'clamp(160px,24vw,300px)', bottom:-60, left:-40, background:'radial-gradient(circle,rgba(155,109,255,.12) 0%,transparent 65%)' }} />
      <div className="max-w-[1280px] mx-auto relative z-10 pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        <div className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-brand-cyan bg-brand-cyan/8 border border-brand-cyan/20 rounded-[6px] px-3.5 py-[5px] mb-4 sm:mb-5">
          {badge}
        </div>
        <h1 className="font-heading font-extrabold leading-[1.08] tracking-[-1.5px] sm:tracking-[-1.6px] text-dk-text mb-4 max-w-[700px]"
          style={{ fontSize: 'clamp(30px,4.5vw,62px)' }}>
          {title}
        </h1>
        <div className="text-[15px] sm:text-[16px] lg:text-[17px] text-dk-muted max-w-[600px] leading-[1.75]">{sub}</div>
      </div>
    </div>
  )
}

export function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-backdrop" 
        onClick={onClose} 
      />
      <div className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-[1300px] animate-modal">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="p-6 sm:p-10 md:p-12 max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
