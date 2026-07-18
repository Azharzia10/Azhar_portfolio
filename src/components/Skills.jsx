const SKILL_GROUPS = [
  {
    id: '01',
    title: 'Programming',
    items: ['Core Java', 'OOP', 'Data Structures', 'Linux', 'Python', 'C'],
  },
  {
    id: '02',
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js (Basic)'],
  },
  {
    id: '03',
    title: 'Backend & Databases',
    items: ['Flask', 'Spring Boot (Basic)', 'Node.js', 'MySQL', 'MongoDB'],
  },
  {
    id: '04',
    title: 'Tools & Practices',
    items: ['Git', 'GitHub', 'REST APIs', 'SDLC', 'Problem-Solving', 'Debugging'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white/40 border-y border-paperLine">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="dwg-label mb-3">Sheet 03 / Skills</p>
        <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-12">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-amber text-sm">{group.id}</span>
                <h3 className="font-display font-600 text-lg text-blue-deep">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
