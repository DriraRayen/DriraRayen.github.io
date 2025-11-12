import { ReactNode, useState } from "react";

interface MysticalTooltipProps {
   content: string;
   children: ReactNode;
   position?: "top" | "bottom" | "left" | "right";
}

const MysticalTooltip = ({
   content,
   children,
   position = "top",
}: MysticalTooltipProps) => {
   const [isVisible, setIsVisible] = useState(false);

   const positionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
      left: "right-full top-1/2 -translate-y-1/2 mr-3",
      right: "left-full top-1/2 -translate-y-1/2 ml-3",
   };

   const arrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-elden-gold",
      bottom:
         "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-elden-gold",
      left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-elden-gold",
      right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-elden-gold",
   };

   return (
      <div
         className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}
      >
         {children}

         {isVisible && (
            <div
               className={`absolute z-50 whitespace-nowrap pointer-events-none animate-fadeIn ${positionClasses[position]}`}
            >
               <div className="relative px-4 py-2 glass-panel rounded-lg shadow-gold">
                  {/* Decorative corners */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-elden-gold" />
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-elden-gold" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-elden-gold" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-elden-gold" />

                  <span className="font-garamond text-sm text-gold-light">
                     {content}
                  </span>

                  {/* Arrow */}
                  <div
                     className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
                  />

                  {/* Floating particles */}
                  <div className="absolute -left-1 -top-1 w-0.5 h-0.5 bg-elden-gold rounded-full animate-float opacity-60" />
                  <div
                     className="absolute -right-1 -bottom-1 w-0.5 h-0.5 bg-elden-gold-light rounded-full animate-float opacity-60"
                     style={{ animationDelay: "1s" }}
                  />
               </div>
            </div>
         )}
      </div>
   );
};

export default MysticalTooltip;
