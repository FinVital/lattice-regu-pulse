import React from 'react';
import { Shield, Lock, Fingerprint, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <section className="py-20 section-regtech relative overflow-hidden">
      {/* Floating Security Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield className="floating-icon w-12 h-12 text-regtech-primary/30 top-20 right-20" />
        <Lock className="floating-icon w-8 h-8 text-regtech-accent/40 top-1/3 left-16" />
        <Fingerprint className="floating-icon w-10 h-10 text-regtech-primary/35 bottom-32 right-32" />
        <CheckCircle className="floating-icon w-9 h-9 text-regtech-secondary/30 bottom-20 left-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-regtech-accent">
                About ReguLattice
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At ReguLattice, we believe compliance should empower—not slow down—innovation. Founded by Moazzam Waheed, 
                our mission is to simplify regulatory complexity through intelligent automation, AI-powered verification, 
                and a modern compliance experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-regtech-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading text-regtech-accent mb-2">
                    Advanced Security
                  </h3>
                  <p className="text-gray-600">
                    Bank-grade encryption and security protocols protect sensitive compliance data with military-level standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Fingerprint className="w-8 h-8 text-regtech-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading text-regtech-accent mb-2">
                    Smart Identity Verification
                  </h3>
                  <p className="text-gray-600">
                    AI-powered KYC processes reduce verification time by 90% while maintaining highest accuracy standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lock className="w-8 h-8 text-regtech-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading text-regtech-accent mb-2">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600">
                    Stay ahead of evolving regulations with automated compliance monitoring and real-time risk assessment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="regtech" size="lg">
                Learn More About Our Technology
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-regtech-primary/20 to-regtech-accent/20 rounded-3xl p-8 hover-lift">
              <div className="h-full bg-white/80 rounded-2xl shadow-regtech p-8 flex flex-col justify-center items-center space-y-6">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-regtech-primary">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-regtech-primary">90%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-regtech-primary">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-regtech-primary">150+</div>
                    <div className="text-sm text-gray-600">Regulations</div>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-regtech-primary/30 to-transparent" />
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-regtech-accent mb-2">
                    Compliance Excellence
                  </div>
                  <div className="text-sm text-gray-600">
                    Trusted by 500+ institutions worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};