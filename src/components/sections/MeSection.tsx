import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { MdOutlineDownload } from 'react-icons/md';
import SectionChatInput from '../SectionChatInput';

interface MeSectionProps {
  onChatSubmit: (message: string) => void;
}

const MeSection: React.FC<MeSectionProps> = ({ onChatSubmit }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header with Avatar */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden">
          <img 
            src="https://www.toukoum.fr/_next/image?url=%2Flanding-memojis.png&w=2048&q=75" 
            alt="Mad"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Madankumar Budidapalli</h2>
        <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">About Me</h1>
        <div className="flex items-center justify-center space-x-6 text-lg font-semibold text-gray-700 mb-6">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span className="font-bold">23 years old</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span className="font-bold">Andhra Pradesh, India</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0 lg:w-64">
          <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
            <img 
              src="profileimg.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 space-y-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">👋</span>
              <span className="text-lg font-medium text-gray-700">Hey</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, I'm Madankumar (you can call me Madan)! I'm a 23-year-old Data Application Engineer based in Bangalore, where I get to combine my passions for data, AI, and technology in my role at Assetmantle. 
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Data</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Analyst, Engineer</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Bangalore</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">CSE</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">AI Enthusiast</span>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <div className="mt-8 space-y-4">
        <p className="text-gray-700 leading-relaxed">

          I am Madankumar Budidapalli, a Data Application Engineer based in Bangalore, specializing in data analysis and engineering. A Computer Science and Engineering graduate from SVEC, Tirupati, I currently apply my skills to impactful data projects at Assetmantle.
          
          Before diving into the tech world, I was an avid mountain trekker, which taught me a lot about endurance and tackling challenges head-on. Now, I channel that same energy into my work, diving deep into data to find solutions and build useful tools. 

        </p>
        <p className="text-gray-700 leading-relaxed">
         I am passionate about leveraging data to create effective solutions and am keenly focused on the applications of AI and other emerging technologies.. Whoo! What else do you want to know? 😊
        </p>
      </div>

      {/* Resume Download Card */}
      <div className="w-full max-w-2xl mx-auto mt-12">
        <div className="bg-gray-50 rounded-2xl shadow flex items-center justify-between p-6">
          <div>
            <div className="font-bold text-lg text-gray-900 mb-1">Madan's Resume</div>
            <div className="text-gray-600 text-sm mb-2">Data Application Engineer </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>PDF</span>
              <span>• Updated August 2025</span>
              <span>• 0.2 MB</span>
            </div>
          </div>
          <a
            href="/Madan(Resume).pdf"
            download
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            title="Download Resume"
          >
            <MdOutlineDownload className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me anything about my background..."
      />
    </div>
  );
};

export default MeSection;