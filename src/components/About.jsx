const CERTS = [
  'Cloud Solution Architecture',
  'Applied Machine Learning & Deep Learning',
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <p className="dwg-label mb-3">Sheet 02 / About</p>
      <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-10">
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-ink/85 leading-relaxed">
          <p>
            I am a Computer Applications postgraduate and a Full-Stack Developer with hands-on 
            experience building robust applications using Python, Flask, Java, and MySQL. I enjoy 
            tackling real-world problems through software, from developing an AI-powered timetable 
            scheduler for the Smart India Hackathon to building computerized systems that streamline 
            hospital workflows.
          </p>
          <p>
            Alongside core development, I've earned certifications in{' '}
            <span className="text-blue font-medium">Cloud Solution Architecture</span> and{' '}
            <span className="text-blue font-medium">Applied Machine Learning &amp; Deep Learning</span>,
            which shape how I approach systems: designed to scale, and increasingly, designed
            to reason over data intelligently.
          </p>
          <p>
            I'm currently seeking a{' '}
            <span className="text-amber font-semibold">JAVA Full-Stack Developer</span>{' '}
            role where I can build production-grade systems from the ground up and contribute to 
            impactful projects.
          </p>
        </div>

        {/* Certification plate, styled like a small spec panel */}
        <div className="reg-corners border border-blue/30 bg-white/50 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">
            Certifications
          </p>
          <ul className="space-y-3">
            {CERTS.map((c) => (
              <li key={c} className="flex items-start gap-2 font-mono text-sm text-ink">
                <span className="text-amber mt-0.5">▣</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}





// const CERTS = [
//   'Cloud Solution Architecture',
//   'Applied Machine Learning & Deep Learning',
// ]

// export default function About() {
//   return (
//     <section id="about" className="max-w-6xl mx-auto px-6 py-24">
//       <p className="dwg-label mb-3">Sheet 02 / About</p>
//       <h2 className="dwg-heading font-display font-600 text-3xl sm:text-4xl mb-10">
//         About Me
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10">
//         <div className="md:col-span-2 space-y-4 text-ink/85 leading-relaxed">
//           <p>
//             I'm a Computer Applications postgraduate with hands-on experience building
//             full-stack applications using Python, Flask, and MySQL — the kind of developer
//             who's equally comfortable designing a database schema, writing the API that
//             sits on top of it, and shipping the interface that makes it usable.
//           </p>
//           <p>
//             Alongside core development, I've earned certifications in{' '}
//             <span className="text-blue font-medium">Cloud Solution Architecture</span> and{' '}
//             <span className="text-blue font-medium">Applied Machine Learning &amp; Deep Learning</span>,
//             which shape how I approach systems: designed to scale, and increasingly, designed
//             to reason over data intelligently.
//           </p>
//           <p>
//             I'm currently seeking a{' '}
//             <span className="text-amber font-semibold">Full-Stack or Python/Flask Developer</span>{' '}
//             role where I can build production-grade systems from the ground up.
//           </p>
//         </div>

//         {/* Certification plate, styled like a small spec panel */}
//         {/* <div className="reg-corners border border-blue/30 bg-white/50 p-6">
//           <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">
//             Certifications
//           </p>
//           <ul className="space-y-3">
//             {CERTS.map((c) => (
//               <li key={c} className="flex items-start gap-2 font-mono text-sm text-ink">
//                 <span className="text-amber mt-0.5">▣</span>
//                 {c}
//               </li>
//             ))}
//           </ul>
//         </div> */}
//       </div>
//     </section>
//   )
// }
