import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { LanguageProvider } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        
        <footer className="py-10 bg-gradient-to-b from-white to-pastel-beige/30 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="heading text-xl font-semibold mb-2">Isabella Silva</h3>
                <p className="text-gray-600 text-sm">{new Date().getFullYear()} © All rights reserved</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex space-x-4 mb-4 md:mb-0 md:mr-8">
                  <a href="https://linkedin.com" className="text-pastel-purple-dark hover:text-pastel-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://instagram.com" className="text-pastel-purple-dark hover:text-pastel-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="mailto:contato@example.com" className="text-pastel-purple-dark hover:text-pastel-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                  <a href={`https://wa.me/5511989076773?text=${encodeURIComponent('Olá Isabella! Gostaria de saber mais sobre seus serviços de consultoria de carreira.')}`} target="_blank" rel="noopener noreferrer" className="text-pastel-purple-dark hover:text-pastel-purple transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M20.073 4.175A11.842 11.842 0 0 0 12.208 1c-3.095 0-6.007 1.201-8.195 3.413C1.852 6.6 0.667 9.478 0.652 12.529c-.001 2.207.584 4.39 1.691 6.292l-1.731 6.147c-.099.351.213.695.571.599l6.249-1.667a11.89 11.89 0 0 0 5.66 1.424h.005c6.54 0 11.864-5.33 11.864-11.884 0-3.165-1.227-6.152-3.453-8.404l-.435-.261zm-2.452 16.59A9.855 9.855 0 0 1 12.208 23h-.004a9.86 9.86 0 0 1-4.991-1.345l-.357-.214-3.705.982.998-3.569-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.01-5.463 4.464-9.91 9.942-9.91a9.865 9.865 0 0 1 7.022 2.909 9.88 9.88 0 0 1 2.909 7.022c0 5.468-4.456 9.923-9.928 9.923z" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-gray-600 text-sm">isabellasilvarh@hotmail.com</p>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pastel-purple text-white rounded-full p-3 shadow-md hover:bg-pastel-purple-dark transition-all transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </LanguageProvider>
  );
};

export default Index;
