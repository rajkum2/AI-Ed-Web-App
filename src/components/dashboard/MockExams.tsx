import React from 'react';
import { Trophy, Clock, Flag, CheckCircle } from 'lucide-react';

export function MockExams() {
  const exams = [
    {
      title: 'Machine Learning Fundamentals',
      duration: '2 hours',
      questions: 50,
      difficulty: 'Intermediate',
      status: 'available'
    },
    {
      title: 'Deep Learning Certification',
      duration: '3 hours',
      questions: 75,
      difficulty: 'Advanced',
      status: 'completed',
      score: 85
    },
    {
      title: 'Neural Networks Practice',
      duration: '1.5 hours',
      questions: 40,
      difficulty: 'Intermediate',
      status: 'available'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Mock Exams</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Generate New Exam
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                  <span className="text-sm text-gray-500">{exam.difficulty}</span>
                </div>
              </div>
              {exam.status === 'completed' && (
                <div className="flex items-center space-x-1 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">{exam.score}%</span>
                </div>
              )}
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{exam.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flag className="h-4 w-4" />
                <span>{exam.questions} Questions</span>
              </div>
            </div>

            <button
              className={`w-full mt-4 px-4 py-2 rounded-lg transition-colors ${
                exam.status === 'completed'
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {exam.status === 'completed' ? 'View Results' : 'Start Exam'}
            </button>
          </div>
        ))}
      </div>

      {/* Exam Instructions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Exam Guidelines</h2>
        <div className="space-y-3 text-gray-600">
          <p>• Each exam simulates real certification conditions</p>
          <p>• You can flag questions for review</p>
          <p>• Timer will be displayed during the exam</p>
          <p>• Detailed explanations provided after submission</p>
          <p>• Results include performance analysis and improvement suggestions</p>
        </div>
      </div>
    </div>
  );
}