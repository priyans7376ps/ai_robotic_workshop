import { useMemo, useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [track, setTrack] = useState('Perception + Planning')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const isValid = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(email.trim())
    return name.trim().length >= 2 && emailOk
  }, [name, email])

  async function onSubmit(e) {
    e.preventDefault()
    if (!isValid || loading) return

    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), track })
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || 'Registration failed')

      setMessage({ type: 'success', text: data?.message || 'Registered successfully!' })
      setName('')
      setEmail('')
      setTrack('Perception + Planning')
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="form" className="mt-12 scroll-mt-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
        <h2 className="text-2xl font-semibold">Register</h2>
        <p className="mt-2 text-gray-300">Send your details to reserve a seat.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-sm text-gray-300">Full name</span>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Priya Sharma"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-gray-300">Track</span>
            <select
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              value={track}
              onChange={(e) => setTrack(e.target.value)}
            >
              <option>Perception + Planning</option>
              <option>SLAM + Navigation</option>
              <option>Simulation to Real</option>
            </select>
          </label>

          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              {isValid ? 'Ready to submit.' : 'Enter a valid name and email to enable registration.'}
            </p>
            <button
              type="submit"
              disabled={!isValid || loading}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-gray-950 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Submitting…' : 'Register'}
            </button>
          </div>

          {message && (
            <div
              className={`md:col-span-2 rounded-xl border p-4 text-sm ${
                message.type === 'success'
                  ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
                  : 'border-rose-400/30 bg-rose-500/10 text-rose-100'
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

