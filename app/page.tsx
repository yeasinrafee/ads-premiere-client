'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Features } from '@/components/sections/Features';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Stats } from '@/components/sections/Stats';
import { Leadership } from '@/components/sections/Leadership';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Pricing } from '@/components/sections/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Features />
      <Process />
      <Pricing />
      <Stats />
      {/* <Leadership /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
