import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         // Hide indicator after scrolling down a bit
         setIsVisible(window.scrollY < 100);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   if (!isVisible) return null;

   return (
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-fadeIn">
         {/* Clean scroll icon */}
         <div className="relative">
            {/* Subtle glowing ring */}
            <div className="absolute inset-0 w-10 h-10 -left-2 -top-2 rounded-full border border-elden-gold/20 animate-ping" style={{ animationDuration: "2s" }} />

            {/* Scroll wheel container */}
            <div className="relative w-6 h-10 border-2 border-elden-gold/60 rounded-full flex items-start justify-center pt-2 bg-elden-dark/20">
               {/* Animated dot */}
               <div className="w-1 h-2 bg-elden-gold rounded-full animate-bounce" />
            </div>
         </div>

         {/* Chevron indicator */}
         <ChevronDown
            className="w-5 h-5 text-gold/70 animate-bounce"
            style={{ animationDelay: "0.2s" }}
         />
      </div>
   );
};

export default ScrollIndicator;
