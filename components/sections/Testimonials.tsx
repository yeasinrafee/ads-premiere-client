'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { fadeIn } from '@/lib/animations';
import { Quote } from 'lucide-react';
import user1 from '@/assets/user1.jpeg';
import user2 from '@/assets/user2.png';
import user3 from '@/assets/user3.jpeg';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: StaticImageData;
  delay: number;
}

function TestimonialCard({
  quote,
  author,
  company,
  image,
  delay,
}: TestimonialCardProps) {
  return (
    <motion.div className='bg-card rounded-lg p-6 shadow-md' {...fadeIn(delay)}>
      <Quote className='h-8 w-8 text-[#FB9618] mb-4' />
      <p className='mb-6 text-card-foreground/90 italic'>{quote}</p>
      <div className='flex items-center'>
        <div className='mr-4 h-12 w-12 overflow-hidden rounded-full'>
          <Image
            src={image}
            alt={author}
            className='h-full w-full object-cover'
            height={50}
            width={50}
          />
        </div>
        <div>
          <h4 className='font-semibold'>{author}</h4>
          <p className='text-sm text-muted-foreground'>{company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote:
        'Working with this agency has transformed our online presence. Their strategies are innovative and effective.',
      author: 'Sarah Johnson',
      company: 'EcoSport Apparel',
      image: user1,
    },
    {
      quote:
        'The team is responsive, professional, and truly cares about our success. Highly recommended!',
      author: 'Michael Rodriguez',
      company: 'Tech Solutions Inc.',
      image: user2,
    },
    {
      quote:
        'Our lead quality and quantity have improved dramatically since we started with them.',
      author: 'Lisa Chang',
      company: 'Healthcare Partners',
      image: user3,
    },
  ];

  return (
    <section id='testimonials' className='py-20 bg-muted/50'>
      <div className='container px-4 md:px-6 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('testimonials.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
