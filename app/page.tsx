import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

const Home: React.FC = () => {
  return (
   <main className="px-10 py-10 mx-auto max-w-4xl bg-white rounded-lg shadow-md">
    <Header />
    <Experience />
    <Certificates />
	<Skills />


    
    <Projects />
   </main>
  );
};

export default Home;