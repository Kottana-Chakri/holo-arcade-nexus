
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Eye, 
  Gamepad2,
  Users,
  Calendar,
  Shield,
  Download,
  Share,
  Heart
} from "lucide-react";

const GameDetails = () => {
  const { id } = useParams();

  // Mock game data - in real app, this would be fetched based on ID
  const game = {
    id: "1",
    title: "Cyber Nexus 2077",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 15420,
    image: "/placeholder.svg",
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Cyberpunk RPG",
    developer: "Future Games Studio",
    publisher: "Nexus Interactive",
    releaseDate: "2024-01-10",
    platforms: ["PC", "VR", "Console"],
    languages: ["English", "Spanish", "French", "German", "Japanese"],
    description: "Immerse yourself in a dystopian future where technology and humanity collide. Cyber Nexus 2077 offers an unprecedented cyberpunk experience with cutting-edge graphics, deep RPG mechanics, and a branching narrative that adapts to your choices.",
    features: [
      "Ray-traced reflections and lighting",
      "AI-driven NPCs with realistic conversations",
      "100+ hours of gameplay content",
      "Full VR compatibility",
      "Blockchain-based item ownership",
      "Dynamic weather and day/night cycles"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "GTX 1060 6GB / RX 580 8GB",
        storage: "70 GB available space"
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "RTX 3070 / RX 6700 XT",
        storage: "70 GB SSD space"
      }
    },
    isVRReady: true,
    isBlockchainOwned: true,
    isHotDeal: true,
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Game Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Game Media */}
            <div>
              <div className="relative mb-6">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Play Demo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
                  <Button size="lg" className="cyber-button">
                    <Eye className="w-6 h-6 mr-2" />
                    Watch Trailer
                  </Button>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {game.isHotDeal && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      🔥 HOT DEAL
                    </Badge>
                  )}
                  {game.isVRReady && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      VR READY
                    </Badge>
                  )}
                  {game.isBlockchainOwned && (
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      NFT OWNERSHIP
                    </Badge>
                  )}
                </div>
              </div>

              {/* Screenshot Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Game Info */}
            <div>
              <h1 className="text-4xl font-bold holographic-text mb-4">{game.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-xl font-semibold">{game.rating}</span>
                  <span className="text-gray-400">({game.reviews.toLocaleString()} reviews)</span>
                </div>
                <Badge className="ai-chip">{game.category}</Badge>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{game.description}</p>

              {/* Game Details */}
              <div className="glass-panel rounded-xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Developer:</span>
                    <span className="text-white ml-2">{game.developer}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Publisher:</span>
                    <span className="text-white ml-2">{game.publisher}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Release Date:</span>
                    <span className="text-white ml-2">{game.releaseDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Platforms:</span>
                    <span className="text-white ml-2">{game.platforms.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-cyan-400">${game.price}</span>
                {game.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${game.originalPrice}</span>
                )}
                {game.originalPrice && (
                  <Badge className="bg-green-500 text-white">
                    {Math.round(((game.originalPrice - game.price) / game.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="cyber-button flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="cyber-button">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Try Demo
                </Button>
                <Button size="lg" variant="outline" className="cyber-button">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="cyber-button">
                  <Share className="w-5 h-5" />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-cyan-400/30 rounded-xl">
                  <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">24.5K</div>
                  <div className="text-sm text-gray-400">Players Online</div>
                </div>
                <div className="text-center p-4 border border-purple-400/30 rounded-xl">
                  <Download className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">1.2M</div>
                  <div className="text-sm text-gray-400">Downloads</div>
                </div>
                <div className="text-center p-4 border border-orange-400/30 rounded-xl">
                  <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">125</div>
                  <div className="text-sm text-gray-400">Days Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold holographic-text mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {game.features.map((feature, index) => (
                <div key={index} className="glass-panel rounded-xl p-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    <span className="text-white">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Requirements */}
          <section>
            <h2 className="text-3xl font-bold holographic-text mb-8">System Requirements</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimum Requirements</h3>
                <div className="space-y-3">
                  {Object.entries(game.systemRequirements.minimum).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}:</span>
                      <span className="text-white text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Recommended Requirements</h3>
                <div className="space-y-3">
                  {Object.entries(game.systemRequirements.recommended).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}:</span>
                      <span className="text-white text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
