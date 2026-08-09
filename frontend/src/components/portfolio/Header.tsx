import { useEffect, useState } from 'react'
import { BackendStatus } from '../BackendStatus'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`border-b border-zinc-800/80 sticky top-0 z-10 bg-zinc-950/90 backdrop-blur transition-shadow ${scrolled ? 'shadow-lg shadow-black/20' : ''
        }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          Lince Mathew
        </a>
        <nav className="flex items-center gap-6">
          <BackendStatus />
          <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</a>
        </nav>
      </div>
    </header>
  )
}
