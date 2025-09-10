import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export const CTA = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-compliance-primary to-regtech-primary relative overflow-hidden">
      {/* Dynamic Lattice Reconnecting Animation */}
      <div className="absolute inset-0">
        {/* Animated Connection Lines */}
        <div className="absolute top-20 left-20 w-32 h-px bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
        <div className="absolute top-40 right-24 w-24 h-px bg-gradient-to-l from-white/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-28 h-px bg-gradient-to-r from-white/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-20 h-px bg-gradient-to-l from-white/30 to-transparent animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Lattice Nodes */}
        <div className="lattice-node w-3 h-3 top-20 left-20 bg-white/40" />
        <div className="lattice-node w-2 h-2 top-40 right-24 bg-white/50" style={{ animationDelay: '1s' }} />
        <div className="lattice-node w-4 h-4 bottom-32 left-32 bg-white/30" style={{ animationDelay: '2s' }} />
        <div className="lattice-node w-3 h-3 bottom-20 right-20 bg-white/40" style={{ animationDelay: '3s' }} />
        
        {/* Center Connection Hub */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-white/50 transform -translate-x-1/2 -translate-y-1/2 pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Compliance Operations?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Join 500+ financial institutions already using ReguLattice to streamline their regulatory workflows 
              and reduce compliance costs by up to 90%.
            </p>
          </div>

          {/* Value Props Quick List */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>30-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>SOC 2 Certified</span>
            </div>
          </div>

          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              size="xl"
              className={`
                group bg-white text-compliance-primary font-bold shadow-elegant transition-all duration-500
                ${hoveredButton === 'primary' ? 'shadow-glow scale-110' : 'hover:shadow-glow hover:scale-105'}
              `}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:text-yellow-500 transition-colors" />
              Start Free Trial Now
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="xl"
              className={`
                group border-2 border-white text-white bg-transparent font-bold transition-all duration-500
                ${hoveredButton === 'secondary' ? 'bg-white text-compliance-primary shadow-glow scale-110' : 'hover:bg-white hover:text-compliance-primary hover:shadow-glow hover:scale-105'}
              `}
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Enterprise Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-white/60 text-sm uppercase tracking-wider font-medium mb-6">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-white/60 text-sm">Institutions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-white/60 text-sm">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">90%</div>
                <div className="text-white/60 text-sm">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/60 text-sm">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-300/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-300/30">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Limited Time: Implementation support included free for the first 50 customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};