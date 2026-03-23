import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  // Only show on pointer devices (not touch)
  const [isPointer, setIsPointer] = useState(false)

  // Step 1 — detect pointer capability on mount
  useEffect(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsPointer(true)
    }
  }, [])

  // Step 2 — wire everything up AFTER elements are in the DOM
  // This runs only when isPointer flips to true and refs are populated
  useEffect(() => {
    if (!isPointer) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // ── Mouse tracking ──────────────────────────────────
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      // Dot follows cursor instantly
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    // ── Smooth ring via rAF ─────────────────────────────
    let rafId: number
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.11
      p.ry += (p.my - p.ry) * 0.11
      ring.style.left = p.rx + 'px'
      ring.style.top  = p.ry + 'px'
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    // ── Hover state on interactive elements ─────────────
    const expand   = () => { dot.classList.add('hovering');    ring.classList.add('hovering')    }
    const contract = () => { dot.classList.remove('hovering'); ring.classList.remove('hovering') }

    const SELECTORS = 'a, button, [data-hover], input, select, textarea, label'

    const attachToAll = () => {
      document.querySelectorAll<Element>(SELECTORS).forEach(el => {
        // avoid duplicate listeners
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', contract)
        el.addEventListener('mouseenter', expand)
        el.addEventListener('mouseleave', contract)
      })
    }

    // Attach now, then watch for new elements
    attachToAll()
    const mutObs = new MutationObserver(attachToAll)
    mutObs.observe(document.body, { childList: true, subtree: true })

    // ── Cleanup ─────────────────────────────────────────
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mutObs.disconnect()
    }
  }, [isPointer])   // ← re-runs when isPointer becomes true & refs are populated

  if (!isPointer) return null

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%,-50%)' }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99998, transform: 'translate(-50%,-50%)' }}
      />
    </>
  )
}
