
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === 'pt'
            ? 'bg-pastel-purple text-white'
            : 'text-foreground hover:bg-pastel-purple/20'
        }`}
        onClick={() => setLanguage('pt')}
      >
        PT
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-pastel-purple text-white'
            : 'text-foreground hover:bg-pastel-purple/20'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
