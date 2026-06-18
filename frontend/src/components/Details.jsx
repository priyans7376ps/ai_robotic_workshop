export default function Details() {
  const cards = [
    {
      title: 'Perception',
      desc: 'Turn sensor streams into usable signals with robust preprocessing and interfaces.',
      icon: '👁️'
    },
    {
      title: 'Planning',
      desc: 'Compose behaviors into deterministic, testable flows with clear boundaries.',
      icon: '🧭'
    },
    {
      title: 'Control & Evaluation',
      desc: 'Measure success with lightweight metrics and rapid iteration loops.',
      icon: '⚙️'
    }
  ]

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Workshop structure</h2>
          <p className="mt-2 text-gray-300">A practical path from concept → prototype → demo.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="text-2xl">{c.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

