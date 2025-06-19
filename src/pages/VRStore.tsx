
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Eye, 
  Headphones, 
  Navigation as NavigationIcon,
  Zap,
  Gamepad2,
  Users,
  Settings
} from "lucide-react";

const VRStore = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* VR Mode Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-cyan-400 mr-2" />
              <h1 className="text-5xl font-bold holographic-text">VR STORE MODE</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Immerse yourself in the future of digital shopping. Browse games in a fully interactive 3D environment.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <Badge className="ai-chip text-sm px-4 py-2">
                <Headphones className="w-4 h-4 mr-1" />
                VR Headset Detected
              </Badge>
              <Badge className="ai-chip text-sm px-4 py-2">
                <NavigationIcon className="w-4 h-4 mr-1" />
                Hand Tracking Active
              </Badge>
              <Badge className="ai-chip text-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-1" />
                Voice Commands Ready
              </Badge>
            </div>
          </div>

          {/* 3D Environment Preview */}
          <div className="glass-panel rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">
              🌐 Virtual Store Environment
            </h2>
            
            <div className="bg-black/50 rounded-xl p-12 text-center relative overflow-hidden">
              {/* Simulated 3D Environment */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-8 transform-3d">
                  {/* Virtual Game Displays */}
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-32 h-40 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl border border-cyan-400/30 flex items-center justify-center floating`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <Gamepad2 className="w-12 h-12 text-cyan-400" />
                    </div>
                  ))}
                </div>

                {/* Virtual Navigation Hints */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-4xl mb-4">👁️</div>
                    <p className="text-cyan-400 font-semibold">Look around to browse</p>
                    <p className="text-gray-400 text-sm mt-2">Gaze at items to interact</p>
                  </div>
                </div>
              </div>

              {/* VR Controls */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel rounded-xl p-4">
                  <h3 className="text-cyan-400 font-semibold mb-2">👀 Gaze Controls</h3>
                  <p className="text-sm text-gray-400">Look at items for 2 seconds to select</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <h3 className="text-purple-400 font-semibold mb-2">🤏 Hand Gestures</h3>
                  <p className="text-sm text-gray-400">Pinch to grab, wave to navigate</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <h3 className="text-orange-400 font-semibold mb-2">🗣️ Voice Commands</h3>
                  <p className="text-sm text-gray-400">"Show me RPG games" or "Buy this game"</p>
                </div>
              </div>
            </div>
          </div>

          {/* VR Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="game-card p-6">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Virtual Showroom</h3>
              <p className="text-gray-400">
                Walk through themed environments for different game genres. Experience games before buying.
              </p>
            </div>

            <div className="game-card p-6">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Social Shopping</h3>
              <p className="text-gray-400">
                Shop with friends in VR. See their avatars, get recommendations, and make group purchases.
              </p>
            </div>

            <div className="game-card p-6">
              <Gamepad2 className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Instant Demos</h3>
              <p className="text-gray-400">
                Try games instantly in VR without downloads. Experience gameplay mechanics firsthand.
              </p>
            </div>
          </div>

          {/* VR Launch Section */}
          <div className="text-center">
            <div className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 holographic-text">
                Ready to Enter VR?
              </h2>
              <p className="text-gray-400 mb-6">
                Put on your VR headset and step into the future of game shopping. 
                Compatible with Meta Quest, PICO, and SteamVR.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cyber-button text-lg px-8 py-4">
                  <Eye className="w-5 h-5 mr-2" />
                  Launch VR Mode
                </Button>
                <Button size="lg" variant="outline" className="cyber-button text-lg px-8 py-4">
                  <Settings className="w-5 h-5 mr-2" />
                  VR Settings
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                🎮 VR Headset required | 👀 Eye tracking supported | 🤚 Hand tracking enabled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRStore;
