import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';

export const TrustCenter = () => {
  const [complianceScore, setComplianceScore] = useState(0);

  useEffect(() => {
    // Animate compliance score on mount
    const timer = setInterval(() => {
      setComplianceScore(prev => {
        if (prev >= 94) {
          clearInterval(timer);
          return 94;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const complianceItems = [
    { name: 'SOC 2 Type II', status: 'active', progress: 94, daysToComplete: 8 },
    { name: 'ISO 27001', status: 'active', progress: 87, daysToComplete: 15 },
    { name: 'GDPR', status: 'active', progress: 100, daysToComplete: 0 },
    { name: 'HIPAA', status: 'progress', progress: 72, daysToComplete: 22 },
    { name: 'PCI DSS', status: 'progress', progress: 68, daysToComplete: 28 },
  ];

  const recentActivity = [
    { action: 'Evidence uploaded', framework: 'SOC 2', time: '2 mins ago' },
    { action: 'Control mapped', framework: 'ISO 27001', time: '15 mins ago' },
    { action: 'Audit completed', framework: 'GDPR', time: '1 hour ago' },
  ];

  return (
    <section className="py-24 section-compliance relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="lattice-node w-32 h-32 top-20 left-10" />
        <div className="lattice-node w-24 h-24 top-40 right-20" style={{ animationDelay: '1s' }} />
        <div className="lattice-node w-20 h-20 bottom-32 left-1/4" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-compliance-primary/10 text-compliance-primary border-compliance-primary/20">
            Live Trust Center Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-compliance-primary mb-4">
            Real-Time Compliance Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how ReguLattice provides instant visibility into your compliance posture with live tracking and automated updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Compliance Score */}
          <Card className="lg:col-span-2 p-8 hover-lift bg-white/80 backdrop-blur-sm border-compliance-primary/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-compliance-primary">Compliance Overview</h3>
              <Shield className="w-8 h-8 text-compliance-primary" />
            </div>

            {/* Overall Score */}
            <div className="mb-8 p-6 bg-gradient-to-br from-compliance-primary/5 to-regtech-primary/5 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Overall Compliance Score</span>
                <TrendingUp className="w-5 h-5 text-alert-green" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-compliance-primary">{complianceScore}%</span>
                <span className="text-alert-green text-lg mb-2">+12% this month</span>
              </div>
              <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-compliance-primary to-regtech-primary transition-all duration-1000"
                  style={{ width: `${complianceScore}%` }}
                />
              </div>
            </div>

            {/* Framework Status */}
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {item.status === 'active' ? (
                        <CheckCircle className="w-5 h-5 text-alert-green" />
                      ) : (
                        <Clock className="w-5 h-5 text-alert-amber" />
                      )}
                      <span className="font-semibold text-gray-800">{item.name}</span>
                    </div>
                    <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                      {item.progress}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          item.status === 'active' ? 'bg-alert-green' : 'bg-alert-amber'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="whitespace-nowrap">
                      {item.daysToComplete === 0 ? 'Complete' : `${item.daysToComplete} days left`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 hover-lift bg-white/80 backdrop-blur-sm border-regtech-primary/20">
            <h3 className="text-xl font-bold text-regtech-primary mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-compliance-primary mt-2" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.framework}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-compliance-primary/10 to-regtech-primary/10 rounded-lg">
              <p className="text-sm font-medium text-center text-gray-700">
                🚀 On track for SOC 2 completion in <span className="text-compliance-primary font-bold">8 days</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'HIPAA Compliant'].map((badge, index) => (
            <div key={index} className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 text-center hover-lift">
              <Shield className="w-8 h-8 text-compliance-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
