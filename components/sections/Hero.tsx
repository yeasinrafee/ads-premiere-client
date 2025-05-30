'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { fadeIn, heroBgAnimation } from '@/lib/animations';
import Link from 'next/link';
import hero from '@/assets/hero.jpg';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-32 md:pt-24 pb-16 overflow-hidden'
    >
      {/* Animated background elements */}
      <motion.div
        className='absolute inset-0 -z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-r from-[#07A2FF]/10 to-[#FB9618]/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4' />
          <div className='absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-l from-[#07A2FF]/10 to-[#FB9618]/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4' />
        </div>
        <div className='absolute inset-0 bg-grid-white/10 bg-grid-pattern' />
      </motion.div>

      <div className='container px-4 md:px-6 mx-auto'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
          <motion.div
            className='flex flex-col justify-center space-y-4 md:space-y-5'
            {...fadeIn(0.2)}
          >
            <motion.span
              className='inline-block text-sm md:text-base font-semibold text-[#07A2FF]'
              {...fadeIn(0.3)}
            >
              {t('hero.title1')}
            </motion.span>
            <motion.h1
              className='text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FB9618]  to-[#07A2FF]'
              {...fadeIn(0.4)}
            >
              {t('hero.title2')}
            </motion.h1>
            <motion.p
              className='text-base md:text-lg text-muted-foreground max-w-[500px]'
              {...fadeIn(0.5)}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-3 pt-4'
              {...fadeIn(0.6)}
            >
              <Link href={'#contact'}>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-[#FB9618]  to-[#07A2FF] hover:opacity-90 transition-opacity group'
                >
                  {t('hero.cta')}
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
              <Link href={'#portfolio'}>
                <Button size='lg' variant='outline'>
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-8'
              {...fadeIn(0.7)}
            >
              {[
                { stat: '250+', label: 'Clients Served' },
                { stat: '98%', label: 'Client Retention' },
                { stat: '67%', label: 'Average ROI' },
                { stat: '35+', label: 'Team Members' },
              ].map((item, i) => (
                <div key={i} className='relative group cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-r from-[#07A2FF]/10 to-[#FB9618]/10 rounded-lg -z-10 blur-sm group-hover:blur-md transition-all duration-300' />
                  <div className='bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 text-center'>
                    <div className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FB9618]  to-[#07A2FF]'>
                      {item.stat}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className='relative flex items-center justify-center'
            {...heroBgAnimation}
          >
            <div className='relative w-full aspect-square max-w-[500px]'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#07A2FF]/20 to-[#FB9618]/20 rounded-full blur-3xl animate-pulse' />
              <Image
                src={hero}
                alt='Digital marketing team'
                className='relative z-10 rounded-lg shadow-2xl'
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
              <div className='absolute -bottom-10 -right-8 text-center w-24 h-24 bg-gradient-to-r from-[#07A2FF] to-[#FB9618] rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce'>
                Let&apos;s Grow Together
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
