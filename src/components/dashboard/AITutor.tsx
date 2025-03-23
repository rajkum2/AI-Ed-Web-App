import React, { useState } from 'react';
import { Bot, Sparkles, Send } from 'lucide-react';

export function AITutor() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      message: 'Hello! I\'m your AI tutor. How can I help you with your AI studies today?',
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const newMessage = {
      type: 'user',
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        message: 'I understand you\'re asking about AI. Let me help you with that. What specific aspect would you like to explore?',
        timestamp: new Date().toISOString()
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Bot className="h-5 w-5 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AI Tutor</h1>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Available 24/7</span>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-xl shadow-sm h-[600px] flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-4 ${
                  chat.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{chat.message}</p>
                <p className={`text-xs mt-1 ${
                  chat.type === 'user' ? 'text-indigo-200' : 'text-gray-500'
                }`}>
                  {new Date(chat.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask your AI tutor anything..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-2">24/7 Assistance</h3>
          <p className="text-gray-600 text-sm">
            Get help anytime with your AI studies, homework, or exam preparation.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Personalized Learning</h3>
          <p className="text-gray-600 text-sm">
            Adaptive responses based on your knowledge level and learning style.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Interactive Practice</h3>
          <p className="text-gray-600 text-sm">
            Engage in interactive problem-solving and get instant feedback.
          </p>
        </div>
      </div>
    </div>
  );
}