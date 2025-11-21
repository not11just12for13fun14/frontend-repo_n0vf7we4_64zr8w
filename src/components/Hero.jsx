import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.18),transparent_60%)]"></div>
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.35),transparent_60%)]"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-24 -left-20 w-[700px] h-[700px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.15),rgba(56,189,248,0.05),transparent_50%)] blur-3xl rounded-full"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-white/5 backdrop-blur-md px-3 py-1 text-xs text-sky-200 shadow-[0_0_25px_rgba(59,130,246,0.25)]">
            Elevate your digital presence
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Give Your Business the Website It Deserves
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
            We craft high-converting websites that turn visitors into clients — blending stunning visuals, strategic UX, and performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] transition-all">
              Contact Us
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sky-200 border border-white/15 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
