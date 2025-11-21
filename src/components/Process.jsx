function Process() {
  const steps = [
    {
      title: 'Discovery',
      text: 'We dive deep into your goals, audience, and competitive landscape to set a clear strategic direction.',
    },
    {
      title: 'Design',
      text: 'We craft a beautiful, conversion-focused experience with prototypes you can feel and refine.',
    },
    {
      title: 'Development',
      text: 'We build fast, accessible, SEO-friendly sites with clean code and smooth interactions.',
    },
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08),transparent_60%)]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Process</h2>
          <p className="mt-3 text-slate-300">Collaborative, transparent, and built for results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_40px_rgba(59,130,246,0.15)]">
              <div className="absolute -top-3 -left-3 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                <span className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
