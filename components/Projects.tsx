import React from 'react'

function Projects() {
  const projects = [
    {
      title: "Estadísticas SuperHeroes",
      description:
        "Proyecto de Angular 19 que muestra cards con imagenes de Api de superheroes su nombre, emoji dependiendo si son heroes o villanos y estadisticas con botones que aumentan y disminuyen ",
      image:
        "https://private-user-images.githubusercontent.com/68760595/416071188-350138af-80c6-47a7-ae42-afbeee01a35b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAzNzQzNjksIm5iZiI6MTc0MDM3NDA2OSwicGF0aCI6Ii82ODc2MDU5NS80MTYwNzExODgtMzUwMTM4YWYtODBjNi00N2E3LWFlNDItYWZiZWVlMDFhMzViLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjI0VDA1MTQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFiZTNjYzBlZGYxNmFkYWRlNWY5NDI2NmY0OTBlZWI1OTBlMTZkYjQwYjI0YjcxMzA1OGRlYTI5ZThhYjYyOWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hmEcaKFMpb1QQzDvUu0Nqnuc_rraFtblJn1vKtfNiwQ",
      github: "https://github.com/pedro-donoso/angular-proyecto",
      demo: "https://angular19-proyecto.netlify.app/",
    },
    {
      title: "Proyecto 2",
      description:
        "Descripción breve del proyecto 2. Tecnologías utilizadas y objetivos alcanzados.",
      image: "https://via.placeholder.com/800x600?text=Proyecto+2",
      github: "https://github.com/pedro-donoso/project2",
      demo: "https://project2-demo.com",
    },
    {
      title: "Proyecto 3",
      description:
        "Descripción breve del proyecto 3. Tecnologías utilizadas y objetivos alcanzados.",
      image: "https://via.placeholder.com/800x600?text=Proyecto+3",
      github: "https://github.com/pedro-donoso/project3",
      demo: "https://project3-demo.com",
    },
  ];

  return (
    <section className="py-2 mt-2" id="proyectos">
      <h2 className="mb-2 text-xl font-semibold">Proyectos Destacados</h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-50">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-2 text-gray-600">{project.description}</p>
              <div className="flex space-x-2">
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

      <div className="mt-6 text-center">
        <p className="mb-2">Ver más proyectos en mi repositorio:</p>
        <a
          href="https://github.com/pedro-donoso"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-2 py-2 text-white bg-gray-800 rounded-lg transition-colors duration-300 hover:bg-gray-700"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Projects;