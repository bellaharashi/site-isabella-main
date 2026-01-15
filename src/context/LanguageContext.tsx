import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

type TranslationsType = {
  [key: string]: {
    pt: string;
    en: string;
  };
};

const translations: TranslationsType = {
  // Navbar
  'nav.name': {
    pt: 'Isabella Silva',
    en: 'Isabella Silva',
  },
  'nav.about': {
    pt: 'Sobre mim',
    en: 'About me',
  },
  'nav.services': {
    pt: 'Serviços',
    en: 'Services',
  },
  'nav.contact': {
    pt: 'Contato',
    en: 'Contact',
  },
  
  // Hero
  'hero.name': {
    pt: 'Isabella Silva',
    en: 'Isabella Silva',
  },
  'hero.title': {
    pt: 'Mentora de Carreira',
    en: 'Career Mentor',
  },
  'hero.bio': {
    pt: 'Ajudo profissionais a impulsionarem suas carreiras com estratégias personalizadas e eficazes para o mercado atual.',
    en: 'I help professionals boost their careers with personalized strategies that are effective in today\'s market.',
  },
  'hero.bio2': {
    pt: 'Com mais de 4 anos de experiência em recrutamento e desenvolvimento profissional na área de tecnologia, trago uma abordagem humanizada e resultados comprovados.',
    en: 'With over 4 years of experience in recruitment and professional development in technology, I bring a humanized approach and proven results.',
  },
  'hero.cta': {
    pt: 'Ver serviços',
    en: 'View services',
  },
  'hero.contact': {
    pt: 'Fale comigo',
    en: 'Contact me',
  },
  'hero.badge1': {
    pt: 'Certificada',
    en: 'Certified',
  },
  'hero.badge2': {
    pt: 'Personalizado',
    en: 'Personalized',
  },
  'hero.badge3': {
    pt: 'Resultados',
    en: 'Results',
  },
  'hero.expertise.title': {
    pt: 'Especialização',
    en: 'Expertise',
  },
  'hero.expertise.description': {
    pt: 'Especialista em transições de carreira para área tech, posicionamento profissional e estratégias para processos seletivos em programação, desenvolvimento de software e áreas correlatas.',
    en: 'Specialist in tech career transitions, professional positioning, and strategies for selection processes in programming, software development, and related areas.',
  },
  'hero.approach.title': {
    pt: 'Minha Abordagem',
    en: 'My Approach',
  },
  'hero.approach.description': {
    pt: 'Acredito que cada trajetória profissional é única. Por isso, desenvolvo estratégias personalizadas que consideram seus objetivos, valores e potencialidades individuais.',
    en: 'I believe each professional trajectory is unique. That\'s why I develop personalized strategies that consider your individual goals, values, and potential.',
  },
  'hero.background.title': {
    pt: 'Experiência',
    en: 'Background',
  },
  'hero.background.description': {
    pt: 'Formada em Recursos Humanos na Universidade Santo Amaro com especialização em Gestão de Pessoas e certificações em Career Coaching.',
    en: 'Graduated in Human Resources at Santo Amaro University with specialization in People Management and Career Coaching certifications.',
  },
  
  // Services
  'services.title': {
    pt: 'Solução para Você',
    en: 'Solution for You',
  },
  'services.subtitle': {
    pt: 'Serviços personalizados para impulsionar sua carreira',
    en: 'Personalized services to boost your career',
  },
  'services.resume.title': {
    pt: 'Reformulação de currículo',
    en: 'Resume Makeover',
  },
  'services.resume.desc': {
    pt: 'Transforme seu currículo em uma ferramenta poderosa para atrair recrutadores e destacar suas competências.',
    en: 'Transform your resume into a powerful tool to attract recruiters and highlight your skills.',
  },
  'services.mentoring.title': {
    pt: 'Mentoria de carreira',
    en: 'Career Mentoring',
  },
  'services.mentoring.desc': {
    pt: 'Sessões personalizadas para definir objetivos, estratégias e planos de ação para sua trajetória profissional.',
    en: 'Personalized sessions to define goals, strategies, and action plans for your professional journey.',
  },
  'services.linkedin.title': {
    pt: 'LinkedIn estratégico',
    en: 'Strategic LinkedIn',
  },
  'services.linkedin.desc': {
    pt: 'Otimização do seu perfil para aumentar visibilidade, atrair oportunidades e construir sua marca pessoal.',
    en: 'Profile optimization to increase visibility, attract opportunities, and build your personal brand.',
  },
  'services.interview.title': {
    pt: 'Preparação para entrevistas',
    en: 'Interview Preparation',
  },
  'services.interview.desc': {
    pt: 'Simulações de entrevistas, feedback construtivo e técnicas para se destacar nos processos seletivos.',
    en: 'Interview simulations, constructive feedback, and techniques to stand out in selection processes.',
  },
  'services.transition.title': {
    pt: 'Transição de carreira',
    en: 'Career Transition',
  },
  'services.transition.desc': {
    pt: 'Orientação para identificar novas oportunidades, transferir habilidades e se reposicionar no mercado.',
    en: 'Guidance to identify new opportunities, transfer skills, and reposition yourself in the market.',
  },
  
  // Contact
  'contact.title': {
    pt: 'Entre em Contato',
    en: 'Get in Touch',
  },
  'contact.subtitle': {
    pt: 'Vamos conversar sobre como posso ajudar você',
    en: 'Let\'s talk about how I can help you',
  },
  'contact.name': {
    pt: 'Seu nome',
    en: 'Your name',
  },
  'contact.email': {
    pt: 'E-mail',
    en: 'Email',
  },
  'contact.email.cta': {
    pt: 'Enviar e-mail',
    en: 'Send email',
  },
  'contact.message': {
    pt: 'Sua mensagem',
    en: 'Your message',
  },
  'contact.submit': {
    pt: 'Enviar mensagem',
    en: 'Send message',
  },
  'contact.sending': {
    pt: 'Enviando...',
    en: 'Sending...',
  },
  'contact.success': {
    pt: 'Mensagem enviada com sucesso!',
    en: 'Message sent successfully!',
  },
  'contact.error': {
    pt: 'Erro ao enviar mensagem. Tente novamente.',
    en: 'Error sending message. Please try again.',
  },
  'contact.subject': {
    pt: 'Assunto',
    en: 'Subject',
  },
  'contact.getInTouch': {
    pt: 'Vamos Conversar',
    en: 'Let\'s Talk',
  },
  'contact.sendMessage': {
    pt: 'Envie uma Mensagem',
    en: 'Send a Message',
  },
  'contact.reachOut': {
    pt: 'Entre em contato através de qualquer um dos canais abaixo',
    en: 'Reach out through any of the channels below',
  },
  'contact.address': {
    pt: 'Endereço',
    en: 'Address',
  },
  'contact.phone': {
    pt: 'Telefone',
    en: 'Phone',
  },
  'contact.availability': {
    pt: 'Disponibilidade',
    en: 'Availability',
  },
  'contact.schedule': {
    pt: 'Segunda a Sexta: 9h às 18h',
    en: 'Monday to Friday: 9AM to 6PM',
  },
  // WhatsApp
  'contact.whatsapp': {
    pt: 'WhatsApp',
    en: 'WhatsApp',
  },
  'contact.whatsapp.cta': {
    pt: 'Conversar no WhatsApp',
    en: 'Chat on WhatsApp',
  },
  'contact.whatsapp.button': {
    pt: 'Falar no WhatsApp',
    en: 'Talk on WhatsApp',
  },
  'whatsapp.message': {
    pt: 'Olá Isabella! Gostaria de saber mais sobre seus serviços de consultoria de carreira.',
    en: 'Hello Isabella! I would like to know more about your career consulting services.',
  },
  'whatsapp.contact': {
    pt: 'Contato via WhatsApp',
    en: 'Contact via WhatsApp',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation '${key}' not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
