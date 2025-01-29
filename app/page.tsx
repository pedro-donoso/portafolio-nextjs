import Header from '@/components/Header';
import React from 'react';

const Home: React.FC = () => {
  return (
   <main className="px-10 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <Header />

    <section className="mt-5" id="experiencia">
     <h2 className="text-xl font-bold mb-2">Experiencia Laboral</h2>
     <h3 className="mb-2 underline">
      Desarrollador en <i>Agencia Amigo Pyme</i> (2022-2024)
     </h3>
     <ul className="list-disc list-inside ml-5 mb-5 text-justify">
      <li>
       Desarrollo y mantenimiento de aplicaciones utilizando{" "}
       <strong>Kotlin Compose</strong> para asegurar un rendimiento óptimo y una
       experiencia de usuario fluida.
      </li>
      <li>
       Implementación de soluciones innovadoras en <strong>Angular 19</strong>{" "}
       para aplicaciones móviles multiplataforma de alta calidad.
      </li>
      <li>
       Administración y optimización de tiendas en línea con{" "}
       <strong>WooCommerce</strong>, mejorando la funcionalidad y la experiencia
       de compra.
      </li>
      <li>
       Integración de soluciones de pago seguras utilizando{" "}
       <strong>Flow</strong> y <strong>Transbank</strong>, garantizando
       transacciones confiables.
      </li>
     </ul>

     <h3 className="mb-2 underline">
      Desarrollador en <i>Desafío Latam</i> (2019 - 2021)
     </h3>
     <ul className="list-disc list-inside ml-5 mb-5 text-justify">
      <li>
       Creación y mantenimiento de aplicaciones en <strong>Java</strong> y{" "}
       <strong>PHP</strong>, asegurando la funcionalidad y escalabilidad de los
       sistemas.
      </li>
      <li>
       Desarrollo de aplicaciones móviles de alto rendimiento en{" "}
       <strong>Angular </strong> y <strong>React Native</strong>.
      </li>
      <li>
       Aplicación de <strong>Metodologías Ágiles</strong> con herramientas como
       GoodDay y BaseCamp para una planificación y ejecución eficiente de
       proyectos.
      </li>
      <li>
       Realización de pruebas exhaustivas y gestión de merges en{" "}
       <strong>GitLab</strong> para garantizar la compatibilidad y el
       rendimiento óptimo.
      </li>
      <li>
       Diseño de interfaces de usuario en <strong>Adobe XD</strong>, mejorando
       la experiencia del usuario.
      </li>
     </ul>

     <h3 className="mb-2 underline">
      Desarrollador en <i>CCS</i> (2017 - 2019)
     </h3>
     <ul className="list-disc list-inside ml-5 mb-5 text-justify">
      <li>
       Creación de aplicaciones móviles en <strong>Angular</strong> y{" "}
       <strong>React Native</strong>, enfocándome en la optimización del
       rendimiento y la experiencia del usuario.
      </li>
      <li>
       Colaboración en el diseño de interfaces de usuario atractivas y
       funcionales, utilizando <strong>componentes</strong> reutilizables.
      </li>
      <li>
       Implementación de <strong>APIs</strong> y servicios externos para
       enriquecer la funcionalidad de las aplicaciones.
      </li>
      <li>
       Participación activa en reuniones de <strong>planificación</strong> y
       revisión de proyectos bajo metodologías ágiles (Scrum).
      </li>
     </ul>
    </section>

    <section className="mt-5" id="formacion">
     <h2 className="text-xl font-bold mb-2">Certificaciones</h2>
     <ul className="list-disc list-inside ml-5 mb-5 text-justify">
      <li>
       <a
        href="https://drive.google.com/file/d/13R10YuwLjLOfk9wHSwEvkfS0Dwas5xAn/view?usp=sharing"
        target="_blank"
        className="text-blue-800 underline"
       >
        Bootcamp Desarrollo de Apps Móviles Android - Talento Digital (2024)
       </a>
      </li>
      <li>
       <a
        href="https://www.acreditta.com/credential/18a72075-9c30-400c-85a4-20c9e84da025?utm_source=copy&resource_type=badge&resource=18a72075-9c30-400c-85a4-20c9e84da025"
        target="_blank"
        className="text-blue-800 underline"
       >
        Bootcamp Desarrollo Ruby on Rails para Startups - Talento Digital (2023)
       </a>
      </li>
      <li>
       <a
        href="https://www.credly.com/badges/d90a5f3d-dbd6-4242-b760-8236a9f44b5d?source=linked_in_profile"
        target="_blank"
        className="text-blue-800 underline"
       >
        Bootcamp Desarrollo de Apps Full Stack JavaScript - Talento Digital
        (2021)
       </a>
      </li>

      <li>
       <a
        href="https://user-images.githubusercontent.com/68760595/144440117-31e060f7-a684-49dd-81d4-e4839b7756c1.jpeg"
        target="_blank"
        className="text-blue-800 underline"
       >
        Bootcamp Desarrollador Frontend con Vue - Talento Digital (2020)
       </a>
      </li>
     </ul>
    </section>

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