'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BarChart,
  Settings,
  Globe,
  Zap,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Code2,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

function SEOContent() {
  const seoPillars = [
    {
      title: 'Technical SEO',
      desc: "We fix the 'under-the-hood' issues. From site speed optimization to schema markup, we ensure Google's crawlers can index your site perfectly.",
      icon: <Code2 className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'On-Page Optimization',
      desc: 'High-quality content meets strategic keyword placement. We optimize your titles, meta descriptions, and headers to rank for what matters.',
      icon: <Layers className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Authority Building',
      desc: 'Our backlink strategies are 100% white-hat. We build high-quality links that signal to Google that your brand is a trusted leader.',
      icon: <Globe className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  const highlights = [
    'In-depth Keyword Opportunity Audits',
    'Mobile-First Indexing Optimization',
    'Content Gap & Competitor Analysis',
    'Local SEO & Google Business Profile',
    'Quarterly Strategy & Growth Roadmaps',
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The SEO Framework --- */}
      <section className='container px-4 mx-auto'>
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white'>
            Rank #1 and <span className='text-[#07A2FF]'>Stay There</span>
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed'>
            Organic search is the foundation of digital wealth. We don&apos;t
            just chase rankings; we chase revenue by putting you in front of
            users ready to convert.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {seoPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className='relative p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden'
              initial='rest'
              whileHover='hover'
              variants={cardHoverAnimation}
              custom={index}
            >
              <div
                className={`mb-6 p-3 rounded-xl w-fit text-white bg-gradient-to-br ${pillar.gradient}`}
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

      {/* --- Section 2: Growth Metrics (Dark Visual Section) --- */}
      <section className='bg-slate-950 py-20 text-white rounded-[3rem] mx-4 relative overflow-hidden'>
        <div
          className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'
          style={{
            backgroundImage: 'radial-gradient(#07A2FF 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className='container px-4 mx-auto relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>
            <motion.div className='flex-1' {...fadeIn(0.2)}>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FB9618]/20 border border-[#FB9618]/30 text-[#FB9618] text-xs font-bold mb-6'>
                <ArrowUpRight className='h-4 w-4' /> LONG-TERM ROI
              </div>
              <h3 className='text-3xl md:text-4xl font-bold mb-6'>
                Sustainable <span className='text-[#FB9618]'>Growth</span> That
                Compounds
              </h3>
              <p className='text-slate-400 text-lg mb-8'>
                Unlike paid ads that stop when the budget runs out, SEO keeps
                working 24/7. Our strategies focus on building an asset that
                grows in value over time, lowering your cost-per-acquisition
                year after year.
              </p>

              <div className='flex gap-8'>
                <div>
                  <div className='text-4xl font-bold text-[#07A2FF]'>93%</div>
                  <p className='text-xs text-slate-500 font-bold uppercase tracking-wider mt-1'>
                    Online journeys start here
                  </p>
                </div>
                <div>
                  <div className='text-4xl font-bold text-[#FB9618]'>2.5x</div>
                  <p className='text-xs text-slate-500 font-bold uppercase tracking-wider mt-1'>
                    Average Traffic Boost
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className='flex-1 w-full' {...fadeIn(0.3)}>
              <div className='bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10'>
                <BarChart className='h-10 w-10 text-[#07A2FF] mb-6' />
                <h4 className='text-xl font-bold mb-6'>The SEO Lifecycle</h4>
                <div className='space-y-6'>
                  {[
                    { label: 'Audit & Fix', val: '100%' },
                    { label: 'Keyword Dominance', val: '85%' },
                    { label: 'Content Authority', val: '92%' },
                  ].map((stat, i) => (
                    <div key={i} className='space-y-2'>
                      <div className='flex justify-between text-xs font-bold'>
                        <span className='text-slate-400'>{stat.label}</span>
                        <span>{stat.val}</span>
                      </div>
                      <div className='h-1.5 w-full bg-white/10 rounded-full overflow-hidden'>
                        <motion.div
                          className='h-full bg-gradient-to-r from-[#07A2FF] to-[#FB9618]'
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.val }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Advantage --- */}
      <section className='container px-4 mx-auto pb-24'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <motion.div
            className='flex-1 relative order-2 lg:order-1'
            {...fadeIn(0.4)}
          >
            <div className='bg-gradient-to-tr from-[#07A2FF] to-[#FB9618] p-1 rounded-[2.5rem]'>
              <div className='bg-card p-10 rounded-[calc(2.5rem-4px)] flex flex-col items-center text-center'>
                <Settings className='h-16 w-16 text-[#07A2FF] mb-6' />
                <h4 className='text-2xl font-bold mb-4'>
                  No Magic. Just Math.
                </h4>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Since 2012, we’ve navigated every major Google update. We use
                  advanced data analytics to determine exactly why your
                  competitors are ranking and what specific steps we need to
                  take to overtake them.
                </p>
                <div className='px-6 py-2 rounded-full bg-secondary font-bold text-sm'>
                  White-Hat Exclusive Strategies
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex-1 order-1 lg:order-2' {...fadeIn(0.3)}>
            <div className='bg-[#FB9618]/10 p-4 rounded-2xl w-fit mb-6'>
              <Zap className='h-8 w-8 text-[#FB9618]' />
            </div>
            <h3 className='text-3xl font-bold mb-6'>
              Why Your Brand Needs{' '}
              <span className='text-[#07A2FF]'>SEO Mastery</span>
            </h3>
            <p className='text-muted-foreground mb-8 text-lg leading-relaxed'>
              If your business isn&apos;t on the first page of search results,
              you&apos;re invisible. Our comprehensive SEO process covers the
              entire ecosystem of search to ensure you are the first choice for
              your customers.
            </p>
            <div className='space-y-4'>
              {highlights.map((item, i) => (
                <div key={i} className='flex items-center gap-4 group'>
                  <div className='h-6 w-6 rounded-full bg-[#07A2FF]/10 flex items-center justify-center group-hover:bg-[#07A2FF] transition-all duration-300'>
                    <CheckCircle2 className='h-4 w-4 text-[#07A2FF] group-hover:text-white' />
                  </div>
                  <span className='font-medium text-muted-foreground group-hover:text-[#07A2FF] transition-colors'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SEOContent;
