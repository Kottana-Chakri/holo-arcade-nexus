
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Trophy, 
  Radio,
  Calendar,
  MessageCircle,
  Star,
  Play,
  Eye
} from "lucide-react";

const SocialHub = () => {
  const liveStreams = [
    {
      id: 1,
      streamer: "CyberGamer_X",
      game: "Cyber Nexus 2077",
      viewers: 12500,
      thumbnail: "/placeholder.svg",
      title: "New DLC First Look - Cybernetic Uprising!",
    },
    {
      id: 2,
      streamer: "QuantumQueen",
      game: "Neural Storm",
      viewers: 8300,
      thumbnail: "/placeholder.svg",
      title: "Pro Strategies & Meta Analysis",
    },
    {
      id: 3,
      streamer: "NeonNinja",
      game: "Holo Wars",
      viewers: 6700,
      thumbnail: "/placeholder.svg",
      title: "Ranked Climbing to Legend",
    },
  ];

  const tournaments = [
    {
      id: 1,
      name: "Nexus Championship 2024",
      game: "Cyber Nexus 2077",
      prize: "$100,000",
      participants: 1024,
      startDate: "2024-01-15",
      status: "Live",
    },
    {
      id: 2,
      name: "Neural Storm World Cup",
      game: "Neural Storm",
      prize: "$50,000",
      participants: 512,
      startDate: "2024-01-20",
      status: "Registration Open",
    },
    {
      id: 3,
      name: "Quantum Racing League",
      game: "Quantum Racer",
      prize: "$25,000",
      participants: 256,
      startDate: "2024-01-25",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Social Hub Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-cyan-400 mr-2" />
              <h1 className="text-5xl font-bold holographic-text">SOCIAL GAMING HUB</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with millions of gamers, watch live streams, compete in tournaments, 
              and showcase your gaming achievements in our futuristic social platform.
            </p>
          </div>

          {/* Live Streams Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold holographic-text flex items-center">
                <Radio className="w-8 h-8 text-red-400 mr-2" />
                Live Streams
              </h2>
              <Badge className="ai-chip">
                <Eye className="w-4 h-4 mr-1" />
                127,500 watching now
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveStreams.map((stream) => (
                <div key={stream.id} className="game-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Live indicator */}
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white animate-pulse">
                        🔴 LIVE
                      </Badge>
                    </div>

                    {/* Viewer count */}
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/70 text-white">
                        <Eye className="w-3 h-3 mr-1" />
                        {stream.viewers.toLocaleString()}
                      </Badge>
                    </div>

                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="lg" className="cyber-button">
                        <Play className="w-6 h-6 mr-2" />
                        Watch Stream
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">
                      {stream.title}
                    </h3>
                    <p className="text-cyan-400 font-medium">{stream.streamer}</p>
                    <p className="text-gray-400 text-sm">{stream.game}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Esports Tournaments */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold holographic-text flex items-center">
                <Trophy className="w-8 h-8 text-yellow-400 mr-2" />
                Esports Tournaments
              </h2>
              <Button variant="outline" className="cyber-button">
                View All Tournaments
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="glass-panel rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-cyan-400">{tournament.name}</h3>
                    <Badge 
                      className={`${
                        tournament.status === "Live" 
                          ? "bg-red-500" 
                          : tournament.status === "Registration Open"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      } text-white`}
                    >
                      {tournament.status}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{tournament.game}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                      <span className="text-green-400 font-bold">{tournament.prize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants:</span>
                      <span className="text-white">{tournament.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Start Date:</span>
                      <span className="text-white">{tournament.startDate}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full cyber-button"
                    disabled={tournament.status === "Coming Soon"}
                  >
                    {tournament.status === "Live" 
                      ? "Watch Live" 
                      : tournament.status === "Registration Open"
                      ? "Register Now"
                      : "Coming Soon"
                    }
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Gamer Profiles Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold holographic-text text-center mb-8">
              Top Gamers This Week
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "CyberMaster", level: 99, games: 247, achievements: 1500 },
                { name: "QuantumLeader", level: 87, games: 189, achievements: 1200 },
                { name: "NeonChampion", level: 92, games: 203, achievements: 1350 },
              ].map((gamer, index) => (
                <div key={gamer.name} className="glass-panel rounded-xl p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{gamer.name}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white font-bold">{gamer.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Games:</span>
                      <span className="text-white">{gamer.games}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Achievements:</span>
                      <span className="text-yellow-400">{gamer.achievements}</span>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="cyber-button mt-4">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Gaming Events Calendar */}
          <section>
            <div className="glass-panel rounded-2xl p-8">
              <h2 className="text-3xl font-bold holographic-text text-center mb-8 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-purple-400 mr-2" />
                Upcoming Gaming Events
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { date: "Jan 15", event: "Cyber Nexus Championship Finals", time: "2:00 PM EST" },
                  { date: "Jan 18", event: "VR Gaming Expo", time: "10:00 AM EST" },
                  { date: "Jan 22", event: "Neural Storm Developer Q&A", time: "6:00 PM EST" },
                  { date: "Jan 25", event: "Quantum Racing Season 2 Launch", time: "12:00 PM EST" },
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border border-cyan-400/30 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{event.event}</h3>
                      <p className="text-gray-400 text-sm">{event.time}</p>
                    </div>
                    <Button size="sm" variant="outline" className="cyber-button">
                      Remind Me
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
