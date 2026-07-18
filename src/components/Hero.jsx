import { useState } from 'react'

const CONTACT = {
  phone: '+91 8840486526',
  email: 'workwithazharzia@gmail.com',
  location: 'Lucknow, Uttar Pradesh',
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/azharzia', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/azharzia10', icon: '<>' },
]

// Place a photo at public/profile.jpg (square, ~500x500px+) and it will
// appear here automatically. If it's missing, initials show instead.
const PROFILE_IMAGE = '/profile.jpeg'

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-blue-deep text-paper blueprint-grid-dark"
    >
      {/* Corner registration marks, like a technical drawing sheet */}
      <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-amber/70" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r-2 border-t-2 border-amber/70" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l-2 border-b-2 border-amber/70" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-amber/70" />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-28 flex flex-col items-center text-center">
        <p className="dwg-label text-teal mb-6">Sheet 01 / Profile — Rev 2026</p>

        {/* Profile portrait, styled like a circular detail callout on a drawing */}
        <div className="relative mb-7">
          <span className="absolute -inset-2 rounded-full border border-dashed border-paper/25" />
          {!imgFailed ? (
            <img
              src={PROFILE_IMAGE}
              alt="Portrait of Azhar Zia"
              onError={() => setImgFailed(true)}
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-amber shadow-[0_0_0_6px_rgba(232,163,61,0.08)]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-amber flex items-center justify-center bg-blue/20 font-display font-700 text-3xl tracking-wide"
            >
              AZ
            </div>
          )}
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber border-2 border-blue-deep" />
        </div>

        <h1 className="font-display font-700 text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
          Azhar Zia
        </h1>

        <p className="mt-5 font-mono text-base sm:text-lg text-paper/80">
          Full-Stack Developer (Java Developer) <span className="text-amber">|</span> Python &amp; Flask
        </p>

        {/* Contact strip, laid out like a title block */}
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-5 w-full max-w-xl font-mono text-sm border-t border-paper/15 pt-6 justify-items-center">
          <div className="text-center">
            <dt className="text-paper/45 text-xs uppercase tracking-widest mb-1">Phone</dt>
            <dd>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-amber transition-colors">
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div className="text-center">
            <dt className="text-paper/45 text-xs uppercase tracking-widest mb-1">Email</dt>
            <dd>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-amber transition-colors whitespace-nowrap">
                {CONTACT.email}
              </a>
            </dd>
          </div>
          <div className="text-center">
            <dt className="text-paper/45 text-xs uppercase tracking-widest mb-1 break-all">Location</dt>
            <dd>{CONTACT.location}</dd>
          </div>
        </dl>

        {/* Calls to action */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn border-paper/30 text-paper hover:border-amber hover:text-amber"
            >
              <span className="font-mono">{s.icon}</span>
              {s.label}
            </a>
          ))}
          <a
            href="#resume"
            className="stamp-btn border-amber bg-amber text-blue-deep hover:bg-transparent hover:text-amber"
          >
            View Resume ↓
          </a>
        </div>
      </div>
    </section>
  )
}
