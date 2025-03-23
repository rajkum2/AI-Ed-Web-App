import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Brain,
  Trophy,
  BarChart3,
  MessageSquare,
  Settings
} from 'lucide-react';

interface SidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ currentSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'study-plan', label: 'My Study Plan', icon: BookOpen },
    { id: 'quizzes', label: 'Quizzes', icon: FlaskConical },
    { id: 'flashcards', label: 'Flashcards', icon: Brain },
    { id: 'mock-exams', label: 'Mock Exams', icon: Trophy },
    { id: 'progress', label: 'Progress Tracker', icon: BarChart3 },
    { id: 'ai-tutor', label: 'AI Tutor', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg fixed left-0 h-screen pt-16">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    currentSection === item.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}