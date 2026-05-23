import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 text-center">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
            Portafolio
          </p>

          <h3 className="text-5xl font-bold">
            Nuestros Proyectos
          </h3>
        </div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              
              {/* TITULO */}
              <div className="p-10 text-center">
                <h3 className="text-4xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 max-w-3xl mx-auto leading-8">
                  {project.description}
                </p>
              </div>

              {/* COMPARACIONES */}
              <div className="grid gap-16 px-8 pb-12">
                
                {project.renders.map((render, i) => (
                  <div
                    key={i}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    
                    {/* RENDER */}
                    <div>
                      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-4">
                        Render
                      </p>

                      <img
                        src={render}
                        alt={`Render ${i + 1}`}
                        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                      />
                    </div>

                    {/* OBRA */}
                    <div>
                      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-4">
                        Obra Final
                      </p>

                      <img
                        src={project.obras[i]}
                        alt={`Obra ${i + 1}`}
                        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                      />
                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}