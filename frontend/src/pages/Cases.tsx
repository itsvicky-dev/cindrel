import { Reveal, Eyebrow, SectionHeading, PageHero, Modal, Button } from '@/components/ui'
import { FULL_CASE_STUDIES } from '@/lib/data'
import { useState } from 'react'
type CaseStudy = typeof FULL_CASE_STUDIES[number]


export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  return (
    <>
      <PageHero badge="Case Studies & Results"
        title={<>Real Automation.<br />Real Results.<br />Real ROI.</>}
        sub="Every Cindrel engagement is built around measurable outcomes. Here's what we've delivered for businesses just like yours." />

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-10 sm:mb-16"><Eyebrow>Client Work</Eyebrow><SectionHeading light>Automation That<br />Changed Businesses</SectionHeading></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {FULL_CASE_STUDIES.map((cs, i) => (
              <div onClick={() => setSelectedCase(cs)}>
                <Reveal key={cs.title} delay={(i % 2) * 0.1}>
                  <div className="group bg-lt-bg2 border-[1.5px] border-black/[0.08] rounded-[18px] sm:rounded-[22px] p-6 sm:p-8 lg:p-11 relative overflow-hidden transition-all hover:border-brand-ind/22 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind to-brand-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.tags.map(tag => <span key={tag} className="font-mono text-[10px] tracking-[0.1em] uppercase bg-brand-ind/8 border border-brand-ind/18 text-brand-ind rounded-[6px] px-2.5 py-1">{tag}</span>)}
                    </div>
                    <h3 className="font-heading font-bold text-[18px] sm:text-[21px] text-lt-text mb-4 leading-[1.2] tracking-[-0.3px]">{cs.title}</h3>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-lt-muted mb-1.5">The Challenge</div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-lt-muted leading-[1.75] mb-4">{cs.challenge}</p>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-lt-muted mb-1.5">The Solution</div>
                    <p className="text-[13.5px] sm:text-[14.5px] text-lt-muted leading-[1.75] mb-5 flex-1">{cs.solution}</p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                      {cs.metrics.map(m => (
                        <div key={m.l} className="bg-brand-ind/7 border border-brand-ind/14 rounded-[8px] sm:rounded-[10px] p-2.5 sm:p-3.5 text-center">
                          <div className="font-heading font-extrabold text-[20px] sm:text-[24px]" style={{ background: 'linear-gradient(135deg,#4f6ef7,#00d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.n}</div>
                          <div className="text-[10px] sm:text-[11px] text-lt-muted mt-1">{m.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tools.map(t => <span key={t} className="text-[11.5px] sm:text-[12px] bg-black/5 border border-black/10 rounded-[6px] px-2 sm:px-2.5 py-1 text-lt-muted">{t}</span>)}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={!!selectedCase} onClose={() => setSelectedCase(null)}>
        {selectedCase && (
          <div className="space-y-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCase.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] tracking-[0.1em] uppercase bg-brand-ind/8 border border-brand-ind/18 text-brand-ind rounded-[6px] px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] text-lt-text leading-[1.1] tracking-tight">
                {selectedCase.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-brand-ind font-bold mb-3">The Challenge</div>
                <p className="text-[15px] sm:text-[16px] text-lt-muted leading-[1.8]">
                  {selectedCase.challenge}
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-brand-ind font-bold mb-3"> our Solution</div>
                <p className="text-[15px] sm:text-[16px] text-lt-muted leading-[1.8]">
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            <div className="bg-lt-bg2 border border-black/[0.05] rounded-[24px] p-6 sm:p-8">
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-lt-muted font-bold mb-6 text-center">Impact & Results</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {selectedCase.metrics.map(m => (
                  <div key={m.l} className="text-center px-4 border-r last:border-r-0 border-black/[0.08] sm:block flex flex-col items-center">
                    <div className="font-heading font-extrabold text-[32px] sm:text-[40px] mb-1" style={{ background: 'linear-gradient(135deg,#4f6ef7,#00d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {m.n}
                    </div>
                    <div className="text-[12px] text-lt-muted font-medium uppercase tracking-wide">
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-lt-muted font-bold mb-4">Tech Stack Used</div>
              <div className="flex flex-wrap gap-2">
                {selectedCase.tools.map(t => (
                  <span key={t} className="text-[13px] font-medium bg-black/5 border border-black/10 rounded-full px-4 py-1.5 text-lt-text/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
{/* 
            <div className="pt-6 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-lt-muted text-[14px] text-center sm:text-left">
                Ready to achieve similar results for your business?
              </p>
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div> */}
          </div>
        )}
      </Modal>
    </>
  )
}
