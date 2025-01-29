import React from 'react';

const Home: React.FC = () => {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Pedro Eduardo Donoso Ramírez</h1>
      <p>Desarrollador Full Stack | +56 9 5396 8887 | <a href="mailto:pedro.eduardo.donoso@gmail.com">pedro.eduardo.donoso@gmail.com</a></p>

      <section>
        <h2>Perfil Profesional</h2>
        <p>
          Desarrollador Full Stack con amplia experiencia en la creación y mantenimiento de aplicaciones web
          y móviles. Especializado en la optimización de sitios web y tiendas en línea, con sólidas habilidades
          en administración de bases de datos. Comprometido con las buenas prácticas de desarrollo y el
          código limpio, trabajo eficazmente en equipo utilizando metodologías ágiles para fomentar la
          innovación y la mejora continua en los procesos.
        </p>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <h3>Desarrollador en Agencia Amigo Pyme (2022-2024)</h3>
        <ul>
          <li>Desarrollo y mantenimiento de aplicaciones utilizando Kotlin Compose para asegurar un rendimiento óptimo y una experiencia de usuario fluida.</li>
          <li>Implementación de soluciones innovadoras en Angular 19 para aplicaciones móviles multiplataforma de alta calidad.</li>
          <li>Administración y optimización de tiendas en línea con WooCommerce, mejorando la funcionalidad y la experiencia de compra.</li>
          <li>Integración de soluciones de pago seguras utilizando Flow y Transbank, garantizando transacciones confiables.</li>
        </ul>

        <h3>Desarrollador en Desafío Latam (2019 - 2021)</h3>
        <ul>
          <li>Creación y mantenimiento de aplicaciones en Java y PHP, asegurando la funcionalidad y escalabilidad de los sistemas.</li>
          <li>Desarrollo de aplicaciones móviles de alto rendimiento en Angular y React Native.</li>
          <li>Aplicación de metodologías ágiles con herramientas como GoodDay y BaseCamp para una planificación y ejecución eficiente de proyectos.</li>
          <li>Realización de pruebas exhaustivas y gestión de merges en GitLab para garantizar la compatibilidad y el rendimiento óptimo.</li>
          <li>Diseño de interfaces de usuario en Adobe XD, mejorando la experiencia del usuario.</li>
        </ul>

        <h3>Desarrollador en CCS (2017 - 2019)</h3>
        <ul>
          <li>Creación de aplicaciones móviles en Angular y React Native, enfocándome en la optimización del rendimiento y la experiencia del usuario.</li>
          <li>Colaboración en el diseño de interfaces de usuario atractivas y funcionales, utilizando componentes reutilizables.</li>
          <li>Implementación de APIs y servicios externos para enriquecer la funcionalidad de las aplicaciones.</li>
          <li>Participación activa en reuniones de planificación y revisión de proyectos bajo metodologías ágiles (Scrum).</li>
        </ul>
      </section>

      <section>
        <h2>Formación</h2>
        <ul>
          <li>Bootcamp Desarrollo de Apps Móviles Android - Talento Digital (2024)</li>
          <li>Bootcamp Desarrollo Ruby on Rails para Startups - Talento Digital (2023)</li>
          <li>Bootcamp Desarrollo de Apps Full Stack JavaScript - Talento Digital (2021)</li>
          <li>Bootcamp Desarrollador Frontend con Vue - Talento Digital (2020)</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <h3>Lenguajes de Programación:</h3>
        <p>Kotlin, Java, PHP, JavaScript, Ruby on Rails, Matlab</p>
        <h3>Desarrollo Frontend:</h3>
        <p>HTML, CSS, Bootstrap, Tailwind, Angular, React, Vue, React Native</p>
        <h3>Desarrollo Backend:</h3>
        <p>Rails, Node.js, Express</p>
        <h3>Bases de Datos:</h3>
        < p>PostgreSQL, SQLite, MongoDB</p>
        <h3>Platform as a Service (PaaS):</h3>
        <p>Heroku, Netlify, Firebase</p>
        <h3>Control de Versiones:</h3>
        <p>Git, GitHub, GitLab</p>
      </section>

      <section>
        <h2>Proyectos Destacados</h2>
        <ul>
          <li>Repositorio de Códigos: <a href="https://github.com/tu_usuario" target="_blank">GitHub</a></li>
          <li>Portafolio de Proyectos: <a href="https://tu_portafolio.netlify.app" target="_blank">Netlify</a></li>
        </ul>
      </section>

      <section>
        <h2>Redes</h2>
        <p><a href="https://www.linkedin.com/in/tu_perfil" target="_blank">LinkedIn</a></p>
      </section>
    </main>
  );
};

export default Home;