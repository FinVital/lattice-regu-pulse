import React from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { USPs } from '@/components/USPs';
import { Pricing } from '@/components/Pricing';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background - Changes theme based on scroll position */}
      <AnimatedBackground theme="compliance" />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Features />
      <USPs />
      <Pricing />
      <Leadership />
      <Contact />
      <CTA />
      </main>
    </div>
  );
};

export default Index;