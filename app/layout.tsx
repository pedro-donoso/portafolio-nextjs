import Topbar from "@/components/Topbar";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="es">
   <body className="font-roboto">
    <div className="bg-cyan-200 min-h-screen">
     <Topbar />
     <main className="pb-10 max-4 max-w-5xl mx-auto">{children}</main>
    </div>
   </body>
  </html>
 );
}
