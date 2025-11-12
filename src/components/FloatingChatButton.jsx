import React, { useState } from 'react';
import { BsChatDotsFill } from 'react-icons/bs';
import { FaFacebookMessenger, FaViber, FaLine } from 'react-icons/fa'; 

function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const messengerLink = 'http://m.me/61559381889759';
  const viberNumber = '+959793020075';
  const lineLink = 'https://line.me/ti/p/9sF20XcmzB'; 

  const chatOptions = [
    { name: 'Messenger', icon: <FaFacebookMessenger size={24} />, link: messengerLink, color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Viber', icon: <FaViber size={24} />, link: `viber://chat?number=${viberNumber}`, color: 'bg-purple-600 hover:bg-purple-700' },   
    { 
      name: 'LINE', 
      icon: <FaLine size={24} />, 
      link: lineLink, 
      color: 'bg-green-500 hover:bg-green-600'
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col items-center space-y-3 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {isOpen && chatOptions.map(option => (
          <a
            key={option.name}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 ${option.color}`}
            aria-label={option.name}
          >
            {option.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Open chat options"
      >
        <BsChatDotsFill size={28} />
      </button>
    </div>
  );
}

export default FloatingChatButton;