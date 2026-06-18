export default function Outcomes() {
  const outcomes = [
    { label: 'Portfolio-ready demo', value: '1' },
    { label: 'Reusable interfaces', value: '5+' },
    { label: 'Evaluation metrics', value: '3' }
  ]

  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
        <h2 className="text-2xl font-semibold">Your outcomes</h2>
        <p className="mt-2 text-gray-300">
          Leave with a clear framework for building and assessing robot behaviors using AI-friendly patterns.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl font-semibold text-emerald-400">{o.value}</div>
              <div className="mt-1 text-sm text-gray-300">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

