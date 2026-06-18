const outcomes = [
  { title: 'AI basics', desc: 'Learn how AI works with real-world examples.', icon: '🤖' },
  { title: 'Robotics concepts', desc: 'Understand sensors, motors, and control basics.', icon: '🦾' },
  { title: 'Beginner projects', desc: 'Build starter-level programs that make robots move.', icon: '🧩' },
  { title: 'Logical thinking', desc: 'Improve problem-solving with step-by-step challenges.', icon: '🧠' },
  { title: 'Practical programming', desc: 'Practice coding patterns that scale from simple to advanced.', icon: '💡' }
]

export default function LearningOutcomes() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Learning Outcomes</h2>
      <p className="mt-2 text-gray-300">By the end of the workshop, you’ll be ready to build and demonstrate your own robot ideas.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{o.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{o.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

