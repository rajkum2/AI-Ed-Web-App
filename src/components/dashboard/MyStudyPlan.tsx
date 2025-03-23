import React from 'react';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

export function MyStudyPlan() {
  const topics = [
    {
      title: 'Machine Learning Basics',
      status: 'completed',
      duration: '2 weeks',
      progress: 100,
      subtopics: [
        { name: 'Introduction to ML', completed: true },
        { name: 'Supervised Learning', completed: true },
        { name: 'Unsupervised Learning', completed: true }
      ]
    },
    {
      title: 'Neural Networks',
      status: 'in-progress',
      duration: '3 weeks',
      progress: 60,
      subtopics: [
        { name: 'Perceptrons', completed: true },
        { name: 'Backpropagation', completed: true },
        { name: 'Activation Functions', completed: false },
        { name: 'Network Architectures', completed: false }
      ]
    },
    {
      title: 'Deep Learning',
      status: 'upcoming',
      duration: '4 weeks',
      progress: 0,
      subtopics: [
        { name: 'CNN Basics', completed: false },
        { name: 'RNN and LSTM', completed: false },
        { name: 'Transfer Learning', completed: false },
        { name: 'Model Optimization', completed: false }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Study Plan</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Edit Plan
        </button>
      </div>

      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  topic.status === 'completed' ? 'bg-green-100' :
                  topic.status === 'in-progress' ? 'bg-indigo-100' : 'bg-gray-100'
                }`}>
                  <BookOpen className={`h-5 w-5 ${
                    topic.status === 'completed' ? 'text-green-600' :
                    topic.status === 'in-progress' ? 'text-indigo-600' : 'text-gray-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{topic.duration}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium">
                {topic.progress}% Complete
              </div>
            </div>

            <div className="h-2 bg-gray-200 rounded-full mb-4">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  topic.status === 'completed' ? 'bg-green-500' :
                  topic.status === 'in-progress' ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                style={{ width: `${topic.progress}%` }}
              ></div>
            </div>

            <div className="space-y-2">
              {topic.subtopics.map((subtopic, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-5 w-5 ${
                      subtopic.completed ? 'text-green-500' : 'text-gray-300'
                    }`} />
                    <span className={subtopic.completed ? 'text-gray-600' : 'text-gray-900'}>
                      {subtopic.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}