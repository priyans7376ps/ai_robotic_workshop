const details = [
  { label: 'Age Group', value: '8-14 Years', icon: '🧒' },
  { label: 'Duration', value: '4 Weeks', icon: '⏳' },
  { label: 'Mode', value: 'Online', icon: '💻' },
  { label: 'Fee', value: '₹2,999', icon: '🎟️' },
  { label: 'Start Date', value: '15 July 2026', icon: '📅' }
]

export default function WorkshopDetails() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Workshop Details</h2>
      <p className="mt-2 text-gray-300">Everything you need to know before you enroll.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((d) => (
          <div
            key={d.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(16,185,129,0.06)]"
          >
            <div className="text-2xl">{d.icon}</div>
            <div className="mt-3 text-sm text-gray-400">{d.label}</div>
            <div className="mt-1 text-lg font-semibold text-gray-100">{d.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

