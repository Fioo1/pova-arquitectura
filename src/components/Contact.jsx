export default function Contact() {
  return (
    <section id="contacto" className="py-28 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
          Contacto
        </p>

        <h3 className="text-5xl font-bold mb-8">
          Hagamos realidad tu proyecto
        </h3>

        <p className="text-gray-600 text-lg leading-8 mb-10">
          Contáctanos para asesorarte en diseño arquitectónico,
          remodelaciones y construcción.
        </p>

        <div className="flex justify-center flex-wrap gap-5">
          <a
            href="https://wa.me/51980420326?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20un%20proyecto%20arquitectónico%20y%20cotizar%20una%20propuesta."
            target="_blank"
            className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/pova_arquitecturayconstruccion/"
            target="_blank"
            className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}