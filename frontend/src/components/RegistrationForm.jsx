import { useMemo, useState } from 'react'

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(String(email).trim())
}

function normalizePhone(phone) {
  // Keep digits only
  return String(phone).replace(/\D/g, '')
}

function isValidPhone(phone) {
  const digits = normalizePhone(phone)
  // Simple validation: 10-13 digits common for India/international
  return digits.length >= 10 && digits.length <= 13
}

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const isValid = useMemo(() => {
    return name.trim().length > 1 && isValidEmail(email) && isValidPhone(phone)
  }, [name, email, phone])

  async function onSubmit(e) {
    e.preventDefault() 
    if (!isValid || loading) return

    setLoading(true)
    setToast(null)

    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: normalizePhone(phone) })
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success !== true) {
        throw new Error(data?.message || 'Submission failed')
      }

      setToast({ type: 'success', message: data.message || 'Enquiry submitted successfully' })
      setName('')
      setEmail('')
      setPhone('')
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Something went wrong' })
    } finally {
      setLoading(false)

      // Auto-dismiss toast
      setTimeout(() => setToast((t) => (t ? null : t)), 4500)
    }
  }

  return (
    <section id="registration" className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold">Registration Form</h2>
      <p className="mt-2 text-gray-300">Fill in your details and we’ll confirm your seat.</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>

          <label className="block md:col-span-1">
            <span className="text-sm text-gray-300">Name</span>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter child/guardian name"
              required
            />
          </label>

          <label className="block md:col-span-1">
            <span className="text-sm text-gray-300">Email</span>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-gray-300">Phone Number</span>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 9876543210"
              required
              inputMode="tel"
            />
          </label>

          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              {isValid
                ? 'All validations passed.'
                : 'Enter a valid name, email, and phone number (10-13 digits).'}
            </p>

            <button
              type="submit"
              disabled={!isValid || loading}
              className="rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-gray-950 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Submitting…' : 'Submit Enquiry'}
            </button>
          </div>

          {toast && (
            <div
              className={`md:col-span-2 rounded-2xl border p-4 text-sm ${
                toast.type === 'success'
                  ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
                  : 'border-rose-400/30 bg-rose-500/10 text-rose-100'
              }`}
            >
              {toast.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

