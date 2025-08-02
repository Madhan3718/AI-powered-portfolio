import React from 'react';
import { Calendar, MapPin, Code, Briefcase, Target, Mail, ExternalLink, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const techStack = [
    'Python', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Weaviate', 'Pinecone', 'Vector DBs',
    'Hugging Face Transformers', 'Tool routing', 'calling', 'RAG',
    'Hackathons', 'AI agent workflows'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
      </div>

      {/* Main Contact Card */}
      <div className="bg-gray-100 rounded-3xl p-8 shadow-xl">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-2xl">👨‍💻</div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">Madankumar </h2>
            <p className="text-gray-600">Internship Application</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Duration */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-blue-600">
              <Calendar size={16} />
              <span className="font-semibold">Duration</span>
            </div>
            <p className="text-gray-700">6 months – starting September 2025 (fall 2025)</p>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-green-600">
              <MapPin size={16} />
              <span className="font-semibold">Location</span>
            </div>
            <p className="text-gray-700">Preferably San Francisco or remote</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-purple-600 mb-4">
            <Code size={16} />
            <span className="font-semibold">Tech stack</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <ul className="space-y-1">
              {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1">
            <span>See more</span>
            <ExternalLink size={12} />
          </button>
        </div>

        {/* What I Bring */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-orange-600 mb-4">
            <Briefcase size={16} />
            <span className="font-semibold">What I bring</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Real-world AI dev experience from LightOn (MCP, secure GPTs, RAG pipelines), 
            3x hackathon wins (ETH Oxford, Paris Blockchain Week, Colosseum Breakout on Solana). 
            I ship fast, and love building useful things that actually work.
          </p>
        </div>

        {/* Goal */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-red-600 mb-4">
            <Target size={16} />
            <span className="font-semibold">Goal</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Join a bold, innovative team building AI-powered tools that matter. I want to improve fast, 
            contribute hard, and leave a mark. I'm fast, flexible, and HUNGRYYYYY 🔥
          </p>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:your.email@example.com"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Contact me</span>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center">
        <p className="text-gray-700">
          You can reach me through the contact info above! Feel free to hit me up anytime, I'm always happy to chat! 😉 What's on your mind?
        </p>
      </div>
    </div>
  );
};

export default ContactSection;