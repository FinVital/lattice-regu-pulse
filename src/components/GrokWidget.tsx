import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const GrokWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hi! I\'m your ReguLattice AI assistant. Ask me anything about compliance, SOC 2, or how our platform can help your business!' 
    }
  ]);
  const [input, setInput] = useState('');

  const suggestedQuestions = [
    'How fast can I get SOC 2 certified?',
    'What does ReguLattice cost?',
    'What frameworks do you support?',
    'How does the AI automation work?',
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'soc 2': 'Most clients achieve SOC 2 Type II readiness in just 3-4 weeks with ReguLattice! Our AI automation handles evidence collection, control mapping, and audit prep automatically.',
        'cost': 'We offer three tiers: Starter ($500/mo), Pro ($1,200/mo), and custom Enterprise pricing. All plans include AI automation and our Trust Center. Early adopters get 15% off!',
        'framework': 'ReguLattice supports SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, and more. Our AI adapts to any compliance framework you need.',
        'automation': 'Our AI engine continuously monitors your infrastructure, automatically collects evidence, maps controls, and identifies gaps. It learns from your organization to provide intelligent recommendations.',
      };

      let response = 'Great question! I\'d recommend booking a demo with our team to get personalized answers. You can reach us at info@regulattice.com or click "Book a Demo" to schedule a call.';
      
      const lowerInput = input.toLowerCase();
      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-elegant pulse-glow"
          variant="default"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] shadow-elegant flex flex-col">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-compliance-primary to-regtech-primary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-alert-green rounded-full animate-pulse" />
                <h3 className="font-semibold">ReguLattice AI Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80 mt-1">Powered by AI • Always available</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-compliance-primary text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-medium">Suggested questions:</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="w-full text-left p-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-compliance-primary/50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about compliance..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="sm" variant="default">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
