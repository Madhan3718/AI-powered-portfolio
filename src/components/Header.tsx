import React from 'react';
import { Github } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const handleGithubClick = () => {
    window.open('https://github.com/toukoum', '_blank');
  };

  return (
    <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 z-20">
      <button 
        onClick={onContactClick}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
      >
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">Looking for a talent?</span>
      </button>
      
      <button 
        onClick={handleGithubClick}
        className="flex items-center space-x-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 text-white hover:bg-black/90 transition-all duration-200 cursor-pointer"
      >
        <Github size={16} />
        <span className="text-sm font-medium">144</span>
      </button>
    </div>
  );
};

export default Header;