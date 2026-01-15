
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: [t('projects.tags.resume'), t('projects.tags.optimization')],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
      link: '#',
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: [t('projects.tags.linkedin'), t('projects.tags.branding')],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400',
      link: '#',
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: [t('projects.tags.career'), t('projects.tags.mentoring')],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-700">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card overflow-hidden border-0 shadow-sm transition-all hover:shadow-md ${
                index === 0 ? 'md:col-span-12' : 'md:col-span-6'
              }`}
            >
              <div className={`grid grid-cols-1 ${index === 0 ? 'md:grid-cols-2' : ''}`}>
                <div className={`h-48 ${index === 0 ? 'md:h-full' : ''} overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-pastel-purple/10 text-pastel-purple-dark border-pastel-purple/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="heading text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="self-start text-pastel-purple hover:text-pastel-purple-dark hover:bg-pastel-purple/10"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="mr-2">{t('projects.viewDetails')}</span>
                      <ExternalLinkIcon size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
