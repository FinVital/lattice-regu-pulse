import React from 'react';
import { Award, Globe, Clock, ShieldCheck } from 'lucide-react';

const usps = [
  {
    icon: Award,
    badge: 'AI-Powered',
    title: 'AI-Powered Compliance Engine',
    description: 'Advanced machine learning algorithms automate compliance processes and provide intelligent insights.',
    color: 'compliance' as const,
  },
  {
    icon: ShieldCheck,
    badge: 'Real-Time',
    title: 'Real-Time Fraud & Risk Detection',
    description: 'Continuous monitoring with real-time alerts to identify and prevent compliance risks before they escalate.',
    color: 'regtech' as const,
  },
  {
    icon: Globe,
    badge: 'Gamified',
    title: 'Gamified Compliance Training for Engagement',
    description: 'Interactive, engaging training modules that improve compliance knowledge retention and participation.',
    color: 'onboarding' as const,
  },
  {
    icon: Clock,
    badge: 'One-Click',
    title: 'One-Click Trust Center Sharing',
    description: 'Instantly share compliance status and certifications with customers and auditors through our trust center.',
    color: 'compliance' as const,
  },
];

export const USPs = () => {
  return (
    <section className="py-20 section-regtech relative overflow-hidden">
      {/* Floating Badge Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Award className="floating-icon w-12 h-12 text-regtech-primary/20 top-20 left-16" style={{ animationDelay: '0s' }} />
        <Globe className="floating-icon w-10 h-10 text-regtech-accent/25 top-1/3 right-20" style={{ animationDelay: '2s' }} />
        <Clock className="floating-icon w-8 h-8 text-regtech-secondary/20 bottom-32 left-24" style={{ animationDelay: '4s' }} />
        <ShieldCheck className="floating-icon w-11 h-11 text-regtech-primary/30 bottom-20 right-32" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-regtech-accent mb-6">
            Why Choose ReguLattice?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading certifications and capabilities that set us apart in the compliance technology landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative bg-white/80 rounded-2xl p-8 hover-lift shadow-regtech hover:shadow-glow transition-all duration-500"
            >
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className={`
                  px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-300 group-hover:scale-110
                  ${usp.color === 'compliance' ? 'bg-compliance-primary text-compliance-foreground' :
                    usp.color === 'regtech' ? 'bg-regtech-primary text-regtech-foreground' :
                    'bg-onboarding-primary text-onboarding-foreground'}
                `}>
                  {usp.badge}
                </div>
              </div>

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className={`
                  flex-shrink-0 p-4 rounded-xl transition-all duration-300 group-hover:scale-110
                  ${usp.color === 'compliance' ? 'bg-compliance-primary/10' :
                    usp.color === 'regtech' ? 'bg-regtech-primary/10' :
                    'bg-onboarding-primary/10'}
                `}>
                  <usp.icon className={`
                    w-8 h-8 transition-all duration-300
                    ${usp.color === 'compliance' ? 'text-compliance-primary' :
                      usp.color === 'regtech' ? 'text-regtech-primary' :
                      'text-onboarding-primary'}
                  `} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold font-heading text-gray-800 group-hover:text-regtech-accent transition-colors duration-300">
                    {usp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect - Animated Border */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none
                ${usp.color === 'compliance' ? 'bg-gradient-to-r from-compliance-primary/5 via-transparent to-compliance-secondary/5' :
                  usp.color === 'regtech' ? 'bg-gradient-to-r from-regtech-primary/5 via-transparent to-regtech-secondary/5' :
                  'bg-gradient-to-r from-onboarding-primary/5 via-transparent to-onboarding-secondary/5'}
              `} />

              {/* Orbiting Animation on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className={`
                  absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2
                  ${usp.color === 'compliance' ? 'bg-compliance-primary' :
                    usp.color === 'regtech' ? 'bg-regtech-primary' :
                    'bg-onboarding-primary'}
                `} style={{
                  animation: 'orbit 3s linear infinite',
                  transformOrigin: '0 60px'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white/60 rounded-2xl p-8 shadow-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-regtech-primary mb-2">500+</div>
              <div className="text-gray-600">Institutions Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-regtech-primary mb-2">99.99%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-regtech-primary mb-2">150+</div>
              <div className="text-gray-600">Jurisdictions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-regtech-primary mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};