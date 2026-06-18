export default function Hero() {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Hands-on workshop • Robotics + AI
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          AI & Robotics Summer Workshop
        </h1>
        <p className="mt-4 max-w-prose text-gray-300">
          A fun, friendly way for children to learn how AI and robotics work together—build projects, solve challenges,
          and bring ideas to life.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#registration"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-gray-950 hover:bg-emerald-400"
          >
            Enroll Now
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-white/10"
          >
            View FAQ
          </a>
        </div>

      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-500/20 blur-2xl" />

        <div className="relative">
          <h2 className="text-lg font-semibold">What you’ll create</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Perception module using classical + ML-friendly interfaces
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
              Behavior planner and evaluation loop
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
              Demo-ready integration with clean APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

