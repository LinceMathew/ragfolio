import { Header } from './components/portfolio/Header'
import { Hero } from './components/portfolio/Hero'
import { About } from './components/portfolio/About'
import { Skills } from './components/portfolio/Skills'
import { Experience } from './components/portfolio/Experience'
import { Projects } from './components/portfolio/Projects'
import { Testimonials } from './components/portfolio/Testimonials'
import { Education } from './components/portfolio/Education'
import { Footer } from './components/portfolio/Footer'
import { Chatbot } from './components/chatbot/Chatbot'
import { BackToTop } from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BackToTop />
      <main className="flex-1">
        <Hero />
        <Chatbot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
