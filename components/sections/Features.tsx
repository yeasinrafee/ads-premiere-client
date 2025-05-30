'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import {
  BarChart,
  Globe2,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Target className='h-8 w-8' />,
      title: 'Targeted Campaigns',
      description:
        'Reach your ideal audience with precision-targeted marketing campaigns that convert.',
    },
    {
      icon: <BarChart className='h-8 w-8' />,
      title: 'Data Analytics',
      description:
        'Make informed decisions with comprehensive analytics and reporting.',
    },
    {
      icon: <Globe2 className='h-8 w-8' />,
      title: 'Global Reach',
      description:
        'Expand your business globally with our international marketing expertise.',
    },
    {
      icon: <Lightbulb className='h-8 w-8' />,
      title: 'Creative Solutions',
      description:
        'Stand out with innovative and creative marketing strategies.',
    },
    {
      icon: <Users className='h-8 w-8' />,
      title: 'Expert Team',
      description:
        'Work with seasoned professionals dedicated to your success.',
    },
    {
      icon: <TrendingUp className='h-8 w-8' />,
      title: 'Growth Focus',
      description:
        'Scale your business with sustainable growth strategies and proper execution.',
    },
  ];

  return (
    <section className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Us</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Discover how our expertise can transform your digital presence
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='relative group'
              {...fadeIn(0.1 * (index + 1))}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#FB9618]/10 to-[#07A2FF]/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl' />
              <div className='relative bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50'>
                <div className='mb-4 text-[#FB9618]'>{feature.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
