'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { Award, Clock, Star, Trophy } from 'lucide-react';

export function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Trophy className='h-8 w-8' />,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across industries',
    },
    {
      icon: <Star className='h-8 w-8' />,
      value: '98%',
      label: 'Client Satisfaction',
      description:
        'Consistently exceeding client expectations and delivering value',
    },
    {
      icon: <Award className='h-8 w-8' />,
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence in digital marketing',
    },
    {
      icon: <Clock className='h-8 w-8' />,
      value: '10+',
      label: 'Years Experience',
      description: 'Decade of digital marketing expertise and innovation',
    },
  ];

  return (
    <section className='py-20 overflow-hidden bg-muted/30'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Our Impact in Numbers
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Delivering measurable results that speak for themselves
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className='relative group'
              {...fadeIn(0.1 * (index + 1))}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#FB9618]/10 to-[#07A2FF]/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl' />
              <div className='relative bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border/50'>
                <div className='inline-block mb-4 text-[#FB9618]'>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FB9618] to-[#07A2FF]'>
                  {stat.value}
                </div>
                <div className='font-semibold mb-2'>{stat.label}</div>
                <p className='text-sm text-muted-foreground'>
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
