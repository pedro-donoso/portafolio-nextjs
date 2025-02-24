import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import React from 'react';

const Home: React.FC = () => {
  return (
   <main className="px-10 py-10 mx-auto max-w-4xl bg-white rounded-lg shadow-md">
    <Header />
    <Experience />
    <Certificates />
	<Skills />


    <section className="mt-5" id="proyectos">
     <h2 className="mb-2 text-xl font-bold">Proyectos Destacados</h2>
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
     </ul>
    </section>
   </main>
  );
};

export default Home;