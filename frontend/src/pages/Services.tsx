import { useState, useEffect } from 'react'
import { Reveal, Eyebrow, SectionHeading, Button, PageHero } from '@/components/ui'
import { PRICING_PLANS } from '@/lib/data'
import { Check, X } from 'lucide-react'

const DETAILS = [
  { num:'01', icon:'⚡', title:'Business Workflow Automation', desc:'Intelligent, event-driven workflows that execute repetitive business processes without any human intervention — from simple task automation to complex multi-step orchestrations involving dozens of apps.', features:['Multi-step workflow design and deployment','Conditional logic and branching automation','Scheduled and trigger-based executions','Error handling and retry mechanisms','Real-time monitoring dashboards'], tag:'n8n · Zapier · Make · Custom' },
  { num:'02', icon:'🤖', title:'AI Agents & Intelligent Bots', desc:'GPT-4 powered AI agents that understand context, make decisions, and take actions — handling customer interactions, internal workflows, and data processing at machine speed and scale.', features:['Custom GPT-4 / Claude agent development','Customer support AI with CRM integration','Lead qualification and sales bots','Internal knowledge base assistants','Autonomous research and data agents'], tag:'OpenAI · LangChain · Custom LLMs' },
  { num:'03', icon:'🔗', title:'API & System Integrations', desc:'Connect your entire software stack into a unified, synchronized ecosystem. Whether syncing CRM with billing or connecting 15 SaaS tools — we build integrations that make data flow seamlessly.', features:['REST API and GraphQL integrations','Webhook design and event processing','Bi-directional CRM sync (HubSpot, Salesforce)','Payment system integrations (Stripe, Razorpay)','Custom middleware and data transformation'], tag:'REST APIs · Webhooks · OAuth' },
  { num:'04', icon:'📊', title:'Data Automation & Analytics', desc:'Fully automated reporting pipelines, live dashboards, and scheduled analytics that turn scattered data into organized, actionable intelligence — around the clock.', features:['Automated report generation and distribution','Real-time KPI dashboards (Looker, Metabase)','Data pipeline architecture and ETL automation','Google Sheets / Airtable automations','Executive summary AI generation'], tag:'BigQuery · Sheets · Airtable · Metabase' },
  { num:'05', icon:'🛠️', title:'No-Code / Low-Code Automation', desc:'Rapidly design powerful automation workflows using no-code platforms. Fast implementation, easy maintenance — non-technical team members can manage workflows independently.', features:['n8n self-hosted setup and deployment','Zapier advanced workflow engineering','Make (Integromat) scenario design','Team training and full documentation','Ongoing workflow maintenance packages'], tag:'n8n · Zapier · Make · Pabbly' },
  { num:'06', icon:'💻', title:'Custom Automation Development', desc:'For workflows too complex for off-the-shelf tools — fully custom solutions using Python, Node.js, and cloud infrastructure that scale with your exact requirements.', features:['Python / Node.js automation scripts','Cloud-native automation (AWS Lambda, GCP)','Database automation and scheduled jobs','Document processing and OCR automation','Browser automation (Playwright, Puppeteer)'], tag:'Python · Node.js · AWS · GCP' },
]

export default function ServicesPage() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('INR')

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code && data.country_code !== 'IN') {
          setCurrency('USD')
        }
      })
      .catch(() => setCurrency('INR'))
  }, [])

  return (
    <>
      <PageHero badge="AI Automation Services"
        title={<>Intelligent Automation<br />Services for Every<br />Business Function</>}
        sub="From no-code workflow automation to enterprise-grade AI agents — Cindrel engineers the exact automation your business needs to eliminate manual work and scale with confidence." />

      {/* Service cards — white */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-10 sm:mb-16"><Eyebrow>Service Details</Eyebrow><SectionHeading light>What We Build for You</SectionHeading></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {DETAILS.map((s, i) => (
              <Reveal key={s.num} delay={(i % 2) * 0.1}>
                <div className="group bg-lt-bg2 border-[1.5px] border-black/[0.08] rounded-[18px] sm:rounded-[22px] p-6 sm:p-8 lg:p-11 relative overflow-hidden transition-all hover:border-brand-ind/22 hover:-translate-y-1 hover:shadow-[0_20px_54px_rgba(0,0,0,0.1)] h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-ind to-brand-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="text-[28px] sm:text-[34px] mb-3.5 block">{s.icon}</span>
                  <h3 className="font-heading font-bold text-[18px] sm:text-[21px] text-lt-text mb-3 tracking-[-0.3px]">{s.title}</h3>
                  <p className="text-[13.5px] sm:text-[15px] text-lt-muted leading-[1.75] mb-4">{s.desc}</p>
                  <ul className="flex-1 border-t border-black/[0.07] mt-2 pt-3.5 space-y-0">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[13px] sm:text-[14px] text-lt-muted py-1.5 sm:py-2 border-b border-black/[0.07] last:border-0">
                        <span className="text-brand-ind text-[12px] flex-shrink-0">→</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block font-mono text-[10px] tracking-[0.12em] uppercase text-brand-ind bg-brand-ind/8 border border-brand-ind/18 rounded-[6px] px-2.5 py-1 mt-4 self-start">{s.tag}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — dark */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-dk-bg">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-16">
            <Reveal className="">
              <Eyebrow>Pricing</Eyebrow>
              <SectionHeading>Simple, Fixed-Scope<br />Automation Packages</SectionHeading>
              <p className="text-[15px] sm:text-[17px] text-dk-muted leading-[1.78] max-w-[500px]">No hourly surprises. Every package is fixed-scope with clear deliverables and a defined timeline.</p>
            </Reveal>
            
            <Reveal delay={0.1} className="flex-shrink-0">
              <div className="flex bg-white/5 border border-white/10 rounded-full p-1 self-start md:self-auto">
                <button 
                  onClick={() => setCurrency('USD')} 
                  className={`px-6 py-2 rounded-full font-mono text-[12px] tracking-wider uppercase font-bold transition-all duration-300 ${currency === 'USD' ? 'bg-brand-ind text-white shadow-lg shadow-brand-ind/20' : 'text-dk-muted hover:text-dk-text'}`}
                >
                  $ USD
                </button>
                <button 
                  onClick={() => setCurrency('INR')} 
                  className={`px-6 py-2 rounded-full font-mono text-[12px] tracking-wider uppercase font-bold transition-all duration-300 ${currency === 'INR' ? 'bg-brand-ind text-white shadow-lg shadow-brand-ind/20' : 'text-dk-muted hover:text-dk-text'}`}
                >
                  ₹ INR
                </button>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {PRICING_PLANS.map((p, i) => (
              <Reveal key={p.plan} delay={i * 0.12}>
                <div className={`rounded-[18px] sm:rounded-[22px] p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_22px_56px_rgba(0,0,0,0.45)] h-full flex flex-col ${p.featured?'border-[1.5px] border-brand-ind/40 bg-gradient-to-br from-brand-ind/8 to-brand-vio/5':'border border-white/[0.08] bg-dk-surf'}`}>
                  {p.featured && <div className="absolute top-4 right-4 sm:top-5 sm:right-5 font-mono text-[9px] tracking-[.15em] uppercase text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/22 rounded-full px-2.5 py-1">Most Popular</div>}
                  <div className="font-mono text-[10px] tracking-[.18em] uppercase text-dk-muted mb-3">{p.plan}</div>
                  <div className="font-heading font-extrabold text-[38px] sm:text-[44px] text-dk-text tracking-[-2px] mb-1">
                    {p.prices[currency]}
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-dk-muted leading-[1.62] mb-6">{p.desc}</p>
                  <ul className="flex-1 space-y-0 mb-7">
                    {p.features.map(f => (
                      <li key={f.text} className="flex items-center gap-2 text-[13px] sm:text-[14px] py-2 sm:py-[9px] border-b border-white/[0.06] last:border-0">
                        {f.ok ? <Check size={13} className="text-brand-cyan flex-shrink-0" /> : <X size={13} className="text-dk-dim flex-shrink-0" />}
                        <span className={f.ok?'text-dk-muted':'text-dk-dim'}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={p.featured?'primary':'ghost-dk'} className="w-full justify-center">
                    {p.featured?'Most Popular →':'Get Started →'}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center font-mono text-[11px] text-dk-dim tracking-[.08em] mt-7">* Prices exclusive of GST · {currency === 'INR' ? 'Billed in INR' : 'Billed in USD at current exchange rate'}</p>
        </div>
      </section>
    </>
  )
}
