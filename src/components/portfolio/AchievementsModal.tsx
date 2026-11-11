import { X, Trophy, Award, Target, Shield, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface AchievementsModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const AchievementsModal = ({ isOpen, onClose }: AchievementsModalProps) => {
   const [isMounted, setIsMounted] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
   const [hoveredStat, setHoveredStat] = useState<string | null>(null);
   const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(
      null
   );

   useEffect(() => {
      if (isOpen) {
         setIsMounted(true);
         const showTimer = window.setTimeout(() => setIsVisible(true), 50);
         return () => window.clearTimeout(showTimer);
      }

      setIsVisible(false);
      const hideTimer = window.setTimeout(() => setIsMounted(false), 500);
      return () => window.clearTimeout(hideTimer);
   }, [isOpen]);

   useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") onClose();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [isOpen, onClose]);

   if (!isMounted) return null;

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
         className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}
         onClick={onClose}
      >
         {/* Darkened world behind the character record */}
         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm">
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

         {/* Character stats sidebar */}
         <div
            className={`relative ml-auto h-full max-h-screen w-full max-w-md overflow-y-auto border-l-2 border-elden-gold/50 bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark shadow-2xl shadow-black/60 transform transition-transform duration-500 ${
               isVisible ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="character-record-heading"
         >
            {/* Decorative corner accents */}
            <div className="pointer-events-none absolute left-3 top-3 z-20 h-10 w-10 border-l-2 border-t-2 border-elden-gold/60" />
            <div className="pointer-events-none absolute right-3 top-3 z-20 h-10 w-10 border-r-2 border-t-2 border-elden-gold/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-10 w-10 border-b-2 border-l-2 border-elden-gold/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-10 w-10 border-b-2 border-r-2 border-elden-gold/60" />

               {/* Close button */}
               <button
                  onClick={onClose}
                  className="absolute right-5 top-5 z-30 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-elden-gold/10 hover:text-gold"
                  aria-label="Close character record"
               >
                  <X className="h-5 w-5" />
               </button>

               {/* Header */}
               <div className="border-b border-elden-gold/30 px-7 pb-6 pt-12 text-left">
                  <h2 id="character-record-heading" className="mb-4 pr-10 font-cinzel text-2xl font-bold text-gold sm:text-3xl">
                     Tarnished One's Legacy
                  </h2>
                  <div className="mb-3 flex items-center gap-4">
                     <div className="h-px w-16 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                     <Trophy className="h-4 w-4 text-elden-gold/80" />
                     <div className="h-px flex-1 bg-gradient-to-r from-elden-gold/40 to-transparent" />
                  </div>
                  <p className="font-garamond text-base text-muted-foreground/80">
                     Character Stats & Achievements Unlocked
                  </p>
               </div>

               <div className="space-y-8 p-5 sm:p-6">
                  {/* Character Stats Section */}
                  <div>
                     <h3 className="mb-4 flex items-center gap-3 font-cinzel text-xl font-bold text-gold">
                        <Sparkles className="h-5 w-5" />
                        Character Attributes
                     </h3>
                     <div className="grid gap-3">
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
                                       className={`font-cinzel text-2xl font-bold ${stat.color}`}
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
                     <h3 className="mb-4 flex items-center gap-3 font-cinzel text-xl font-bold text-gold">
                        <Trophy className="h-5 w-5" />
                        Legendary Achievements
                     </h3>
                     <div className="grid gap-3">
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
   );
};

export default AchievementsModal;
