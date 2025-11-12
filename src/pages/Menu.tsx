import { useNavigate } from "react-router-dom";
import {
   User,
   Briefcase,
   Sparkles,
   Image,
   Award,
   Scroll,
   Mail,
   Volume2,
   VolumeX,
} from "lucide-react";
import { useState, useEffect } from "react";
import PortalTransition from "@/components/portfolio/PortalTransition";
import FloatingRunes from "@/components/portfolio/FloatingRunes";
import MysticalFog from "@/components/portfolio/MysticalFog";
import heroBackground from "@/assets/hero-background.jpg";
import runeLogo from "@/assets/rune-logo.png";

const Menu = () => {
   const navigate = useNavigate();
   const [musicEnabled, setMusicEnabled] = useState(false);
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const [isTransitioning, setIsTransitioning] = useState(false);
   const [targetPath, setTargetPath] = useState<string>("");

   const menuItems = [
      {
         path: "/about",
         label: "The Wanderer",
         icon: User,
         rune: "🜃",
         desc: "Discover the path of the Elden Engineer",
      },
      {
         path: "/projects",
         label: "Forged Works",
         icon: Briefcase,
         rune: "🜁",
         desc: "Explore legendary creations and artifacts",
      },
      {
         path: "/skills",
         label: "Rune Mastery",
         icon: Sparkles,
         rune: "🜄",
         desc: "Unveil the powers and sacred seals",
      },
      {
         path: "/gallery",
         label: "Chronicles",
         icon: Image,
         rune: "🜂",
         desc: "Witness battles fought and victories won",
      },
      {
         path: "/certificates",
         label: "Sacred Seals",
         icon: Award,
         rune: "⚜",
         desc: "Behold the marks of mastery attained",
      },
      {
         path: "/timeline",
         label: "Battle Log",
         icon: Scroll,
         rune: "⚔",
         desc: "Chronicle of trials conquered",
      },
      {
         path: "/contact",
         label: "Summon Stone",
         icon: Mail,
         rune: "✉",
         desc: "Reach across the realm",
      },
   ];

   const handleNavigation = (path: string) => {
      setTargetPath(path);
      setIsTransitioning(true);
   };

   const handleTransitionComplete = () => {
      if (targetPath) {
         navigate(targetPath);
      }
   };

   return (
      <div
         className="relative min-h-screen flex items-center justify-center overflow-hidden"
         style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
      >
         {/* Portal transition effect */}
         <PortalTransition
            isActive={isTransitioning}
            onComplete={handleTransitionComplete}
         />

         {/* Mystical atmospheric effects */}
         <FloatingRunes />
         <MysticalFog />

         {/* Single 100vh viewport container */}
         <div className="relative z-10 w-full h-screen flex items-center justify-center px-4 md:px-8">
            {/* Everything in one viewport */}
            <div className="relative w-full h-full max-w-7xl">
               {/* Header - positioned lower */}
               <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center animate-fadeIn z-20">
                  <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-gold glow-gold mb-4">
                     RAYEN DRIRA
                  </h1>
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <div className="h-px w-24 bg-gradient-to-r from-transparent to-elden-gold" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full animate-glow" />
                     <div className="w-2.5 h-2.5 border-2 border-elden-gold rounded-full rotate-45 animate-pulse" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full animate-glow" />
                     <div className="h-px w-24 bg-gradient-to-l from-transparent to-elden-gold" />
                  </div>
                  <p className="font-garamond text-xl md:text-2xl text-gold-light mb-2">
                     Forging Technology in the Lands Between
                  </p>
                  <p className="font-garamond text-sm text-muted-foreground italic">
                     Choose your destination, Tarnished One
                  </p>
               </div>

               {/* Centered vertical menu list - moved down with header */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 mt-24">
                  {menuItems.map((item, index) => {
                     const Icon = item.icon;
                     const isHovered = hoveredIndex === index;

                     return (
                        <button
                           key={item.path}
                           onClick={() => handleNavigation(item.path)}
                           onMouseEnter={() => setHoveredIndex(index)}
                           onMouseLeave={() => setHoveredIndex(null)}
                           className="group relative animate-fadeIn"
                           style={{
                              animationDelay: `${index * 0.1}s`,
                           }}
                        >
                           {/* Simple grey text - Elden Ring menu style */}
                           <div className="relative">
                              {/* Subtle glow effect on hover */}
                              {isHovered && (
                                 <div className="absolute inset-0 -inset-x-6 bg-gray-400/10 blur-lg" />
                              )}

                              {/* Text */}
                              <h2
                                 className={`relative font-cinzel text-base md:text-lg font-normal whitespace-nowrap transition-all duration-300 tracking-wider uppercase ${
                                    isHovered
                                       ? "text-gray-100 scale-105"
                                       : "text-gray-400"
                                 }`}
                                 style={{
                                    textShadow: isHovered
                                       ? "0 0 12px rgba(220, 220, 220, 0.4)"
                                       : "none",
                                 }}
                              >
                                 {item.label}
                              </h2>
                           </div>
                        </button>
                     );
                  })}
               </div>
            </div>
         </div>

         {/* Mystical corner decorations */}
         <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-elden-gold/30 pointer-events-none" />
         <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-elden-gold/30 pointer-events-none" />
         <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-elden-gold/30 pointer-events-none" />
         <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-elden-gold/30 pointer-events-none" />
      </div>
   );
};

export default Menu;
