
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'resume',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
      ),
      titleKey: 'services.resume.title',
      descKey: 'services.resume.desc',
    },
    {
      id: 'mentoring',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
      ),
      titleKey: 'services.mentoring.title',
      descKey: 'services.mentoring.desc',
    },
    {
      id: 'linkedin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      ),
      titleKey: 'services.linkedin.title',
      descKey: 'services.linkedin.desc',
    },
    {
      id: 'interview',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      titleKey: 'services.interview.title',
      descKey: 'services.interview.desc',
      fullWidth: true,
    },
    {
      id: 'transition',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
      ),
      titleKey: 'services.transition.title',
      descKey: 'services.transition.desc',
      fullWidth: true,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-pastel-beige/30 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-beige/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-700">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <Card 
              key={service.id} 
              className="service-card flex flex-col h-full border-0 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-pastel-purple-dark mb-5 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="service-card-title">{t(service.titleKey)}</h3>
              <p className="text-gray-700">{t(service.descKey)}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(3).map((service) => (
            <Card 
              key={service.id} 
              className="service-card flex flex-col h-full border-0 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-pastel-purple-dark mb-5 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="service-card-title">{t(service.titleKey)}</h3>
              <p className="text-gray-700">{t(service.descKey)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
