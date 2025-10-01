import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'FinFlow Technologies',
      content: 'ReguLattice reduced our SOC 2 timeline from 6 months to just 3 weeks. The AI-powered automation saved us countless hours and over $150K in consulting fees.',
      rating: 5,
      initials: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Compliance',
      company: 'PayStream Inc',
      content: 'The gamified training approach transformed our team\'s engagement with compliance. What used to be a chore is now something they actually look forward to.',
      rating: 5,
      initials: 'MR',
    },
    {
      name: 'Emily Watson',
      role: 'CEO',
      company: 'SecureBank Solutions',
      content: 'The Trust Center feature alone has won us 3 major enterprise clients. Being able to share our real-time compliance status instantly builds credibility.',
      rating: 5,
      initials: 'EW',
    },
  ];

  const logos = [
    'FinFlow Tech',
    'PayStream',
    'SecureBank',
    'ComplianceFirst',
    'TrustGuard',
    'RegTech Pro',
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--compliance-primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-compliance-primary mb-4">
            Trusted by Leading Fintechs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that have accelerated their compliance journey with ReguLattice
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift bg-white border-gray-200 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-compliance-primary/10" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-alert-amber text-alert-amber" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 bg-compliance-primary/10 border-2 border-compliance-primary/20">
                    <AvatarFallback className="text-compliance-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-center text-gray-500 mb-8 uppercase tracking-wider text-sm font-medium">
            Powering Compliance For
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover-lift opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-gray-600 font-semibold text-sm text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-compliance-primary mb-2">500+</div>
            <p className="text-gray-600">Companies Trust Us</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-compliance-primary mb-2">85%</div>
            <p className="text-gray-600">Faster Compliance</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-compliance-primary mb-2">$200K+</div>
            <p className="text-gray-600">Average Savings</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-compliance-primary mb-2">4.9/5</div>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
