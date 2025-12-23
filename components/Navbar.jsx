export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold tracking-wide">Rajan</span>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}