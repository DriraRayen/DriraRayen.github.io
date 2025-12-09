import { useState, useEffect } from "react";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
   TooltipProvider,
} from "@/components/ui/tooltip";

// Custom SVG icons for the themes
const EldenRingIcon = ({ className }: { className?: string }) => (
   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Elden Ring inspired icon - Erdtree ring symbol */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.75"/>
      {/* Cardinal runes */}
      <circle cx="12" cy="3.5" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="20.5" r="1.2" fill="currentColor"/>
      <circle cx="3.5" cy="12" r="1.2" fill="currentColor"/>
      <circle cx="20.5" cy="12" r="1.2" fill="currentColor"/>
      {/* Diagonal runes */}
      <circle cx="6" cy="6" r="0.8" fill="currentColor"/>
      <circle cx="18" cy="6" r="0.8" fill="currentColor"/>
      <circle cx="6" cy="18" r="0.8" fill="currentColor"/>
      <circle cx="18" cy="18" r="0.8" fill="currentColor"/>
   </svg>
);

const HollowKnightIcon = ({ className }: { className?: string }) => (
   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Hollow Knight inspired icon - the Knight's mask with horns */}
      {/* Horns */}
      <path d="M5 6 L3 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 6 L21 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Mask body */}
      <ellipse cx="12" cy="12" rx="7.5" ry="9" fill="none" stroke="currentColor" strokeWidth="2"/>
      {/* Eyes - the void */}
      <ellipse cx="8" cy="11" rx="2" ry="2.5" fill="currentColor"/>
      <ellipse cx="16" cy="11" rx="2" ry="2.5" fill="currentColor"/>
   </svg>
);

type GameTheme = "eldenring" | "hollowknight";

const ThemeToggle = () => {
   const [theme, setTheme] = useState<GameTheme>("eldenring");

   useEffect(() => {
      const savedTheme = localStorage.getItem("game-theme") as GameTheme | null;
      
      if (savedTheme === "hollowknight") {
         setTheme("hollowknight");
         document.documentElement.classList.remove("eldenring");
         document.documentElement.classList.add("hollowknight");
      } else {
         setTheme("eldenring");
         document.documentElement.classList.add("eldenring");
         document.documentElement.classList.remove("hollowknight");
      }
   }, []);

   const toggleTheme = () => {
      const newTheme = theme === "eldenring" ? "hollowknight" : "eldenring";
      setTheme(newTheme);
      
      if (newTheme === "hollowknight") {
         document.documentElement.classList.remove("eldenring");
         document.documentElement.classList.add("hollowknight");
         localStorage.setItem("game-theme", "hollowknight");
      } else {
         document.documentElement.classList.remove("hollowknight");
         document.documentElement.classList.add("eldenring");
         localStorage.setItem("game-theme", "eldenring");
      }
   };

   return (
      <TooltipProvider delayDuration={200}>
         <Tooltip>
            <TooltipTrigger asChild>
               <button
                  onClick={toggleTheme}
                  className={`relative p-2.5 rounded-full border-2 transition-all duration-500 group overflow-hidden ${
                     theme === "eldenring"
                        ? "border-elden-gold/50 bg-elden-dark-light/80 hover:bg-elden-gold/20 hover:border-elden-gold hover:shadow-[0_0_20px_hsl(45,100%,60%,0.3)]"
                        : "border-hollow-soul/50 bg-hollow-shell/80 hover:bg-hollow-soul/20 hover:border-hollow-soul hover:shadow-[0_0_20px_hsl(195,100%,70%,0.3)]"
                  }`}
                  aria-label={theme === "eldenring" ? "Switch to Hollow Knight theme" : "Switch to Elden Ring theme"}
               >
                  {/* Ambient glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full ${
                     theme === "eldenring" 
                        ? "bg-gradient-radial from-elden-gold/20 to-transparent" 
                        : "bg-gradient-radial from-hollow-soul/20 to-transparent"
                  }`} />
                  
                  {/* Icon container with smooth transition */}
                  <div className="relative w-6 h-6">
                     {/* Elden Ring icon */}
                     <EldenRingIcon 
                        className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-out ${
                           theme === "eldenring" 
                              ? "opacity-100 rotate-0 scale-100 text-elden-gold" 
                              : "opacity-0 rotate-180 scale-50 text-elden-gold"
                        }`}
                     />
                     {/* Hollow Knight icon */}
                     <HollowKnightIcon 
                        className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-out ${
                           theme === "hollowknight" 
                              ? "opacity-100 rotate-0 scale-100 text-hollow-soul" 
                              : "opacity-0 -rotate-180 scale-50 text-hollow-soul"
                        }`}
                     />
                  </div>
               </button>
            </TooltipTrigger>
            <TooltipContent 
               side="bottom" 
               className={`font-cinzel text-xs tracking-wide ${
                  theme === "eldenring"
                     ? "bg-elden-dark border-elden-gold/30 text-elden-gold"
                     : "bg-hollow-deep border-hollow-soul/30 text-hollow-soul"
               }`}
            >
               {theme === "eldenring" ? "Enter the Void" : "Return to the Lands Between"}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ThemeToggle;
