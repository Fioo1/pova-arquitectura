import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
            Portafolio
          </p>

          <h3 className="text-5xl font-bold">Nuestros Proyectos</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg bg-white hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}