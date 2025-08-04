import React from 'react';
import { Mountain, Camera, Play } from 'lucide-react';
import SectionChatInput from '../SectionChatInput';

interface FunSectionProps {
  onChatSubmit: (message: string) => void;
}

const FunSection: React.FC<FunSectionProps> = ({ onChatSubmit }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Mont Blanc (4810m)</h2>
      </div>

      {/* Main Image Card */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20">
        <div className="relative">
          {/* Personal Adventure Image */}
          <div className="w-full h-96 relative overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Adventure activity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Caption overlay */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-xl">
              <span className="text-sm font-medium">Adventure time - Mont Blanc expedition!</span>
            </div>
            
            {/* Play button for video */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-200">
              <Play size={20} className="text-white ml-1" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The craziest thing I've ever done? It has to be climbing Parvathamalai, a 4500 ft mountain! ⛰️ The winds were blasting at 60 km/h, and we were without water for about 5 hours straight. It was an absolutely intense but incredible adventure!
              <a href="#" className="text-blue-600 hover:text-blue-800 underline ml-1">Check it out here!</a>
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              When I'm not trekking up mountains, my main hobby is something totally different—I love helping my father with farming. As a farmer's son, there's something really special and grounding about working the land. It's how I stay connected to my roots and stay active. You can probably tell I'm happiest when I'm outdoors and alone(that's where i analyze myself!)

              
 <p className="text-gray-700 leading-relaxed">
   What about you? What do you like to do for fun?
   😊 </p>
            </p>
          </div>
          
          {/* Activity badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Mountain size={16} />
              <span className="text-sm font-medium">Mountain Climbing</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <span className="text-sm">🚵‍♂️</span>
              <span className="text-sm font-medium">Farming</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <Camera size={16} />
              <span className="text-sm font-medium">Adventure Photography</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <span className="text-sm">🎥</span>
              <span className="text-sm font-medium">Self Exploration</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about my adventures and hobbies..."
      />
    </div>
  );
};

export default FunSection;