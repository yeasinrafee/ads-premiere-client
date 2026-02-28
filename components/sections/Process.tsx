'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { Search, Settings, BarChart2, TrendingUp } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  delay: number;
}

function ProcessStep({
  step,
  title,
  description,
  icon,
  isLast = false,
  delay,
}: ProcessStepProps) {
  return (
    <motion.div className='flex' {...fadeIn(delay)}>
      <div className='flex flex-col items-center mr-4 sm:mr-6'>
        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#FB9618]  to-[#07A2FF] text-white font-bold text-lg'>
          {step}
        </div>
        {!isLast && <div className='w-px h-full bg-border/70 my-2'></div>}
      </div>
      <div className='pt-1 pb-8'>
        <div className='flex items-center mb-2'>
          <div className='mr-3 text-primary'>{icon}</div>
          <h3 className='text-xl font-semibold'>{title}</h3>
        </div>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: <Search className='h-5 w-5' />,
    },
    {
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: <Settings className='h-5 w-5' />,
    },
    {
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: <BarChart2 className='h-5 w-5' />,
    },
    {
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: <TrendingUp className='h-5 w-5' />,
    },
  ];

  return (
    <section id='process' className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#07A2FF]'>
            {t('process.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
