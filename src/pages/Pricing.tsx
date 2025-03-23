import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '9.99',
      description: 'Perfect for getting started with AI learning',
      features: [
        'Access to basic AI courses',
        'Study plan generator',
        'Basic flashcards',
        'Weekly quizzes',
        'Email support'
      ],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '19.99',
      description: 'Best for serious AI learners',
      features: [
        'Everything in Basic',
        'Advanced AI courses',
        'Personalized study plans',
        'Unlimited flashcards',
        'Daily quizzes',
        'Mock exams',
        'Priority email support',
        'Progress tracking'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: '49.99',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Custom learning paths',
        'Team progress tracking',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Team analytics',
        'Bulk licensing'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your AI learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg p-8 ${
                plan.isPopular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.isPopular && (
                <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a custom plan?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us for custom pricing and features tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 