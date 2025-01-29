import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Topbar: React.FC = () => {
  return (
    <header className="bg-blue-800 shadow text-white">
      <nav className="max-w-5xl mx-auto p-4 flex justify-center items-center">
        <div className="space-x-4">
          <Link href="#perfil" className="text-white hover:text-yellow-500">Perfil</Link>
          <Link href="#experiencia" className="text-white hover:text-yellow-500">Experiencia</Link>
          <Link href="#formacion" className="text-white hover:text-yellow-500">Formación</Link>
          <Link href="#habilidades" className="text-white hover:text-yellow-500">Habilidades</Link>
          <Link href="#proyectos" className="text-white hover:text-yellow-500">Proyectos</Link>
		</div>
		<div className='flex items-center'>
			<Link href="https://www.linkedin.com/in/pedro-donoso-frontend/" target="_blank" className="text-white hover:text-yellow-500 items-center ml-4 text-xl">
            <FaLinkedin className='mr-1' /> {/* Icono de LinkedIn */}
          </Link>
		</div>
      </nav>
    </header>
  );
};

export default Topbar;