'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  TrendingUp,
  Target,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  CheckCircle2,
  Globe,
  Camera,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

// 1. We define the component
function SocialMediaContent() {
  const stats = [
    {
      label: 'Engagement Increase',
      value: '150%',
      icon: <TrendingUp className='text-[#07A2FF]' />,
    },
    {
      label: 'Ad Reach',
      value: '2M+',
      icon: <Globe className='text-[#FB9618]' />,
    },
    {
      label: 'Content Created',
      value: '500+',
      icon: <Camera className='text-[#07A2FF]' />,
    },
  ];

  const pillars = [
    {
      title: 'Content Strategy & Creation',
      desc: "We don't just post; we tell stories. Our team crafts high-quality visuals and captions that resonate with your target audience.",
      icon: <MessageSquare className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'Community Management',
      desc: 'Building a brand is about conversation. We engage with your followers, reply to comments, and manage your online reputation 24/7.',
      icon: <Users className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Paid Social Advertising',
      desc: 'Precision targeting on Facebook, Instagram, and TikTok to ensure your budget is spent on high-intent users who actually convert.',
      icon: <Target className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The Core Pillars --- */}
      <section className='container px-4 mx-auto'>
        {/* FIXED: Passing 0.1 (number) instead of a string */}
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-5xl font-bold mb-6'>
            Our <span className='text-[#07A2FF]'>Strategic</span> Approach
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Stand out and dominate globally with a social presence that actually
            drives revenue.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className='relative p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden'
              initial='rest'
              whileHover='hover'
              variants={cardHoverAnimation}
              custom={index}
            >
              <div
                className={`mb-6 p-3 rounded-lg w-fit text-white bg-gradient-to-br ${pillar.gradient}`}
              >
                {pillar.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{pillar.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Stats & Credibility --- */}
      <section className='bg-slate-900 py-16 text-white rounded-3xl mx-4'>
        <div className='container px-4 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeIn(0.2 + i * 0.1)}>
                <div className='flex justify-center mb-4'>{stat.icon}</div>
                <div className='text-5xl font-extrabold mb-2'>{stat.value}</div>
                <div className='text-slate-400 font-medium uppercase tracking-widest text-sm'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Features & Workflow --- */}
      <section className='container px-4 mx-auto pb-20'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <motion.div className='flex-1' {...fadeIn(0.3)}>
            <h3 className='text-3xl font-bold mb-8'>
              What You Get With{' '}
              <span className='text-[#FB9618]'>Ads Premiere</span>
            </h3>
            <div className='space-y-6'>
              {[
                'Platform-specific content optimization (Reels, TikToks, Carousels)',
                'Weekly performance tracking and ROI analysis',
                'Influencer outreach and collaboration management',
                'Advanced retargeting pixel setup and management',
                'Custom-designed graphics and video editing',
              ].map((item, i) => (
                <div key={i} className='flex items-center gap-4'>
                  <div className='bg-[#FB9618]/10 p-1 rounded-full'>
                    <CheckCircle2 className='h-6 w-6 text-[#FB9618]' />
                  </div>
                  <span className='text-lg font-medium text-muted-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='flex-1 bg-gradient-to-br from-[#07A2FF]/10 to-[#FB9618]/10 p-1 rounded-3xl'
            {...fadeIn(0.4)}
          >
            <div className='bg-card p-8 rounded-[calc(1.5rem-1px)] border border-border'>
              <Zap className='h-12 w-12 text-[#FB9618] mb-6' />
              <h4 className='text-2xl font-bold mb-4'>Real-Time Management</h4>
              <p className='text-muted-foreground mb-6'>
                The social world never sleeps. Our management team ensures your
                brand stays relevant.
              </p>
              <div className='h-2 w-full bg-secondary rounded-full overflow-hidden'>
                <motion.div
                  className='h-full bg-[#07A2FF]'
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              <p className='text-xs mt-2 text-muted-foreground font-semibold uppercase text-right'>
                85% Faster Response Rate
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// 2. THIS IS THE KEY: You must have a default export for Next.js pages
export default SocialMediaContent;
