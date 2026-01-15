import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Flower, Sparkles, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="glass-card p-8 w-full max-w-sm transform transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px]">
            <div className="relative mb-6 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple/40 to-pastel-purple/10 rounded-full transform scale-[0.97] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-pastel-purple/50 mx-auto relative z-10">
                <img
                  src="/profile.jpeg"
                  alt={t('hero.name')}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-pastel-purple/20 z-0 animate-pulse-slow"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-pastel-purple/20 z-0 animate-pulse-slow" style={{animationDelay: '-2s'}}></div>
            </div>
            
            <div className="text-center">
              <h2 className="heading text-3xl font-semibold mb-1 bg-gradient-to-r from-pastel-purple-dark to-pastel-purple bg-clip-text text-transparent">{t('hero.name')}</h2>
              <p className="text-pastel-purple-dark font-medium">{t('hero.title')}</p>
            </div>
            
            {/* New badges section */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pastel-purple/20 text-pastel-purple-dark">
                <Star className="w-3 h-3 mr-1" /> {t('hero.badge1')}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pastel-purple/20 text-pastel-purple-dark">
                <Flower className="w-3 h-3 mr-1" /> {t('hero.badge2')}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pastel-purple/20 text-pastel-purple-dark">
                <Sparkles className="w-3 h-3 mr-1" /> {t('hero.badge3')}
              </span>
            </div>
            
            <div className="mt-6 pt-6 border-t border-pastel-purple/20">
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/isabelladasilvarh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pastel-purple hover:text-pastel-purple-dark transition-colors transform hover:scale-110 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a 
                  href="mailto:isabellasilvarh@hotmail.com" 
                  className="text-pastel-purple hover:text-pastel-purple-dark transition-colors transform hover:scale-110 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/isabellasilvarh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pastel-purple hover:text-pastel-purple-dark transition-colors transform hover:scale-110 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href={`https://wa.me/5511989076773?text=${encodeURIComponent(t('whatsapp.message'))}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pastel-purple hover:text-pastel-purple-dark transition-colors transform hover:scale-110 p-2"
                  aria-label={t('whatsapp.contact')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.073 4.175A11.842 11.842 0 0 0 12.208 1c-3.095 0-6.007 1.201-8.195 3.413C1.852 6.6 0.667 9.478 0.652 12.529c-.001 2.207.584 4.39 1.691 6.292l-1.731 6.147c-.099.351.213.695.571.599l6.249-1.667a11.89 11.89 0 0 0 5.66 1.424h.005c6.54 0 11.864-5.33 11.864-11.884 0-3.165-1.227-6.152-3.453-8.404l-.435-.261zm-2.452 16.59A9.855 9.855 0 0 1 12.208 23h-.004a9.86 9.86 0 0 1-4.991-1.345l-.357-.214-3.705.982.998-3.569-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.01-5.463 4.464-9.91 9.942-9.91a9.865 9.865 0 0 1 7.022 2.909 9.88 9.88 0 0 1 2.909 7.022c0 5.468-4.456 9.923-9.928 9.923z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 animate-fade-in">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-pastel-purple/10 text-pastel-purple-dark border border-pastel-purple/20">
              <p className="text-sm font-medium">
                {t('hero.title')}
              </p>
            </div>
            <h1 className="heading text-4xl md:text-5xl font-bold mb-6 relative">
              {t('hero.name')}
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-pastel-purple rounded-full"></span>
            </h1>
            
            {/* Enhanced bio with more details */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                {t('hero.bio')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('hero.bio2')}
              </p>
              
              {/* New detailed bio sections */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pastel-purple/30 flex items-center justify-center mt-0.5">
                    <Sparkles className="w-4 h-4 text-pastel-purple-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-pastel-purple-dark">{t('hero.expertise.title')}</h3>
                    <p className="mt-1">{t('hero.expertise.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pastel-purple/30 flex items-center justify-center mt-0.5">
                    <Star className="w-4 h-4 text-pastel-purple-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-pastel-purple-dark">{t('hero.approach.title')}</h3>
                    <p className="mt-1">{t('hero.approach.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pastel-purple/30 flex items-center justify-center mt-0.5">
                    <Flower className="w-4 h-4 text-pastel-purple-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-pastel-purple-dark">{t('hero.background.title')}</h3>
                    <p className="mt-1">{t('hero.background.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                className="bg-pastel-purple hover:bg-pastel-purple-dark text-white rounded-full px-6 transform transition-all duration-300 hover:shadow-md hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta')}
              </Button>
              <Button 
                variant="outline" 
                className="border-pastel-purple text-pastel-purple hover:bg-pastel-purple/10 rounded-full px-6 transform transition-all duration-300 hover:shadow-md hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16 relative z-10">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-float text-pastel-purple hover:text-pastel-purple-dark transition-colors"
          aria-label="Scroll to services"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
