
import { useState, useEffect } from "react";
import { Brain, TrendingUp, Sparkles } from "lucide-react";
import GameCard from "./GameCard";

const AIRecommendations = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnalyzing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const recommendedGames = [
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
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-cyan-400 mr-2" />
            <h2 className="text-3xl font-bold holographic-text">AI-Powered Recommendations</h2>
          </div>
          
          {isAnalyzing ? (
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="ml-2">Analyzing your gaming preferences...</span>
            </div>
          ) : (
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our neural network has analyzed 10,000+ games and your play history to find perfect matches.
            </p>
          )}
        </div>

        {/* Neural Network Visualization */}
        <div className="relative mb-12">
          <div className="glass-panel rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-400">Match Score: 94%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-purple-400">Confidence: High</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="ai-chip">
                <span className="block text-xs">Genre Affinity</span>
                <span className="block font-bold">RPG: 87%</span>
              </div>
              <div className="ai-chip">
                <span className="block text-xs">Platform Preference</span>
                <span className="block font-bold">VR: 92%</span>
              </div>
              <div className="ai-chip">
                <span className="block text-xs">Price Sensitivity</span>
                <span className="block font-bold">Premium: 78%</span>
              </div>
            </div>
          </div>

          {/* Animated Neural Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="neural-line absolute"
                style={{
                  top: `${20 + i * 15}%`,
                  left: "10%",
                  right: "10%",
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Recommended Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-12 text-center">
          <div className="glass-panel rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Why These Games?</h3>
            <p className="text-gray-400 text-sm">
              Based on your recent activity in "Starfield" and "Cyberpunk 2077", 
              our AI detected your preference for immersive sci-fi worlds with deep RPG mechanics. 
              VR compatibility aligns with your recent headset purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
