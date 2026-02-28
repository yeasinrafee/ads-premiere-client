'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { ThemeToggle } from './ui/theme-toggle';
import { LanguageToggle } from './ui/language-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';
import Image from 'next/image';

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', name: t('nav.home') },
    { href: '#services', name: t('nav.services') },
    // { href: '#process', name: t('nav.process') },
    { href: '#pricing', name: t('nav.pricing') },
    { href: '#portfolio', name: t('nav.portfolio') },
    // { href: '#testimonials', name: t('nav.testimonials') },
    { href: '#contact', name: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-8',
        scrolled || isOpen
          ? 'bg-background/95 backdrop-blur shadow-md py-6'
          : 'py-6',
      )}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href='#home' className='flex items-center space-x-2'>
          <div>
            <Image src={logo} alt='logo' height={60} />
          </div>
          {/* <div className='font-bold text-2xl'>
            <span className='text-[#FB9618]'>ADS </span>
            <span className='text-[#07A2FF]'>PREMIERE</span>
          </div> */}
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          <div className='flex space-x-6'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex items-center space-x-2 border-l pl-4 border-border'>
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <Link href={'#contact'}>
            <Button className='bg-gradient-to-r from-[#FB9618]  to-[#07A2FF] hover:opacity-90 transition-opacity'>
              {t('hero.cta')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='flex items-center space-x-2 md:hidden'>
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
            className='ml-2'
          >
            <Menu className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
            <X className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
        <div className='flex flex-col space-y-4 pb-6'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='px-4 py-2 font-medium text-foreground hover:bg-muted rounded-md transition-colors'
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className='pt-2'>
            <Button
              className='w-full bg-gradient-to-r from-[#FB9618]  to-[#07A2FF] hover:opacity-90 transition-opacity'
              onClick={() => setIsOpen(false)}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
