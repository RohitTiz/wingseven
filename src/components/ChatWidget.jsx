import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can we help you today?', sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Thanks for your message! Our team will get back to you soon.',
        sender: 'bot'
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110 z-50"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h6" />
          </svg>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 max-w-[90vw] h-[380px] bg-white rounded-xl shadow-xl flex flex-col z-50 overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h6" />
            </svg>
            Live Chat
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] text-sm px-4 py-2 rounded-lg shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-blue-400 text-white self-end rounded-br-none'
                    : 'bg-white text-gray-800 self-start rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200 bg-white flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg text-white flex items-center justify-center hover:opacity-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
