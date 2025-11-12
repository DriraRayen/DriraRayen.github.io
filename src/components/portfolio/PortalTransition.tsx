import { useEffect, useState } from "react";

interface PortalTransitionProps {
   isActive: boolean;
   onComplete?: () => void;
}

const PortalTransition = ({ isActive, onComplete }: PortalTransitionProps) => {
   const [animationStage, setAnimationStage] = useState(0);

   useEffect(() => {
      if (isActive) {
         // Stage 1: Portal opening
         setAnimationStage(1);

         const timer1 = setTimeout(() => {
            // Stage 2: Portal fully open
            setAnimationStage(2);
         }, 500);

         const timer2 = setTimeout(() => {
            // Stage 3: Portal closing
            setAnimationStage(3);
         }, 1500);

         const timer3 = setTimeout(() => {
            // Complete
            setAnimationStage(0);
            onComplete?.();
         }, 2000);

         return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
         };
      }
   }, [isActive, onComplete]);

   if (animationStage === 0) return null;

   return (
      <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
         {/* Portal background */}
         <div
            className={`absolute inset-0 bg-elden-dark transition-opacity duration-500 ${
               animationStage === 2 ? "opacity-100" : "opacity-0"
            }`}
         />

         {/* Portal ring layers */}
         <div className="relative w-screen h-screen flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((ring) => (
               <div
                  key={ring}
                  className="absolute rounded-full border-2 border-elden-gold"
                  style={{
                     width:
                        animationStage === 1
                           ? "0%"
                           : animationStage === 2
                           ? `${ring * 25}%`
                           : "0%",
                     height:
                        animationStage === 1
                           ? "0%"
                           : animationStage === 2
                           ? `${ring * 25}%`
                           : "0%",
                     opacity: 1 - ring * 0.15,
                     transition: `all ${
                        0.3 + ring * 0.1
                     }s cubic-bezier(0.4, 0, 0.2, 1)`,
                     boxShadow: `0 0 ${ring * 20}px hsl(45 100% 60% / ${
                        0.8 - ring * 0.1
                     })`,
                  }}
               />
            ))}

            {/* Center glow */}
            <div
               className="absolute w-32 h-32 rounded-full bg-elden-gold blur-3xl"
               style={{
                  opacity: animationStage === 2 ? 1 : 0,
                  transform: animationStage === 2 ? "scale(3)" : "scale(0)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
               }}
            />

            {/* Rune symbols spinning around portal */}
            {["⚔", "🜃", "🜁", "🜄", "🜂", "⚜"].map((rune, index) => (
               <div
                  key={index}
                  className="absolute text-4xl text-gold"
                  style={{
                     transform: `rotate(${index * 60}deg) translateY(${
                        animationStage === 2 ? "-200px" : "-100px"
                     })`,
                     opacity: animationStage === 2 ? 1 : 0,
                     transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
                        index * 0.1
                     }s`,
                     filter: "drop-shadow(0 0 20px hsl(45 100% 60% / 0.8))",
                  }}
               >
                  <div
                     style={{
                        transform: `rotate(${-index * 60}deg) rotate(${
                           animationStage * 360
                        }deg)`,
                        transition: "transform 1s linear",
                     }}
                  >
                     {rune}
                  </div>
               </div>
            ))}

            {/* Particle burst */}
            {animationStage === 2 && (
               <div className="absolute inset-0">
                  {Array.from({ length: 30 }).map((_, i) => (
                     <div
                        key={i}
                        className="absolute w-1 h-1 bg-elden-gold rounded-full"
                        style={{
                           top: "50%",
                           left: "50%",
                           animation: `particleBurst 1s ease-out forwards`,
                           animationDelay: `${i * 0.02}s`,
                           transform: `rotate(${i * 12}deg) translateY(-50px)`,
                           opacity: 0.8,
                        }}
                     />
                  ))}
               </div>
            )}
         </div>

         <style>{`
        @keyframes particleBurst {
          0% {
            transform: rotate(var(--rotation)) translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: rotate(var(--rotation)) translateY(-400px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      </div>
   );
};

export default PortalTransition;
