import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { SendIcon, MailIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(t('contact.success'));
      form.reset();
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-pastel-purple/5">
      <div className="container mx-auto px-4">
        <h2 className="heading text-3xl md:text-4xl mb-12 text-center">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 flex flex-col">
            <h3 className="heading text-xl mb-6 text-center">{t('contact.getInTouch')}</h3>
            
            <div className="space-y-6 flex-grow">
              {/* Email contact */}
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-pastel-purple/5 hover:bg-pastel-purple/10 transition-colors">
                <div className="contact-icon-wrapper p-3 bg-pastel-purple/10 rounded-full">
                  <MailIcon size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{t('contact.email')}</h4>
                  <p className="text-gray-600">isabellasilvarh@hotmail.com</p>
                  <a 
                    href="mailto:isabellasilvarh@hotmail.com" 
                    className="inline-block mt-2 text-pastel-purple hover:text-pastel-purple-dark transition-colors"
                  >
                    {t('contact.email.cta')}
                  </a>
                </div>
              </div>
              
              {/* WhatsApp contact */}
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-pastel-purple/5 hover:bg-pastel-purple/10 transition-colors">
                <div className="contact-icon-wrapper p-3 bg-green-500/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.073 4.175A11.842 11.842 0 0 0 12.208 1c-3.095 0-6.007 1.201-8.195 3.413C1.852 6.6 0.667 9.478 0.652 12.529c-.001 2.207.584 4.39 1.691 6.292l-1.731 6.147c-.099.351.213.695.571.599l6.249-1.667a11.89 11.89 0 0 0 5.66 1.424h.005c6.54 0 11.864-5.33 11.864-11.884 0-3.165-1.227-6.152-3.453-8.404l-.435-.261zm-2.452 16.59A9.855 9.855 0 0 1 12.208 23h-.004a9.86 9.86 0 0 1-4.991-1.345l-.357-.214-3.705.982.998-3.569-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.01-5.463 4.464-9.91 9.942-9.91a9.865 9.865 0 0 1 7.022 2.909 9.88 9.88 0 0 1 2.909 7.022c0 5.468-4.456 9.923-9.928 9.923z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{t('contact.whatsapp')}</h4>
                  <p className="text-gray-600">+55 11 989076773</p>
                  <a 
                    href={`https://wa.me/5511989076773?text=${encodeURIComponent(t('whatsapp.message'))}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    {t('contact.whatsapp.cta')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-pastel-purple/20">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white h-10"
                onClick={() => window.open(`https://wa.me/5511989076773?text=${encodeURIComponent(t('whatsapp.message'))}`, '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.073 4.175A11.842 11.842 0 0 0 12.208 1c-3.095 0-6.007 1.201-8.195 3.413C1.852 6.6 0.667 9.478 0.652 12.529c-.001 2.207.584 4.39 1.691 6.292l-1.731 6.147c-.099.351.213.695.571.599l6.249-1.667a11.89 11.89 0 0 0 5.66 1.424h.005c6.54 0 11.864-5.33 11.864-11.884 0-3.165-1.227-6.152-3.453-8.404l-.435-.261zm-2.452 16.59A9.855 9.855 0 0 1 12.208 23h-.004a9.86 9.86 0 0 1-4.991-1.345l-.357-.214-3.705.982.998-3.569-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.01-5.463 4.464-9.91 9.942-9.91a9.865 9.865 0 0 1 7.022 2.909 9.88 9.88 0 0 1 2.909 7.022c0 5.468-4.456 9.923-9.928 9.923z" />
                </svg>
                {t('contact.whatsapp.button')}
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-8 flex flex-col">
            <h3 className="heading text-xl mb-6 text-center">{t('contact.sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              <div className="space-y-6 flex-grow">
                <Input
                  name="user_name"
                  placeholder={t('contact.name')}
                  required
                />
                <Input
                  name="user_email"
                  type="email"
                  placeholder={t('contact.email')}
                  required
                />
                <Textarea
                  name="message"
                  placeholder={t('contact.message')}
                  required
                  className="min-h-[150px]"
                />
              </div>
              
              <div className="mt-8 pt-6 border-t border-pastel-purple/20">
                <Button 
                  type="submit" 
                  className="w-full h-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    t('contact.sending')
                  ) : (
                    <span className="flex items-center justify-center">
                      <SendIcon className="mr-2 h-5 w-5" />
                      {t('contact.submit')}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
