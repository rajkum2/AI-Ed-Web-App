import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Overview } from '../components/dashboard/Overview';
import { MyStudyPlan } from '../components/dashboard/MyStudyPlan';
import { Quizzes } from '../components/dashboard/Quizzes';
import { MockExams } from '../components/dashboard/MockExams';
import { ProgressTracker } from '../components/dashboard/ProgressTracker';
import { AITutor } from '../components/dashboard/AITutor';
import { Settings } from '../components/dashboard/Settings';
import { Flashcards } from '../components/dashboard/Flashcards';

export function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = location.pathname.split('/')[2] || 'overview';

  const handleSectionChange = (section: string) => {
    navigate(`/dashboard/${section === 'overview' ? '' : section}`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Fixed sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">AI Study Hub</h1>
        </div>
        <Sidebar currentSection={currentSection} onSectionChange={handleSectionChange} />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 ml-64">
        <main className="p-8">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="study-plan" element={<MyStudyPlan />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="flashcards" element={<Flashcards />} />
            <Route path="mock-exams" element={<MockExams />} />
            <Route path="progress" element={<ProgressTracker />} />
            <Route path="ai-tutor" element={<AITutor />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}