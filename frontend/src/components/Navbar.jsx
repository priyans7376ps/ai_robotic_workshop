export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
            🤖
          </div>
          <div>
            <div className="text-sm font-semibold">AI & Robotics</div>
            <div className="text-xs text-gray-400">Summer Workshop</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-gray-300 hover:text-white" href="#details">Workshop Details</a>
          <a className="text-sm text-gray-300 hover:text-white" href="#outcomes">Learning Outcomes</a>
          <a className="text-sm text-gray-300 hover:text-white" href="#faq">FAQ</a>
          <a className="text-sm font-semibold text-emerald-300 hover:text-emerald-200" href="#registration">
            Enroll Now
          </a>
        </nav>
      </div>

    </header>
  )
}

