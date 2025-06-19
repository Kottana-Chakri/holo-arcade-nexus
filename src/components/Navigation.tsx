
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Mic, Menu, ShoppingCart, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "VR Store", path: "/vr-store" },
    { name: "Social Hub", path: "/social" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-cyan-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold holographic-text">NEXUS GAMES</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                placeholder="AI-powered search... Try 'cyberpunk RPG' or 'multiplayer strategy'"
                className="w-full pl-12 pr-16 py-3 bg-black/50 border-cyan-400/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <Button
                size="sm"
                variant="ghost"
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                  isVoiceActive ? "text-red-400" : "text-gray-400"
                } hover:text-cyan-400`}
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-400 italic">
              🎮 Gesture: Swipe up to activate voice search | Say "Hey Nexus" for AI assistant
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-cyan-400 text-glow"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-cyan-400">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
