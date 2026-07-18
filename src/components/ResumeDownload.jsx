// IMPORTANT: place the file named exactly "Azhar_Zia_Resume_ATS (1).pdf"
// inside the /public folder of this Vite project. Anything in /public is
// served from the site root untouched, so the href below will resolve to
// https://yourdomain.com/Azhar_Zia_Resume_ATS%20(1).pdf
const RESUME_PATH = '/Azhar_Zia_Resume_port.pdf' // URL-encoded space for "(1)"

export default function ResumeDownload() {
  return (
    <section id="resume" className="bg-blue text-paper relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="dwg-label text-paper/70 mb-3">Sheet 01a / Deliverable</p>
          <h2 className="font-display font-600 text-3xl sm:text-4xl">
            My Resume
          </h2>
          <p className="mt-3 font-body text-paper/80 max-w-xl">
            Download my one-page resume for a comprehensive look at my education, technical stack, and full-stack development projects.
          </p>
        </div>

        <a
          href={RESUME_PATH}
          download="Azhar_Zia_Resume_ATS (1).pdf"
          className="stamp-btn shrink-0 border-amber bg-amber text-blue-deep hover:bg-transparent hover:text-amber hover:border-amber text-base px-7 py-4"
        >
          ⬇ Download Resume (PDF)
        </a>
      </div>
    </section>
  )
}
