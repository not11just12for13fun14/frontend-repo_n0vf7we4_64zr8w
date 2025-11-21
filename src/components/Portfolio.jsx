function Portfolio() {
  const projects = [
    { title: 'SaaS Dashboard', img: 'https://images.unsplash.com/photo-1551281044-8b59f64427cd?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Product Landing', img: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=1200&auto=format&fit=crop' },
    { title: 'E-commerce', img: 'https://images.unsplash.com/photo-1516382799247-87df95d790b7?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Brand Website', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Agency Site', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Portfolio', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-3 text-slate-300">A snapshot of recent projects.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={p.img} alt={p.title} className="h-60 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
