import Topbar from '@/components/Topbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
		<div className='bg-cyan-200 min-h-screen'>
			<Topbar />
			<main className='p-8 max-4 max-w-5xl mx-auto'>
				{children}
			</main>
		</div>
		</body>
    </html>
  );
}