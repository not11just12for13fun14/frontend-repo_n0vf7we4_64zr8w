import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder submit - you can wire to backend later
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', phone: '', project: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell us about your project and goals. We’ll respond within one business day.</p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-white font-medium">hello@lubaweb.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-white font-medium">Remote • Worldwide</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(59,130,246,0.15)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Optional" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Project Description</label>
                <textarea required rows={5} value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell us about your goals, timeline and budget" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] transition-all">Send Message</button>
              {status && <p className="text-slate-300 text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
