import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Globe, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/compliance-hero.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-compliance overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-compliance-primary/10 via-transparent to-regtech-primary/10" />
      
      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield className="floating-icon w-8 h-8 text-compliance-primary top-20 left-20" />
        <Zap className="floating-icon w-6 h-6 text-regtech-primary top-40 right-32" />
        <Globe className="floating-icon w-7 h-7 text-onboarding-primary bottom-32 left-16" />
        <Shield className="floating-icon w-5 h-5 text-compliance-secondary top-60 right-20" />
      </div>

      {/* Fingerprint Waves */}
      <div className="absolute top-1/2 left-1/4 fingerprint-wave w-32 h-32 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 fingerprint-wave w-24 h-24 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-compliance-primary leading-tight">
              Achieve SOC 2 in{' '}
              <span className="text-regtech-primary">Weeks, Not Months</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ReguLattice automates regulatory compliance, KYC, and risk management with AI-driven insights. Get certified 85% faster than traditional approaches.
            </p>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-compliance-primary">3-4 weeks</div>
                <p className="text-sm text-gray-500">to SOC 2 ready</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-regtech-primary">85%</div>
                <p className="text-sm text-gray-500">faster than manual</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-compliance-primary">$200K+</div>
                <p className="text-sm text-gray-500">average savings</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="compliance-outline" size="xl">
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Trusted by Leading Financial Institutions
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-white/80 px-6 py-3 rounded-lg shadow-sm">
                <span className="text-compliance-primary font-semibold">SOC 2 Certified</span>
              </div>
              <div className="bg-white/80 px-6 py-3 rounded-lg shadow-sm">
                <span className="text-regtech-primary font-semibold">GDPR Compliant</span>
              </div>
              <div className="bg-white/80 px-6 py-3 rounded-lg shadow-sm">
                <span className="text-onboarding-primary font-semibold">PCI DSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronRight className="w-6 h-6 text-compliance-primary transform rotate-90" />
        </div>
      </div>
    </section>
  );
};