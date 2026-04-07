import { useState, useRef, useEffect, useCallback } from 'react'
import { INR_RATE } from '@/lib/utils'
import docContext from '@/assets/documents/document-1.txt?raw'

const SYSTEM_PROMPT = `You are Cindrel AI, the official automation consultant for Cindrel — a premium AI Automation & Workflow Engineering company based in Chennai, India.

CRITICAL GUIDELINES FROM SERVICE DOCUMENT:
${docContext}

TONE: Professional, consultant-like, helpful, and neutral. (Max 120 words per response).
LANGUAGES: Support English, Hindi, Tamil, and Telugu.
CALL TO ACTION: Suggest booking a free strategy call at /contact when appropriate.
Email: hello@cindrel.com.`

interface Msg { role: 'user' | 'bot'; html: string }

const SUGGESTIONS = [
  'What is workflow automation?', 'n8n vs Zapier comparison',
  "What's your pricing?", 'Automate my CRM',
  'How do AI agents work?', 'Book a free call',
]

const PLACEHOLDERS: Record<string, string> = {
  en: 'Start your automation journey...',
  hi: 'अपनी ऑटोमेशन यात्रा शुरू करें...',
  ta: 'உங்கள் ஆட்டோமேஷன் பயணத்தை தொடங்குங்கள்...',
  te: 'మీ ఆటోమేషన్ ప్రయాణాన్ని ప్రారంభించండి...',
}

function escHtml(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
function fmtReply(t: string) {
  return t
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    .replace(/^[•\-] (.+)$/gm, '→ $1')
}

export default function AiChatBar() {
  const [open,       setOpen]       = useState(false)
  const [input,      setInput]      = useState('')
  const [messages,   setMessages]   = useState<Msg[]>([{
    role: 'bot',
    html: "👋 Hi! I'm Cindrel AI, your automation assistant. Ask me anything about workflow automation, n8n, Zapier, AI agents, pricing, or how Cindrel can help your business!",
  }])
  const [typing,     setTyping]     = useState(false)
  const [showChips,  setShowChips]  = useState(true)
  const [lang,       setLang]       = useState('en')
  const [listening,  setListening]  = useState(false)
  const chatHistory = useRef<{ role: string; content: string }[]>([
    { role: 'assistant', content: "👋 Hi! I'm Cindrel AI, your automation assistant. Ask me anything about workflow automation, n8n, Zapier, AI agents, pricing, or how Cindrel can help your business!" }
  ])
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef    = useRef<HTMLInputElement>(null)
  const wrapRef     = useRef<HTMLDivElement>(null)
  const recog       = useRef<SpeechRecognition | null>(null)

  const scrollBottom = useCallback(() => {
    setTimeout(() => {
      if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }, 60)
  }, [])

  useEffect(() => { scrollBottom() }, [messages, scrollBottom])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (open && wrapRef.current && !wrapRef.current.contains(target)) {
        // If the target element is no longer in the document, it was likely removed 
        // during the click event (e.g. clicking a suggestion chip), so don't close.
        if (!document.body.contains(target)) return
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open])

  // Pulse effect on load
  useEffect(() => {
    const t = setTimeout(() => {
      if (wrapRef.current) {
        wrapRef.current.style.animation = 'barPulse .6s ease'
        setTimeout(() => { if (wrapRef.current) wrapRef.current.style.animation = '' }, 600)
      }
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  const sendMessage = useCallback((text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || typing) return

    // 1. Update UI Immediately
    setInput('')
    setShowChips(false)
    setOpen(true)
    setMessages(prev => [...prev, { role: 'user', html: escHtml(msg) }])
    chatHistory.current.push({ role: 'user', content: msg })
    setTyping(true)

    // 2. Local fetch handler inside the callback
    const callBackend = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || '';
        const fetchUrl = `${apiUrl}/ai/chat`.replace(/\/+ai/, '/ai');
        
        const res = await fetch(fetchUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: msg,
            history: chatHistory.current.slice(0, -1)
          }),
        })
        
        if (!res.ok) throw new Error('API call failed')

        const data = await res.json()
        const botReply = data.response ?? "I'm having a moment — please try again or reach us at hello@cindrel.com 😊"
        
        chatHistory.current.push({ role: 'assistant', content: botReply })
        setMessages(prev => [...prev, { role: 'bot', html: fmtReply(botReply) }])
      } catch (err) {
        console.error('Chat Error:', err)
        setMessages(prev => [...prev, { role: 'bot', html: "Oops! Something went wrong. Email us at <strong>hello@cindrel.com</strong> 😊" }])
      } finally {
        setTyping(false)
      }
    }

    callBackend()
    inputRef.current?.focus()
  }, [input, typing])

  const toggleMic = () => {
    const SR = (window as unknown as { SpeechRecognition?: typeof SpeechRecognition; webkitSpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition
      || (window as unknown as { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition
    if (!SR) { setMessages(prev => [...prev, { role: 'bot', html: 'Voice input is not supported in your browser.' }]); setOpen(true); return }
    if (recog.current && listening) { recog.current.stop(); setListening(false); return }
    const r = new SR()
    r.lang = { hi: 'hi-IN', ta: 'ta-IN', te: 'te-IN' }[lang] ?? 'en-US'
    r.continuous = false; r.interimResults = false
    r.onstart  = () => setListening(true)
    r.onresult = (e) => { setInput(e.results[0][0].transcript); setListening(false); sendMessage(e.results[0][0].transcript) }
    r.onerror  = () => setListening(false)
    r.onend    = () => setListening(false)
    r.start(); recog.current = r
  }

  return (
    <div id="ai-bar-wrap" ref={wrapRef} className={open ? 'active' : ''}>
      {/* Hint */}
      {/* <div className="text-center font-mono text-[10px] tracking-[.1em] text-white/30 mb-1.5 pointer-events-none select-none">
        Ask Cindrel AI anything about automation
      </div> */}
      {/* Glow */}
      <div id="ai-bar-glow" />

      {/* Chat Window */}
      <div id="ai-chat-window" className={open ? 'open' : ''}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-black/[0.07]"
          style={{ background: 'linear-gradient(135deg,rgba(79,110,247,.05),rgba(0,212,240,.03))' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-brand-ind to-brand-vio flex items-center justify-center text-[16px] flex-shrink-0">🤖</div>
            <div>
              <div className="font-heading font-bold text-[14px] text-lt-text">Cindrel AI</div>
              <div className="flex items-center gap-1.5 text-[11.5px] text-lt-muted mt-0.5">
                <span className="w-[6px] h-[6px] rounded-full bg-green-500" style={{ boxShadow: '0 0 5px rgba(34,197,94,.7)' }} />
                Online · Automation Expert
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full bg-black/[0.06] border-none flex items-center justify-center text-lt-muted hover:bg-black/10 hover:text-lt-text transition-colors text-[15px]">
            ✕
          </button>
        </div>

        {/* Messages */}
        <div ref={messagesRef} id="ai-messages" className="flex-1 overflow-y-auto p-4 sm:p-[18px] flex flex-col gap-3">
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg-in flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''} items-start`}>
              <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-heading font-bold text-[12px] text-white mt-0.5 ${m.role === 'bot' ? 'bg-gradient-to-br from-brand-ind to-brand-vio' : 'bg-gradient-to-br from-[#1a1d2e] to-[#2d3354]'}`}>
                {m.role === 'bot' ? 'C' : 'U'}
              </div>
              <div className={`max-w-[80%] px-3.5 py-2.5 text-[13.5px] leading-[1.6] rounded-2xl ${m.role === 'bot' ? 'bg-[#f4f5fb] text-lt-text border border-black/[0.06] rounded-bl-[4px]' : 'bg-gradient-to-br from-brand-ind to-brand-vio text-white rounded-br-[4px]'}`}
                dangerouslySetInnerHTML={{ __html: m.html }} />
            </div>
          ))}
          {typing && (
            <div className="flex gap-2.5 items-start ai-msg-in">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-heading font-bold text-[12px] text-white mt-0.5 bg-gradient-to-br from-brand-ind to-brand-vio">C</div>
              <div className="bg-[#f4f5fb] border border-black/[0.06] rounded-2xl rounded-bl-[4px] px-4 py-3 flex gap-1.5 items-center">
                <div className="t-dot" /><div className="t-dot" /><div className="t-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Suggestion chips */}
        {showChips && (
          <div className="flex flex-wrap gap-1.5 px-4 sm:px-[18px] py-3 border-t border-black/[0.05]">
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={(e) => { e.stopPropagation(); sendMessage(s) }}
                className="px-3 py-1.5 rounded-full border-[1.5px] border-brand-ind/20 bg-brand-ind/4 text-brand-ind font-body text-[12px] transition-all hover:bg-brand-ind/11 hover:border-brand-ind whitespace-nowrap">
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div id="ai-bar" className="border border-white">
        {/* Left: AI indicator */}
        <div className="flex items-center gap-2 mr-2.5 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-ind to-brand-cyan animate-pip" style={{ boxShadow: '0 0 8px rgba(79,110,247,.7)' }} />
          <span className="ai-pill-label font-mono text-[10px] tracking-[.14em] uppercase text-brand-ind font-semibold">Cindrel AI</span>
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          id="ai-input"
          type="text"
          value={input}
          placeholder={PLACEHOLDERS[lang] ?? PLACEHOLDERS.en}
          autoComplete="off"
          spellCheck={false}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
          onFocus={() => setOpen(true)}
          className="flex-1 border-none outline-none bg-transparent font-body text-[15px] text-[#1a1d2e] py-1 min-w-0 placeholder:text-[#9ba3b8]"
        />

        {/* Controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          {/* Language */}
          <select value={lang} onChange={e => { setLang(e.target.value); setInput(''); inputRef.current?.focus() }}
            className="ai-lang-select px-2.5 pr-5 py-1.5 rounded-full border border-black/10 bg-transparent font-body text-[12.5px] font-medium text-[#5c6278] appearance-none transition-all hover:bg-brand-ind/6 hover:border-brand-ind/28 hover:text-brand-ind"
            style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239ba3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat:'no-repeat', backgroundPosition:'right 6px center' }}>
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="ta">TA</option>
            <option value="te">TE</option>
          </select>

          {/* Mic */}
          <button onClick={toggleMic}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${listening ? 'bg-red-500/8 border-red-400/40 text-red-500 animate-[micPulse_1s_infinite]' : 'border-black/10 text-[#9ba3b8] hover:bg-brand-ind/7 hover:border-brand-ind/3 hover:text-brand-ind'}`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </button>

          {/* Send */}
          <button onClick={() => sendMessage()} disabled={!input.trim() || typing}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-ind to-brand-vio border-none flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-[0_4px_22px_rgba(79,110,247,.6)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
