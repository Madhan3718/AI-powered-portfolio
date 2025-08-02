import React from 'react';
import { User, Briefcase, Zap, Gamepad2, Mail } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'me', label: 'Me', icon: User, color: 'from-blue-400 to-blue-500' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: 'from-green-400 to-green-500' },
    { id: 'skills', label: 'Skills', icon: Zap, color: 'from-purple-400 to-purple-500' },
    { id: 'fun', label: 'Fun', icon: Gamepad2, color: 'from-pink-400 to-pink-500' },
    { id: 'contact', label: 'Contact', icon: Mail, color: 'from-orange-400 to-orange-500' }
  ];

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 ${
              isActive 
                ? `bg-gradient-to-b ${tab.color} text-white shadow-lg transform scale-105` 
                : 'bg-white/50 backdrop-blur-md text-gray-600 hover:bg-white/70 hover:scale-105'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default NavigationTabs;