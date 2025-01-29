import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
		<div className='bg-cyan-200 min-h-screen'>
			<header className="bg-white shadow">
            <nav className="max-w-5xl mx-auto p-4 flex justify-between">
              <div className="text-lg font-bold">Mi Portafolio</div>
              <div className="space-x-4">
                <Link href="#perfil" className="text-gray-700 hover:text-blue-500">Perfil</Link>
                <Link href="#experiencia" className="text-gray-700 hover:text-blue-500">Experiencia</Link>
                <Link href="#formacion" className="text-gray-700 hover:text-blue-500">Formación</Link>
                <Link href="#habilidades" className="text-gray-700 hover:text-blue-500">Habilidades</Link>
                <Link href="#proyectos" className="text-gray-700 hover:text-blue-500">Proyectos</Link>
                <Link href="#redes" className="text-gray-700 hover:text-blue-500">Redes</Link>
              </div>
            </nav>
          </header>
			<main className='p-8 max-4 max-w-5xl mx-auto'>
				{children}
			</main>
		</div>
		</body>
    </html>
  );
}