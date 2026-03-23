import { Reveal, Eyebrow, SectionHeading, PageHero } from '@/components/ui'
import { BLOG_POSTS } from '@/lib/data'

export default function BlogPage() {
  return (
    <>
      <PageHero badge="Automation Insights"
        title={<>The Cindrel Blog:<br />AI Automation<br />Knowledge Hub</>}
        sub="Deep-dive guides, case study breakdowns, tool comparisons, and strategic frameworks for business automation leaders." />

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-10 sm:mb-16"><Eyebrow>Latest Articles</Eyebrow><SectionHeading>Automation Guides,<br />Strategies & Insights</SectionHeading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.title} delay={Math.min((i % 3) * 0.08, 0.2)}>
                <div className="group bg-dk-surf border border-white/[0.08] rounded-[18px] sm:rounded-[22px] overflow-hidden transition-all hover:border-brand-ind/28 hover:-translate-y-1.5 hover:shadow-[0_20px_54px_rgba(0,0,0,0.45)] h-full flex flex-col cursor-pointer">
                  <div className="h-[140px] sm:h-[170px] bg-dk-bg2 flex items-center justify-center text-[40px] sm:text-[46px] border-b border-white/[0.08] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0" style={{ background:'radial-gradient(circle at 50% 50%,rgba(79,110,247,.09),transparent 70%)' }} />
                    <span className="relative z-10">{post.emoji}</span>
                  </div>
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-cyan">{post.category}</span>
                      <span className="text-[11.5px] sm:text-[12px] text-dk-dim">{post.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[15px] sm:text-[17px] text-dk-text mb-2.5 leading-[1.3] tracking-[-0.15px] flex-1">{post.title}</h3>
                    <p className="text-[12.5px] sm:text-[13.5px] text-dk-muted leading-[1.7] mb-4">{post.excerpt}</p>
                    <div className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.1em] uppercase text-brand-ind2 flex items-center gap-1.5 group-hover:text-brand-cyan transition-colors">{post.readLabel} →</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
