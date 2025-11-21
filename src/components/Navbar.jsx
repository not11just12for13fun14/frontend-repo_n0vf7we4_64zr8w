import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.25)]">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 rounded-md blur-md bg-blue-500/40"></span>
                <span className="relative bg-gradient-to-br from-blue-500 to-cyan-400 text-transparent bg-clip-text font-bold text-xl tracking-tight">Luba Web</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition-shadow">
                Get a Quote
              </a>
            </nav>

            <button className="md:hidden text-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-5 pt-0">
              <div className="h-px bg-white/10 mb-3"></div>
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
