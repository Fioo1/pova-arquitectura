import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { projects } from "../data/projects"

export default function ProjectDetail() {

  const { id } = useParams()

  const project = projects.find(
    (p) => p.id === id
  )

  useEffect(() => {
	window.scrollTo({
		top: 0,
		behavior: "instant"
	})}, [])

  return (
    <section className="py-32 px-6 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto">
		<Link
			to="/#proyectos"
			className="inline-block mb-12 text-gray-600 hover:text-black transition"
		>
			← Volver a proyectos
		</Link>

        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            {project.description}
          </p>
        </div>

        <div className="space-y-20">

          {project.renders.map((render, index) => (

            <div
              key={index}
              className="grid md:grid-cols-2 gap-10"
            >

              <div>
                <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-4">
                  Render
                </p>

                <img
                  src={render}
                  alt=""
                  className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>

              <div>
                <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-4">
                  Obra Final
                </p>

                <img
                  src={project.obras[index]}
                  alt=""
                  className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}