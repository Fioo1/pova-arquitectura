export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-8 text-white">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Diseñamos espacios que inspiran.
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Arquitectura y construcción moderna enfocada en estética,
          funcionalidad y calidad.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#proyectos"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Ver proyectos
          </a>

          <a
            href="https://www.instagram.com/pova_arquitecturayconstruccion/"
            target="_blank"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}