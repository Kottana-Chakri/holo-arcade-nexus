
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import GameCard from "@/components/GameCard";
import AIRecommendations from "@/components/AIRecommendations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Zap, 
  Globe, 
  Gamepad2, 
  TrendingUp, 
  Shield,
  Eye,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredGames = [
    {
      id: "1",
      title: "Cyber Nexus 2077",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Cyberpunk RPG",
      isVRReady: true,
      isHotDeal: true,
    },
    {
      id: "2",
      title: "Neural Storm",
      price: 39.99,
      rating: 4.6,
      image: "/placeholder.svg",
      category: "Sci-Fi Strategy",
      isBlockchainOwned: true,
    },
    {
      id: "3",
      title: "Quantum Racer",
      price: 29.99,
      rating: 4.7,
      image: "/placeholder.svg",
      category: "Futuristic Racing",
      isVRReady: true,
    },
    {
      id: "4",
      title: "Holo Wars",
      price: 49.99,
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Space Combat",
      isBlockchainOwned: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 holographic-text">
              FUTURE OF GAMING
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the next generation of digital entertainment with AI-powered recommendations, 
              VR integration, and blockchain ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/vr-store">
                <Button size="lg" className="cyber-button text-lg px-8 py-4">
                  <Globe className="w-5 h-5 mr-2" />
                  Enter Metaverse Store
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="cyber-button text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="ai-chip text-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-1" />
                AI-Powered
              </Badge>
              <Badge className="ai-chip text-sm px-4 py-2">
                <Eye className="w-4 h-4 mr-1" />
                VR/AR Ready
              </Badge>
              <Badge className="ai-chip text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-1" />
                Blockchain Ownership
              </Badge>
              <Badge className="ai-chip text-sm px-4 py-2">
                <Headphones className="w-4 h-4 mr-1" />
                Voice Control
              </Badge>
            </div>
          </div>
        </div>

        {/* Floating 3D Game Showcase */}
        <div className="relative mt-16">
          <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">
              🎮 Interactive 3D Game Showcase
            </h2>
            <div className="bg-black/50 rounded-xl p-8 text-center">
              <div className="transform-3d floating">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                  <Gamepad2 className="w-24 h-24 text-cyan-400 rotate-y" />
                </div>
              </div>
              <p className="text-gray-400 mt-4">
                Holographic game preview - Rotate with mouse, voice commands, or hand gestures
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <Button size="sm" variant="outline" className="cyber-button">
                  🎮 Play Demo
                </Button>
                <Button size="sm" variant="outline" className="cyber-button">
                  👁️ AR Preview
                </Button>
                <Button size="sm" variant="outline" className="cyber-button">
                  🔊 Voice Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendations Section */}
      <AIRecommendations />

      {/* Featured Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold holographic-text">Featured Games</h2>
            <div className="flex items-center space-x-4">
              <Badge className="ai-chip">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending Now
              </Badge>
              <Button variant="outline" className="cyber-button">
                View All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 holographic-text">
              📈 Dynamic Market Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-green-400/30 rounded-xl">
                <div className="text-green-400 text-2xl font-bold">📊 RISING</div>
                <div className="text-xl font-semibold mt-2">Cyber Nexus 2077</div>
                <div className="text-green-400">+15% in 24h</div>
                <div className="text-sm text-gray-400 mt-2">High demand detected</div>
              </div>
              <div className="text-center p-6 border border-red-400/30 rounded-xl">
                <div className="text-red-400 text-2xl font-bold">📉 FALLING</div>
                <div className="text-xl font-semibold mt-2">Space Odyssey</div>
                <div className="text-red-400">-8% in 24h</div>
                <div className="text-sm text-gray-400 mt-2">Limited interest</div>
              </div>
              <div className="text-center p-6 border border-purple-400/30 rounded-xl">
                <div className="text-purple-400 text-2xl font-bold">🔥 AUCTION</div>
                <div className="text-xl font-semibold mt-2">Rare NFT Skins</div>
                <div className="text-purple-400">2h 34m left</div>
                <div className="text-sm text-gray-400 mt-2">Highest bid: 0.5 ETH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metaverse Integration */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 holographic-text">
              Ready for the Metaverse?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Step into our virtual store, attend gaming events, and connect with players worldwide 
              in our immersive 3D environment.
            </p>
            <Link to="/vr-store">
              <Button size="lg" className="cyber-button text-xl px-12 py-6">
                <Globe className="w-6 h-6 mr-2" />
                Enter Virtual Store
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
