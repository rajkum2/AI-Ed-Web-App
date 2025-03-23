import React from 'react';
import { Trophy, Zap, BookOpen } from 'lucide-react';

export function Overview() {
  const streak = 7;
  const progress = 45;
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
          <Trophy className="h-5 w-5" />
          <span className="font-medium">{streak} Day Streak!</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Overall Completion</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4">
          <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Complete Daily Quiz</h3>
            <p className="text-sm text-gray-500 mt-1">Test your knowledge on Neural Networks</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4">
          <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Review Flashcards</h3>
            <p className="text-sm text-gray-500 mt-1">15 cards due for review today</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4">
          <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Trophy className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Mock Exam Ready</h3>
            <p className="text-sm text-gray-500 mt-1">Take a practice test on Deep Learning</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { title: 'Completed Quiz: Neural Networks Basics', time: '2 hours ago' },
            { title: 'Reviewed 20 Flashcards', time: 'Yesterday' },
            { title: 'Completed Study Session: Deep Learning', time: '2 days ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <span className="text-gray-900">{activity.title}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}