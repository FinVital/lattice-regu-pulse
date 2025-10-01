import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:info@regulattice.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Message Prepared",
        description: "Your default email client will open with the message ready to send.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@regulattice.com',
      link: 'mailto:info@regulattice.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+923346250250',
      link: 'tel:+923346250250'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '271 BMCHS Rd. 18, Karachi, Pakistan',
      link: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM EST',
      link: null
    }
  ];

  return (
    <section className="py-20 section-compliance relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-compliance-primary/10 via-white to-regtech-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(30,58,138,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-compliance-primary/20">
            <Mail className="w-4 h-4 text-compliance-primary" />
            <span className="text-compliance-primary font-semibold text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-compliance-accent mb-6">
            Contact Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your compliance operations? Let's discuss how ReguLattice can help your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-compliance border-0 hover:shadow-2xl transition-all duration-500">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-heading text-compliance-accent flex items-center space-x-2">
                <Send className="w-6 h-6 text-compliance-primary" />
                <span>Send Us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-compliance-primary/20 focus:border-compliance-primary focus:ring-compliance-primary/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-compliance-primary/20 focus:border-compliance-primary focus:ring-compliance-primary/20"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-compliance-primary/20 focus:border-compliance-primary focus:ring-compliance-primary/20"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-compliance-primary/20 focus:border-compliance-primary focus:ring-compliance-primary/20"
                      placeholder="Demo Request"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-compliance-primary/20 focus:border-compliance-primary focus:ring-compliance-primary/20 resize-none"
                    placeholder="Tell us about your compliance needs..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="compliance"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Preparing Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-compliance border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-heading text-compliance-accent">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-compliance-primary/10 rounded-lg flex items-center justify-center group-hover:bg-compliance-primary/20 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-compliance-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{info.label}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-compliance-primary hover:text-compliance-accent transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-compliance-primary to-compliance-secondary text-white border-0 shadow-compliance">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-compliance-foreground/90">
                  Book a personalized demo and see how ReguLattice can transform your compliance operations.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-compliance-primary hover:bg-gray-50"
                >
                  Book a Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};