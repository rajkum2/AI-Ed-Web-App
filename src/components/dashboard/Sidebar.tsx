import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  ScrollText,
  GraduationCap,
  LineChart,
  Bot,
  Settings as SettingsIcon
} from 'lucide-react';

interface SidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'study-plan', label: 'My Study Plan', icon: BookOpen, path: '/dashboard/study-plan' },
  { id: 'quizzes', label: 'Quizzes', icon: Brain, path: '/dashboard/quizzes' },
  { id: 'flashcards', label: 'Flashcards', icon: ScrollText, path: '/dashboard/flashcards' },
  { id: 'mock-exams', label: 'Mock Exams', icon: GraduationCap, path: '/dashboard/mock-exams' },
  { id: 'progress', label: 'Progress Tracker', icon: LineChart, path: '/dashboard/progress' },
  { id: 'ai-tutor', label: 'AI Tutor', icon: Bot, path: '/dashboard/ai-tutor' },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, path: '/dashboard/settings' }
];

export function Sidebar({ currentSection, onSectionChange }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="h-[calc(100vh-4rem)] overflow-y-auto">
      <ul className="py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path || 
                         (item.id === 'overview' && currentPath === '/dashboard');
          
          return (
            <li key={item.id} className="px-3">
              <Link
                to={item.path}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}