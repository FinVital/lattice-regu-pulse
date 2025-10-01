import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingDown, Clock, DollarSign, Sparkles } from 'lucide-react';

export const ROICalculator = () => {
  const [companySize, setCompanySize] = useState('50-200');
  const [frameworks, setFrameworks] = useState<string[]>(['SOC 2']);
  const [results, setResults] = useState({
    traditionalCost: 0,
    regulatticeCost: 0,
    savings: 0,
    traditionalTime: 0,
    regulatticeTime: 0,
    timeSaved: 0,
  });

  const companySizes = [
    { value: '1-50', label: '1-50 employees' },
    { value: '50-200', label: '50-200 employees' },
    { value: '200-500', label: '200-500 employees' },
    { value: '500+', label: '500+ employees' },
  ];

  const availableFrameworks = [
    'SOC 2',
    'ISO 27001',
    'HIPAA',
    'PCI DSS',
    'GDPR',
  ];

  const toggleFramework = (framework: string) => {
    setFrameworks(prev => 
      prev.includes(framework) 
        ? prev.filter(f => f !== framework)
        : [...prev, framework]
    );
  };

  useEffect(() => {
    calculateROI();
  }, [companySize, frameworks]);

  const calculateROI = () => {
    // Base multipliers by company size
    const sizeMultipliers: { [key: string]: number } = {
      '1-50': 1,
      '50-200': 1.5,
      '200-500': 2,
      '500+': 3,
    };

    // Cost per framework (traditional vs ReguLattice)
    const frameworkCosts: { [key: string]: { traditional: number; regulattice: number } } = {
      'SOC 2': { traditional: 80000, regulattice: 14400 }, // $1,200/mo * 12
      'ISO 27001': { traditional: 100000, regulattice: 14400 },
      'HIPAA': { traditional: 60000, regulattice: 14400 },
      'PCI DSS': { traditional: 70000, regulattice: 14400 },
      'GDPR': { traditional: 50000, regulattice: 6000 }, // Starter plan
    };

    // Time in weeks
    const frameworkTime: { [key: string]: { traditional: number; regulattice: number } } = {
      'SOC 2': { traditional: 24, regulattice: 3 },
      'ISO 27001': { traditional: 32, regulattice: 4 },
      'HIPAA': { traditional: 20, regulattice: 3 },
      'PCI DSS': { traditional: 28, regulattice: 4 },
      'GDPR': { traditional: 16, regulattice: 2 },
    };

    const multiplier = sizeMultipliers[companySize] || 1;
    
    let traditionalCost = 0;
    let regulatticeCost = 0;
    let traditionalTime = 0;
    let regulatticeTime = 0;

    frameworks.forEach(framework => {
      const costs = frameworkCosts[framework];
      const time = frameworkTime[framework];
      
      traditionalCost += costs.traditional * multiplier;
      regulatticeCost += costs.regulattice;
      traditionalTime += time.traditional;
      regulatticeTime += time.regulattice;
    });

    setResults({
      traditionalCost,
      regulatticeCost,
      savings: traditionalCost - regulatticeCost,
      traditionalTime,
      regulatticeTime,
      timeSaved: traditionalTime - regulatticeTime,
    });
  };

  return (
    <section className="py-24 section-regtech relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-icon top-20 right-20">
          <DollarSign className="w-16 h-16 text-regtech-primary" />
        </div>
        <div className="floating-icon bottom-20 left-20" style={{ animationDelay: '2s' }}>
          <Calculator className="w-12 h-12 text-regtech-primary" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-regtech-primary/10 text-regtech-primary border-regtech-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Calculator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-regtech-primary mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you can save with ReguLattice's automated compliance platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-regtech-primary/20">
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <Label className="text-base font-semibold text-gray-800 mb-3 block">
                  Company Size
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {companySizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setCompanySize(size.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        companySize === size.value
                          ? 'border-regtech-primary bg-regtech-primary/10 text-regtech-primary font-semibold'
                          : 'border-gray-200 hover:border-regtech-primary/50'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <Label className="text-base font-semibold text-gray-800 mb-3 block">
                  Select Frameworks
                </Label>
                <div className="flex flex-wrap gap-3">
                  {availableFrameworks.map((framework) => (
                    <button
                      key={framework}
                      onClick={() => toggleFramework(framework)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        frameworks.includes(framework)
                          ? 'border-regtech-primary bg-regtech-primary text-white font-semibold'
                          : 'border-gray-200 hover:border-regtech-primary/50'
                      }`}
                    >
                      {framework}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Results Card */}
          <Card className="p-8 bg-gradient-to-br from-white to-regtech-primary/5 border-regtech-primary/20">
            <h3 className="text-2xl font-bold text-regtech-primary mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Your Potential Savings
            </h3>

            <div className="space-y-6">
              {/* Cost Savings */}
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-alert-green" />
                  <span className="text-gray-600 font-medium">Cost Savings</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Traditional Approach:</span>
                    <span className="font-semibold">${results.traditionalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">With ReguLattice:</span>
                    <span className="font-semibold">${results.regulatticeCost.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-alert-green">You Save:</span>
                      <span className="text-2xl font-bold text-alert-green">
                        ${results.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Savings */}
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-compliance-primary" />
                  <span className="text-gray-600 font-medium">Time Savings</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Traditional Approach:</span>
                    <span className="font-semibold">{results.traditionalTime} weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">With ReguLattice:</span>
                    <span className="font-semibold">{results.regulatticeTime} weeks</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-compliance-primary">You Save:</span>
                      <span className="text-2xl font-bold text-compliance-primary">
                        {results.timeSaved} weeks
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Badge */}
              <div className="p-4 bg-gradient-to-r from-regtech-primary/10 to-compliance-primary/10 rounded-lg text-center">
                <TrendingDown className="w-8 h-8 text-alert-green mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  That's a <span className="text-alert-green text-lg">
                    {Math.round((results.savings / results.traditionalCost) * 100)}%
                  </span> cost reduction!
                </p>
              </div>

              <Button className="w-full" size="lg" variant="default">
                Get Started Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
