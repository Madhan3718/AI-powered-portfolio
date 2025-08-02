import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl">
          <img 
            src="https://www.toukoum.fr/_next/image?url=%2Flanding-memojis.png&w=2048&q=75" 
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating animation ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-ping"></div>
      </div>
    </div>
  );
};

export default Avatar;