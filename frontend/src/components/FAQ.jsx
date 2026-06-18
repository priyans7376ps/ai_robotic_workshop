const faqs = [
  {
    q: 'Do I need prior robotics experience?',
    a: 'Basic programming helps. We focus on clear concepts and hands-on learning. Robotics fundamentals are introduced as needed.'
  },
  {
    q: 'What should I bring?',
    a: 'A laptop with Node.js installed is sufficient. The workshop includes guided setup and starter code.'
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes—completion certificate after attending sessions and submitting the final demo.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((item, idx) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition"
            open={idx === 0}
          >
            <summary className="cursor-pointer list-none text-base font-semibold">
              <span className="text-emerald-400">Q.</span> {item.q}
            </summary>
            <p className="mt-3 text-sm text-gray-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}



