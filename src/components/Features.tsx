import React, { useState } from 'react';
import { Bot, Shield, FileText, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Users,
    title: 'Digital Onboarding & KYC Automation',
    description: 'Streamline customer onboarding with automated identity verification, risk scoring, and compliance checks.',
    theme: 'compliance' as const,
  },
  {
    icon: FileText,
    title: 'Evidence & Audit Mapping with AI',
    description: 'AI-powered mapping of evidence and audit trails for comprehensive compliance documentation.',
    theme: 'regtech' as const,
  },
  {
    icon: Shield,
    title: 'Vendor Risk Monitoring',
    description: 'Comprehensive third-party risk assessment and ongoing monitoring to ensure vendor compliance standards.',
    theme: 'onboarding' as const,
  },
  {
    icon: TrendingUp,
    title: 'Trust Center for Customers & Auditors',
    description: 'Centralized trust center providing transparency and easy access for customers and auditors.',
    theme: 'compliance' as const,
  },
  {
    icon: Bot,
    title: 'Gamified Compliance Training',
    description: 'Engaging, gamified approach to compliance training that improves retention and participation.',
    theme: 'regtech' as const,
  },
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Advanced analytics and intelligent insights to predict risks and optimize compliance processes.',
    theme: 'onboarding' as const,
  },
];

export const Features = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardClasses = (theme: 'compliance' | 'regtech' | 'onboarding', index: number) => {
    const baseClasses = "hover-lift transition-all duration-300 border-0 relative overflow-hidden";
    const isHovered = hoveredCard === index;
    
    switch (theme) {
      case 'compliance':
        return `${baseClasses} bg-white/90 shadow-compliance ${isHovered ? 'shadow-glow scale-105' : ''}`;
      case 'regtech':
        return `${baseClasses} bg-white/90 shadow-regtech ${isHovered ? 'shadow-glow scale-105' : ''}`;
      case 'onboarding':
        return `${baseClasses} bg-white/90 shadow-onboarding ${isHovered ? 'shadow-glow scale-105' : ''}`;
    }
  };

  const getIconClasses = (theme: 'compliance' | 'regtech' | 'onboarding') => {
    switch (theme) {
      case 'compliance':
        return 'text-compliance-primary';
      case 'regtech':
        return 'text-regtech-primary';
      case 'onboarding':
        return 'text-onboarding-primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-compliance-bg-start to-onboarding-bg-end relative overflow-hidden">
      {/* Floating Document Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <FileText className="floating-icon w-8 h-8 text-compliance-primary/20 top-16 left-20" />
        <Shield className="floating-icon w-6 h-6 text-regtech-primary/20 top-1/4 right-24" />
        <Bot className="floating-icon w-10 h-10 text-onboarding-primary/20 bottom-20 left-32" />
        <TrendingUp className="floating-icon w-7 h-7 text-compliance-secondary/20 bottom-1/3 right-16" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-compliance-primary mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful capabilities that make ReguLattice the leading choice for modern compliance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={getCardClasses(feature.theme, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-elegant">
                  <feature.icon className={`w-8 h-8 ${getIconClasses(feature.theme)}`} />
                </div>
                <CardTitle className="text-xl font-heading text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Hover Effect Gradient */}
              {hoveredCard === index && (
                <div className={`absolute inset-0 opacity-10 rounded-lg transition-all duration-300 ${
                  feature.theme === 'compliance' ? 'bg-gradient-to-br from-compliance-primary to-compliance-secondary' :
                  feature.theme === 'regtech' ? 'bg-gradient-to-br from-regtech-primary to-regtech-secondary' :
                  'bg-gradient-to-br from-onboarding-primary to-onboarding-secondary'
                }`} />
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the future of compliance technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-compliance-primary text-compliance-foreground rounded-lg font-semibold hover:bg-compliance-accent transition-all duration-300 shadow-compliance hover:shadow-glow hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-regtech-primary text-regtech-primary rounded-lg font-semibold hover:bg-regtech-primary hover:text-regtech-foreground transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};