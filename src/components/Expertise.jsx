import { Brush, Palette, Search, Code2 } from 'lucide-react'

function Expertise() {
  const items = [
    { icon: Brush, title: 'Web Design', text: 'Clean, modern interfaces with premium aesthetics and conversion-first UX.' },
    { icon: Palette, title: 'Branding', text: 'Timeless visual systems and brand kits that speak your identity.' },
    { icon: Search, title: 'SEO Strategy', text: 'Technical, on-page, and content SEO that drives discoverability.' },
    { icon: Code2, title: 'Development', text: 'Fast, accessible, and scalable builds with modern frameworks.' },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Expertise</h2>
          <p className="mt-3 text-slate-300">Everything you need to look premium and perform.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_40px_rgba(59,130,246,0.15)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
