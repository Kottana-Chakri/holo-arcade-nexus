
import { useState } from "react";
import { Star, ShoppingCart, Eye, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  game: {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    category: string;
    isVRReady?: boolean;
    isBlockchainOwned?: boolean;
    isHotDeal?: boolean;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="game-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Holographic overlay on hover */}
        <div className={`absolute inset-0 holographic transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "opacity-0"
        }`}></div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.isHotDeal && (
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              🔥 HOT
            </Badge>
          )}
          {game.isVRReady && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              VR READY
            </Badge>
          )}
          {game.isBlockchainOwned && (
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              NFT OWNED
            </Badge>
          )}
        </div>

        {/* Quick actions on hover */}
        <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <Button size="sm" variant="secondary" className="cyber-button">
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button size="sm" variant="secondary" className="cyber-button">
            <Gamepad2 className="w-4 h-4 mr-1" />
            Play Demo
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{game.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-3">{game.category}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-cyan-400">${game.price}</span>
            {game.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${game.originalPrice}</span>
            )}
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>

        {/* AI Recommendation indicator */}
        <div className="mt-3 flex items-center space-x-2">
          <div className="ai-chip">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            AI Match: 94%
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
