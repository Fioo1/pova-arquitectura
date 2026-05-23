import logo from "../assets/logo.jpg"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
			<img
				src={logo}
				alt="POVA Logo"
				className="w-12 h-12 object-contain"
			/>
			
			<h1 className="text-2xl font-bold tracking-wide">
				POVA Arquitectura
			</h1>
		</div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/#inicio" className="hover:text-gray-500 transition">
            Inicio
          </a>
		  
		<div className="relative group">
			<button className="hover:text-gray-500 transition">
				Nosotros
			</button>

			<div
				className="
					absolute
					left-0
					top-full
					pt-2
					opacity-0
					invisible
					group-hover:opacity-100
					group-hover:visible
					transition-all
					duration-300
					z-50
				"
  			>

				<div className="bg-white shadow-xl rounded-2xl p-6 w-64">
					<a
						href="/#nosotros"
						className="block py-3 hover:text-gray-500 transition"
					>
						¿Quiénes somos?
					</a>

					<a
						href="/#mision"
						className="block py-3 hover:text-gray-500 transition"
					>
						Nuestra misión
					</a>
				</div>
			</div>
		</div>

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