import React from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Overview } from '../components/dashboard/Overview';
import { MyStudyPlan } from '../components/dashboard/MyStudyPlan';
import { Quizzes } from '../components/dashboard/Quizzes';
import { MockExams } from '../components/dashboard/MockExams';
import { ProgressTracker } from '../components/dashboard/ProgressTracker';
import { AITutor } from '../components/dashboard/AITutor';
import { Settings } from '../components/dashboard/Settings';

export function Dashboard() {
  const [currentSection, setCurrentSection] = React.useState('overview');

  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return <Overview />;
      case 'study-plan':
        return <MyStudyPlan />;
      case 'quizzes':
        return <Quizzes />;
      case 'flashcards':
        return <Flashcards />;
      case 'mock-exams':
        return <MockExams />;
      case 'progress':
        return <ProgressTracker />;
      case 'ai-tutor':
        return <AITutor />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="flex-1 p-8 pt-20 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}