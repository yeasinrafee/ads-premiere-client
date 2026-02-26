'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';
import { Share2, Mail, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  gradient: string;
  url: string;
}

function ServiceCard({
  title,
  description,
  icon,
  index,
  gradient,
  url,
}: ServiceCardProps) {
  return (
    <motion.div
      className='relative overflow-hidden rounded-xl p-6 shadow-lg'
      style={{
        background: `linear-gradient(45deg, ${gradient})`,
      }}
      initial='rest'
      whileHover='hover'
      variants={cardHoverAnimation}
      custom={index}
    >
      <div className='flex flex-col h-full'>
        <div className='mb-4 p-3 rounded-full bg-white/10 w-fit'>{icon}</div>
        <h3 className='text-xl font-bold mb-3 text-white'>{title}</h3>
        <p className='text-white/80 mb-4 flex-grow'>{description}</p>
        <Link href={url}>
          <Button
            variant='secondary'
            size='sm'
            className='w-fit mt-auto text-[#07A2FF] bg-white hover:bg-white/90'
          >
            Learn More
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      icon: <Share2 className='h-6 w-6 text-white' />,
      gradient: '#07A2FF, #07A2FF90',
      url: '/services/social-media-marketing',
    },
    {
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      icon: <Mail className='h-6 w-6 text-white' />,
      gradient: '#FB9618, #FB961890',
      url: '/services/email-marketing',
    },
    {
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      icon: <Users className='h-6 w-6 text-white' />,
      gradient: '#07A2FF, #07A2FF90',
      url: '/services/lead-generation',
    },
    {
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      icon: <Search className='h-6 w-6 text-white' />,
      gradient: '#FB9618, #FB961890',
      url: '/services/seo',
    },
  ];

  return (
    <section id='services' className='py-20 overflow-hidden'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('services.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'
          {...fadeIn(0.2)}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              gradient={service.gradient}
              url={service.url}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
