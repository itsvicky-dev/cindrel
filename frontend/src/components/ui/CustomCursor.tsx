import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    setVisible(true)
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let rafId: number
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.11
      p.ry += (p.my - p.ry) * 0.11
      ring.style.left = p.rx + 'px'
      ring.style.top  = p.ry + 'px'
      rafId = requestAnimationFrame(loop)
    }
    loop()

    const enter = () => { dot.classList.add('hovering'); ring.classList.add('hovering') }
    const leave = () => { dot.classList.remove('hovering'); ring.classList.remove('hovering') }
    const attach = () => document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      obs.disconnect()
    }
  }, [])

  if (!visible) return null
  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
