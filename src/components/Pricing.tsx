import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small institutions getting started with compliance automation',
    price: '$500',
    period: 'per month',
    theme: 'onboarding' as const,
    features: [
      'Up to 5+ KYC verifications/month',
      'Basic AML monitoring',
      'Standard reporting dashboard',
      'Email support',
      'API access',
      'Basic compliance templates',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    description: 'Advanced features for growing financial institutions',
    price: '$1,200',
    period: 'per month',
    theme: 'compliance' as const,
    popular: true,
    features: [
      'Up to 10,000 KYC verifications/month',
      'Advanced AML & fraud detection',
      'Custom reporting & analytics',
      'Priority support (24/7)',
      'Full API suite',
      'Advanced compliance workflows',
      'Risk scoring algorithms',
      'Multi-jurisdiction support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large-scale operations',
    price: 'Custom',
    period: 'pricing',
    theme: 'regtech' as const,
    features: [
      'Unlimited KYC verifications',
      'Enterprise AML suite',
      'White-label solutions',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security features',
      'Regulatory consulting',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 section-onboarding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-onboarding-primary/5 via-compliance-primary/5 to-regtech-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-onboarding-primary/20">
            <span className="w-2 h-2 bg-onboarding-primary rounded-full animate-pulse"></span>
            <span className="text-onboarding-primary font-semibold text-sm">Transparent Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-onboarding-accent mb-8 bg-gradient-to-r from-onboarding-primary via-compliance-primary to-regtech-primary bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Scale your compliance operations with transparent, predictable pricing. 
            <span className="block text-onboarding-primary font-semibold mt-2">Start small, grow big – we adapt with you</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`
                group relative overflow-hidden hover-lift transition-all duration-700 border-0
                ${plan.theme === 'compliance' ? 'bg-white/95 shadow-compliance hover:shadow-2xl' :
                  plan.theme === 'regtech' ? 'bg-white/95 shadow-regtech hover:shadow-2xl' :
                  'bg-white/95 shadow-onboarding hover:shadow-2xl'}
                ${plan.popular ? 'scale-105 pulse-glow ring-2 ring-compliance-primary/20' : 'hover:scale-102'}
                backdrop-blur-sm hover:bg-white transform-gpu
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-compliance-primary to-compliance-secondary text-compliance-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-glow whitespace-nowrap">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-heading text-gray-800 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className={`
                      text-4xl font-bold
                      ${plan.theme === 'compliance' ? 'text-compliance-primary' :
                        plan.theme === 'regtech' ? 'text-regtech-primary' :
                        'text-onboarding-primary'}
                    `}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500">/{plan.period.split(' ')[1]}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`
                        w-5 h-5 flex-shrink-0 mt-0.5
                        ${plan.theme === 'compliance' ? 'text-compliance-primary' :
                          plan.theme === 'regtech' ? 'text-regtech-primary' :
                          'text-onboarding-primary'}
                      `} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    variant={
                      plan.theme === 'compliance' ? 'compliance' :
                      plan.theme === 'regtech' ? 'regtech' :
                      'onboarding'
                    }
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                    {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              </CardContent>

              {/* Background Gradient Effect */}
              <div className={`
                absolute inset-0 opacity-5 pointer-events-none
                ${plan.theme === 'compliance' ? 'bg-gradient-to-br from-compliance-primary to-compliance-secondary' :
                  plan.theme === 'regtech' ? 'bg-gradient-to-br from-regtech-primary to-regtech-secondary' :
                  'bg-gradient-to-br from-onboarding-primary to-onboarding-secondary'}
              `} />
            </Card>
          ))}
        </div>

        {/* Add-ons & Early Adopter Program */}
        <div className="mt-16 text-center space-y-6">
          <div className="bg-white/80 rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold font-heading text-onboarding-accent mb-6">
              Add-ons & Special Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Specialized Compliance Modules</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-onboarding-primary" />
                    <span>HIPAA Compliance Module</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-onboarding-primary" />
                    <span>PCI DSS Compliance Module</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-onboarding-primary" />
                    <span>Custom Regulatory Frameworks</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-compliance-primary/10 to-regtech-primary/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Early Adopter Program</h4>
                <div className="text-3xl font-bold text-compliance-primary mb-2">15% OFF</div>
                <p className="text-gray-600 text-sm">
                  Special discount for pilot clients. Limited time offer for early adopters.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600">
            Need a custom solution? <a href="mailto:info@regulattice.com" className="text-onboarding-primary hover:text-onboarding-accent font-semibold">Contact our sales team</a> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};