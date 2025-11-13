import { X, Trophy, Award, Target, Shield, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface AchievementsModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const AchievementsModal = ({ isOpen, onClose }: AchievementsModalProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const [hoveredStat, setHoveredStat] = useState<string | null>(null);
   const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(
      null
   );

   useEffect(() => {
      if (isOpen) {
         setTimeout(() => setIsVisible(true), 50);
      } else {
         setIsVisible(false);
      }
   }, [isOpen]);

   if (!isOpen) return null;

   // Character Stats - Elden Ring style
   const characterStats = [
      {
         name: "Level",
         value: "21",
         description: "Years since birth • Age of the Tarnished",
         icon: Sparkles,
         color: "text-yellow-400",
      },
      {
         name: "Vigor",
         value: "9+",
         description: "Projects Completed • Strength through creation",
         icon: Target,
         color: "text-red-400",
      },
      {
         name: "Mind",
         value: "20+",
         description: "Technologies Mastered • Wisdom of the ages",
         icon: Zap,
         color: "text-blue-400",
      },
      {
         name: "Endurance",
         value: "4",
         description: "Certifications Earned • Badges of honor",
         icon: Shield,
         color: "text-green-400",
      },
      {
         name: "Strength",
         value: "13",
         description: "Years of Scout Leadership • Commander's resolve",
         icon: Award,
         color: "text-orange-400",
      },
      {
         name: "Dexterity",
         value: "∞",
         description: "Problem-Solving Skill • Infinite adaptability",
         icon: Trophy,
         color: "text-purple-400",
      },
   ];

   // Achievements - Elden Ring trophy style
   const achievements = [
      {
         title: "Starscourge Conqueror",
         description: "Defeated Radahn in the Shadow of the Erdtree DLC",
         rarity: "Legendary",
         icon: "🌠",
         unlocked: true,
         color: "from-red-600/20 to-orange-600/20",
         borderColor: "border-red-500/50",
      },
      {
         title: "True Elden Lord",
         description: "Completed NG+8 and unlocked all game endings",
         rarity: "Legendary",
         icon: "👑",
         unlocked: true,
         color: "from-yellow-600/20 to-amber-600/20",
         borderColor: "border-yellow-500/50",
      },
      {
         title: "Content Creator",
         description: "YouTube channel reached 10K+ views with multiple videos",
         rarity: "Epic",
         icon: "📹",
         unlocked: true,
         color: "from-red-600/20 to-pink-600/20",
         borderColor: "border-red-500/50",
      },
      {
         title: "Mathematical Prodigy",
         description: "Won a Mathematics Competition at age 15",
         rarity: "Legendary",
         icon: "🧮",
         unlocked: true,
         color: "from-blue-600/20 to-cyan-600/20",
         borderColor: "border-blue-500/50",
      },
      {
         title: "Chess Strategist",
         description:
            "Mastered the art of thinking 10 moves ahead on the chessboard",
         rarity: "Epic",
         icon: "♟️",
         unlocked: true,
         color: "from-green-600/20 to-emerald-600/20",
         borderColor: "border-green-500/50",
      },
      {
         title: "Entertainment Connoisseur",
         description:
            "Watched 1000+ movies, series, and anime - a true cinephile and otaku",
         rarity: "Rare",
         icon: "🎬",
         unlocked: true,
         color: "from-amber-600/20 to-yellow-600/20",
         borderColor: "border-amber-500/50",
      },
      {
         title: "Gaming Champion",
         description:
            "Conquered Hollow Knight, Silksong, Dead Cells, Valorant, FIFA, A Dance of Fire and Ice, Ghost of Tsushima & more",
         rarity: "Epic",
         icon: "🎮",
         unlocked: true,
         color: "from-indigo-600/20 to-purple-600/20",
         borderColor: "border-indigo-500/50",
      },
   ];

   const rarityColors = {
      Legendary: "text-yellow-400",
      Epic: "text-purple-400",
      Rare: "text-blue-400",
   };

   return (
      <div
         className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}
         onClick={onClose}
      >
         {/* Backdrop with mystical fog effect */}
         <div className="absolute inset-0 bg-black/90 backdrop-blur-md">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
               {[...Array(20)].map((_, i) => (
                  <div
                     key={i}
                     className="absolute w-1 h-1 bg-elden-gold/30 rounded-full animate-float"
                     style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                     }}
                  />
               ))}
            </div>
         </div>

         {/* Modal content */}
         <div
            className={`relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark border-2 border-elden-gold/50 rounded-2xl shadow-2xl transform transition-all duration-500 ${
               isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
         >
            {/* Decorative corner accents - fixed to modal container */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-elden-gold/70 pointer-events-none z-20" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-elden-gold/70 pointer-events-none z-20" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-elden-gold/70 pointer-events-none z-20" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-elden-gold/70 pointer-events-none z-20" />

            {/* Scrollable content wrapper */}
            <div className="max-h-[90vh] overflow-y-auto">
               {/* Close button */}
               <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 p-2 text-muted-foreground hover:text-gold transition-colors rounded-lg hover:bg-elden-gold/10"
               >
                  <X className="w-6 h-6" />
               </button>

               {/* Header */}
               <div className="text-center pt-12 pb-8 px-8 border-b border-elden-gold/30">
                  <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                     Tarnished One's Legacy
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-3">
                     <div className="h-px w-16 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                     <Trophy className="w-5 h-5 text-elden-gold animate-pulse" />
                     <div className="h-px w-16 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
                  </div>
                  <p className="font-garamond text-lg text-muted-foreground/80">
                     Character Stats & Achievements Unlocked
                  </p>
               </div>

               <div className="p-8 space-y-12">
                  {/* Character Stats Section */}
                  <div>
                     <h3 className="font-cinzel text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                        <Sparkles className="w-6 h-6" />
                        Character Attributes
                     </h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {characterStats.map((stat, index) => {
                           const Icon = stat.icon;
                           return (
                              <div
                                 key={stat.name}
                                 className="relative group"
                                 onMouseEnter={() => setHoveredStat(stat.name)}
                                 onMouseLeave={() => setHoveredStat(null)}
                              >
                                 {/* Glow effect */}
                                 <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/10 to-elden-gold/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                 <div
                                    className={`relative bg-elden-dark-light/80 backdrop-blur-sm border border-elden-gold/30 p-5 rounded-lg transition-all duration-300 ${
                                       hoveredStat === stat.name
                                          ? "border-elden-gold/60 shadow-lg shadow-elden-gold/20"
                                          : ""
                                    }`}
                                    style={{
                                       animationDelay: `${index * 100}ms`,
                                    }}
                                 >
                                    <div className="flex items-start justify-between mb-3">
                                       <div>
                                          <p className="font-cinzel text-sm text-muted-foreground/70 uppercase tracking-wider mb-1">
                                             {stat.name}
                                          </p>
                                          <p
                                             className={`font-cinzel text-3xl font-bold ${stat.color}`}
                                          >
                                             {stat.value}
                                          </p>
                                       </div>
                                       <Icon
                                          className={`w-8 h-8 ${stat.color} opacity-50`}
                                       />
                                    </div>
                                    <p className="font-garamond text-xs text-muted-foreground/60 leading-relaxed">
                                       {stat.description}
                                    </p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  {/* Achievements Section */}
                  <div>
                     <h3 className="font-cinzel text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                        <Trophy className="w-6 h-6" />
                        Legendary Achievements
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                           <div
                              key={achievement.title}
                              className="relative group"
                              onMouseEnter={() =>
                                 setHoveredAchievement(achievement.title)
                              }
                              onMouseLeave={() => setHoveredAchievement(null)}
                           >
                              {/* Glow effect */}
                              <div
                                 className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500`}
                              />

                              <div
                                 className={`relative bg-elden-dark-light/80 backdrop-blur-sm border ${
                                    achievement.borderColor
                                 } p-6 rounded-lg transition-all duration-300 ${
                                    hoveredAchievement === achievement.title
                                       ? "shadow-lg"
                                       : ""
                                 }`}
                                 style={{
                                    animationDelay: `${index * 100}ms`,
                                 }}
                              >
                                 {/* Achievement icon and rarity */}
                                 <div className="flex items-start justify-between mb-3">
                                    <div className="text-4xl">
                                       {achievement.icon}
                                    </div>
                                    <span
                                       className={`font-cinzel text-xs uppercase tracking-wider px-2 py-1 rounded ${
                                          rarityColors[
                                             achievement.rarity as keyof typeof rarityColors
                                          ]
                                       } bg-black/30`}
                                    >
                                       {achievement.rarity}
                                    </span>
                                 </div>

                                 {/* Achievement details */}
                                 <h4 className="font-cinzel text-lg font-bold text-gold mb-2">
                                    {achievement.title}
                                 </h4>
                                 <p className="font-garamond text-sm text-muted-foreground/80 leading-relaxed mb-3">
                                    {achievement.description}
                                 </p>

                                 {/* Unlocked status */}
                                 {achievement.unlocked && (
                                    <div className="flex items-center gap-2 text-green-400/80 text-xs font-garamond">
                                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                       <span>Unlocked</span>
                                    </div>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Footer message */}
                  <div className="text-center pt-8 border-t border-elden-gold/30">
                     <p className="font-garamond text-sm text-muted-foreground/60 italic">
                        "These are the marks of a true Elden Lord, forged
                        through trials and triumphs in the Lands Between"
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AchievementsModal;
