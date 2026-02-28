'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-card'>
      <motion.div
        className='container px-4 md:px-6 mx-auto py-12'
        {...fadeIn()}
      >
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='mb-3'>
              <Image src={logo} alt='logo' height={60} />
            </div>
            <Link href='/#home' className='flex items-center space-x-2 mb-4'>
              {/* <div className='font-bold text-2xl'>
                <span className='text-[#FB9618]'>ADS </span>
                <span className='text-[#07A2FF]'>PREMIERE</span>
              </div> */}
            </Link>
            <p className='text-muted-foreground max-w-xs'>
              We help brands increase visibility, generate leads, and drive
              sales through data-driven strategies.
            </p>

            <div className='flex space-x-2 mt-4'>
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

          <div>
            <h3 className='font-semibold text-lg mb-4 text-[#07A2FF]'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {[
                { name: t('nav.home'), href: '#home' },
                { name: t('nav.services'), href: '#services' },
                { name: t('nav.process'), href: '#process' },
                { name: t('nav.pricing'), href: '#pricing' },
                { name: t('nav.portfolio'), href: '#portfolio' },
                // { name: t('nav.testimonials'), href: '#testimonials' },
                { name: t('nav.contact'), href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4 text-[#07A2FF]'>
              Services
            </h3>
            <ul className='space-y-2'>
              {[
                {
                  id: '1',
                  name: 'Social Media Marketing',
                  url: '/services/social-media-marketing',
                },
                {
                  id: '2',
                  name: 'Email Marketing',
                  url: '/services/email-marketing',
                },
                {
                  id: '3',
                  name: 'Lead Generation',
                  url: '/services/lead-generation',
                },
                {
                  id: '4',
                  name: 'Google Marketing',
                  url: '/services/google-marketing',
                },
                {
                  id: '5',
                  name: 'Search Engine Optimization',
                  url: '/services/seo',
                },
                {
                  id: '6',
                  name: 'Content Marketing',
                  url: '/services/content-marketing',
                },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.url}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4 text-[#07A2FF]'>
              Contact Us
            </h3>
            <address className='not-italic text-muted-foreground space-y-2'>
              <p>House: 06, Road: 03, Sector: 09</p>
              <p>Uttara, Dhaka-1230</p>
              <p>Bangladesh</p>
              <p className='mt-4'>adspremiere0@gmail.com</p>
              <p>+880 1988616365</p>
            </address>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border'>
          <p className='text-muted-foreground text-center md:text-left mb-4 md:mb-0'>
            {t('footer.copyright')}
          </p>
          <Button
            onClick={scrollToTop}
            size='icon'
            variant='outline'
            className='rounded-full'
          >
            <ArrowUp className='h-4 w-4 text-[#FB9618]' />
            <span className='sr-only'>Back to top</span>
          </Button>
        </div>
      </motion.div>
    </footer>
  );
}
