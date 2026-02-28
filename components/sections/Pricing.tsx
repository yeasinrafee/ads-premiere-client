'use client';

import { motion } from 'framer-motion';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  subFeatures?: string[];
  gradient: string;
  index: number;
  isPopular?: boolean;
}

function PricingCard({
  title,
  price,
  features,
  subFeatures,
  gradient,
  index,
  isPopular,
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative flex flex-col p-6 rounded-2xl shadow-lg border bg-card h-full ${
        isPopular ? 'border-[#FB9618] ring-1 ring-[#FB9618]' : 'border-border'
      }`}
      initial='rest'
      whileHover='hover'
      variants={cardHoverAnimation}
      custom={index}
    >
      {isPopular && (
        <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FB9618] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>
          Best Value
        </div>
      )}

      <div className='mb-6'>
        <h3
          className={`text-xl font-bold mb-4 px-3 py-1 rounded w-fit text-white`}
          style={{ background: `linear-gradient(45deg, ${gradient})` }}
        >
          {title}
        </h3>
        <div className='flex items-baseline gap-1'>
          <span className='text-4xl font-bold'>৳{price}</span>
          <span className='text-muted-foreground font-medium'>/Monthly</span>
        </div>
      </div>

      <div className='flex-grow'>
        <ul className='space-y-3 mb-6'>
          {features.map((feature, i) => (
            <li key={i} className='flex items-start gap-2 text-sm'>
              <Check className='h-4 w-4 text-[#07A2FF] mt-0.5 shrink-0' />
              <span className='leading-tight'>{feature}</span>
            </li>
          ))}
        </ul>

        {subFeatures && (
          <div className='mt-4 pt-4 border-t border-dashed'>
            <p className='text-xs font-semibold text-muted-foreground uppercase mb-3 flex items-center gap-1'>
              <Info className='h-3 w-3' /> Meta Marketing Includes:
            </p>
            <ul className='space-y-2'>
              {subFeatures.map((sub, i) => (
                <li
                  key={i}
                  className='text-xs text-muted-foreground flex items-center gap-2 pl-2'
                >
                  <div className='h-1 w-1 rounded-full bg-slate-400' />
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button
        className={`w-full mt-8 ${isPopular ? 'bg-[#FB9618] hover:bg-[#FB9618]/90' : 'bg-[#07A2FF] hover:bg-[#07A2FF]/90'}`}
      >
        Choose {title}
      </Button>
    </motion.div>
  );
}

export function Pricing() {
  const plans = [
    {
      title: 'BASIC',
      price: '7500',
      gradient: '#F43F5E, #FB9618',
      features: [
        '9 Images + 4 Videos (With attractive captions)',
        '4 blog posts (Product/Service related)',
        '1 Bonus Content',
        'Facebook + Instagram Management',
        'Organic Promotion',
        'Facebook Management',
      ],
    },
    {
      title: 'STANDARD',
      price: '14000',
      isPopular: true,
      gradient: '#07A2FF, #0EA5E9',
      features: [
        '8 Images + 4 Videos (With attractive captions)',
        '4 blog posts (Product/Service related)',
        '2 Bonus Content',
        'Facebook + Instagram + Tiktok Management',
        'Organic Promotion',
        'Meta Marketing',
      ],
      subFeatures: [
        'Ad Campaign, Ad Copy (Write up)',
        'Content (Static Image/ Simple Video)',
        'Pixel Setup, Marketing Strategies/ Plan',
      ],
    },
    {
      title: 'PREMIUM',
      price: '24000',
      gradient: '#10B981, #3B82F6',
      features: [
        '8 Images + 4 Videos (With attractive captions)',
        '4 blog posts (Product/Service related)',
        '2 Bonus Content',
        'Facebook + Instagram + Tiktok Management',
        'Organic Promotion',
        'Meta Marketing',
        'SEO, Google My Business Setup & Google Ads',
      ],
      subFeatures: [
        'Ad Campaign, Ad Copy (Write up)',
        'Content (Static Image/ Simple Video)',
        'Pixel Setup, Marketing Strategies/ Plan',
      ],
    },
  ];

  return (
    <section id='pricing' className='py-20'>
      <div className='container px-4 mx-auto'>
        <motion.div className='text-center mb-12' {...fadeIn()}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#07A2FF]'>
            Digital Marketing Packages
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Delivering Global IT Services Since 2012
          </p>
        </motion.div>

        <motion.div
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-start'
          {...fadeIn(0.2)}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} index={index} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
