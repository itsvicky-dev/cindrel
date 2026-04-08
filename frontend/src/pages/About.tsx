// ─── ABOUT ─────────────────────────────────────────────────────────────────
import { Reveal, Eyebrow, SectionHeading, Button, PageHero } from '@/components/ui'
import { ABOUT_STATS, VALUES, TEAM } from '@/lib/data'

export function AboutPage() {
  return (
    <>
      <PageHero badge="About Cindrel"
        title={<>We Don’t Believe in <br />Manual Work — <br />And Neither Should You</>}
        sub="At Cindrel, we believe your time should be spent on growth, not repetitive tasks. Every manual process slows you down — and we’re here to eliminate that completely. We design and build smart automation that works for you 24/7, so your team can focus on what truly matters — building, scaling, and winning." />

      {/* Story + Stats — white */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-heading font-extrabold leading-[1.1] tracking-[-1.2px] mb-4 text-lt-text" style={{ fontSize: 'clamp(26px,3vw,44px)' }}>
              Built by Automation Engineers,<br className="hidden sm:block" /> for Businesses That Mean Business
            </h2>
            <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-4">Cindrel was born out of frustration. We saw talented teams spending 30–40% of their time on work that should never be done manually — copying data, switching between tools, chasing follow-ups.</p>
            <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-4">It wasn’t just inefficient — it was holding businesses back. So we built Cindrel to change that. Not just for one company, but to create systems, frameworks, and automation solutions that remove manual work from any business, in any industry.</p>
            <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-8">Today, Cindrel helps companies across SaaS, e-commerce, healthcare, fintech, and enterprise sectors automate their operations, save time, and scale faster with confidence.</p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Button href="/contact" variant="primary">Work With Us <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[12px]">→</span></Button>
              <Button href="/cases" variant="ghost-lt">See Our Work</Button>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="bg-dk-bg border-[1.5px] border-white/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-11 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-red to-brand-ind" />
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {ABOUT_STATS.map(s => (
                  <div key={s.n} className="bg-dk-surf border border-white/[0.08] rounded-[12px] sm:rounded-[14px] p-4 sm:p-5">
                    <div className="font-heading font-extrabold text-[26px] sm:text-[32px] tracking-[-0.8px]"
                      style={{ background: 'linear-gradient(135deg,#fff,#7b94ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
                    <div className="text-[12px] sm:text-[13px] text-dk-muted mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values — dark */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg2">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-10 sm:mb-14"><Eyebrow>Mission & Values</Eyebrow><SectionHeading>What Drives Everything<br />We Build</SectionHeading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/[0.08]">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={Math.min((i % 3) * 0.08, 0.25)}>
                <div className="bg-dk-bg2 hover:bg-dk-surf p-6 sm:p-8 lg:p-9 transition-colors duration-300 h-full">
                  <div className="text-[24px] sm:text-[28px] mb-3.5">{v.ico}</div>
                  <h4 className="font-heading font-bold text-[15px] sm:text-[17px] text-dk-text mb-2.5">{v.title}</h4>
                  <p className="text-[13px] sm:text-[14px] text-dk-muted leading-[1.7]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team — light */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg2">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-10 sm:mb-14"><Eyebrow>The Team</Eyebrow><SectionHeading light>Automation Experts<br />Who've Seen It All</SectionHeading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="bg-lt-bg border-[1.5px] border-black/[0.07] rounded-[18px] sm:rounded-[22px] p-6 sm:p-7 text-center transition-all hover:border-brand-ind/22 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]">
                  <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-gradient-to-br from-brand-ind to-brand-vio flex items-center justify-center font-heading font-bold text-[22px] sm:text-[24px] text-white mx-auto mb-4">{m.initials}</div>
                  <h4 className="font-heading font-bold text-[15px] sm:text-[16px] text-lt-text mb-1">{m.name}</h4>
                  <div className="text-[12.5px] sm:text-[13px] text-brand-ind mb-3">{m.role}</div>
                  <div className="text-[12.5px] sm:text-[13px] text-lt-muted leading-[1.6]">{m.bio}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
