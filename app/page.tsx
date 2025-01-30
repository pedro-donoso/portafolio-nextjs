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
     <h3>Lenguajes de Programación:</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Kotlin-Dark.svg"
       alt="Kotlin"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Kotlin"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Java-Dark.svg"
       alt="Java"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Java"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PHP-Dark.svg"
       alt="PHP"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="PHP"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg"
       alt="JavaScript"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="JavaScript"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Ruby.svg"
       alt="Ruby"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Ruby"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Matlab-Dark.svg"
       alt="Matlab"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Matlab"
      />
     </p>

     <h3>Desarrollo Frontend:</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg"
       alt="HTML"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="HTML"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg"
       alt="CSS"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="CSS"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg"
       alt="Bootstrap"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Bootstrap"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg"
       alt="Tailwind"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Tailwind"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Angular-Dark.svg"
       alt="Angular"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Angular"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg"
       alt="React"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="React"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/VueJS-Dark.svg"
       alt="Vue"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Vue"
      />
     </p>

     <h3>Desarrollo Backend:</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Rails.svg"
       alt="Rails"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Rails"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg"
       alt="Nodejs"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Nodejs"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg"
       alt="Express"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Express"
      />
     </p>

     <h3>Bases de Datos:</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PostgreSQL-Dark.svg"
       alt="PostgreSQL"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="PostgreSQL"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/SQLite.svg"
       alt="SQLite"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="SQLite"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg"
       alt="MongoDB"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="MongoDB"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg"
       alt="MySQL"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="MySQL"
      />
     </p>

     <h3>Platform as a Service (PaaS):</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Netlify-Dark.svg"
       alt="Netlify"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Netlify"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Vercel-Dark.svg"
       alt="Vercel"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Vercel"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Heroku.svg"
       alt="Heroku"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Heroku"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Firebase-Dark.svg"
       alt="Firebase"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Firebase"
      />
     </p>

     <h3>Platform as a Service (PaaS):</h3>
     <p className="ml-5 mb-5 text-justify mt-2">
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg"
       alt="Git"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="Git"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg"
       alt="GitHub"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="GitHub"
      />
      <img
       src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/GitLab-Dark.svg"
       alt="GitLab"
       className="inline w-8 h-8 mr-2 transition-transform duration-200 transform hover:scale-125"
       title="GitLab"
      />
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