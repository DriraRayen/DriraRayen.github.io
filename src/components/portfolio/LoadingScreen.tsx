import { useEffect, useState } from "react";

const LoadingScreen = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [fadeOut, setFadeOut] = useState(false);
   const [fadeIn, setFadeIn] = useState(false);

   useEffect(() => {
      // Trigger fade-in animation after a brief delay
      const fadeInTimer = setTimeout(() => {
         setFadeIn(true);
      }, 100);

      const minLoadTime = 1800; // 1.8 seconds
      const startTime = Date.now();
      const handleLoad = async () => {
         // Wait for fonts to load
         if (document.fonts) {
            try {
               await Promise.race([
                  Promise.all([
                     document.fonts.load("600 1em Cinzel"),
                     document.fonts.load('400 1em "EB Garamond"'),
                  ]),
                  // Timeout after 2 seconds
                  new Promise((resolve) => setTimeout(resolve, 2000)),
               ]);
            } catch (error) {
               // Continue even if font loading fails
               console.log("Font loading completed or timed out");
            }
         }

         const elapsedTime = Date.now() - startTime;
         const remainingTime = Math.max(0, minLoadTime - elapsedTime);

         setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
               setIsLoading(false);
            }, 500); // Match fade-out duration
         }, remainingTime);
      };

      // Check if page is already loaded
      if (document.readyState === "complete") {
         handleLoad();
      } else {
         window.addEventListener("load", handleLoad);
         return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(fadeInTimer);
         };
      }
   }, []);
   return (
      <div
         className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"
         }`}
      >
         <div
            className={`flex flex-col items-center gap-12 transition-all duration-700 ${
               fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
         >
            {/* Spinning Rune */}
            <div
               className={`relative w-48 h-48 md:w-64 md:h-64 transition-all duration-1000 delay-200 ${
                  fadeIn
                     ? "opacity-100 scale-100 rotate-0"
                     : "opacity-0 scale-50 -rotate-180"
               }`}
            >
               {/* Outer glow rings */}
               <div className="absolute inset-0 rounded-full bg-elden-gold/20 blur-3xl animate-pulse"></div>
               <div className="absolute inset-[-20px] rounded-full bg-elden-gold/10 blur-2xl animate-pulse-slow"></div>

               {/* Rotating outer ring */}
               <div className="absolute inset-0 rounded-full border-2 border-elden-gold/30 animate-spin-slow"></div>
               <div className="absolute inset-[10px] rounded-full border border-elden-gold/20 animate-spin-reverse"></div>

               {/* Main rune circle */}
               <div className="relative w-full h-full animate-spin-slow">
                  <svg
                     viewBox="0 0 200 200"
                     className="w-full h-full filter drop-shadow-[0_0_20px_hsl(var(--elden-gold))]"
                  >
                     {/* Outer circle */}
                     <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="2"
                        opacity="0.5"
                     />

                     {/* Middle circle */}
                     <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--elden-gold-light))"
                        strokeWidth="1.5"
                        opacity="0.4"
                     />

                     {/* Inner circle */}
                     <circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="3"
                        opacity="0.7"
                     />

                     {/* Rune symbols */}
                     <g
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                     >
                        {/* Top symbol */}
                        <line x1="100" y1="25" x2="100" y2="50" />
                        <line x1="85" y1="37.5" x2="115" y2="37.5" />
                        <circle
                           cx="100"
                           cy="25"
                           r="4"
                           fill="hsl(var(--elden-gold))"
                           opacity="0.8"
                        />

                        {/* Right symbol */}
                        <line x1="175" y1="100" x2="150" y2="100" />
                        <line x1="162.5" y1="85" x2="162.5" y2="115" />
                        <circle
                           cx="175"
                           cy="100"
                           r="4"
                           fill="hsl(var(--elden-gold))"
                           opacity="0.8"
                        />

                        {/* Bottom symbol */}
                        <line x1="100" y1="175" x2="100" y2="150" />
                        <line x1="85" y1="162.5" x2="115" y2="162.5" />
                        <circle
                           cx="100"
                           cy="175"
                           r="4"
                           fill="hsl(var(--elden-gold))"
                           opacity="0.8"
                        />

                        {/* Left symbol */}
                        <line x1="25" y1="100" x2="50" y2="100" />
                        <line x1="37.5" y1="85" x2="37.5" y2="115" />
                        <circle
                           cx="25"
                           cy="100"
                           r="4"
                           fill="hsl(var(--elden-gold))"
                           opacity="0.8"
                        />

                        {/* Center diamond */}
                        <polygon
                           points="100,75 125,100 100,125 75,100"
                           fill="hsl(var(--elden-gold))"
                           fillOpacity="0.15"
                           stroke="hsl(var(--elden-gold))"
                           strokeWidth="2.5"
                        />

                        {/* Inner star pattern */}
                        <line
                           x1="100"
                           y1="55"
                           x2="100"
                           y2="75"
                           strokeWidth="2.5"
                           opacity="0.7"
                        />
                        <line
                           x1="145"
                           y1="100"
                           x2="125"
                           y2="100"
                           strokeWidth="2.5"
                           opacity="0.7"
                        />
                        <line
                           x1="100"
                           y1="145"
                           x2="100"
                           y2="125"
                           strokeWidth="2.5"
                           opacity="0.7"
                        />
                        <line
                           x1="55"
                           y1="100"
                           x2="75"
                           y2="100"
                           strokeWidth="2.5"
                           opacity="0.7"
                        />

                        {/* Diagonal cross lines */}
                        <line
                           x1="85"
                           y1="85"
                           x2="75"
                           y2="75"
                           strokeWidth="1.5"
                           opacity="0.4"
                        />
                        <line
                           x1="115"
                           y1="85"
                           x2="125"
                           y2="75"
                           strokeWidth="1.5"
                           opacity="0.4"
                        />
                        <line
                           x1="115"
                           y1="115"
                           x2="125"
                           y2="125"
                           strokeWidth="1.5"
                           opacity="0.4"
                        />
                        <line
                           x1="85"
                           y1="115"
                           x2="75"
                           y2="125"
                           strokeWidth="1.5"
                           opacity="0.4"
                        />
                     </g>

                     {/* Decorative arcs */}
                     <path
                        d="M 40 40 Q 100 70 160 40"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="1.5"
                        opacity="0.3"
                     />
                     <path
                        d="M 40 160 Q 100 130 160 160"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="1.5"
                        opacity="0.3"
                     />
                     <path
                        d="M 40 40 Q 70 100 40 160"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="1.5"
                        opacity="0.3"
                     />
                     <path
                        d="M 160 40 Q 130 100 160 160"
                        fill="none"
                        stroke="hsl(var(--elden-gold))"
                        strokeWidth="1.5"
                        opacity="0.3"
                     />
                  </svg>
               </div>

               {/* Center glow - Enhanced */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-elden-gold/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-elden-gold/20 rounded-full blur-[100px] opacity-30 animate-pulse-slow"></div>

               {/* Orbiting particles */}
               <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-elden-gold rounded-full -translate-x-1/2 shadow-[0_0_8px_hsl(var(--elden-gold))]"></div>
                  <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-elden-gold rounded-full -translate-x-1/2 shadow-[0_0_8px_hsl(var(--elden-gold))]"></div>
               </div>
               <div className="absolute inset-0 animate-spin-reverse">
                  <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-elden-gold-light rounded-full -translate-y-1/2 shadow-[0_0_8px_hsl(var(--elden-gold-light))]"></div>
                  <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-elden-gold-light rounded-full -translate-y-1/2 shadow-[0_0_8px_hsl(var(--elden-gold-light))]"></div>
               </div>
            </div>

            {/* Loading text */}
            <div
               className={`text-center space-y-4 transition-all duration-700 delay-500 ${
                  fadeIn
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-4"
               }`}
            >
               <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-gold tracking-wide animate-pulse">
                  SUMMONING
               </h2>
               <p className="text-base md:text-lg text-muted-foreground/80 font-garamond tracking-wide">
                  The Tarnished is being summoned...
               </p>

               {/* Progress bar */}
               <div className="w-64 h-0.5 bg-elden-mist/30 rounded-full overflow-hidden mx-auto mt-6">
                  <div className="h-full bg-gradient-to-r from-elden-gold-dark via-elden-gold to-elden-gold-light animate-progress shadow-[0_0_10px_hsl(var(--elden-gold))]"></div>
               </div>

               {/* Progress dots */}
               <div className="flex gap-2.5 justify-center pt-3">
                  <div className="w-2 h-2 bg-elden-gold rounded-full animate-bounce [animation-delay:0ms] shadow-[0_0_6px_hsl(var(--elden-gold))]"></div>
                  <div className="w-2 h-2 bg-elden-gold rounded-full animate-bounce [animation-delay:150ms] shadow-[0_0_6px_hsl(var(--elden-gold))]"></div>
                  <div className="w-2 h-2 bg-elden-gold rounded-full animate-bounce [animation-delay:300ms] shadow-[0_0_6px_hsl(var(--elden-gold))]"></div>
               </div>
            </div>
         </div>

         {/* Mystical particles - Enhanced */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => {
               const size = Math.random() > 0.75 ? "w-1.5 h-1.5" : "w-1 h-1";
               const isGoldLight = Math.random() > 0.5;
               return (
                  <div
                     key={i}
                     className={`absolute ${size} ${
                        isGoldLight ? "bg-elden-gold-light" : "bg-elden-gold"
                     } rounded-full animate-float opacity-40`}
                     style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${4 + Math.random() * 3}s`,
                        filter: `blur(${Math.random() > 0.5 ? "1px" : "0px"})`,
                     }}
                  />
               );
            })}
         </div>

         {/* Golden light beams */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
               <div
                  key={i}
                  className="absolute top-0 w-px bg-gradient-to-b from-elden-gold/30 via-elden-gold/10 to-transparent animate-float"
                  style={{
                     left: `${(i + 1) * 12}%`,
                     height: "100%",
                     animationDelay: `${i * 0.5}s`,
                     animationDuration: `${6 + Math.random() * 2}s`,
                     opacity: 0.3,
                  }}
               />
            ))}
         </div>

         {/* Floating runes */}
         <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
               fadeIn ? "opacity-100" : "opacity-0"
            }`}
         >
            {[...Array(6)].map((_, i) => (
               <div
                  key={i}
                  className="absolute text-elden-gold/20 font-cinzel text-2xl animate-float"
                  style={{
                     left: `${15 + i * 15}%`,
                     top: `${20 + (i % 3) * 25}%`,
                     animationDelay: `${i * 0.8}s`,
                     animationDuration: `${8 + Math.random() * 4}s`,
                  }}
               >
                  ᚱ
               </div>
            ))}
         </div>

         {/* Pulsing circles */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
               className="absolute w-96 h-96 border border-elden-gold/10 rounded-full animate-ping"
               style={{ animationDuration: "3s" }}
            ></div>
            <div
               className="absolute w-[28rem] h-[28rem] border border-elden-gold/10 rounded-full animate-ping"
               style={{ animationDuration: "4s", animationDelay: "0.5s" }}
            ></div>
            <div
               className="absolute w-80 h-80 border border-elden-gold/10 rounded-full animate-ping"
               style={{ animationDuration: "3.5s", animationDelay: "1s" }}
            ></div>
         </div>

         {/* Corner decorative elements */}
         <div
            className={`absolute top-8 left-8 transition-all duration-1000 delay-700 ${
               fadeIn ? "opacity-40 scale-100" : "opacity-0 scale-50"
            }`}
         >
            <div className="w-16 h-16 border-l-2 border-t-2 border-elden-gold/30"></div>
         </div>
         <div
            className={`absolute top-8 right-8 transition-all duration-1000 delay-700 ${
               fadeIn ? "opacity-40 scale-100" : "opacity-0 scale-50"
            }`}
         >
            <div className="w-16 h-16 border-r-2 border-t-2 border-elden-gold/30"></div>
         </div>
         <div
            className={`absolute bottom-8 left-8 transition-all duration-1000 delay-700 ${
               fadeIn ? "opacity-40 scale-100" : "opacity-0 scale-50"
            }`}
         >
            <div className="w-16 h-16 border-l-2 border-b-2 border-elden-gold/30"></div>
         </div>
         <div
            className={`absolute bottom-8 right-8 transition-all duration-1000 delay-700 ${
               fadeIn ? "opacity-40 scale-100" : "opacity-0 scale-50"
            }`}
         >
            <div className="w-16 h-16 border-r-2 border-b-2 border-elden-gold/30"></div>
         </div>

         {/* Ambient light shafts */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-elden-gold/5 to-transparent blur-xl"></div>
            <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-elden-gold/5 to-transparent blur-xl"></div>
         </div>

         {/* Subtle vignette */}
         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-elden-dark/50 pointer-events-none"></div>
      </div>
   );
};

export default LoadingScreen;
