export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          POVA Arquitectura
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/#inicio" className="hover:text-gray-500 transition">
            Inicio
          </a>

          <a href="/#nosotros" className="hover:text-gray-500 transition">
            Nosotros
          </a>

          <a href="/#proyectos" className="hover:text-gray-500 transition">
            Proyectos
          </a>

          <a href="/#servicios" className="hover:text-gray-500 transition">
            Servicios
          </a>

          <a href="/#contacto" className="hover:text-gray-500 transition">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}