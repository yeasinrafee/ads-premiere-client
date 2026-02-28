'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus,
  Magnet,
  Filter,
  BarChart4,
  Zap,
  CheckCircle2,
  PieChart,
  Search,
  ArrowRight,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

function LeadGenerationContent() {
  const process = [
    {
      title: 'Audience Identification',
      desc: "We define your 'Ideal Customer Profile' (ICP) using data-driven research to find the high-intent prospects most likely to buy.",
      icon: <Search className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'Multi-Channel Outreach',
      desc: "Leveraging LinkedIn, Meta, and Cold Email to create a 'surround-sound' effect that keeps your brand top-of-mind for key decision makers.",
      icon: <Magnet className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Lead Qualification',
      desc: "We don't just send clicks; we send customers. Our funnel filters out low-quality leads, so your sales team only talks to serious buyers.",
      icon: <Filter className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  const highlights = [
    'B2B & B2C Lead Scouring',
    'Custom Landing Page Optimization',
    'CRM Integration (Hubspot, Salesforce, etc.)',
    'Lead Nurturing Automation',
    'Verified Contact Data (Email/Phone)',
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The Funnel Strategy --- */}
      <section className='container px-4 mx-auto'>
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Turn Traffic into <span className='text-[#07A2FF]'>Revenue</span>
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Stop chasing leads and start attracting them. At Ads Premiere, we
            build predictable systems that fill your calendar with qualified
            appointments.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {process.map((item, index) => (
            <motion.div
              key={index}
              className='relative p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden'
              initial='rest'
              whileHover='hover'
              variants={cardHoverAnimation}
              custom={index}
            >
              <div
                className={`mb-6 p-3 rounded-lg w-fit text-white bg-gradient-to-br ${item.gradient}`}
              >
                {item.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{item.title}</h3>
              <p className='text-muted-foreground leading-relaxed italic'>
                &quot;{item.desc}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Conversion Power (Dark Metric Section) --- */}
      <section className='bg-slate-900 py-20 text-white rounded-[2.5rem] mx-4 overflow-hidden relative'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-[#FB9618] rounded-full blur-[120px] opacity-10' />
        <div className='container px-4 mx-auto relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div {...fadeIn(0.2)}>
              <h3 className='text-3xl font-bold mb-6'>
                Scaling Your{' '}
                <span className='text-[#FB9618]'>Sales Pipeline</span>
              </h3>
              <p className='text-slate-400 text-lg mb-8'>
                Most agencies focus on &quot;Reach.&quot; We focus on
                &quot;Sales Readiness.&quot; Our lead generation infrastructure
                is built to lower your Cost Per Acquisition (CPA) while
                increasing Lead Quality Score.
              </p>
              <div className='flex gap-10'>
                <div>
                  <div className='text-4xl font-bold text-[#07A2FF]'>3.5x</div>
                  <div className='text-xs text-slate-500 uppercase font-bold tracking-widest mt-1'>
                    Avg. ROI
                  </div>
                </div>
                <div>
                  <div className='text-4xl font-bold text-[#FB9618]'>24/7</div>
                  <div className='text-xs text-slate-500 uppercase font-bold tracking-widest mt-1'>
                    Lead Capture
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='bg-slate-800/50 p-8 rounded-3xl border border-slate-700'
              {...fadeIn(0.3)}
            >
              <div className='flex items-center gap-4 mb-8'>
                <BarChart4 className='h-10 w-10 text-[#07A2FF]' />
                <h4 className='text-xl font-bold'>Monthly Lead Growth</h4>
              </div>
              <div className='space-y-6'>
                {[70, 85, 95].map((width, i) => (
                  <div key={i} className='space-y-2'>
                    <div className='flex justify-between text-xs font-semibold text-slate-400 uppercase'>
                      <span>Month {i + 1} Optimization</span>
                      <span>{width}%</span>
                    </div>
                    <div className='h-1.5 w-full bg-slate-700 rounded-full overflow-hidden'>
                      <motion.div
                        className='h-full bg-gradient-to-r from-[#07A2FF] to-[#FB9618]'
                        initial={{ width: 0 }}
                        whileInView={{ width: `${width}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Value Checklist --- */}
      <section className='container px-4 mx-auto pb-20'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <motion.div className='flex-1' {...fadeIn(0.3)}>
            <div className='bg-[#07A2FF]/10 p-4 rounded-2xl w-fit mb-6'>
              <Zap className='h-8 w-8 text-[#07A2FF]' />
            </div>
            <h3 className='text-3xl font-bold mb-6'>
              Why Your Sales Team Will{' '}
              <span className='text-[#FB9618]'>Love Us</span>
            </h3>
            <p className='text-muted-foreground mb-10 text-lg'>
              We eliminate the &quot;busy work&quot; of prospecting. By the time
              a lead reaches your CRM, they have already been educated about
              your brand and are ready for a demo or call.
            </p>
            <div className='grid sm:grid-cols-2 gap-4'>
              {highlights.map((item, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-[#07A2FF] shrink-0' />
                  <span className='font-medium text-sm md:text-base text-muted-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className='flex-1 relative group' {...fadeIn(0.4)}>
            <div className='absolute inset-0 bg-gradient-to-tr from-[#07A2FF] to-[#FB9618] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity' />
            <div className='relative bg-card border border-border p-10 rounded-3xl shadow-xl'>
              <PieChart className='h-16 w-16 text-[#FB9618] mb-6 mx-auto' />
              <h4 className='text-2xl font-bold text-center mb-4 text-[#07A2FF]'>
                High-Intent Prospecting
              </h4>
              <p className='text-center text-muted-foreground leading-relaxed'>
                We utilize advanced intent-data scraping to find companies that
                are actively searching for your solutions right now. It&apos;s
                not just marketing; it&apos;s a surgical strike on your most
                profitable opportunities.
              </p>
              <div className='mt-8 pt-8 border-t border-dashed flex justify-center'>
                <div className='flex items-center gap-2 text-[#FB9618] font-bold group-hover:gap-4 transition-all cursor-pointer'>
                  Book A Demo <ArrowRight className='h-5 w-5' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default LeadGenerationContent;
