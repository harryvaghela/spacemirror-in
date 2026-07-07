export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          SpaceMirror
        </h1>
<div className="hidden md:flex gap-8 text-white">
  <a href="#home" className="hover:text-amber-400 transition">
    Home
  </a>

  <a href="#collection" className="hover:text-amber-400 transition">
    Products
  </a>

  <a href="#about" className="hover:text-amber-400 transition">
    About
  </a>

  <a href="#gallery" className="hover:text-amber-400 transition">
    Gallery
  </a>

  <a href="#contact" className="hover:text-amber-400 transition">
    Contact
  </a>
</div>
</div>
    </nav>
  );
}