'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import rafee from '@/assets/rafee.jpg';
import shakil from '@/assets/shakil.jpeg';

export function Leadership() {
  const { t } = useLanguage();

  const leaders = [
    {
      name: 'Yeasin Rafee',
      role: 'Founder & CEO',
      image: rafee,
      quote:
        'Our mission is to empower businesses with digital solutions that drive real growth and lasting impact.',
    },
    {
      name: 'Shakil Ahmed',
      role: 'CMO',
      image: shakil,
      quote:
        'We combine creativity with data-driven strategies to deliver exceptional results for our clients.',
    },
  ];

  return (
    <section className='py-20 overflow-hidden bg-muted/30'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#07A2FF]'>
            Meet Our Leadership
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Visionaries driving innovation and excellence in digital marketing
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className='relative group'
              {...fadeIn(0.2 * (index + 1))}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#07A2FF]/10 to-[#FB9618]/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl' />
              <div className='relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 '>
                <div className='aspect-[16/9] overflow-hidden'>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
                    width={400}
                    height={400}
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold mb-1'>{leader.name}</h3>
                  <p className='text-muted-foreground mb-4'>{leader.role}</p>
                  <div className='flex items-start space-x-2'>
                    <Quote className='h-6 w-6 text-[#FB9618] flex-shrink-0 mt-1' />
                    <p className='italic text-card-foreground'>
                      {leader.quote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
