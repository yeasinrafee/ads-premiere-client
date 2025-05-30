'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

export function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully! We'll get back to you soon.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className='h-5 w-5' />,
      info: 'adspremiere0@gmail.com',
    },
    {
      icon: <Phone className='h-5 w-5' />,
      info: '+880 1988616365',
    },
    {
      icon: <MapPin className='h-5 w-5' />,
      info: 'Uttara, Dhaka, Bangladesh-1230',
    },
  ];

  return (
    <section id='contact' className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('contact.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className='grid gap-10 md:grid-cols-2 items-stretch'>
          <motion.div className='h-full' {...fadeIn(0.1)}>
            <div className='h-full rounded-xl bg-gradient-to-r from-[#FB9618]/10 to-[#07A2FF]/10 p-6 md:p-8'>
              <h3 className='text-2xl font-semibold mb-6'>Get in Touch</h3>

              <div className='space-y-6'>
                {contactInfo.map((item, index) => (
                  <div key={index} className='flex items-center'>
                    <div className='mr-3 text-[#07A2FF]'>{item.icon}</div>
                    <p>{item.info}</p>
                  </div>
                ))}
              </div>

              <div className='mt-8 space-y-2'>
                <h4 className='font-medium'>Connect With Us</h4>
                <div className='flex space-x-4'>
                  {[
                    {
                      id: '1',
                      icon: <FaFacebookF className='w-5 h-5 text-blue-500' />,
                      link: 'https://www.facebook.com/adspremiere',
                    },
                    {
                      id: '2',
                      icon: <FaInstagram className='w-5 h-5 text-red-500' />,
                      link: 'https://www.instagram.com/adspremiere',
                    },
                    {
                      id: '3',
                      icon: <FaWhatsapp className='w-5 h-5 text-green-400' />,
                      link: 'https://wa.me/+8801988616365',
                    },
                  ].map((social) => (
                    <Link
                      key={social.id}
                      href={social.link || '#'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='h-10 w-10 flex items-center justify-center rounded-full bg-background hover:bg-muted transition-colors'
                    >
                      <span>{social.icon}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='h-full' {...fadeIn(0.2)}>
            <div className='h-full bg-card rounded-xl shadow-lg p-6 md:p-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      {t('contact.formName')}
                    </label>
                    <Input id='name' placeholder='Your Name' required />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      {t('contact.formEmail')}
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='youremail@example.com'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='phone' className='text-sm font-medium'>
                    {t('contact.formPhone')}
                  </label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+1 (123) 456-7890'
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='service' className='text-sm font-medium'>
                    {t('contact.formService')}
                  </label>
                  <Select>
                    <SelectTrigger id='service'>
                      <SelectValue placeholder='Select a service' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='social'>
                        Social Media Marketing
                      </SelectItem>
                      <SelectItem value='email'>Email Marketing</SelectItem>
                      <SelectItem value='lead'>Lead Generation</SelectItem>
                      <SelectItem value='seo'>SEO</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    {t('contact.formMessage')}
                  </label>
                  <Textarea
                    id='message'
                    placeholder='How can we help you?'
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-gradient-to-r from-[#FB9618]  to-[#07A2FF] hover:opacity-90'
                  disabled={loading}
                >
                  {loading ? (
                    <span className='flex items-center'>
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white\'
                        xmlns='http://www.w3.org/2000/svg\'
                        fill='none\'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25\'
                          cx='12\'
                          cy='12\'
                          r='10\'
                          stroke='currentColor\'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className='flex items-center'>
                      {t('contact.formSubmit')}
                      <Send className='ml-2 h-4 w-4' />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
