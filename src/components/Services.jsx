const services = [
  "Diseño Arquitectónico",
  "Construcción",
  "Remodelaciones",
  "Diseño de Interiores",
  "Renderizados 3D",
  "Supervisión de Obras",
]

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-3">
          Servicios
        </p>

        <h3 className="text-5xl font-bold mb-16">
          Soluciones arquitectónicas integrales
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-3xl p-10 hover:bg-white hover:text-black transition duration-300"
            >
              <h4 className="text-2xl font-semibold">{service}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}