// Header.tsx
import React from "react";

const Header: React.FC = () => {
 return (
  <header>
   <h1 className="text-xl font-bold mb-2 text-center">
    PEDRO EDUARDO DONOSO RAMÍREZ
   </h1>
   <p className="mt-2 text-center">
    Desarrollador Full Stack | 📱{" "}
    <a href="https://wa.me/56953968887" className="text-blue-800">
     +56 9 5396 8887
    </a>{" "}
    |{" "}
    <a href="mailto:pedro.eduardo.donoso@gmail.com" className="text-blue-800">
     📧 pedro.eduardo.donoso@gmail.com
    </a>
   </p>

   <section className="mt-5" id="perfil">
    <h2 className="text-xl font-bold mb-2">Perfil Profesional</h2>
    <p className="text-justify">
     Desarrollador Full Stack con amplia experiencia en la creación y
     mantenimiento de aplicaciones web y móviles. Especializado en la
     optimización de sitios web y tiendas en línea, con sólidas habilidades en
     administración de bases de datos. Comprometido con las buenas prácticas de
     desarrollo y el código limpio, trabajo eficazmente en equipo utilizando
     metodologías ágiles para fomentar la innovación y la mejora continua en los
     procesos.
    </p>
   </section>
  </header>
 );
};

export default Header;
