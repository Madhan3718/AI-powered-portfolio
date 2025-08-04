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
      title: 'Traffic Insights',
      subtitle: 'E-Commerce Analytics',
      description: 'Traffic insights and growth narrative for e-commerce',
      fullDescription: 'A comprehensive analytics project that provides deep insights into e-commerce traffic patterns and growth narratives. This project analyzes user behavior, conversion rates, and provides actionable insights for business growth.',
      technologies: ['SQL', 'Data Analysis', 'PowerBI','Excel(Pivot tables)','Data StoryTelling'],
      githubUrl: 'https://github.com/Madhan3718/Traffic-Insights-and-Growth-Narrative-for-an-E-Commerce',
      images: [
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2024',
      image: '📊',
      color: 'from-purple-500 to-blue-600',
      tags: ['SQL', 'Analytics', 'PowerBI']
    },
    {
      id: 2,
      title: 'GenAI Workflows',
      subtitle: 'Automation processes',
      description: 'Automating data science and analysis workflows using GenAI',
      fullDescription: 'An innovative project that leverages Generative AI to automate complex data science workflows. This process streamlines the data analysis and dashboard making also entire data science pipeline from data preprocessing to model deployment using GenAI tools like Claude, Julius,Google Vertex AI etc making it more efficient and accessible.',
      technologies: ['Python', 'GenAI', 'Machine Learning', 'Automation'],
      githubUrl: 'https://github.com/Madhan3718/Automating-Data-science-workflows-using-GenAI',
      images: [
        
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
        'C:\Users\91630\Pictures\Screenshots\Screenshot (92).png'
      ],
      year: '2024',
      image: '💼',
      color: 'from-orange-400 to-pink-500',
      tags: ['GenAI', 'NoCode', 'Automation']
    },
    {
      id: 3,
      title: 'AI Portfolio',
      subtitle: 'Personal Project',
      description: 'Interactive AI-powered portfolio website',
      fullDescription: 'A modern, interactive portfolio website powered by AI that showcases projects, skills, and experiences. Features real-time AI chat integration, beautiful animations, and responsive design.',
      technologies: ['React', 'TypeScript', 'AI Integration', 'Deployment'],
      githubUrl: 'https://github.com/Madhan3718/AI-Portfolio',
      images: [
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2024',
      image: '🤖',
      color: 'from-red-500 to-purple-600',
      tags: ['React', 'AI', 'Portfolio']
    },
    {
      id: 4,
      title: 'Helmet',
      subtitle: 'Development Project',
      description: 'Functional frontend prototype for business',
      fullDescription: 'developed a front-end prototype deployed as an Azure Static Web App.The key technical feature was integrating a responsive chatbot built with Azure Bot Services to handle automated customer Q&A. The entire stack, from the web app hosting to the AI service, was built on the Azure Cloud Platform',
      technologies: ['HTML', 'CSS', 'Azure ChatBot', 'Azure Static WebApps'],
      githubUrl: 'https://github.com/Madhan3718/Helmet',
      images: [
        'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      year: '2024',
      image: '🛡️',
      color: 'from-green-500 to-teal-600',
      tags: ['Frontend', 'Prototype', 'Azure']
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="absolute top-4 left-4">
              <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                {project.subtitle}
              </span>
            </div>
            
            <div className="flex flex-col h-full justify-between min-h-[200px]">
              <div className="text-center mt-6">
                <div className="text-4xl mb-3">{project.image}</div>
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

      {/* Project Description */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
        <p className="text-gray-700 mb-6 leading-relaxed">
          You can check out all my projects above! Right now, I'm working on some exciting AI solutions and tools that enhance user experience. If you want to know more about a specific project or what I'm currently diving into, just let me know! What kind of projects are you curious about? 😄
        </p>
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