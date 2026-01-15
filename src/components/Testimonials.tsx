
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: t('testimonials.role1'),
      content: t('testimonials.content1'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 2,
      name: 'João Mendes',
      role: t('testimonials.role2'),
      content: t('testimonials.content2'),
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 3,
      name: 'Carolina Ferreira',
      role: t('testimonials.role3'),
      content: t('testimonials.content3'),
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-purple/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pastel-beige/30 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-700">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="glass-card border-0 shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
              <CardContent className="p-8 relative">
                <QuoteIcon className="absolute top-6 right-6 w-10 h-10 text-pastel-purple/20 rotate-180" />
                
                <div className="mb-6">
                  <p className="italic text-gray-700 relative z-10">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-pastel-purple/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-pastel-purple/20 text-pastel-purple-dark">
                      {testimonial.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
