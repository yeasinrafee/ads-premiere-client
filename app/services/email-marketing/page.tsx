'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MousePointerClick,
  Zap,
  ShieldCheck,
  BarChart,
  Users,
  Layout,
  RefreshCcw,
  CheckCircle2,
} from 'lucide-react';
import { fadeIn, cardHoverAnimation } from '@/lib/animations';

function EmailMarketingContent() {
  const steps = [
    {
      title: 'Strategy & List Segmentation',
      desc: "We don't blast emails. We segment your audience based on behavior, ensuring the right message reaches the right person at the right time.",
      icon: <Users className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
    {
      title: 'Custom Template Design',
      desc: "Responsive, high-converting templates designed to match your brand's aesthetic while passing spam filters and looking great on mobile.",
      icon: <Layout className='h-6 w-6' />,
      gradient: 'from-[#FB9618] to-[#FB961890]',
    },
    {
      title: 'Automation & Workflows',
      desc: 'Set it and forget it. We build abandoned cart recovery, welcome sequences, and post-purchase follow-ups that sell while you sleep.',
      icon: <RefreshCcw className='h-6 w-6' />,
      gradient: 'from-[#07A2FF] to-[#07A2FF90]',
    },
  ];

  const highlights = [
    'A/B Testing for Subject Lines & CTA',
    'Spam Compliance & Domain Warm-up',
    'Detailed Analytics (Open rates, CTR, Revenue)',
    'Personalized Dynamic Content',
    'Newsletter Management & Copywriting',
  ];

  return (
    <div className='space-y-24 py-24 mt-24'>
      {/* --- Section 1: The Strategic Pillars --- */}
      <section className='container px-4 mx-auto'>
        <motion.div className='text-center mb-16' {...fadeIn(0.1)}>
          <h2 className='text-3xl md:text-5xl font-bold mb-6'>
            The Highest <span className='text-[#FB9618]'>ROI</span> Channel
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Own your audience. Stop relying solely on algorithms and start
            building a direct line to your customers inboxes with Ads Premiere.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='relative p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow'
              initial='rest'
              whileHover='hover'
              variants={cardHoverAnimation}
              custom={index}
            >
              <div
                className={`mb-6 p-3 rounded-lg w-fit text-white bg-gradient-to-br ${step.gradient}`}
              >
                {step.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{step.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Technical Excellence (Dark Section) --- */}
      <section className='bg-slate-900 py-16 text-white rounded-3xl mx-4'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <motion.div className='text-left max-w-xl' {...fadeIn(0.2)}>
              <div className='flex items-center gap-3 mb-4'>
                <ShieldCheck className='text-[#07A2FF] h-8 w-8' />
                <h3 className='text-2xl font-bold'>
                  100% Inbox Deliverability
                </h3>
              </div>
              <p className='text-slate-400'>
                We manage your sender reputation and DNS settings (SPF, DKIM,
                DMARC) to ensure your emails land in the primary inbox—not the
                spam folder.
              </p>
            </motion.div>

            <div className='grid grid-cols-2 gap-8 w-full md:w-auto'>
              <motion.div className='text-center' {...fadeIn(0.3)}>
                <div className='text-4xl font-bold text-[#FB9618]'>42:1</div>
                <div className='text-xs text-slate-500 uppercase font-bold mt-1'>
                  Average ROI
                </div>
              </motion.div>
              <motion.div className='text-center' {...fadeIn(0.4)}>
                <div className='text-4xl font-bold text-[#07A2FF]'>~25%</div>
                <div className='text-xs text-slate-500 uppercase font-bold mt-1'>
                  Open Rate Goal
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Feature Breakdown --- */}
      <section className='container px-4 mx-auto pb-20'>
        <div className='flex flex-col lg:flex-row items-center gap-24'>
          <motion.div
            className='flex-1 order-2 lg:order-1 bg-gradient-to-br from-[#FB9618]/10 to-[#07A2FF]/10 p-1 rounded-3xl'
            {...fadeIn(0.3)}
          >
            <div className='bg-card p-8 rounded-[calc(1.5rem-1px)] border border-border'>
              <MousePointerClick className='h-12 w-12 text-[#07A2FF] mb-6' />
              <h4 className='text-2xl font-bold mb-4'>
                Data-Driven Copywriting
              </h4>
              <p className='text-muted-foreground mb-6'>
                Our copywriters specialize in psychological triggers that
                encourage clicks. From curiosity-driven subject lines to clear,
                persuasive calls to action, every word is designed to drive
                revenue for your agency.
              </p>
              <div className='space-y-4'>
                <div className='flex justify-between text-xs font-bold mb-1 uppercase'>
                  <span>Conversion Optimization</span>
                  <span>92%</span>
                </div>
                <div className='h-2 w-full bg-secondary rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-[#FB9618]'
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex-1 order-1 lg:order-2' {...fadeIn(0.4)}>
            <h3 className='text-3xl font-bold mb-8 text-[#07A2FF]'>
              Why Ads Premiere Email?
            </h3>
            <div className='grid gap-6'>
              {highlights.map((item, i) => (
                <div key={i} className='flex items-center gap-4 group'>
                  <div className='bg-[#07A2FF]/10 p-2 rounded-full group-hover:bg-[#07A2FF] transition-colors'>
                    <CheckCircle2 className='h-5 w-5 text-[#07A2FF] group-hover:text-white' />
                  </div>
                  <span className='text-lg font-medium'>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Ensure Default Export for Next.js Routing
export default EmailMarketingContent;
