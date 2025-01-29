import Link from 'next/link';

const Topbar: React.FC = () => {
  return (
    <header className="bg-blue-800 shadow text-white">
      <nav className="max-w-5xl mx-auto p-4 flex justify-center">
        <div className="space-x-4">
          <Link href="#perfil" className="text-white hover:text-yellow-500">Perfil</Link>
          <Link href="#experiencia" className="text-white hover:text-yellow-500">Experiencia</Link>
          <Link href="#formacion" className="text-white hover:text-yellow-500">Formación</Link>
          <Link href="#habilidades" className="text-white hover:text-yellow-500">Habilidades</Link>
          <Link href="#proyectos" className="text-white hover:text-yellow-500">Proyectos</Link>
          <Link href="#redes" className="text-white hover:text-yellow-500">Redes</Link>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;