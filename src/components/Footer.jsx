const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/azharzia' },
  { label: 'GitHub', href: 'https://github.com/azharzia10' },
  { label: 'Email', href: 'mailto:workwithazharzia@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-blue-deep text-paper/70">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-xs tracking-wide">
          © {year} Azhar Zia. All rights reserved.
        </p>

        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:text-amber transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
