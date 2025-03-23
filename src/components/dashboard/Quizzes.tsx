import React from 'react';
import { FlaskConical, Clock, Award } from 'lucide-react';

export function Quizzes() {
  const quizzes = [
    {
      title: 'Neural Networks Basics',
      questions: 10,
      timeLimit: '20 minutes',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      title: 'Deep Learning Fundamentals',
      questions: 15,
      timeLimit: '30 minutes',
      difficulty: 'Advanced',
      completed: false
    },
    {
      title: 'Machine Learning Algorithms',
      questions: 12,
      timeLimit: '25 minutes',
      difficulty: 'Intermediate',
      completed: true,
      score: 85
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">AI Quizzes</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Generate New Quiz
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FlaskConical className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                  <span className="text-sm text-gray-500">{quiz.difficulty}</span>
                </div>
              </div>
              {quiz.completed && (
                <div className="flex items-center space-x-1 text-green-600">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">{quiz.score}%</span>
                </div>
              )}
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{quiz.timeLimit}</span>
              </div>
              <div>
                {quiz.questions} Questions
              </div>
            </div>

            <button
              className={`w-full mt-4 px-4 py-2 rounded-lg transition-colors ${
                quiz.completed
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {quiz.completed ? 'Review Quiz' : 'Start Quiz'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}