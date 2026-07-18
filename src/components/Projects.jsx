const PROJECTS = [
  {
    code: 'SIH-2025',
    title: 'Smart Classroom & Timetable Scheduler',
    stack: ['Python (Flask/Django)', 'MySQL/PostgreSQL', 'React', 'scikit-learn', 'OR-Tools'],
    description:
      'An AI-powered timetable scheduler built for multi-grade teaching environments, developed for Smart India Hackathon 2025.',
    points: [
      'Real-time auto-adjustment when disruptions hit — absent teachers, room clashes, last-minute changes',
      'Offline-first architecture so schools with unreliable connectivity stay functional',
      'Multilingual interface to support diverse classroom staff',
    ],
  },
  {
    code: 'OPD-QMS',
    title: 'Outpatient Queue and Token Management System',
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    description:
      'A computerized OPD token system that replaced manual patient-handling with a structured digital queue.',
    points: [
      'Automated token generation logic to remove manual bottlenecks',
      'Priority handling that fast-tracks urgent cases ahead of the standard queue',
      'Responsive staff-facing interface for real-time queue control',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="dwg-label mb-3">Sheet 04 / Projects</p>
      <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-12">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p) => (
          <article
            key={p.code}
            className="reg-corners group border border-blue/25 bg-white/60 p-7 transition-all duration-200 hover:border-amber hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(31,92,139,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs tracking-widest text-amber">{p.code}</span>
              <span className="font-mono text-xs text-ink/40">DWG</span>
            </div>

            <h3 className="font-display font-600 text-xl text-blue-deep mb-3">
              {p.title}
            </h3>

            <p className="text-ink/80 text-sm leading-relaxed mb-4">{p.description}</p>

            <ul className="space-y-2 mb-5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-ink/75">
                  <span className="text-blue mt-1 shrink-0">—</span>
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-paperLine">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[11px] px-2 py-1 bg-blue-deep/5 text-blue-deep">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
