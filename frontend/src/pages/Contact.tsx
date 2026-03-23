import { useState } from 'react'
import axios from 'axios'
import { Reveal, Eyebrow, SectionHeading, PageHero } from '@/components/ui'
import { FAQ_ITEMS } from '@/lib/data'
import { API_URL } from '@/lib/utils'

const inputCls = 'w-full bg-white/4 border border-white/[0.1] rounded-[10px] px-3.5 sm:px-4 py-3 sm:py-[13px] text-dk-text font-body text-[14px] sm:text-[14.5px] outline-none transition-all focus:border-brand-ind/50 focus:bg-brand-ind/4 placeholder:text-dk-dim appearance-none'
const labelCls = 'block font-mono text-[9.5px] sm:text-[10px] tracking-[0.15em] uppercase text-dk-muted mb-2'

export default function ContactPage() {
  const [form, setForm] = useState({
    name:'', company:'', email:'', phone:'',
    companySize:'51–200 employees', goal:'Multiple / Not Sure',
    needs:'', budget:'$5,000–$15,000', timeline:'Within 1 month',
  })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number|null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post(`${API_URL}/contact`, form)
      setStatus('success')
    } catch { setStatus('error') }
  }

  return (
    <>
      <PageHero badge="Free Strategy Session"
        title={<>Let's Build Your<br />Automation System<br />Together</>}
        sub="Tell us about your goals. Our senior engineers will respond within 24 hours with a tailored roadmap — completely free." />

      {/* Contact — white */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-24 items-start">
          {/* Left info */}
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
            <SectionHeading light>Ready to Eliminate<br />Manual Work?</SectionHeading>
            <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.75] mb-8">Whether you have a specific project or just want to explore what's possible — we'd love to talk. Most clients leave their first call with 3 actionable automation ideas they can implement immediately.</p>
            {[
              { ico:'📧', strong:'hello@cindrel.com',          soft:'Direct line to our team' },
              { ico:'📞', strong:'+91 98765 43210',             soft:'Mon–Fri, 9AM–6PM IST' },
              { ico:'💼', strong:'LinkedIn',                    soft:'linkedin.com/company/cindrel' },
              { ico:'📍', strong:'Chennai, Tamil Nadu, India',  soft:'Serving clients globally · Remote-first' },
            ].map(c => (
              <div key={c.strong} className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 sm:w-[43px] sm:h-[43px] rounded-[10px] sm:rounded-[12px] bg-dk-bg border-[1.5px] border-white/15 flex items-center justify-center text-[15px] sm:text-[17px] flex-shrink-0">{c.ico}</div>
                <div>
                  <strong className="block text-[14px] sm:text-[14.5px] text-lt-text mb-0.5">{c.strong}</strong>
                  <span className="text-[12.5px] sm:text-[13px] text-lt-muted">{c.soft}</span>
                </div>
              </div>
            ))}
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-dk-bg border-[1.5px] border-white/15 rounded-[16px] sm:rounded-[18px]">
              <div className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.15em] uppercase text-dk-muted mb-3">What to expect</div>
              <ul className="space-y-2">
                {['30-min video call with a senior engineer','Process mapping and opportunity discovery','Custom automation roadmap (yours to keep)','ROI estimate for top 3 opportunities','No sales pressure, ever'].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-dk-muted">
                    <span className="text-brand-cyan mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form card — dark on white */}
          <Reveal delay={0.16}>
            <div className="bg-dk-bg border-[1.5px] border-white/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-11 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind via-brand-cyan to-brand-vio" />
              <h3 className="font-heading font-bold text-[18px] sm:text-[20px] text-dk-text mb-1.5 tracking-[-0.3px]">Book Your Free Automation Audit</h3>
              <p className="text-[13px] sm:text-[13.5px] text-dk-muted mb-6 sm:mb-7">Fill out the form and we'll reach out within 24 hours.</p>

              {status === 'success' ? (
                <div className="text-center py-14 sm:py-16">
                  <div className="text-[44px] sm:text-[48px] mb-4">✅</div>
                  <h3 className="font-heading font-bold text-[18px] sm:text-[20px] text-dk-text mb-2">Message Received!</h3>
                  <p className="text-[13.5px] sm:text-[14px] text-dk-muted">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <div><label className={labelCls}>Your Name *</label><input name="name" value={form.name} onChange={onChange} required placeholder="Alex Johnson" className={inputCls} /></div>
                    <div><label className={labelCls}>Company *</label><input name="company" value={form.company} onChange={onChange} required placeholder="Acme Corp" className={inputCls} /></div>
                    <div><label className={labelCls}>Work Email *</label><input name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" className={inputCls} /></div>
                    <div><label className={labelCls}>Phone Number</label><input name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" className={inputCls} /></div>
                  </div>
                  <div className="mt-3 sm:mt-4 mb-3 sm:mb-4">
                    <label className={labelCls}>Company Size</label>
                    <select name="companySize" value={form.companySize} onChange={onChange} className={inputCls}>
                      {['1–10 employees','11–50 employees','51–200 employees','200+ employees'].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label className={labelCls}>Primary Automation Goal *</label>
                    <select name="goal" value={form.goal} onChange={onChange} className={inputCls}>
                      {['CRM & Sales Automation','Customer Support AI','Marketing Automation','Data & Reporting','API Integration','AI Agent Development','Multiple / Not Sure'].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label className={labelCls}>Describe Your Needs *</label>
                    <textarea name="needs" value={form.needs} onChange={onChange} required rows={3} placeholder="What processes are eating your team's time? What tools do you use?" className={`${inputCls} resize-none`} />
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div>
                      <label className={labelCls}>Budget Range</label>
                      <select name="budget" value={form.budget} onChange={onChange} className={inputCls}>
                        {['Under $2,000','$2,000–$5,000','$5,000–$15,000','$15,000–$50,000','$50,000+'].map(o=><option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Timeline</label>
                      <select name="timeline" value={form.timeline} onChange={onChange} className={inputCls}>
                        {['ASAP','Within 1 month','1–3 months','Planning stage'].map(o=><option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit" disabled={status==='loading'}
                    className="w-full py-3.5 sm:py-[15px] rounded-full bg-brand-ind text-white font-body font-bold text-[15px] sm:text-[15.5px] transition-all hover:-translate-y-0.5 hover:bg-brand-ind2 hover:shadow-[0_12px_36px_rgba(79,110,247,0.5)] disabled:opacity-60 active:scale-[0.98]">
                    {status==='loading' ? 'Sending…' : '⚡ Book Free Automation Audit →'}
                  </button>
                  {status==='error' && <p className="text-[12.5px] sm:text-[13px] text-red-400 text-center mt-3">Something went wrong. Email us at hello@cindrel.com</p>}
                  <p className="text-[11.5px] sm:text-[12px] text-dk-dim text-center mt-3">No spam. No sales pressure. Just a genuine conversation about automation.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-8 sm:mb-10"><Eyebrow>FAQ</Eyebrow><SectionHeading light>Frequently Asked<br />Questions</SectionHeading></Reveal>
          <Reveal className="max-w-[840px]">
            <div className="divide-y divide-black/[0.08]">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="py-4 sm:py-5">
                  <button onClick={() => setOpenFaq(openFaq===i?null:i)}
                    className="w-full flex justify-between items-start sm:items-center text-left font-heading font-semibold text-[15px] sm:text-[17px] text-lt-text hover:text-brand-ind transition-colors gap-4">
                    <span>{item.q}</span>
                    <span className={`text-[18px] sm:text-[20px] text-lt-dim transition-transform duration-300 flex-shrink-0 ${openFaq===i?'rotate-45 !text-brand-ind':''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq===i?'max-h-[300px] mt-3':'max-h-0'}`}>
                    <p className="text-[13.5px] sm:text-[14.5px] text-lt-muted leading-[1.75]">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
