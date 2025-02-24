import React from 'react'

function Projects() {
  const projects = [
    {
      title: "Estadísticas SuperHeroes",
      description:
        "Cards con imagenes de Api de superheroes su nombre y...",
      github: "https://github.com/pedro-donoso/angular-proyecto",
      demo: "https://angular19-proyecto.netlify.app/",
    },
    {
      title: "Cursos Programación",
      description: "Repositorio de pruebas sobre cursos de programación...",
      github: "https://github.com/pedro-donoso/Cursos",
      demo: "https://developers-courses.netlify.app/",
    },
    {
      title: "Tarjetas Animales",
      description:
        "Permite al usuario elige un animal, los años y puede..",
      github: "https://github.com/pedro-donoso/animalada-salvajes",
      demo: "https://animales-tarjetas.netlify.app/",
    },
    {
      title: "Lista de Tareas",
      description:
        "TODO list en React JS, permite al usuario agregar nuevas...",
      github: "https://github.com/pedro-donoso/react",
      demo: "https://react-lista-de-tareas.netlify.app/",
    },
    {
      title: "Reserva de Horas",
      description:
        "El usuario puede agendar horas médicas mediante...",
      github: "https://github.com/pedro-donoso/formulario",
      demo: "https://reserva-horas.netlify.app/",
    },
    {
      title: "Carro de Compras",
      description:
        "El usuario puede ver productos agregados; con su ID, Nº...",
      github: "https://github.com/pedro-donoso/shopping-cart",
      demo: "https://carro-de-compras-en-react.netlify.app/",
    },
  ];

  return (
    <section className="py-4 mt-4" id="proyectos">
      <h2 className="mb-4 text-xl font-semibold">Proyectos Destacados</h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-50">
            </div>
            <div className="p-4">
              <h3 className="mb-4 font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-green-600 hover:text-green-800"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="mb-4">Ver más proyectos en mi repositorio:</p>
        <a
          href="https://github.com/pedro-donoso"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white bg-gray-800 rounded-lg transition-colors duration-300 hover:bg-gray-700"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Projects;