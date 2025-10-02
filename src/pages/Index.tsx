import React from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TrustCenter } from '@/components/TrustCenter';
import { Features } from '@/components/Features';
import { USPs } from '@/components/USPs';
import { ROICalculator } from '@/components/ROICalculator';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { GrokWidget } from '@/components/GrokWidget';


const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background - Changes theme based on scroll position */}
      <AnimatedBackground theme="compliance" />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <TrustCenter />
        <Features />
        <USPs />
        <ROICalculator />
        <Pricing />
        <Testimonials />
        <Leadership />
        <Contact />
        <CTA />
      </main>
      <GrokWidget />
    </div>
  );
};

export default Index;
