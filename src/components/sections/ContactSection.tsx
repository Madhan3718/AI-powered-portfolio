import React from 'react';
import { Mail, Linkedin, Github, Target, Briefcase, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">📧</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect!</h2>
      </div>

      {/* Main Contact Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
            <img 
              src="https://www.toukoum.fr/_next/image?url=%2Flanding-memojis.png&w=2048&q=75" 
              alt="Madankumar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Madankumar Budidapalli</h3>
          <p className="text-gray-600">Data Application Engineer</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Available for opportunities</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:madhankumarreddy3718@gmail.com"
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Mail size={20} />
            <span className="font-medium">Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/madankumarb37/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/Madhan3718"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </a>
        </div>

        {/* What I Bring & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* What I Bring */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">What I Bring</h4>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Real-world experience in data engineering and AI development. Strong background in Python, 
              machine learning, and data analytics. I ship fast, solve complex problems, and love building 
              useful tools that make a real impact.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Target size={16} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Goal</h4>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Join innovative teams building AI-powered solutions that matter. I want to contribute to 
              cutting-edge projects, learn from the best, and help create technology that transforms 
              how people work and live. Ready to make an impact! 🚀
            </p>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Tech Stack Highlights</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'Machine Learning', 'Data Analytics', 'React', 'TypeScript', 'AI/ML', 'Computer Vision', 'GenAI'].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">
            You can reach me through the contact info above! Feel free to hit me up anytime, I'm always happy to chat! 😉 What's on your mind?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;