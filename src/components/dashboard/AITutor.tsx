import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export function AITutor() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: "Hello! I'm your AI tutor. How can I help you with your AI studies today?",
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    // Mock AI response
    const aiResponse = {
      type: 'bot',
      content: "I understand you're asking about AI concepts. Let me help explain that in detail...",
      timestamp: new Date().toISOString()
    };

    setChatHistory(prev => [...prev, userMessage, aiResponse]);
    setMessage('');
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
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${
                msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'user'
                    ? 'bg-indigo-100'
                    : 'bg-gray-100'
                }`}
              >
                {msg.type === 'user' ? (
                  <User className="h-4 w-4 text-indigo-600" />
                ) : (
                  <Bot className="h-4 w-4 text-gray-600" />
                )}
              </div>
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{msg.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask your AI tutor anything..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      {/* Quick Questions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Suggested Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Explain neural networks in simple terms",
            "What's the difference between supervised and unsupervised learning?",
            "How does backpropagation work?",
            "Can you explain gradient descent?"
          ].map((question, index) => (
            <button
              key={index}
              onClick={() => setMessage(question)}
              className="text-left px-4 py-2 rounded-lg border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}