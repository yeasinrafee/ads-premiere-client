'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  TrendingUp,
  BarChart3,
  Zap,
  CheckCircle2,
  MousePointer2,
  Globe,
  Monitor,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

function GoogleMarketingContent() {
  const googleServices = [
    {
      title: 'Google Search Ads (PPC)',
      desc: 'Get your brand at the very top of the search results for the high-intent keywords that actually drive sales and high-quality inquiries.',
      icon: <Search className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'Google Maps / Local SEO',
      desc: "Dominate the 'Local Pack.' We optimize your Google Business Profile to ensure local customers find you first on their maps and mobile devices.",
      icon: <MapPin className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Display & Remarketing',
      desc: 'Stay top-of-mind. We follow your potential customers across the web with visual banners that pull them back to your website to finish the conversion.',
      icon: <Monitor className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  const highlights = [
    'Comprehensive Keyword Research & Analysis',
    'High-Converting Landing Page Design',
    'Conversion Tracking & Event Setup',
    'Negative Keyword Optimization (Save Budget)',
    'Competitor Ad Strategy Benchmarking',
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The Search Pillars --- */}
      <section className='container px-4 mx-auto'>
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Own the <span className='text-[#07A2FF]'>First Page</span>
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Be found when it matters most. From Google Search to Maps and
            YouTube, we position your agency where your customers are actively
            looking for solutions.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {googleServices.map((service, index) => (
            <motion.div
              key={index}
              className='relative p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden'
              initial='rest'
              whileHover='hover'
              variants={cardHoverAnimation}
              custom={index}
            >
              <div
                className={`mb-6 p-3 rounded-lg w-fit text-white bg-gradient-to-br ${service.gradient}`}
              >
                {service.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Data & Transparency (Dark Stats Section) --- */}
      <section className='bg-slate-900 py-20 text-white rounded-[2.5rem] mx-4 relative overflow-hidden'>
        <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-[#07A2FF] rounded-full blur-[160px] opacity-10' />
        <div className='container px-4 mx-auto relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>
            <motion.div className='flex-1' {...fadeIn(0.2)}>
              <h3 className='text-3xl md:text-4xl font-bold mb-6'>
                Built on <span className='text-[#FB9618]'>Precision</span>
              </h3>
              <p className='text-slate-400 text-lg mb-8 leading-relaxed'>
                We don&apos;t guess with your budget. As a global IT service
                provider since 2012, our Google Marketing strategies are rooted
                in deep technical data, maximizing every cent for maximum
                Click-Through Rate (CTR).
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='bg-white/5 p-6 rounded-2xl border border-white/10'>
                  <div className='text-3xl font-bold text-[#07A2FF]'>12%</div>
                  <div className='text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1'>
                    Average CTR Improvement
                  </div>
                </div>
                <div className='bg-white/5 p-6 rounded-2xl border border-white/10'>
                  <div className='text-3xl font-bold text-[#FB9618]'>30%</div>
                  <div className='text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1'>
                    Reduction in CPC
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className='flex-1 w-full lg:w-auto' {...fadeIn(0.3)}>
              <div className='bg-slate-800/40 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm'>
                <BarChart3 className='h-12 w-12 text-[#07A2FF] mb-6' />
                <h4 className='text-2xl font-bold mb-4'>
                  Live Performance Tracking
                </h4>
                <p className='text-slate-400 mb-8'>
                  Get real-time insights into your Google Ads performance. We
                  provide transparent dashboards so you can see exactly how many
                  calls, clicks, and sales we are generating.
                </p>
                <div className='space-y-4'>
                  <div className='h-1.5 w-full bg-slate-700 rounded-full overflow-hidden'>
                    <motion.div
                      className='h-full bg-[#07A2FF]'
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <div className='flex justify-between text-xs font-bold text-slate-500'>
                    <span>VISIBILITY</span>
                    <span className='text-white'>90% DOMINANCE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Workflow --- */}
      <section className='container px-4 mx-auto pb-20'>
        <div className='flex flex-col lg:flex-row-reverse items-center gap-16'>
          <motion.div className='flex-1' {...fadeIn(0.3)}>
            <div className='bg-[#FB9618]/10 p-4 rounded-2xl w-fit mb-6'>
              <MousePointer2 className='h-8 w-8 text-[#FB9618]' />
            </div>
            <h3 className='text-3xl font-bold mb-6'>
              Advanced <span className='text-[#07A2FF]'>Google Algorithms</span>{' '}
              Mastery
            </h3>
            <p className='text-muted-foreground mb-10 text-lg'>
              Google&apos;s algorithm updates can destroy an amateur&apos;s
              strategy. Our veteran team stays ahead of every update, ensuring
              your ranking and ad performance remains consistent even in a
              shifting digital landscape.
            </p>
            <div className='grid gap-4'>
              {highlights.map((item, i) => (
                <div key={i} className='flex items-center gap-4 group'>
                  <div className='bg-[#07A2FF]/10 p-1 rounded-full group-hover:bg-[#07A2FF] transition-colors duration-300'>
                    <CheckCircle2 className='h-5 w-5 text-[#07A2FF] group-hover:text-white' />
                  </div>
                  <span className='font-semibold text-slate-500 dark:text-slate-300 transition-colors group-hover:text-[#07A2FF]'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className='flex-1 relative' {...fadeIn(0.4)}>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl border border-border group'>
              <div className='aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-12'>
                <div className='text-center'>
                  <Globe className='h-20 w-20 text-[#07A2FF] mx-auto mb-6 opacity-40 group-hover:scale-110 transition-transform duration-500' />
                  <div className='font-bold text-slate-400 uppercase tracking-widest text-sm italic'>
                    Global Search Optimization
                  </div>
                </div>
              </div>
              <div className='absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-border'>
                <Zap className='h-4 w-4 text-[#FB9618] fill-[#FB9618]' />
                <span className='text-[10px] font-bold'>LIVE AD CAMPAIGN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GoogleMarketingContent;
