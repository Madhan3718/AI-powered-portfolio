import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Logo from './components/Logo';
import Avatar from './components/Avatar';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import NavigationTabs from './components/NavigationTabs';
import { generateResponse } from './services/gemini';
import MeSection from './components/sections/MeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import FunSection from './components/sections/FunSection';
import ContactSection from './components/sections/ContactSection';
import ChatPage from './components/ChatPage';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null); // null for home
  const [showSectionSummary, setShowSectionSummary] = useState(true);
  const [aiPrompt, setAiPrompt] = useState<string | null>(null);
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [homeInput, setHomeInput] = useState('');
  const [showChatPage, setShowChatPage] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Default AI questions for each section
  const sectionQuestions: Record<string, string> = {
    me: 'Who are you? I want to know more about you.',
    projects: 'What are your projects? What are you working on right now?',
    skills: 'What are your main skills and expertise?',
    fun: 'What do you do for fun? Any cool adventures?',
    contact: 'How can I contact you or reach out for opportunities?'
  };

  // Default AI summary for each section (could be improved to use real AI)
  const sectionSummaries: Record<string, string> = {
    me: '', // MeSection handles its own summary
    projects: '', // ProjectsSection handles its own summary
    skills: '', // SkillsSection handles its own summary
    fun: '', // FunSection handles its own summary
    contact: '' // ContactSection handles its own summary
  };

  // Handle tab change with AI question/summary transition
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setShowSectionSummary(false);
    setAiPrompt(sectionQuestions[tab]);
    setAiMessage(null);
    setTimeout(() => {
      setShowSectionSummary(true);
      setAiPrompt(null);
    }, 1000);
  };

  const handleContactClick = () => {
    setActiveTab('contact');
  };

  const handleSectionChatSubmit = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages([userMessage]);
    setShowChatPage(true);
    setIsChatLoading(true);

    try {
      const response = await generateResponse(messageText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,    
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again!",
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleChatPageMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setIsChatLoading(true);

    try {
      const response = await generateResponse(messageText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,    
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again!",
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleBackToPortfolio = () => {
    setShowChatPage(false);
    setChatMessages([]);
  };

  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await generateResponse(messageText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,    
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again!",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'me':
        return <MeSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'fun':
        return <FunSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      {!showChatPage && <Header onContactClick={() => handleTabChange('contact')} />}
      
      {showChatPage ? (
        <ChatPage 
          messages={chatMessages}
          onSendMessage={handleChatPageMessage}
          isLoading={isChatLoading}
          onBack={handleBackToPortfolio}
        />
      ) : (
      <>
      {activeTab === null ? (
        // Home Page UI
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mx-auto">
                  <img 
                    src="https://www.toukoum.fr/_next/image?url=%2Flanding-memojis.png&w=2048&q=75" 
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-ping"></div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Hey, I'm Madan's <span role='img' aria-label='wave'>👋</span></h2>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">AI Portfolio</h1>
          </div>
          {/* Show chat messages on the home page */}
          <div className="w-full max-w-2xl mb-8">
            <ChatMessages messages={messages} />
          </div>
          <div className="w-full max-w-xl mb-8">
            <form
              className="flex items-center bg-white/80 rounded-full shadow-lg px-6 py-4"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!homeInput.trim()) return;
                await handleSendMessage(homeInput);
                setHomeInput('');
              }}
            >
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
                value={homeInput}
                onChange={e => setHomeInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200"
                disabled={isLoading || !homeInput.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
          <NavigationTabs activeTab={activeTab || ''} onTabChange={handleTabChange} />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
          {/* AI Question Bubble */}
          {aiPrompt && (
            <div className="w-full max-w-4xl mx-auto mb-8 flex justify-start">
              <div className="flex max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl space-x-3 flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {/* AI Avatar */}
                  <span role="img" aria-label="ai">🤖</span>
                </div>
                <div className="px-4 py-3 rounded-2xl shadow-lg backdrop-blur-md bg-white/80 text-gray-800 rounded-bl-md">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{aiPrompt}</p>
                </div>
              </div>
            </div>
          )}
          {/* Section Summary */}
          {showSectionSummary && (
            <div className="w-full max-w-6xl mb-4">
              {activeTab === 'me' && <MeSection onChatSubmit={handleSectionChatSubmit} />}
              {activeTab === 'projects' && <ProjectsSection onChatSubmit={handleSectionChatSubmit} />}
              {activeTab === 'skills' && <SkillsSection onChatSubmit={handleSectionChatSubmit} />}
              {activeTab === 'fun' && <FunSection onChatSubmit={handleSectionChatSubmit} />}
              {activeTab === 'contact' && <ContactSection onChatSubmit={handleSectionChatSubmit} />}
            </div>
          )}
          <div className="mt-auto">
            <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        </div>
      )}
      </>
      )}
    </div>
  );
}

export default App;