import { useEffect, useState } from "react";

const MysticalFog = () => {
   const [scrollY, setScrollY] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      // Detect mobile for performance optimization
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };
      checkMobile();

      // Throttle scroll updates for better performance
      let rafId: number;
      const handleScroll = () => {
         if (rafId) cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            setScrollY(window.scrollY);
         });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", checkMobile);

      return () => {
         window.removeEventListener("scroll", handleScroll);
         window.removeEventListener("resize", checkMobile);
         if (rafId) cancelAnimationFrame(rafId);
      };
   }, []);

   // Reduce fog complexity on mobile
   const fogOpacity = isMobile ? 0.12 : 0.18;
   const particleOpacity = isMobile ? 0.05 : 0.08;

   return (
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
         {/* Multiple layers of fog for depth */}
         <div
            className="absolute inset-0 will-change-transform"
            style={{
               opacity: fogOpacity,
               background: `
            radial-gradient(ellipse 80% 50% at 50% ${
               20 + scrollY * 0.04
            }%, hsl(220 20% 15% / 0.3), transparent),
            radial-gradient(ellipse 60% 40% at 30% ${
               40 + scrollY * 0.025
            }%, hsl(220 20% 12% / 0.2), transparent),
            radial-gradient(ellipse 70% 45% at 70% ${
               60 + scrollY * 0.03
            }%, hsl(220 20% 10% / 0.25), transparent)
          `,
               transform: `translateY(${scrollY * -0.25}px)`,
            }}
         />

         {/* Animated fog layer */}
         {!isMobile && (
            <div
               className="absolute inset-0 opacity-12 will-change-transform"
               style={{
                  background: `
               radial-gradient(ellipse 90% 60% at 40% 50%, hsl(220 15% 18% / 0.35), transparent),
               radial-gradient(ellipse 70% 50% at 80% 70%, hsl(220 15% 15% / 0.25), transparent)
             `,
                  animation: "fogDrift 24s ease-in-out infinite alternate",
                  transform: `translateY(${scrollY * -0.18}px)`,
               }}
            />
         )}

         {/* Golden mist particles - subtle */}
         <div
            className="absolute inset-0 will-change-transform"
            style={{
               opacity: particleOpacity,
               background: `
            radial-gradient(circle at 20% ${
               30 + scrollY * 0.015
            }%, hsl(45 100% 62% / 0.08), transparent 30%),
            radial-gradient(circle at 80% ${
               50 + scrollY * 0.02
            }%, hsl(45 100% 72% / 0.06), transparent 25%),
            radial-gradient(circle at 50% ${
               70 + scrollY * 0.025
            }%, hsl(45 100% 58% / 0.1), transparent 35%)
          `,
               transform: `translateY(${scrollY * -0.12}px)`,
            }}
         />

         <style>{`
        @keyframes fogDrift {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(15px) scale(1.03);
          }
          100% {
            transform: translateX(-15px) scale(0.97);
          }
        }
      `}</style>
      </div>
   );
};

export default MysticalFog;
