export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
          Portfolio
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="home"
            className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors"
          >
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="about"
            className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="skills"
            className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors"
          >
            SKILLS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="project"
            className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors"
          >
            PROJECT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </nav>
  );
}