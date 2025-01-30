import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import React from 'react';

const Home: React.FC = () => {
  return (
   <main className="px-10 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <Header />
	<Experience />
	<Certificates />

    <section className="mt-5" id="habilidades">
     <h2 className="text-xl font-bold mb-2">Habilidades</h2>
     <h3 className="underline">Lenguajes de Programación:</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      Kotlin, Java, PHP, JavaScript, Ruby on Rails, Matlab
     </p>
     <h3 className="underline">Desarrollo Frontend:</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      HTML, CSS, Bootstrap, Tailwind, Angular, React, Vue, React Native
     </p>
     <h3 className="underline">Desarrollo Backend:</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      Rails, Node.js, Express
     </p>
     <h3 className="underline">Bases de Datos:</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      PostgreSQL, SQLite, MongoDB
     </p>
     <h3 className="underline">Platform as a Service (PaaS):</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      Netlify, Vercel, Heroku, Firebase
     </p>
     <h3 className="underline">Control de Versiones:</h3>
     <p className="list-disc list-inside ml-5 mb-5 text-justify">
      Git, GitHub, GitLab
     </p>
    </section>

    <section className="mt-5" id="proyectos">
     <h2 className="text-xl font-bold mb-2">Proyectos Destacados</h2>
     <ul>
      <li>
       Repositorio de Códigos:{" "}
       <a
        href="https://github.com/pedro-donoso"
        target="_blank"
        className="text-blue-800 underline"
       >
        GitHub
       </a>
      </li>
      <li>
       Portafolio de Proyectos:{" "}
       <a
        href="https://app.netlify.com/teams/pedro-donoso/sites"
        target="_blank"
        className="text-blue-800 underline"
       >
        Netlify
       </a>
      </li>
      <li>
       Proyectos Deploys:{" "}
       <a
        href="https://vercel.com/pedrodonosos-projects"
        target="_blank"
        className="text-blue-800 underline"
       >
        Vercel
       </a>
      </li>
     </ul>
    </section>
   </main>
  );
};

export default Home;