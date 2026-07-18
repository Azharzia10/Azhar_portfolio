import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResumeDownload from './components/ResumeDownload'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-paper min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ResumeDownload />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
