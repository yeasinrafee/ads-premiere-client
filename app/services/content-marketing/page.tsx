'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  PenTool,
  FileText,
  Video,
  BarChart3,
  Zap,
  CheckCircle2,
  MessageSquare,
  Globe,
  Lightbulb,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

function ContentMarketingContent() {
  const contentPillars = [
    {
      title: 'Content Strategy',
      desc: "We don't just write; we plan. We develop a data-driven roadmap that aligns your brand stories with the specific pain points of your target audience.",
      icon: <Lightbulb className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'High-Authority Blogging',
      desc: 'SEO-optimized articles that position your agency as a thought leader while driving consistent organic traffic and capturing inbound leads.',
      icon: <FileText className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Visual Storytelling',
      desc: 'From infographics to video scripts, we create high-impact visual assets that simplify complex ideas and increase shareability across social platforms.',
      icon: <Video className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  const highlights = [
    'Expert Copywriting & Editing',
    'Content Distribution & Promotion',
    'SEO-First Topic Research',
    'White-paper & Case Study Development',
    'Content Audit & Performance Tracking',
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The Authority Pillars --- */}
      <section className='container px-4 mx-auto'>
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white'>
            Content That <span className='text-[#FB9618]'>Converts</span>
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed'>
            In a world of noise, quality is the only way to stand out. At Ads
            Premiere, we create strategic content that builds trust, educates
            your buyers, and fuels your growth.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {contentPillars.map((pillar, index) => (
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

      {/* --- Section 2: The Content Flywheel (Dark Section) --- */}
      <section className='bg-slate-900 py-20 text-white rounded-[3rem] mx-4 relative overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-[#FB9618] rounded-full blur-[160px] opacity-10' />
        <div className='container px-4 mx-auto relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>
            <motion.div className='flex-1' {...fadeIn(0.2)}>
              <h3 className='text-3xl md:text-4xl font-bold mb-6'>
                Building Your{' '}
                <span className='text-[#07A2FF]'>Digital Legacy</span>
              </h3>
              <p className='text-slate-400 text-lg mb-8 leading-relaxed'>
                Ad campaigns end, but great content is evergreen. We help you
                build a library of assets that continue to attract, engage, and
                convert customers years after they are first published.
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='p-6 rounded-2xl bg-white/5 border border-white/10 text-center'>
                  <div className='text-4xl font-bold text-[#FB9618]'>3x</div>
                  <div className='text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1'>
                    More Leads than Paid Search
                  </div>
                </div>
                <div className='p-6 rounded-2xl bg-white/5 border border-white/10 text-center'>
                  <div className='text-4xl font-bold text-[#07A2FF]'>62%</div>
                  <div className='text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1'>
                    Less Costly Than Outbound
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className='flex-1 w-full lg:w-auto' {...fadeIn(0.3)}>
              <div className='bg-slate-800/50 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm relative group'>
                <div className='absolute top-0 right-0 p-4'>
                  <Zap className='h-6 w-6 text-[#FB9618] animate-pulse' />
                </div>
                <h4 className='text-2xl font-bold mb-6 flex items-center gap-3'>
                  <MessageSquare className='text-[#07A2FF]' /> Viral Potential
                </h4>
                <div className='space-y-6'>
                  <p className='text-slate-400'>
                    We optimize every piece of content for social engagement. By
                    combining psychology with data, we increase the
                    &quot;shareability&quot; of your brand stories.
                  </p>
                  <div className='h-2 w-full bg-slate-700 rounded-full overflow-hidden'>
                    <motion.div
                      className='h-full bg-gradient-to-r from-[#07A2FF] to-[#FB9618]'
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <div className='flex justify-between text-[10px] font-bold text-slate-500'>
                    <span>ENGAGEMENT RATE</span>
                    <span className='text-white'>88% TARGET REACH</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Value Checklist --- */}
      <section className='container px-4 mx-auto pb-24'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <motion.div className='flex-1' {...fadeIn(0.3)}>
            <div className='bg-[#07A2FF]/10 p-4 rounded-2xl w-fit mb-6'>
              <PenTool className='h-8 w-8 text-[#07A2FF]' />
            </div>
            <h3 className='text-3xl font-bold mb-6'>
              Why <span className='text-[#07A2FF]'>Ads Premiere</span> Content?
            </h3>
            <p className='text-muted-foreground mb-10 text-lg leading-relaxed'>
              We don&apos;t believe in &quot;fluff.&quot; Every word we write is
              designed to serve a purpose: either to rank your site higher or to
              convince your customer to take action. Our 14 years of IT
              experience allow us to write with technical authority.
            </p>
            <div className='grid sm:grid-cols-2 gap-4'>
              {highlights.map((item, i) => (
                <div key={i} className='flex items-center gap-3 group'>
                  <CheckCircle2 className='h-5 w-5 text-[#FB9618] group-hover:scale-125 transition-transform' />
                  <span className='font-semibold text-muted-foreground text-sm md:text-base'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='flex-1 relative order-first lg:order-last'
            {...fadeIn(0.4)}
          >
            <div className='relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white dark:border-slate-800'>
              <div className='aspect-square md:aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-12'>
                <div className='text-center'>
                  <BarChart3 className='h-20 w-20 text-[#07A2FF] mx-auto mb-6 opacity-40 group-hover:rotate-12 transition-transform duration-500' />
                  <div className='font-bold text-slate-400 uppercase tracking-widest text-sm'>
                    ROI-Focused Content
                  </div>
                  <Globe className='h-6 w-6 text-[#FB9618] mx-auto mt-4 opacity-50' />
                </div>
              </div>
            </div>
            {/* Decorative Background Blob */}
            <div className='absolute -z-10 -bottom-6 -left-6 w-48 h-48 bg-[#07A2FF] rounded-full blur-[80px] opacity-20' />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContentMarketingContent;
