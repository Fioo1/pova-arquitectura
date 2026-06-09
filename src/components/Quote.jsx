export default function Quote() {
  return (
    <section className="py-28 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-3">
          Cotización
        </p>

        <h2 className="text-5xl font-bold mb-8">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="text-lg text-gray-300 leading-8 mb-10">
          Solicita una cotización personalizada y recibe asesoría para
          transformar tus ideas en espacios funcionales, modernos y
          adaptados a tus necesidades.
        </p>

        <a
          href="https://wa.me/51999999999?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20arquitect%C3%B3nico."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Solicitar Cotización
        </a>

      </div>
    </section>
  )
}