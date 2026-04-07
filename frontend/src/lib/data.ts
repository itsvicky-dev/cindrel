// ─── Navigation ────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// ─── Hero ──────────────────────────────────────
export const HERO_STATS = [
  { num: '200+', label: 'Workflows deployed' },
  { num: '70%', label: 'Avg. time saved' },
  { num: '48h', label: 'Avg. deployment' },
  { num: '98%', label: 'Client retention' },
]

// ─── Trusted ───────────────────────────────────
export const TRUSTED_BRANDS = [
  '⬡ LaunchStack', '▲ NexaOps', '◈ VaultSaaS',
  '◎ GridFlow', '⬟ OrbitsAI', '⌬ SprintBase',
]

// ─── Services ──────────────────────────────────
export const SERVICES = [
  { num: '01', icon: '⚡', title: 'Workflow Automation', desc: 'Eliminate repetitive tasks with intelligent, event-driven workflows that execute without any human intervention — end-to-end.', color: 'rgba(79,110,247,.1)' },
  { num: '02', icon: '🤖', title: 'AI Agents & Bots', desc: 'GPT-4 powered autonomous agents that handle support, lead qualification, data processing, and decisions — 24/7 at machine scale.', color: 'rgba(155,109,255,.1)' },
  { num: '03', icon: '🔗', title: 'API & System Integrations', desc: 'Connect your CRM, marketing stack, payments, and internal tools into one perfectly synchronized ecosystem.', color: 'rgba(0,212,240,.08)' },
  { num: '04', icon: '📊', title: 'Data & Reporting Automation', desc: 'Automated pipelines, live dashboards, and scheduled analytics — real-time business intelligence without manual work.', color: 'rgba(79,110,247,.09)' },
  { num: '05', icon: '🛠️', title: 'n8n & Zapier Automation', desc: 'Rapidly design and deploy workflows using n8n, Zapier, and Make — fast implementation, easy maintenance, proven reliability.', color: 'rgba(155,109,255,.09)' },
  { num: '06', icon: '💻', title: 'Custom Automation Dev', desc: 'Bespoke automation with Python, APIs, and cloud infrastructure for complex enterprise workflows that tools alone can\'t handle.', color: 'rgba(0,212,240,.07)' },
]

// ─── Use Cases ─────────────────────────────────
export const USE_CASES = [
  { num: '01', emoji: '🎯', title: 'Lead Generation', desc: 'Auto-capture, score, and route leads into your CRM from every channel with zero manual effort.' },
  { num: '02', emoji: '🗂️', title: 'CRM Automation', desc: 'Sync contacts, update pipeline stages, trigger follow-ups, and log every activity automatically.' },
  { num: '03', emoji: '💬', title: 'AI Support Bots', desc: '24/7 AI agents handling tickets, FAQs, and escalations in under 3 seconds response time.' },
  { num: '04', emoji: '📣', title: 'Marketing Funnels', desc: 'Behavior-triggered emails, retargeting, and personalized campaigns — fully on autopilot.' },
  { num: '05', emoji: '📈', title: 'Sales Pipelines', desc: 'Proposals, contracts, follow-ups, and deal tracking automated end-to-end without manual steps.' },
  { num: '06', emoji: '🔄', title: 'Cross-App Data Sync', desc: 'Every platform in real-time sync — no duplicates, no manual exports, no data drift ever.' },
  { num: '07', emoji: '🛒', title: 'E-commerce Operations', desc: 'Order processing, inventory alerts, shipping updates, and post-purchase flows fully automated.' },
  { num: '08', emoji: '📊', title: 'Analytics & Reporting', desc: 'Scheduled reports, live KPI dashboards, and automated alerts — business intelligence on autopilot.' },
]

// ─── Tools ─────────────────────────────────────
export const TOOLS = [
  { name: 'n8n Automation', color: '#ff6b35' },
  { name: 'Zapier', color: '#ff4a22' },
  { name: 'Make / Integromat', color: '#9333ea' },
  { name: 'OpenAI / GPT-4', color: '#10b981' },
  { name: 'Slack', color: '#4a154b' },
  { name: 'Notion', color: '#1c1c1e' },
  { name: 'Airtable', color: '#fcb400' },
  { name: 'Google Workspace', color: '#4285f4' },
  { name: 'Salesforce CRM', color: '#00a1e0' },
  { name: 'HubSpot', color: '#ff7a59' },
  { name: 'Jira / Atlassian', color: '#0052cc' },
  { name: 'WhatsApp API', color: '#22c55e' },
  { name: 'Custom REST APIs', color: '#4f6ef7' },
  { name: 'LangChain', color: '#7c3aed' },
]

// ─── Industries ────────────────────────────────
export const INDUSTRIES = [
  { ico: '🛒', label: 'E-Commerce' }, { ico: '🏥', label: 'Healthcare' },
  { ico: '💳', label: 'FinTech' }, { ico: '🏗️', label: 'Real Estate' },
  { ico: '📚', label: 'EdTech' }, { ico: '🚀', label: 'SaaS' },
  { ico: '🏭', label: 'Manufacturing' }, { ico: '🎯', label: 'Marketing' },
  { ico: '⚖️', label: 'Legal' }, { ico: '🎓', label: 'Education' },
  { ico: '🌐', label: 'Agencies' }, { ico: '📦', label: 'Logistics' },
]

// ─── Process ───────────────────────────────────
export const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: '30-min strategy session to map your processes, identify highest-ROI opportunities, and define system architecture.' },
  { num: '02', title: 'Design', desc: 'We architect a clean, scalable automation blueprint — tool selection, data flow mapping, and integration design.' },
  { num: '03', title: 'Build & Deploy', desc: 'Engineers build, test, and deploy your workflows with zero disruption — most live in 48–96 hours.' },
  { num: '04', title: 'Optimize', desc: 'Post-launch monitoring, performance tuning, and quarterly reviews keep your systems at peak efficiency.' },
]

// ─── Case Studies (home) ───────────────────────
export const CASE_STUDIES = [
  { chip: 'SaaS · Sales', title: 'Automated Sales Pipeline for B2B SaaS', desc: 'Rebuilt lead-to-close with n8n + HubSpot. Every touchpoint automated — from first contact to signed contract, zero manual steps.', metric: '70%', metricLabel: 'Reduction in manual work within the first month' },
  { chip: 'Enterprise · Support', title: 'AI Customer Support Automation', desc: 'GPT-4 triage engine integrated with Zendesk that classifies, responds, and resolves tier-1 tickets — fully autonomous.', metric: '60%', metricLabel: 'Faster response time — hours down to under 3 min' },
  { chip: 'E-commerce · Growth', title: 'Behavioral Marketing System', desc: 'Trigger-based email, SMS, and retargeting that personalizes every touchpoint at every funnel stage — entirely on autopilot.', metric: '3×', metricLabel: 'Lead-to-customer conversion in 60 days post-launch' },
]

// ─── Why ────────────────────────────────────────
export const WHY_ITEMS = [
  { ico: '🎯', title: 'Automation-First', desc: 'Our core discipline — not a bolt-on service. Every engagement starts with elimination.' },
  { ico: '🏗️', title: 'Deep Expertise', desc: 'n8n, Zapier, Make, OpenAI — we operate at architecture level, not just drag-and-drop.' },
  { ico: '⚡', title: '48-Hour Delivery', desc: 'Most automations live in 48–96 hours. No months-long agency timelines.' },
  { ico: '📈', title: 'Built to Scale', desc: 'Designed to handle 10× volume without breaking from day one.' },
  { ico: '💰', title: 'Fixed Pricing', desc: 'Clear, scope-based pricing. Maximum ROI, zero hidden costs.' },
  { ico: '🤝', title: 'Senior Engineers', desc: 'Senior architects on every project — no junior hand-offs, ever.' },
]

// ─── Testimonials ──────────────────────────────
export const TESTIMONIALS = [
  { stars: 5, body: '"Cindrel transformed our operations in under 3 weeks. They automated our entire onboarding, billing sync, and CRM flow — our team now builds product instead of firefighting."', initials: 'AK', name: 'Arjun Kapoor', role: 'CEO, LaunchStack' },
  { stars: 5, body: '"The AI support bot reduced our ticket volume by 58% in month one. Response time went from 4 hours to 2 minutes. Cindrel changed how we think about headcount entirely."', initials: 'SM', name: 'Sarah Mitchell', role: 'VP Operations, NexaOps' },
  { stars: 5, body: '"We spent 6 months trying to build these in-house. Cindrel delivered a cleaner, more scalable system in 10 days. The architecture actually holds up when you scale."', initials: 'RV', name: 'Ravi Varma', role: 'CTO, VaultSaaS' },
]

// ─── Pricing ───────────────────────────────────
export const PRICING_PLANS = [
  {
    plan: 'Starter', price: '₹949', inr: '₹11,388', period: '/year', featured: false,
    desc: '2 weeks 2 automation workflows',
    features: [
      { text: 'Up to 3 automated workflows', ok: true },
      { text: 'n8n or Zapier implementation', ok: true },
      { text: '2 system integrations', ok: true },
      { text: '14-day post-launch support', ok: true },
      { text: 'Documentation & training', ok: true },
      { text: 'AI agent development', ok: false },
    ],
  },
  {
    plan: 'Professional', price: '₹2499', inr: '₹29,988', period: '/year', featured: true,
    desc: '4 weeks 10 Automation workflows',
    features: [
      { text: 'Up to 10 automated workflows', ok: true },
      { text: 'n8n + Zapier + Make', ok: true },
      { text: 'Unlimited integrations', ok: true },
      { text: '1 AI agent deployment', ok: true },
      { text: '60-day support & optimization', ok: true },
      { text: 'ROI reporting dashboard', ok: true },
    ],
  },
  {
    plan: 'Enterprise', price: 'Custom', inr: 'Tailored to scale', period: '', featured: false,
    desc: 'For enterprises needing full-scale automation strategy and ongoing engineering.',
    features: [
      { text: 'Unlimited workflows', ok: true },
      { text: 'Full AI agent suite', ok: true },
      { text: 'Dedicated automation engineer', ok: true },
      { text: 'Monthly strategy reviews', ok: true },
      { text: 'SLA-backed uptime guarantee', ok: true },
      { text: 'White-glove onboarding', ok: true },
    ],
  },
]

// ─── Full Case Studies ─────────────────────────
export const FULL_CASE_STUDIES = [
  { tags: ['SaaS', 'Sales Automation', 'HubSpot + n8n'], title: 'End-to-End Sales Pipeline Automation for B2B SaaS', challenge: 'A B2B SaaS startup\'s 5-person team spent 40% of their time on manual CRM updates, follow-up scheduling, and proposals. Deal velocity was slow, leads falling through daily.', solution: 'Built a comprehensive n8n + HubSpot automation covering the entire lead-to-close journey — enrichment, scoring, routing, follow-up sequences, proposal generation, DocuSign contracts, and onboarding triggers.', metrics: [{ n: '70%', l: 'Manual work reduced' }, { n: '2.4×', l: 'Deal velocity' }, { n: '$380K', l: 'Annual savings' }], tools: ['n8n', 'HubSpot', 'DocuSign', 'Slack', 'OpenAI'] },
  { tags: ['Enterprise', 'AI Support', 'GPT-4 + Zendesk'], title: 'AI-First Customer Support Transformation', challenge: 'An enterprise SaaS with 50,000+ users was drowning in tickets. 12-person team overwhelmed, 6-hour average response time, satisfaction declining.', solution: 'Deployed a GPT-4 triage system integrated with Zendesk — classifies tickets, auto-resolves common queries, generates draft responses, and escalates with full context.', metrics: [{ n: '60%', l: 'Faster response' }, { n: '45%', l: 'Auto-resolved' }, { n: '4.8★', l: 'CSAT score' }], tools: ['GPT-4', 'Zendesk', 'n8n', 'LangChain', 'Slack'] },
  { tags: ['E-commerce', 'Marketing', 'Klaviyo + Make'], title: 'Full-Funnel Marketing Automation for D2C Brand', challenge: 'A D2C brand had great traffic but poor conversion. Marketing team was manually segmenting lists with no behavioral trigger sequences.', solution: 'Built a complete behavioral engine — browse abandonment, cart recovery with AI-personalized copy, post-purchase sequences, win-back campaigns, and loyalty tier automation.', metrics: [{ n: '3×', l: 'Conversion rate' }, { n: '42%', l: 'Cart recovery' }, { n: '+$1.2M', l: 'Annual revenue' }], tools: ['Make', 'Klaviyo', 'Shopify', 'Meta Ads API', 'OpenAI'] },
  { tags: ['FinTech', 'Operations', 'Custom API Dev'], title: 'Automated Loan Underwriting Workflow', challenge: 'A fintech startup had a manual underwriting process taking 3–5 days per application. Loan officers pulled data from five separate systems manually.', solution: 'Built a custom automation pipeline that simultaneously fires API calls to credit bureaus, income verification, and fraud detection — generating a complete underwriting report in 90 seconds.', metrics: [{ n: '94%', l: 'Time reduction' }, { n: '90 sec', l: 'Decision speed' }, { n: '3×', l: 'Volume capacity' }], tools: ['Python', 'AWS Lambda', 'Salesforce', 'Custom API', 'Slack'] },
]

// ─── Blog ──────────────────────────────────────
export const BLOG_POSTS = [
  { emoji: '🤖', category: 'AI Agents', date: 'Dec 2024', title: 'How to Build Your First GPT-4 Customer Support Bot in 2025', excerpt: 'A complete step-by-step guide to deploying an AI support agent that handles 50%+ of tickets autonomously — with real n8n workflow blueprints included.', readLabel: 'Read Full Guide' },
  { emoji: '⚡', category: 'n8n', date: 'Nov 2024', title: 'n8n vs Zapier vs Make: Which Tool is Right for Your Business in 2025?', excerpt: 'An honest, detailed comparison of the three leading automation platforms — pricing, capabilities, limitations, and when to use each one.', readLabel: 'Read Guide' },
  { emoji: '📊', category: 'Strategy', date: 'Nov 2024', title: 'The 10 Business Processes You Should Automate Before Hiring Your Next Employee', excerpt: 'Most companies hire to solve problems that automation could fix for 1/10th the cost. Here are the 10 highest-ROI opportunities.', readLabel: 'Read Article' },
  { emoji: '🔗', category: 'Integrations', date: 'Oct 2024', title: 'HubSpot + n8n: The Ultimate CRM Automation Stack for B2B SaaS', excerpt: 'How to connect HubSpot with n8n for a fully automated sales pipeline — from lead capture to contract signing, with zero manual touchpoints.', readLabel: 'Read Tutorial' },
  { emoji: '🧠', category: 'AI', date: 'Oct 2024', title: 'LangChain vs OpenAI Assistants: Choosing the Right AI Framework', excerpt: 'A practical comparison for engineers and technical founders — when to use LangChain\'s flexibility versus OpenAI Assistants\' simplicity.', readLabel: 'Read Analysis' },
  { emoji: '💰', category: 'ROI', date: 'Sep 2024', title: 'How to Calculate the True ROI of Business Process Automation', excerpt: 'Beyond the calculator — a framework for measuring direct savings, indirect productivity gains, and strategic value from automation investments.', readLabel: 'Read Framework' },
]

// ─── Team ──────────────────────────────────────
export const TEAM = [
  { initials: 'AK', name: 'Ajay Kumar', role: 'Founder & Lead Architect', bio: '8+ years building automation at scale. Former engineering lead at two unicorn startups.' },
  { initials: 'PR', name: 'Priya Rao', role: 'Head of AI Engineering', bio: 'AI/ML specialist — LLM deployment, prompt engineering, and autonomous agent design.' },
  { initials: 'SK', name: 'Sanjay Kumar', role: 'Senior Integration Engineer', bio: 'API specialist who has built integrations for Fortune 500 companies. HubSpot & Salesforce expert.' },
  { initials: 'NM', name: 'Neha Mishra', role: 'Automation Strategist', bio: 'Operations background turned automation expert. Specializes in workflow discovery and ROI analysis.' },
]

// ─── Values ────────────────────────────────────
export const VALUES = [
  { ico: '🎯', title: 'Our Mission', body: 'Simplify business operations through intelligent automation — helping every company run with the efficiency of a 10× larger organization.' },
  { ico: '🔮', title: 'Our Vision', body: 'A world where every business runs with intelligent automated systems — freeing people to focus on creativity and strategy.' },
  { ico: '⚡', title: 'Speed Without Compromise', body: 'We move fast but never cut corners. Our 48-hour goal drives systems that are fast to deliver and built to last.' },
  { ico: '🔬', title: 'Engineering Excellence', body: 'We treat automation with software engineering rigor — clean architecture, comprehensive testing, thorough documentation.' },
  { ico: '📊', title: 'Measurable Outcomes', body: 'Every engagement starts with success metrics. We only consider a project complete when we can show quantifiable impact.' },
  { ico: '🤝', title: 'Long-Term Partnership', body: 'We build automation systems that grow with your business — and we\'re with you every step of the way.' },
]

// ─── About Stats ───────────────────────────────
export const ABOUT_STATS = [
  { n: '2020', l: 'Founded' }, { n: '200+', l: 'Projects Delivered' },
  { n: '50+', l: 'Enterprise Clients' }, { n: '12+', l: 'Countries Served' },
  { n: '98%', l: 'Client Retention' }, { n: '$14M+', l: 'Client Savings' },
]

// ─── FAQ ───────────────────────────────────────
export const FAQ_ITEMS = [
  { q: 'How long does it take to build and deploy an automation?', a: 'Most automation workflows go live within 48–96 hours from project kickoff. More complex enterprise systems may take 2–4 weeks. We always provide a clear timeline upfront before billing begins.' },
  { q: 'Which automation tools do you work with?', a: 'We work with the full spectrum: n8n, Zapier, Make, OpenAI APIs, LangChain, Slack, HubSpot, Salesforce, Airtable, Notion, Google Workspace, Twilio, Stripe, Shopify, and custom REST API development.' },
  { q: 'Do you offer ongoing support after the automation is live?', a: 'Yes. Every project includes post-launch support (14–60 days depending on package). We also offer monthly maintenance retainers for ongoing optimization and dedicated engineer access.' },
  { q: 'What if the automation breaks or needs changes later?', a: 'All automations include comprehensive error handling, failure alerts, and retry mechanisms. We provide thorough documentation so your team can make minor changes independently.' },
  { q: 'Can you automate with tools we already use?', a: 'Always. We start with your existing tools and make your current stack work better together. We only recommend new software when it delivers clear, measurable ROI improvements.' },
  { q: 'What industries do you work with?', a: 'SaaS, e-commerce, healthcare, fintech, real estate, education, logistics, manufacturing, and professional services. Our frameworks are industry-agnostic.' },
]
