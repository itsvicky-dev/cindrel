import { Link } from 'react-router-dom'
import { CindrelLogo } from '@/components/ui'

const COLS = [
  { title:'Company',   links:[{l:'About Us',href:'/about'},{l:'Blog',href:'/blog'},{l:'Case Studies',href:'/cases'},{l:'Careers',href:'/contact'}] },
  { title:'Services',  links:[{l:'Workflow Automation',href:'/services'},{l:'AI Agents',href:'/services'},{l:'API Integrations',href:'/services'},{l:'Custom Dev',href:'/services'}] },
  { title:'Resources', links:[{l:'Automation Guides',href:'/blog'},{l:'Case Studies',href:'/cases'},{l:'ROI Calculator',href:'/'},{l:'Free Strategy Call',href:'/contact'}] },
  { title:'Legal',     links:[{l:'Privacy Policy',href:'#'},{l:'Terms & Conditions',href:'#'},{l:'Cookie Policy',href:'#'},{l:'Contact Us',href:'/contact'}] },
]

export default function Footer() {
  return (
    <footer className="bg-dk-bg border-t border-white/[0.08] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-white/[0.08] mb-6 sm:mb-9">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <CindrelLogo size={32} />
              <span className="font-heading font-extrabold text-[17px] tracking-[0.05em] uppercase text-dk-text">Cindrel</span>
            </Link>
            <p className="text-[13.5px] sm:text-[14px] text-dk-muted leading-[1.75] max-w-[270px] mt-2.5">
              AI Automation & Workflow Engineering. We eliminate manual work and build intelligent systems that permanently scale your business.
            </p>
            <div className="flex gap-2 mt-5">
              {['in','𝕏','@','▶'].map(s => (
                <a key={s} href="#" className="w-8 h-8 sm:w-[35px] sm:h-[35px] rounded-[8px] sm:rounded-[9px] bg-dk-surf border border-white/[0.08] flex items-center justify-center text-[12px] sm:text-[13px] text-dk-muted transition-all hover:border-brand-ind/45 hover:text-dk-text hover:bg-brand-ind/10">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {/* Nav cols */}
          {COLS.map(col => (
            <div key={col.title}>
              <h5 className="font-heading font-bold text-[12.5px] sm:text-[13px] mb-3.5 sm:mb-4 text-dk-text">{col.title}</h5>
              <ul className="space-y-2 sm:space-y-[10px]">
                {col.links.map(l => (
                  <li key={l.l}>
                    <Link to={l.href} className="text-[12.5px] sm:text-[13.5px] text-dk-muted hover:text-dk-text transition-colors">{l.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-3">
          <p className="text-[12px] sm:text-[13px] text-dk-dim text-center sm:text-left">© 2025 Cindrel. All rights reserved. · Chennai, India</p>
          <span className="font-mono text-[10px] sm:text-[11px] text-dk-dim tracking-[0.05em]">AI Automation & Workflow Engineering ⚡</span>
        </div>
      </div>
    </footer>
  )
}
