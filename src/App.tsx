import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Brain, BookOpen, Trophy, FlaskConical, BarChart3, MessageSquare } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Features } from './pages/Features';
import { StudyPlan } from './pages/StudyPlan';
import { Flashcards } from './pages/Flashcards';
import { Dashboard } from './pages/Dashboard';

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function HomePage() {
  const homeFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized study plans crafted by advanced AI to match your learning style and goals."
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Adaptive spaced repetition system that optimizes your retention and learning efficiency."
    },
    {
      icon: Trophy,
      title: "Mock Exams",
      description: "Realistic exam simulations with detailed performance analysis and improvement suggestions."
    },
    {
      icon: FlaskConical,
      title: "Interactive Quizzes",
      description: "AI-generated quizzes that adapt to your knowledge level and provide instant feedback."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Comprehensive analytics and insights to monitor your learning journey."
    },
    {
      icon: MessageSquare,
      title: "AI Tutor",
      description: "24/7 access to an AI tutor for instant help and detailed explanations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Master AI with Personalized Learning
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join AI Study Hub and unlock your potential with AI-powered study plans, 
                smart quizzes, and real-time tutoring.
              </p>
              <div className="space-x-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Master AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with proven learning methods.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful learners who transformed their careers with AI Study Hub.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Data Scientist",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                quote: "The personalized study plan and AI tutor helped me transition into AI development in just 6 months!"
              },
              {
                name: "Michael Rodriguez",
                role: "ML Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                quote: "The mock exams and practice questions were incredibly similar to what I encountered in real interviews."
              },
              {
                name: "Emily Taylor",
                role: "AI Researcher",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                quote: "The smart flashcard system helped me retain complex AI concepts better than any other method I've tried."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with a 7-day free trial. No credit card required.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;