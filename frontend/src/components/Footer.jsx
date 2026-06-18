export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 py-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} AI & Robotics Summer Workshop</p>
        <div className="text-sm text-gray-400">Built with React + Tailwind</div>
      </div>
    </footer>
  )
}

