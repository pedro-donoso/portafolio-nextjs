import React from 'react';

const Home: React.FC = () => {
  return (
    <main className='px-10 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md'>
      <h1 className='text-xl font-bold mb-2 text-center'>PEDRO EDUARDO DONOSO RAMÍREZ</h1>
      <p className='mt-2 text-center'>Desarrollador Full Stack | 📱 <a href="https://wa.me/56953968887" className='text-blue-800'>+56 9 5396 8887</a>  | <a href="mailto:pedro.eduardo.donoso@gmail.com" className='text-blue-800'> 📧 pedro.eduardo.donoso@gmail.com</a></p>

      <section className='mt-5' id='perfil'>
        <h2 className='text-xl font-bold mb-2'>Perfil Profesional</h2>
        <p className='text-justify'>
          Desarrollador Full Stack con amplia experiencia en la creación y mantenimiento de aplicaciones web
          y móviles. Especializado en la optimización de sitios web y tiendas en línea, con sólidas habilidades
          en administración de bases de datos. Comprometido con las buenas prácticas de desarrollo y el
          código limpio, trabajo eficazmente en equipo utilizando metodologías ágiles para fomentar la
          innovación y la mejora continua en los procesos.
        </p>
      </section>

      <section className='mt-5' id='experiencia'>
        <h2 className='text-xl font-bold mb-2'>Experiencia Laboral</h2>
        <h3 className='mb-2 underline'>Desarrollador en <i>Agencia Amigo Pyme</i> (2022-2024)</h3>
        <ul className='list-disc list-inside ml-5 mb-5 text-justify'>
          <li>Desarrollo y mantenimiento de aplicaciones utilizando <strong>Kotlin Compose</strong> para asegurar un rendimiento óptimo y una experiencia de usuario fluida.</li>
          <li>Implementación de soluciones innovadoras en <strong>Angular 19</strong> para aplicaciones móviles multiplataforma de alta calidad.</li>
          <li>Administración y optimización de tiendas en línea con <strong>WooCommerce</strong>, mejorando la funcionalidad y la experiencia de compra.</li>
          <li>Integración de soluciones de pago seguras utilizando <strong>Flow</strong> y <strong>Transbank</strong>, garantizando transacciones confiables.</li>
        </ul>

        <h3 className='mb-2 underline'>Desarrollador en <i>Desafío Latam</i> (2019 - 2021)</h3>
        <ul className='list-disc list-inside ml-5 mb-5 text-justify'>
          <li>Creación y mantenimiento de aplicaciones en <strong>Java</strong> y <strong>PHP</strong>, asegurando la funcionalidad y escalabilidad de los sistemas.</li>
          <li>Desarrollo de aplicaciones móviles de alto rendimiento en <strong>Angular </strong> y <strong>React Native</strong>.</li>
          <li>Aplicación de <strong>Metodologías Ágiles</strong> con herramientas como GoodDay y BaseCamp para una planificación y ejecución eficiente de proyectos.</li>
          <li>Realización de pruebas exhaustivas y gestión de merges en <strong>GitLab</strong> para garantizar la compatibilidad y el rendimiento óptimo.</li>
          <li>Diseño de interfaces de usuario en <strong>Adobe XD</strong>, mejorando la experiencia del usuario.</li>
        </ul>

        <h3 className='mb-2 underline'>Desarrollador en <i>CCS</i> (2017 - 2019)</h3>
        <ul className='list-disc list-inside ml-5 mb-5 text-justify'>
          <li>Creación de aplicaciones móviles en <strong>Angular</strong> y <strong>React Native</strong>, enfocándome en la optimización del rendimiento y la experiencia del usuario.</li>
          <li>Colaboración en el diseño de interfaces de usuario atractivas y funcionales, utilizando <strong>componentes</strong> reutilizables.</li>
          <li>Implementación de <strong>APIs</strong> y servicios externos para enriquecer la funcionalidad de las aplicaciones.</li>
          <li>Participación activa en reuniones de <strong>planificación</strong> y revisión de proyectos bajo metodologías ágiles (Scrum).</li>
        </ul>
      </section>

      <section className='mt-5' id='formacion'>
        <h2 className='text-xl font-bold mb-2'>Formación</h2>
        <ul className='list-disc list-inside ml-5 mb-5 text-justify'>
          <li>Bootcamp Desarrollo de Apps Móviles Android - Talento Digital (2024)</li>
          <li>Bootcamp Desarrollo Ruby on Rails para Startups - Talento Digital (2023)</li>
          <li>Bootcamp Desarrollo de Apps Full Stack JavaScript - Talento Digital (2021)</li>
          <li>Bootcamp Desarrollador Frontend con Vue - Talento Digital (2020)</li>
        </ul>
      </section>

      <section className='mt-5' id='habilidades'>
        <h2 className='text-xl font-bold mb-2'>Habilidades</h2>
        <h3 className='underline'>Lenguajes de Programación:</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>Kotlin, Java, PHP, JavaScript, Ruby on Rails, Matlab</p>
        <h3>Desarrollo Frontend:</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>HTML, CSS, Bootstrap, Tailwind, Angular, React, Vue, React Native</p>
        <h3>Desarrollo Backend:</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>Rails, Node.js, Express</p>
        <h3>Bases de Datos:</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>PostgreSQL, SQLite, MongoDB</p>
        <h3>Platform as a Service (PaaS):</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>Heroku, Netlify, Firebase</p>
        <h3>Control de Versiones:</h3>
        <p className='list-disc list-inside ml-5 mb-5 text-justify'>Git, GitHub, GitLab</p>
      </section>

      <section className='mt-5' id='proyectos'>
        <h2 className='text-xl font-bold mb-2'>Proyectos Destacados</h2>
        <ul>
          <li>Repositorio de Códigos: <a href="https://github.com/pedro-donoso" target="_blank" className='text-blue-800 underline'>GitHub</a></li>
          <li>Portafolio de Proyectos: <a href="https://app.netlify.com/teams/pedro-donoso/sites" target="_blank" className='text-blue-800 underline'>Netlify</a></li>
        </ul>
      </section>

      <section className='mt-5' id='redes'>
        <h2 className='text-xl font-bold mb-2'>Redes</h2>
        <p><a href="https://www.linkedin.com/in/pedro-donoso-frontend/" target="_blank" className='text-blue-800 underline'>LinkedIn</a></p>
      </section>
    </main>
  );
};

export default Home;