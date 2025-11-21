function Services() {
  const items = [
    {
      title: 'Custom Websites',
      text: 'Pixel-perfect builds with blazing performance and SEO baked in.',
    },
    {
      title: 'E-commerce',
      text: 'Elegant storefronts optimized for conversion and repeat sales.',
    },
    {
      title: 'Brand Systems',
      text: 'Logo, typography, color and usage rules packaged for consistency.',
    },
    {
      title: 'Content & SEO',
      text: 'Strategy and execution to grow rankings and drive qualified traffic.',
    },
  ]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300">Premium delivery with soft-glow polish.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_50px_rgba(59,130,246,0.18)]">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent blur-xl"></div>
              <h3 className="relative text-lg font-semibold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
