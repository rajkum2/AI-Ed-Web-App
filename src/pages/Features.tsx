import React from 'react';
import {
  Brain,
  BookOpen,
  FlaskConical,
  BarChart3,
  MessageSquare,
  Trophy,
  Clock,
  Zap
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Study Plans",
      description: "Our AI analyzes your learning style, goals, and progress to create a tailored study plan that adapts in real-time. Experience a learning journey uniquely crafted for your success.",
      color: "indigo"
    },
    {
      icon: FlaskConical,
      title: "AI-Powered Quizzes",
      description: "Smart practice sessions that adjust to your knowledge level. Get instant feedback and detailed explanations to reinforce your understanding of complex AI concepts.",
      color: "purple"
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Master concepts efficiently with our spaced repetition system. Our algorithm optimizes review timing to ensure maximum retention with minimum effort.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Instant Explanations",
      description: "Stuck on a problem? Get immediate, detailed explanations for any question. Our AI breaks down complex topics into easy-to-understand steps.",
      color: "yellow"
    },
    {
      icon: Trophy,
      title: "Mock Exams",
      description: "Prepare for certification with realistic exam simulations. Time-tracked tests with detailed performance analysis help you identify and improve weak areas.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Progress Tracker",
      description: "Visualize your learning journey with detailed analytics. Track your improvement over time and receive personalized recommendations for better results.",
      color: "pink"
    },
    {
      icon: MessageSquare,
      title: "AI Tutor",
      description: "Your personal AI tutor available 24/7. Get instant answers to your questions, detailed explanations, and guidance whenever you need it.",
      color: "red"
    },
    {
      icon: Clock,
      title: "Adaptive Learning",
      description: "Learn at your own pace with our adaptive system. The platform adjusts difficulty and content based on your performance and learning speed.",
      color: "teal"
    }
  ];

  const colorVariants = {
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    pink: "bg-pink-100 text-pink-600",
    red: "bg-red-100 text-red-600",
    teal: "bg-teal-100 text-teal-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supercharge Your AI Learning Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge features combine AI technology with proven learning methods to accelerate your mastery of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className={`h-12 w-12 rounded-lg ${colorVariants[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful learners who have mastered AI using our platform.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}