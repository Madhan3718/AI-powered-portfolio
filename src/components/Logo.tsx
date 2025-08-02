import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;