'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import Image from 'next/image';

import type { StaticImageData } from 'next/image';

interface CaseStudyCardProps {
  title: string;
  description: string;
  result: string;
  image: StaticImageData;
  index: number;
}

function CaseStudyCard({
  title,
  description,
  result,
  image,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className='group relative overflow-hidden rounded-lg shadow-lg'
      initial='rest'
      whileHover='hover'
      variants={cardHoverAnimation}
      custom={index}
    >
      <div className='relative h-60 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          height={300}
          width={300}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
        <div className='bg-[#07A2FF] text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3'>
          {result}
        </div>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-white/80 mb-4'>{description}</p>
        <Button
          size='sm'
          variant='outline'
          className='text-white border-white/30 bg-white/10 hover:bg-white/20'
        >
          View Case Study
          <ArrowUpRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      title: t('portfolio.case1.title'),
      description: t('portfolio.case1.description'),
      result: t('portfolio.case1.result'),
      image: image1,
    },
    {
      title: t('portfolio.case2.title'),
      description: t('portfolio.case2.description'),
      result: t('portfolio.case2.result'),
      image: image2,
    },
    {
      title: t('portfolio.case3.title'),
      description: t('portfolio.case3.description'),
      result: t('portfolio.case3.result'),
      image: image3,
    },
  ];

  return (
    <section id='portfolio' className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('portfolio.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
          {...fadeIn(0.2)}
        >
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              result={caseStudy.result}
              image={caseStudy.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
