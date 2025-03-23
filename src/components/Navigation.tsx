import React from 'react';
import { Brain, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  // These items will only be shown when user is logged in
  const dashboardItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Study Plan', href: '/study-plan' },
    { label: 'Flashcards', href: '/flashcards' },
    { label: 'Quizzes', href: '/quizzes' },
    { label: 'Mock Exams', href: '/mock-exams' },
    { label: 'Progress', href: '/progress' },
    { label: 'AI Tutor', href: '/tutor' },
  ];

  // Mock authentication state
  const isAuthenticated = false;

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">AI Study Hub</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </a>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Login
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                {dashboardItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors mt-4">
                  Sign Out
                </button>
              </>
            ) : (
              <div className="space-y-2 mt-4">
                <button className="w-full text-gray-600 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Login
                </button>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}