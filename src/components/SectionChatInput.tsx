import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface SectionChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
}

const SectionChatInput: React.FC<SectionChatInputProps> = ({ 
  onSubmit, 
  placeholder = "Ask me anything..." 
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 pr-14 bg-white/70 backdrop-blur-md border border-white/30 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors duration-200"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default SectionChatInput;