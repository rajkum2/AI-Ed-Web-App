import React from 'react';
import { BookOpen, Target, Clock } from 'lucide-react';

export function StudyPlan() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Study Plan</h1>
          <p className="mt-2 text-gray-600">Personalized learning path based on your goals and experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Path */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
              <div className="space-y-4">
                {['Machine Learning Basics', 'Neural Networks', 'Deep Learning'].map((topic, index) => (
                  <div key={index} className="flex items-center p-4 border rounded-lg">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{topic}</h3>
                      <p className="text-sm text-gray-500">Estimated time: 2 weeks</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Module */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Current Module</h2>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-medium text-indigo-900">Machine Learning Basics</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm text-indigo-700">
                      <Target className="h-4 w-4 mr-2" />
                      <span>Complete Introduction to ML Algorithms</span>
                    </div>
                    <div className="flex items-center text-sm text-indigo-700">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>30 minutes remaining today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Progress</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full w-[45%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Current Module</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}