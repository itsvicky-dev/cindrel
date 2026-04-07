import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { Reveal, Eyebrow, SectionHeading, Button } from '@/components/ui'
import {
  HERO_STATS, TRUSTED_BRANDS, SERVICES, USE_CASES, TOOLS,
  INDUSTRIES, PROCESS_STEPS, CASE_STUDIES, WHY_ITEMS, TESTIMONIALS,
} from '@/lib/data'
import Logo from '../../assets/images/logo.svg'
import { INR_RATE } from '@/lib/utils'
import FreeAutomationImg from '@/assets/images/free_automation_illustration.png'

/* ── Hero ─────────────────────────────────────── */
export function HeroSection() {
  const NODES = [
    { e: '⚡', top: '3%', left: '50%', ml: '-28px', bg: 'rgba(79,110,247,.2)', an: 'floatUp', ad: '4s' },
    { e: '🤖', top: '21%', right: '2%', bg: 'rgba(0,212,240,.14)', an: 'floatDown', ad: '4.5s', adel: '.5s' },
    { e: '🔗', bottom: '21%', right: '2%', bg: 'rgba(155,109,255,.2)', an: 'floatUp', ad: '4.2s', adel: '1s' },
    { e: '📊', bottom: '3%', left: '50%', ml: '-28px', bg: 'rgba(79,110,247,.15)', an: 'floatDown', ad: '3.8s', adel: '.3s' },
    { e: '🧠', bottom: '21%', left: '2%', bg: 'rgba(0,212,240,.12)', an: 'floatUp', ad: '4.8s', adel: '.7s' },
    { e: '📧', top: '21%', left: '2%', bg: 'rgba(155,109,255,.15)', an: 'floatDown', ad: '4.3s', adel: '1.2s' },
  ]
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-[70px] lg:pt-[78px] bg-dk-bg overflow-hidden">
      <div className="hero-grid pointer-events-none" />
      {/* Blobs */}
      <div className="absolute rounded-full blur-[90px] pointer-events-none mix-blend-screen animate-blob"
        style={{
          width: 'clamp(260px,55vw,700px)', height: 'clamp(220px,45vw,550px)', top: -80, right: -60,
          background: 'radial-gradient(circle,rgba(79,110,247,.22) 0%,transparent 65%)'
        }} />
      <div className="absolute rounded-full blur-[90px] pointer-events-none mix-blend-screen animate-[blobDrift_22s_4s_ease-in-out_infinite_reverse]"
        style={{
          width: 'clamp(200px,45vw,500px)', height: 'clamp(160px,38vw,420px)', bottom: -70, left: -50,
          background: 'radial-gradient(circle,rgba(155,109,255,.15) 0%,transparent 65%)'
        }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-12 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-18 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left col-span-2">
            <h1 className="font-heading font-extrabold leading-[1.06] tracking-[-2px] sm:tracking-[-2.5px] text-dk-text mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(38px,6vw,80px)', animation: 'fadeSlideUp .8s .1s ease both' }}>
              Automate Your<br />Business.<br />
              <span className="text-grad-brand">Scale Without Limits.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-dk-muted leading-[1.8] mb-8 sm:mb-10 max-w-[490px] mx-auto lg:mx-0"
              style={{ animation: 'fadeSlideUp .8s .2s ease both' }}>
              We engineer intelligent automation systems — AI agents, n8n workflows, Zapier pipelines, and custom integrations — that permanently eliminate manual work and unlock compounding productivity.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start"
              style={{ animation: 'fadeSlideUp .8s .3s ease both' }}>
              <Button href="/contact" variant="primary">
                Get Your First Automation Free
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[12px]">→</span>
              </Button>
              <Button href="/services" variant="ghost-dk">Explore Services</Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-10 pt-8 mb-10 border-t border-white/[0.08]"
              style={{ animation: 'fadeSlideUp .8s .4s ease both' }}>
              {HERO_STATS.map((s, i) => (
                <div key={s.num} className="flex items-center gap-4 sm:gap-6">
                  <div>
                    <div className="font-heading font-extrabold text-[26px] sm:text-[30px] text-grad-ind tracking-[-0.5px]">{s.num}</div>
                    <div className="text-[11px] sm:text-[12px] text-dk-muted mt-1">{s.label}</div>
                  </div>
                  {i < HERO_STATS.length - 1 && <div className="hidden sm:block w-px h-10 bg-white/[0.08]" />}
                </div>
              ))}
            </div>
          </div>
          {/* Orb */}
          <div className="flex justify-center" style={{ animation: 'fadeSlideUp 1s .5s ease both' }}>
            <div className="relative w-full aspect-square" style={{ maxWidth: 'clamp(260px,50vw,490px)' }}>
              {/* Rings */}
              {[{ s: 248, b: 'rgba(79,110,247,.22)', d: '20s' }, { s: 348, b: 'rgba(0,212,240,.09)', d: '30s', r: true }, { s: 448, b: 'rgba(155,109,255,.07)', d: '42s' }].map(({ s, b, d, r }, i) => (
                <div key={i} className="absolute rounded-full" style={{ width: s, height: s, top: '50%', left: '50%', marginLeft: -s / 2, marginTop: -s / 2, border: `1px solid ${b}`, animation: `spin ${d} linear infinite${r ? ' reverse' : ''}` }} />
              ))}
              {/* SVG lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 490 490">
                <defs>
                  <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f6ef7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00d4f0" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                {[[245, 112, 245, 245, '0s'], [378, 180, 245, 245, '.5s'], [378, 315, 245, 245, '1s'], [245, 382, 245, 245, '1.5s'], [112, 315, 245, 245, '.3s'], [112, 180, 245, 245, '.8s']].map(([x1, y1, x2, y2, delay], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="conn-line" style={{ animationDelay: delay as string }} />
                ))}
              </svg>
              {/* Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[158px] lg:h-[158px] rounded-full flex items-center justify-center z-10"
                style={{ background: 'radial-gradient(circle at 35% 35%,rgba(79,110,247,.6),rgba(79,110,247,.07) 65%,transparent)', boxShadow: '0 0 55px rgba(79,110,247,.4),0 0 110px rgba(79,110,247,.1),inset 0 0 32px rgba(0,212,240,.13)', border: '1px solid rgba(79,110,247,.44)' }}>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px] mx-auto mb-1"><img src={Logo} alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="font-mono text-[7px] sm:text-[8px] text-brand-cyan tracking-[2px] uppercase">AI Core</span>
                </div>
              </div>
              {/* Nodes */}
              {NODES.map(({ e, an, ad, adel, ...pos }, i) => (
                <div key={i} className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-[56px] lg:h-[56px] rounded-[12px] lg:rounded-[14px] backdrop-blur-md border border-white/10 flex items-center justify-center text-[16px] sm:text-[18px] lg:text-[20px] z-20 shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
                  style={{ ...pos, background: pos.bg, animation: `${an} ${ad}${adel ? ` ${adel}` : ''} ease-in-out infinite` } as React.CSSProperties}>
                  {e}
                </div>
              ))}
              {/* Micro cards */}
              <div className="hidden xs:block absolute top-[7%] right-[-6%] sm:right-[-9%] bg-white/5 border border-white/[0.14] rounded-[12px] px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md z-30 min-w-[120px] sm:min-w-[145px] shadow-[0_8px_26px_rgba(0,0,0,0.4)]"
                style={{ animation: 'floatUp 5s .5s ease-in-out infinite' }}>
                <div className="font-mono text-[8px] sm:text-[9px] text-dk-muted tracking-[2px] uppercase mb-1">Tasks Automated</div>
                <div className="font-heading font-bold text-[16px] sm:text-[20px] text-green-400">+2,840</div>
                <div className="flex gap-1 mt-1.5">{[1, 1, 1, 0].map((f, i) => <div key={i} className={`h-[3px] flex-1 rounded-[2px] ${f ? 'bg-gradient-to-r from-brand-ind to-brand-cyan' : 'bg-white/12'}`} />)}</div>
              </div>
              <div className="hidden xs:block absolute bottom-[10%] left-[-6%] sm:left-[-7%] bg-white/5 border border-white/[0.14] rounded-[12px] px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md z-30 min-w-[120px] sm:min-w-[145px] shadow-[0_8px_26px_rgba(0,0,0,0.4)]"
                style={{ animation: 'floatDown 5.5s 1s ease-in-out infinite' }}>
                <div className="font-mono text-[8px] sm:text-[9px] text-dk-muted tracking-[2px] uppercase mb-1">Live Workflows</div>
                <div className="font-heading font-bold text-[16px] sm:text-[20px] text-brand-cyan">47 active</div>
                <div className="flex gap-1 mt-1.5">{[1, 1, 1, 1].map((_, i) => <div key={i} className="h-[3px] flex-1 rounded-[2px] bg-gradient-to-r from-brand-ind to-brand-cyan" />)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ── Free Automation Section ───────────────── */
export function FreeAutomationSection() {
  return (
    <section className="bg-[linear-gradient(360deg,#EEF0FF_0%,#FFFFFF_100%)] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-center">
        <Reveal className='col-span-2'>
          <Eyebrow>WE OFFER</Eyebrow>
          <h2 className="font-heading font-extrabold leading-[1.08] tracking-[-1.5px] text-lt-text mb-6" style={{ fontSize: 'clamp(38px,5vw,72px)' }}>
            Start your first<br />
            <span className="text-grad-result">Automation for Free</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-lt-muted leading-[1.78] mb-10 max-w-[540px]">
            Best-in-class tools combined with custom engineering — picking the exact right instrument for every workflow and orchestrating them in perfect harmony.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="solid-dk" className="px-8 py-2">
              Book your Slot
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-[14px]">→</span>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-ind/10 to-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <img src={FreeAutomationImg} alt="Free Automation Illustration" className="relative w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700" />
        </Reveal>
      </div>
    </section>
  )
}

/* ── Trusted ──────────────────────────────────── */
export function TrustedSection() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-[#4f6ef7] border-t border-white/[0.08] border-b border-white/[0.08] flex ">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8 lg:gap-12">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-dk-dim whitespace-nowrap flex-shrink-0">Trusted by</span>
        <div className="flex flex-wrap gap-5 sm:gap-8 lg:gap-10 flex-1 items-center">
          {TRUSTED_BRANDS.map(b => (
            <span key={b} className="font-heading font-bold text-[13px] sm:text-[14.5px] text-black hover:opacity-80 hover:text-dk-text transition-all cursor-default">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Services ─────────────────────────────────── */
export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 sm:mb-14">
          <Reveal><Eyebrow>What We Do</Eyebrow><SectionHeading light>AI Automation Solutions<br />Built for Scale</SectionHeading></Reveal>
          <Reveal delay={0.16} className="max-w-full md:max-w-[440px]">
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-lt-muted leading-[1.78]">From intelligent AI agents to no-code pipelines — every solution precision-engineered to eliminate your biggest operational bottlenecks.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={Math.min(i * 0.07, 0.35)}>
              <div className="group bg-lt-bg hover:bg-[#fafbff] p-6 sm:p-8 lg:p-10 pb-12 sm:pb-14 relative overflow-hidden transition-colors duration-300 h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind to-brand-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center text-[18px] sm:text-[20px] mb-5" style={{ background: s.color }}>{s.icon}</div>
                <h3 className="font-heading font-bold text-[17px] sm:text-[19px] text-lt-text mb-2.5">{s.title}</h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-lt-muted leading-[1.72]">{s.desc}</p>
                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-full border border-black/10 flex items-center justify-center text-lt-dim text-[13px] transition-all group-hover:border-brand-ind group-hover:text-brand-ind group-hover:bg-brand-ind/8 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Use Cases ────────────────────────────────── */
export function UseCasesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg2">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-10 sm:mb-14"><Eyebrow>Real-World Applications</Eyebrow><SectionHeading>Business Processes We<br />Automate Every Day</SectionHeading></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/[0.08]">
          {USE_CASES.map((uc, i) => (
            <Reveal key={uc.num} delay={Math.min((i % 4) * 0.07, 0.28)}>
              <div className="group bg-dk-bg2 hover:bg-dk-surf p-5 sm:p-6 lg:p-7 relative overflow-hidden transition-colors h-full">
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-ind to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[22px] sm:text-[26px] mb-3 block">{uc.emoji}</span>
                <h4 className="font-heading font-bold text-[14px] sm:text-[15px] text-dk-text mb-2">{uc.title}</h4>
                <p className="text-[12.5px] sm:text-[13px] text-dk-muted leading-[1.65]">{uc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Tools ────────────────────────────────────── */
export function ToolsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
        <Reveal>
          <Eyebrow>Our Tech Stack</Eyebrow>
          <SectionHeading light>The Automation<br />Ecosystem We Master</SectionHeading>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-lt-muted leading-[1.78] mb-7 max-w-[480px]">Best-in-class tools combined with custom engineering — picking the exact right instrument for every workflow and orchestrating them in perfect harmony.</p>
          <Button href="/services" variant="solid-dk">View All Services <span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-[12px]">→</span></Button>
        </Reveal>
        <Reveal delay={0.16} className="flex flex-wrap gap-2 sm:gap-2.5">
          {TOOLS.map(t => (
            <div key={t.name} className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-[18px] py-2 sm:py-[9px] rounded-full border-[1.5px] border-black/10 text-[12px] sm:text-[13px] font-medium text-lt-text transition-all hover:border-brand-ind hover:text-brand-ind hover:bg-brand-ind/6 hover:-translate-y-0.5">
              <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] rounded-full flex-shrink-0" style={{ background: t.color }} />{t.name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ── Industries ───────────────────────────────── */
export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg2">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-10 sm:mb-12">
          <Eyebrow center>Industries We Serve</Eyebrow>
          <SectionHeading light center>Automation Expertise<br />Across Every Sector</SectionHeading>
          <p className="text-[15px] sm:text-[17px] text-lt-muted leading-[1.78] mx-auto max-w-[520px] text-center">Battle-tested automation frameworks for diverse industries — from early-stage startups to large enterprises.</p>
        </Reveal>
        <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label} delay={Math.min((i % 6) * 0.05, 0.3)}>
              <div className="bg-lt-bg border-[1.5px] border-black/[0.07] rounded-[12px] sm:rounded-[14px] p-3 sm:p-4 lg:p-5 text-center transition-all hover:border-brand-ind/25 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]">
                <div className="text-[22px] sm:text-[26px] mb-1.5 sm:mb-2">{ind.ico}</div>
                <div className="font-heading font-semibold text-[11px] sm:text-[12.5px] text-lt-muted">{ind.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Process ──────────────────────────────────── */
export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-14 sm:mb-20">
          <Eyebrow center>Our Process</Eyebrow>
          <SectionHeading center>From Discovery to Live<br />Automation in 4 Steps</SectionHeading>
          <p className="text-[15px] sm:text-[17px] text-dk-muted leading-[1.78] mx-auto max-w-[500px] text-center">Structured, transparent, and fast. Most first workflows go live within 48 hours of kickoff — not months.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative">
          <div className="hidden lg:block absolute top-[34px] left-[12%] right-[12%] h-px bg-gradient-to-r from-brand-ind via-brand-cyan to-brand-vio opacity-25 pointer-events-none" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} className="px-2 sm:px-[18px] text-center group">
              <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full mx-auto mb-5 sm:mb-7 bg-dk-surf border-[1.5px] border-white/15 flex items-center justify-center font-heading font-extrabold text-[16px] sm:text-[18px] text-dk-text relative z-10 transition-all group-hover:bg-brand-ind group-hover:border-brand-ind group-hover:shadow-[0_0_28px_rgba(79,110,247,.45)]">{step.num}</div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[18px] text-dk-text mb-2">{step.title}</h3>
              <p className="text-[13px] sm:text-[13.5px] text-dk-muted leading-[1.7]">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Results ──────────────────────────────────── */
export function ResultsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-10 sm:mb-14"><Eyebrow>Proven Results</Eyebrow><SectionHeading light>Automation That<br />Moves the Needle</SectionHeading></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.chip} delay={i * 0.12}>
              <div className="group bg-lt-bg2 border-[1.5px] border-black/[0.07] rounded-[18px] sm:rounded-[22px] p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all hover:border-brand-ind/25 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind to-brand-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <div className="inline-block font-mono text-[10px] tracking-[0.12em] uppercase text-brand-ind bg-brand-ind/9 border border-brand-ind/20 rounded-[6px] px-2.5 py-1 mb-5">{cs.chip}</div>
                <h3 className="font-heading font-bold text-[17px] sm:text-[19px] text-lt-text mb-3 leading-[1.25] tracking-[-0.2px]">{cs.title}</h3>
                <p className="text-[13.5px] sm:text-[14px] text-lt-muted leading-[1.72] mb-5 flex-1">{cs.desc}</p>
                <div className="flex items-center gap-3 bg-brand-ind/6 border-[1.5px] border-brand-ind/15 rounded-[12px] px-4 py-3.5">
                  <span className="font-heading font-extrabold text-[34px] sm:text-[40px] text-grad-result leading-none flex-shrink-0">{cs.metric}</span>
                  <span className="text-[12.5px] sm:text-[13px] text-lt-muted leading-[1.5]">{cs.metricLabel}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why + ROI ────────────────────────────────── */
export function WhySection() {
  const [team, setTeam] = useState(2)
  const [hours, setHours] = useState(8)
  const [rate, setRate] = useState(15)
  const [cur, setCur] = useState<'usd' | 'inr'>('usd')

  const savingsUSD = team * hours * 52 * rate * 0.7
  const savingsINR = savingsUSD * INR_RATE
  const mainDisplay = cur === 'usd'
    ? '$' + savingsUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })
    : '₹' + savingsINR.toLocaleString('en-IN', { maximumFractionDigits: 0 })
  const altDisplay = cur === 'usd'
    ? '≈ ₹' + savingsINR.toLocaleString('en-IN', { maximumFractionDigits: 0 })
    : '≈ $' + savingsUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })

  const trackBg = (val: number, min: number, max: number) => {
    const pct = ((val - min) / (max - min)) * 100
    return `linear-gradient(to right,#4f6ef7 0%,#4f6ef7 ${pct}%,rgba(0,0,0,0.12) ${pct}%,rgba(0,0,0,0.12) 100%)`
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg2">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start lg:items-center">
        <div>
          <Reveal><Eyebrow>Why Cindrel</Eyebrow><SectionHeading>Built Different.<br />By Design.</SectionHeading><p className="text-[15px] sm:text-[16px] lg:text-[17px] text-dk-muted leading-[1.78] max-w-[480px] mb-8 sm:mb-10">We're not a generalist agency. Every Cindrel engineer lives and breathes automation — every solution built to eliminate inefficiency at its root with measurable ROI guaranteed.</p></Reveal>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-3.5">
            {WHY_ITEMS.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="bg-dk-surf border border-white/[0.08] rounded-[12px] sm:rounded-[14px] p-4 sm:p-5 lg:p-6 transition-all hover:border-brand-ind/35 hover:-translate-y-0.5 h-full">
                  <div className="text-[22px] sm:text-[24px] mb-2.5 sm:mb-3">{w.ico}</div>
                  <h4 className="font-heading font-bold text-[13.5px] sm:text-[15px] text-dk-text mb-1.5">{w.title}</h4>
                  <p className="text-[12px] sm:text-[13px] text-dk-muted leading-[1.62]">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ROI Card — white on dark */}
        <Reveal delay={0.16}>
          <div className="bg-lt-bg border-[1.5px] border-black/10 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-11 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind via-brand-cyan to-brand-vio" />
            <h3 className="font-heading font-extrabold text-[19px] sm:text-[22px] text-lt-text mb-1.5">Automation ROI Calculator</h3>
            <p className="text-[13px] sm:text-[13.5px] text-lt-muted mb-5">Estimate your savings — view in USD or INR</p>
            {/* Currency toggle */}
            <div className="flex gap-2 mb-6">
              {(['usd', 'inr'] as const).map(c => (
                <button key={c} onClick={() => setCur(c)}
                  className={`flex-1 py-2 rounded-full font-mono text-[11px] tracking-[.12em] uppercase font-semibold border transition-all ${cur === c ? 'bg-brand-ind border-brand-ind text-white' : 'bg-transparent border-black/13 text-lt-muted hover:border-brand-ind/40'}`}>
                  {c === 'usd' ? '$ USD' : '₹ INR'}
                </button>
              ))}
            </div>
            {[
              { label: 'Team Size', val: `${team} ${team === 1 ? 'person' : 'people'}`, value: team, setter: setTeam, min: 1, max: 200 },
              { label: 'Manual Hours / Week per Person', val: `${hours} hrs`, value: hours, setter: setHours, min: 1, max: 40 },
              { label: `Avg. Hourly Cost (${cur === 'usd' ? 'USD' : 'INR'})`, val: cur === 'usd' ? `$${rate}` : `₹${rate}`, value: rate, setter: setRate, min: 1, max: 300 },
            ].map(s => (
              <div key={s.label} className="mb-5 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-[9.5px] sm:text-[10px] tracking-[.12em] uppercase text-lt-muted">{s.label}</label>
                  <span className="font-mono text-[9.5px] sm:text-[10px] text-brand-ind font-medium">{s.val}</span>
                </div>
                <input type="range" min={s.min} max={s.max} value={s.value} onChange={e => s.setter(+e.target.value)}
                  className="w-full h-[3px] rounded-sm appearance-none outline-none"
                  style={{ background: trackBg(s.value, s.min, s.max) }} />
              </div>
            ))}
            <div className="mt-5 rounded-[12px] sm:rounded-[14px] p-4 sm:p-6 bg-gradient-to-br from-brand-ind/6 to-brand-cyan/4 border-[1.5px] border-brand-ind/20 text-center">
              <div className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase text-lt-muted mb-2">Estimated Annual Savings</div>
              <div className="font-heading font-extrabold leading-none tracking-[-2px] text-grad-lt" style={{ fontSize: 'clamp(36px,7vw,52px)' }}>{mainDisplay}</div>
              <div className="flex items-center justify-center gap-2 mt-1.5 flex-wrap">
                <span className="font-mono text-[13px] text-brand-ind font-semibold">{altDisplay}</span>
                <span className="text-[11px] text-lt-muted">@ ₹83.5 / $1</span>
              </div>
              <div className="text-[11.5px] sm:text-[12px] text-lt-muted mt-1.5">Based on 70% automation of identified manual work</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Testimonials ─────────────────────────────── */
export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg2">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-10 sm:mb-14">
          <Eyebrow center>Client Voices</Eyebrow>
          <SectionHeading light center>Teams That Ship Faster<br />Choose Cindrel</SectionHeading>
          <p className="text-[15px] sm:text-[17px] text-lt-muted leading-[1.78] mx-auto max-w-[500px] text-center">From founders to CTOs — hear from leaders who've permanently automated their businesses with us.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <div className="bg-lt-bg border-[1.5px] border-black/[0.08] rounded-[18px] sm:rounded-[22px] p-6 sm:p-7 lg:p-8 transition-all hover:border-brand-ind/22 hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(0,0,0,0.1)] h-full flex flex-col">
                <div className="text-amber-400 text-[12px] sm:text-[13px] tracking-[1.5px] mb-3.5">{'★'.repeat(t.stars)}</div>
                <p className="text-[14px] sm:text-[15px] text-lt-muted leading-[1.78] italic flex-1 mb-5 sm:mb-6">{t.body}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-full bg-gradient-to-br from-brand-ind to-brand-vio flex items-center justify-center font-heading font-bold text-[13px] sm:text-[14px] text-white flex-shrink-0">{t.initials}</div>
                  <div>
                    <div className="font-heading font-bold text-[14px] sm:text-[15px] text-lt-text">{t.name}</div>
                    <div className="text-[11.5px] sm:text-[12px] text-lt-muted mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────── */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-dk-bg">
      <div className="relative py-20 sm:py-28 lg:py-[150px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 flex items-center justify-center text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(79,110,247,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(79,110,247,.05) 1px,transparent 1px)', backgroundSize: '54px 54px', WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%,black 20%,transparent 100%)' }} />
        <div className="absolute rounded-full blur-[80px] pointer-events-none" style={{ width: 'clamp(300px,55vw,600px)', height: 'clamp(300px,55vw,600px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle,rgba(79,110,247,.2) 0%,transparent 68%)' }} />
        <div className="absolute rounded-full blur-[80px] pointer-events-none animate-blob" style={{ width: 400, height: 400, top: '15%', left: '18%', background: 'radial-gradient(circle,rgba(155,109,255,.14) 0%,transparent 68%)' }} />
        <div className="absolute rounded-full blur-[80px] pointer-events-none animate-[blobDrift_15s_3s_ease-in-out_infinite_reverse]" style={{ width: 340, height: 340, bottom: '8%', right: '18%', background: 'radial-gradient(circle,rgba(0,212,240,.1) 0%,transparent 68%)' }} />
        <Reveal className="relative z-10 max-w-[740px] w-full">
          <div className="inline-flex items-center gap-2.5 bg-brand-ind/10 border border-brand-ind/28 rounded-full px-4 py-1.5 mb-6 font-mono text-[10px] sm:text-[11px] tracking-[0.1em] text-brand-ind2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pip" />Free 30-min strategy session · Zero commitment
          </div>
          <h2 className="font-heading font-extrabold leading-[1.04] tracking-[-2px] sm:tracking-[-2.2px] text-dk-text mb-5" style={{ fontSize: 'clamp(34px,5.5vw,74px)' }}>
            Start Automating<br /><span className="text-grad-brand">Your Business Today</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-dk-muted leading-[1.8] max-w-[560px] mx-auto mb-10 sm:mb-12">Book a free AI automation strategy call. We'll map your highest-ROI workflows, identify your biggest bottlenecks, and hand you a concrete action plan — completely free.</p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 mb-10 sm:mb-12">
            <Link to="/contact" className="relative inline-flex items-center justify-center gap-3 bg-white text-lt-text px-7 sm:px-10 py-4 sm:py-[18px] rounded-full font-body font-bold text-[15px] sm:text-[16px] overflow-hidden transition-all shadow-[0_4px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(0,0,0,0.6),0_4px_0_rgba(0,0,0,0.4)]">
              ⚡ Book a Free Strategy Call →
            </Link>
            <Button href="/cases" variant="ghost-dk">View Case Studies</Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {['No commitment', '30-min session', 'Custom roadmap', 'Senior engineer'].map((t, i, arr) => (
              <span key={t} className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-brand-cyan text-[13px] sm:text-[14px]">✓</span>
                <span className="text-[12px] sm:text-[13px] text-dk-muted">{t}</span>
                {i < arr.length - 1 && <span className="hidden sm:inline-block w-px h-[13px] bg-white/12 ml-3 sm:ml-5" />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Inject required keyframes for hero animations */
const style = document.createElement('style')
style.textContent = `
@keyframes fadeSlideUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes spin{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes floatUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes floatDown{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
`
if (!document.head.querySelector('#hero-keyframes')) {
  style.id = 'hero-keyframes'
  document.head.appendChild(style)
}
