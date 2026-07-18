const EDUCATION = [
  {
    year: '2025-Present',
    kind: 'Education',
    title: 'Master of Computer Application (MCA)',
    place: 'Integral University',
  },
  {
    year: '2021-2024',
    kind: 'Education',
    title: 'Bachelor of Arts (B.A.)',
    place: 'Deen Dayal Upadhyay University',
  },
  {
    year: '2021',
    kind: 'Education',
    title: 'Intermediate (12th)',
    place: 'M.S.I Inter College',
  },
  {
    year: '2019',
    kind: 'Education',
    title: 'High School (10th)',
    place: 'M.S.I Inter College',
  },
]

const CERTIFICATIONS = [
  {
    year: 'Jan-Mar 2026',
    kind: 'Certification',
    title: 'Cloud Solution Architect',
    place: 'Integral University',
  },
  {
    year: 'Apr-May 2026',
    kind: 'Certification',
    title: 'Applied Machine Learning with Python',
    place: 'Integral University',
  },
  {
    year: '',
    kind: 'Extracurricular',
    title: 'Member, Binary Battalion Coding Club',
    place: '',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-white/40 border-y border-paperLine">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="dwg-label mb-3">Sheet 05 / Background</p>
        <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-14">
          Education &amp; Certifications
        </h2>

        {/* CSS Grid to put them parallel side-by-side on md+ screens */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Education Column */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-blue mb-8">
              Academic Timeline
            </h3>
            <ol className="relative timeline-rail pl-8 space-y-10">
              {EDUCATION.map((item, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-8 top-1 w-4 h-4 bg-paper border-2 border-blue" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber">
                      {item.kind}
                    </span>
                    {item.year && (
                      <span className="font-mono text-xs text-ink/40">{item.year}</span>
                    )}
                  </div>
                  <h3 className="font-display font-600 text-lg text-blue-deep mt-1">
                    {item.title}
                  </h3>
                  {item.place && <p className="text-sm text-ink/70">{item.place}</p>}
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications & Extra Column */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-blue mb-8">
              Certifications &amp; Extras
            </h3>
            <ol className="relative timeline-rail pl-8 space-y-10">
              {CERTIFICATIONS.map((item, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-8 top-1 w-4 h-4 bg-paper border-2 border-blue" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber">
                      {item.kind}
                    </span>
                    {item.year && (
                      <span className="font-mono text-xs text-ink/40">{item.year}</span>
                    )}
                  </div>
                  <h3 className="font-display font-600 text-lg text-blue-deep mt-1">
                    {item.title}
                  </h3>
                  {item.place && <p className="text-sm text-ink/70">{item.place}</p>}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  )
}




// const TIMELINE = [
//   {
//     year: '2026',
//     kind: 'Certification',
//     title: 'Cloud Solution Architect',
//     place: 'Integral University',
//   },
//   {
//     year: '2026',
//     kind: 'Certification',
//     title: 'Applied Machine Learning with Python',
//     place: 'Integral University',
//   },
//   {
//     year: '',
//     kind: 'Education',
//     title: 'Master of Computer Application (MCA)',
//     place: 'Integral University',
//   },
//   {
//     year: '',
//     kind: 'Education',
//     title: 'Bachelor of Arts (B.A.)',
//     place: 'Deen Dayal Upadhyay University',
//   },
//   {
//     year: '',
//     kind: 'Education',
//     title: '12th & 10th Standard',
//     place: 'M.S.I Inter College',
//   },
//   {
//     year: '',
//     kind: 'Extracurricular',
//     title: 'Member, Binary Battalion Coding Club',
//     place: '',
//   },
// ]

// export default function Education() {
//   return (
//     <section id="education" className="bg-white/40 border-y border-paperLine">
//       <div className="max-w-6xl mx-auto px-6 py-24">
//         <p className="dwg-label mb-3">Sheet 05 / Education</p>
//         <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-14">
//           Education &amp; Certifications
//         </h2>

//         <ol className="relative timeline-rail pl-8 space-y-10">
//           {TIMELINE.map((item, i) => (
//             <li key={i} className="relative">
//               <span className="absolute -left-8 top-1 w-4 h-4 bg-paper border-2 border-blue" />
//               <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
//                 <span className="font-mono text-xs uppercase tracking-widest text-amber">
//                   {item.kind}
//                 </span>
//                 {item.year && (
//                   <span className="font-mono text-xs text-ink/40">{item.year}</span>
//                 )}
//               </div>
//               <h3 className="font-display font-600 text-lg text-blue-deep mt-1">
//                 {item.title}
//               </h3>
//               {item.place && <p className="text-sm text-ink/70">{item.place}</p>}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   )
// }
