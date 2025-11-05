import ParticleBackground from '@/components/ParticleBackground'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Sidebar />
      <MobileNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}