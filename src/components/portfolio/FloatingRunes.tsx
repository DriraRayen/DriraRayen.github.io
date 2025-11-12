import { useEffect, useState, useMemo } from "react";

interface Rune {
   id: number;
   x: number;
   y: number;
   size: number;
   symbol: string;
   speed: number;
   opacity: number;
   rotation: number;
}

const FloatingRunes = () => {
   const [runes, setRunes] = useState<Rune[]>([]);
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
   const [isMobile, setIsMobile] = useState(false);

   const runeSymbols = useMemo(
      () => ["⚔", "🜃", "🜁", "🜄", "🜂", "⚜", "✦", "◈"],
      []
   );

   useEffect(() => {
      // Detect mobile devices for performance optimization
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);

      // Initialize runes with fewer on mobile
      const runeCount = isMobile ? 5 : 8;
      const initialRunes: Rune[] = Array.from(
         { length: runeCount },
         (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: isMobile ? 16 + Math.random() * 16 : 18 + Math.random() * 20,
            symbol: runeSymbols[Math.floor(Math.random() * runeSymbols.length)],
            speed: 0.3 + Math.random() * 0.6,
            opacity: 0.04 + Math.random() * 0.1,
            rotation: Math.random() * 360,
         })
      );
      setRunes(initialRunes);

      // Track mouse movement for parallax effect with throttling
      let rafId: number;
      const handleMouseMove = (e: MouseEvent) => {
         if (rafId) cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            setMousePos({
               x: (e.clientX / window.innerWidth - 0.5) * 2,
               y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
         });
      };

      if (!isMobile) {
         window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
         });
      }

      // Animate runes floating with requestAnimationFrame for better performance
      let lastTime = Date.now();
      let animationId: number;

      const animate = () => {
         const currentTime = Date.now();
         const deltaTime = (currentTime - lastTime) / 1000;
         lastTime = currentTime;

         setRunes((prevRunes) =>
            prevRunes.map((rune) => ({
               ...rune,
               y: (rune.y + rune.speed * deltaTime * 2) % 100,
               rotation: (rune.rotation + 0.3 * deltaTime * 60) % 360,
            }))
         );

         animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         window.removeEventListener("resize", checkMobile);
         if (rafId) cancelAnimationFrame(rafId);
         if (animationId) cancelAnimationFrame(animationId);
      };
   }, [isMobile, runeSymbols]);

   return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {runes.map((rune) => (
            <div
               key={rune.id}
               className="absolute text-gold will-change-transform"
               style={{
                  left: `${rune.x}%`,
                  top: `${rune.y}%`,
                  fontSize: `${rune.size}px`,
                  opacity: rune.opacity,
                  transform: `
              translate(${isMobile ? 0 : mousePos.x * 15}px, ${
                     isMobile ? 0 : mousePos.y * 15
                  }px)
              rotate(${rune.rotation}deg)
            `,
                  transition: isMobile ? "none" : "transform 0.8s ease-out",
                  filter: "drop-shadow(0 0 8px hsl(45 100% 62% / 0.4))",
                  textShadow: "0 0 16px hsl(45 100% 62% / 0.6)",
               }}
            >
               {rune.symbol}
            </div>
         ))}
      </div>
   );
};

export default FloatingRunes;
