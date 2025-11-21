import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Process from './components/Process'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Process />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Luba Web. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
