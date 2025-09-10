import React from 'react';
import { Linkedin, Mail, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import moazzamImage from '@/assets/moazzam-waheed.jpg';

export const Leadership = () => {
  return (
    <section className="py-20 section-compliance relative overflow-hidden">
      {/* Leadership Pulse Animation */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border-2 border-compliance-primary/20 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border-2 border-compliance-primary/30 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-compliance-primary mb-6">
            Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leader driving innovation in compliance technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 rounded-3xl p-8 md:p-12 shadow-compliance hover:shadow-glow transition-all duration-500 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={moazzamImage}
                    alt="Moazzam Waheed - CEO & Founder of ReguLattice"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Awards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-compliance-primary to-compliance-secondary text-compliance-foreground p-3 rounded-full shadow-glow">
                  <Award className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-regtech-primary to-regtech-secondary text-regtech-foreground p-3 rounded-full shadow-glow">
                  <Star className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold font-heading text-compliance-primary mb-2">
                    Moazzam Waheed
                  </h3>
                  <p className="text-xl text-compliance-accent font-medium mb-4">
                    CEO & Founder
                  </p>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      With over 15 years of experience in financial technology and regulatory compliance, 
                      Moazzam Waheed is a recognized leader in the intersection of AI and regulatory technology.
                    </p>
                    <p>
                      Previously serving as Chief Technology Officer at major financial institutions, 
                      he identified the critical need for intelligent automation in compliance processes, 
                      leading to the creation of ReguLattice.
                    </p>
                    <p>
                      Under his leadership, ReguLattice has grown to serve over 500 financial institutions 
                      worldwide, processing millions of compliance transactions with unparalleled accuracy and efficiency.
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-compliance-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-compliance-primary mb-1">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-regtech-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-regtech-primary mb-1">500+</div>
                    <div className="text-sm text-gray-600">Institutions Served</div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="compliance" className="group">
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                  </Button>
                  <Button variant="compliance-outline" className="group">
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-compliance-primary/5 to-regtech-primary/5 rounded-2xl p-8 shadow-elegant">
              <blockquote className="text-xl italic text-gray-700 font-medium leading-relaxed">
                "Our mission is to democratize compliance technology, making sophisticated AI-powered 
                tools accessible to financial institutions of all sizes. We believe that regulatory 
                excellence should be a competitive advantage, not a burden."
              </blockquote>
              <div className="mt-4 text-compliance-accent font-semibold">
                — Moazzam Waheed, CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};