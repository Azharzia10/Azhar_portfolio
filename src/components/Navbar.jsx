import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#resume', label: 'Resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-paperLine' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-[0.2em] text-blue-deep">
          AZ<span className="text-amber">.</span>DEV
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink/70 hover:text-blue transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest border border-ink/30 px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm uppercase tracking-widest bg-paper border-b border-paperLine">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink/80 hover:text-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
