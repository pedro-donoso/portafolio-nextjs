import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import React from 'react';

const Home: React.FC = () => {
  return (
   <main className="px-10 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <Header />
    <Experience />
    <Certificates />
	<Skills />


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