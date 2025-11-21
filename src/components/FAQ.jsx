import { useState } from 'react'

function FAQ() {
  const items = [
    { q: 'How long does a typical project take?', a: 'Most websites are designed and launched within 4–8 weeks depending on scope and complexity.' },
    { q: 'Do you offer ongoing support?', a: 'Yes. We provide maintenance, performance monitoring, and continuous optimization plans.' },
    { q: 'What is your pricing model?', a: 'We offer fixed-scope packages and custom proposals based on deliverables and timelines.' },
    { q: 'Will my site be SEO-friendly?', a: 'Absolutely. Technical SEO, speed, accessibility, and best practices are baked in from day one.' },
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
          <p className="mt-3 text-slate-300">Answers to common questions.</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {items.map((item, i) => (
            <div key={i} className="p-6">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-medium">{item.q}</span>
                <span className="ml-4 text-sky-300">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <p className="mt-3 text-slate-300 text-sm">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
