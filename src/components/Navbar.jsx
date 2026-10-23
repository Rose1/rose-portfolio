import { useState } from 'react'
import { navLinks } from '../data'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-paper/90 backdrop-blur-md border-b border-ink/10 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
            <a href="#hero" className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink tracking-tight">
              Rose
            </a>

            <ul className="hidden md:flex gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-baseline gap-2 text-sm uppercase tracking-widest text-ink/70 hover:text-primary transition-colors"
                  >
                    <span className="text-[10px] text-primary font-medium">{link.num}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-ink text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {isOpen && (
            <ul className="md:hidden flex flex-col px-6 pb-6 bg-paper border-t border-ink/10">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-ink/5 last:border-0">
                  <a
                    href={link.href}
                    className="flex items-baseline gap-3 py-4 text-ink uppercase tracking-widest text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary text-xs">{link.num}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      
    )
}