import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Flashcards() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Smart Flashcards</h1>
          <p className="mt-2 text-gray-600">Master concepts with spaced repetition</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Flashcard */}
            <div 
              className="bg-white rounded-xl shadow-lg h-96 cursor-pointer perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute w-full h-full p-8 backface-hidden">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-2xl font-semibold text-gray-900">What is Machine Learning?</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full p-8 backface-hidden rotate-y-180">
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-lg text-gray-700 text-center">
                      Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Today's Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cards Reviewed</span>
                    <span className="font-medium">24/30</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Difficulty Buttons */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">How well did you know this?</h2>
              <div className="grid grid-cols-3 gap-4">
                <button className="py-2 px-4 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                  Again
                </button>
                <button className="py-2 px-4 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                  Hard
                </button>
                <button className="py-2 px-4 rounded-lg bg-green-100 text-green-700 hover:bg-green-200">
                  Easy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}