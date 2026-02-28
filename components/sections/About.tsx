'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { BarChart3, BarChart, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  index: number;
}

function FeatureCard({ title, icon, className, index }: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        'flex flex-col items-center p-6 rounded-lg text-center md:text-left',
        className,
      )}
      variants={staggerItem}
      custom={index}
    >
      <div className='mb-4 rounded-full bg-primary/10 p-3 text-primary'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
    </motion.div>
  );
}

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('about.point1'),
      icon: <BarChart3 className='h-6 w-6' />,
      className: 'bg-[#07A2FF]/5',
    },
    {
      title: t('about.point2'),
      icon: <BarChart className='h-6 w-6' />,
      className: 'bg-[#FB9618]/5',
    },
    {
      title: t('about.point3'),
      icon: <Users className='h-6 w-6' />,
      className: 'bg-[#07A2FF]/5',
    },
    {
      title: t('about.point4'),
      icon: <TrendingUp className='h-6 w-6' />,
      className: 'bg-[#FB9618]/5',
    },
  ];

  return (
    <section className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#07A2FF]'>
            {t('about.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              className={feature.className}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
