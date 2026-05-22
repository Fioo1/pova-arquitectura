export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
          alt="Arquitectura"
          className="rounded-3xl shadow-xl h-[500px] object-cover w-full"
        />

        <div>
          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
            Sobre nosotros
          </p>

          <h3 className="text-4xl font-bold mb-6 leading-tight">
            Creamos proyectos únicos con identidad y funcionalidad.
          </h3>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            En POVA Arquitectura y Construcción desarrollamos espacios
            modernos, elegantes y personalizados.
          </p>

          <p className="text-gray-600 leading-8 text-lg">
            Nuestro objetivo es transformar ideas en proyectos reales que
            combinen estética, comodidad y calidad constructiva.
          </p>
        </div>
      </div>
    </section>
  )
}