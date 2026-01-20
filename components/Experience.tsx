import React from "react";

const Experience: React.FC = () => {
  return (
    <section className="mt-5" id="experiencia" aria-labelledby="experiencia-title">
      <h2 id="experiencia-title" className="text-xl font-bold mb-4">
        Experiencia Laboral
      </h2>
      
      <article className="mb-8">
        <h3 className="mb-3 text-lg font-semibold underline decoration-2 underline-offset-4">
          Soporte SAP en <em>Lion Consulting</em> (2025)
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-justify ml-4">
          <li>
            Aprendizaje de ecosistema <strong>SAP Fiori, SAP Hana, SAP Integration Suite</strong> como consultor.
          </li>
          <li>
            Soporte mesa de ayuda para atender directamente al cliente y entregar solución a problemas.
          </li>
          <li>
            Documentación de procedimientos aprendidos en <strong>Soporte, Mesa de ayuda</strong>.
          </li>
          <li>
            Cumplimiento de solicitudes administrativas de gerencia.
          </li>
          <li>
            Participación en <strong>Capacitación y Cursos de formación</strong>.
          </li>
        </ul>
      </article>

      <article className="mb-8">
        <h3 className="mb-3 text-lg font-semibold underline decoration-2 underline-offset-4">
          Desarrollador en <em>Agencia Amigo Pyme</em> (2022-2024)
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-justify ml-4">
          <li>
            Desarrollo y mantenimiento de aplicaciones utilizando <strong>Kotlin Compose</strong> para asegurar un rendimiento óptimo y una experiencia de usuario fluida.
          </li>
          <li>
            Implementación de soluciones innovadoras en <strong>Angular 19</strong> para aplicaciones móviles multiplataforma de alta calidad.
          </li>
          <li>
            Administración y optimización de tiendas en línea con <strong>WooCommerce</strong>, mejorando la funcionalidad y la experiencia de compra.
          </li>
          <li>
            Integración de soluciones de pago seguras utilizando <strong>Flow</strong> y <strong>Transbank</strong>, garantizando transacciones confiables.
          </li>
        </ul>
      </article>

      <article className="mb-8">
        <h3 className="mb-3 text-lg font-semibold underline decoration-2 underline-offset-4">
          Desarrollador en <em>Desafío Latam</em> (2019-2021)
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-justify ml-4">
          <li>
            Creación y mantenimiento de aplicaciones en <strong>Java</strong> y <strong>PHP</strong>, asegurando la funcionalidad y escalabilidad de los sistemas.
          </li>
          <li>
            Desarrollo de aplicaciones móviles de alto rendimiento en <strong>Angular</strong> y <strong>React Native</strong>.
          </li>
          <li>
            Aplicación de <strong>Metodologías Ágiles</strong> con herramientas como GoodDay y BaseCamp para una planificación y ejecución eficiente de proyectos.
          </li>
          <li>
            Realización de pruebas exhaustivas y gestión de merges en <strong>GitLab</strong> para garantizar la compatibilidad y el rendimiento óptimo.
          </li>
          <li>
            Diseño de interfaces de usuario en <strong>Adobe XD</strong>, mejorando la experiencia del usuario.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;

