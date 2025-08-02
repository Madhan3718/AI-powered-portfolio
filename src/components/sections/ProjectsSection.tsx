import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from '../ProjectModal';
import SectionChatInput from '../SectionChatInput';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  year: string;
  image: string;
  color: string;
  tags: string[];
}

interface ProjectsSectionProps {
  onChatSubmit: (message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onChatSubmit }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Synto',
      subtitle: 'Startup Project',
      description: 'An AI interface to simplify Web3 operations',
      fullDescription: 'Synto is an innovative AI-powered platform that simplifies Web3 operations for users. It provides an intuitive interface for interacting with blockchain technologies, making complex operations accessible to everyone. The project won a hackathon and demonstrates the power of AI in bridging the gap between traditional users and Web3 technologies.',
      technologies: ['React', 'TypeScript', 'Web3.js', 'Solana', 'AI/ML', 'Node.js'],
      githubUrl: 'https://github.com/toukoum/synto',
      liveUrl: 'https://synto.fun',
      images: [
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2024',
      image: '🦄',
      color: 'from-purple-500 to-blue-600',
      tags: ['React', 'Web3', 'AI']
    },
    {
      id: 2,
      title: 'Rrate',
      subtitle: 'Fun Tool',
      description: 'Real-time analytics dashboard with beautiful visualizations',
      fullDescription: 'Rrate is a comprehensive analytics dashboard that provides real-time data visualization and insights. Built with modern web technologies, it offers beautiful, interactive charts and graphs that help users understand their data better. The platform focuses on user experience and performance.',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
      githubUrl: 'https://github.com/toukoum/rrate',
      liveUrl: 'https://rrate.app',
      images: [
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2024',
      image: '📊',
      color: 'from-orange-400 to-pink-500',
      tags: ['Vue.js', 'D3.js', 'Analytics']
    },
    {
      id: 3,
      title: 'Defai',
      subtitle: 'Hackathon Winner',
      description: 'DeFi platform with advanced trading features',
      fullDescription: 'Defai is a decentralized finance platform that won a major hackathon. It provides advanced trading features, yield farming opportunities, and portfolio management tools. The platform emphasizes security, user experience, and innovative DeFi solutions.',
      technologies: ['Next.js', 'Solidity', 'Web3', 'DeFi Protocols', 'TypeScript'],
      githubUrl: 'https://github.com/toukoum/defai',
      images: [
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2023',
      image: '🏆',
      color: 'from-red-500 to-purple-600',
      tags: ['DeFi', 'Blockchain', 'Solidity']
    }
  ];

  const detailedProjects = [
    {
      name: 'Custom Model Context Protocol (MCP)',
      description: 'A tool for managing AI model contexts.',
      link: 'https://github.com/toukoum/mcp'
    },
    {
      name: 'Google Drive Syncs for RAG Pipelines',
      description: 'Making data flow smoother for AI tasks.',
      link: 'https://github.com/toukoum/gdrive-rag'
    },
    {
      name: 'Deepsearch Systems',
      description: 'Enhancing search capabilities with AI.',
      link: 'https://github.com/toukoum/deepsearch'
    },
    {
      name: 'AI-Powered Web Scraping Tools',
      description: 'Automating data collection like a boss.',
      link: 'https://github.com/toukoum/ai-scraper'
    },
    {
      name: 'Synto.fun',
      description: 'An AI interface to simplify Web3 operations, which won a hackathon!',
      link: 'https://synto.fun'
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className={`relative bg-gradient-to-br ${project.color} rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="absolute top-4 left-4">
              <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                {project.subtitle}
              </span>
            </div>
            
            <div className="flex flex-col h-full justify-between min-h-[280px]">
              <div className="text-center mt-8">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute top-4 right-4">
              <ExternalLink size={16} className="text-white/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Project List */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        <p className="text-gray-700 mb-6 leading-relaxed">
          I've got some cool projects under my belt! Here's a quick rundown of what I've been working on:
        </p>
        
        <div className="space-y-4">
          {detailedProjects.map((project, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{project.name}</h4>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about my projects..."
      />
    </div>
  );
};

export default ProjectsSection;