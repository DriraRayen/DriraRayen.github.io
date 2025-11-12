import { ReactNode } from "react";

interface RealmSectionProps {
   id: string;
   title: string;
   subtitle?: string;
   realmType?: "dark" | "golden" | "mystical" | "ethereal";
   children: ReactNode;
}

const RealmSection = ({
   id,
   title,
   subtitle,
   realmType = "dark",
   children,
}: RealmSectionProps) => {
   const realmStyles = {
      dark: {
         bg: "bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark",
         border: "border-elden-mist",
         glow: "shadow-elden-mist",
      },
      golden: {
         bg: "bg-gradient-to-b from-elden-dark via-elden-dark-light/50 to-elden-dark",
         border: "border-elden-gold/30",
         glow: "shadow-gold",
      },
      mystical: {
         bg: "bg-gradient-to-b from-elden-dark-light via-elden-dark to-elden-dark-light",
         border: "border-elden-gold/20",
         glow: "shadow-gold",
      },
      ethereal: {
         bg: "bg-gradient-to-b from-elden-dark to-elden-dark-light/30",
         border: "border-elden-mist/50",
         glow: "shadow-elden-mist",
      },
   };

   const style = realmStyles[realmType];

   return (
      <section
         id={id}
         className={`relative min-h-screen ${style.bg} overflow-hidden scroll-mt-20`}
      >
         {/* Realm entrance effect - top border */}
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold to-transparent opacity-50" />

         {/* Ambient realm particles */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div
               className={`absolute top-1/4 left-1/4 w-2 h-2 bg-elden-gold rounded-full animate-float`}
            />
            <div
               className={`absolute top-1/3 right-1/3 w-1 h-1 bg-elden-gold-light rounded-full animate-float`}
               style={{ animationDelay: "2s" }}
            />
            <div
               className={`absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-elden-gold rounded-full animate-float`}
               style={{ animationDelay: "4s" }}
            />
         </div>

         {/* Realm content container */}
         <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
            {/* Realm title header */}
            {title && (
               <div className="text-center mb-16 animate-fadeIn">
                  {/* Decorative top line */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                     <div className="h-px w-16 bg-gradient-to-r from-transparent to-elden-gold" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full rotate-45 animate-glow" />
                     <div className="w-3 h-3 border-2 border-elden-gold rounded-full animate-pulse" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full rotate-45 animate-glow" />
                     <div className="h-px w-16 bg-gradient-to-l from-transparent to-elden-gold" />
                  </div>

                  {/* Realm title */}
                  <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-gold glow-gold mb-4 tracking-wider">
                     {title}
                  </h2>

                  {/* Subtitle */}
                  {subtitle && (
                     <p className="font-garamond text-lg md:text-xl text-gold-light max-w-2xl mx-auto">
                        {subtitle}
                     </p>
                  )}

                  {/* Decorative bottom line */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                     <div className="h-px w-24 bg-gradient-to-r from-transparent to-elden-gold/50" />
                     <div className="w-1 h-1 bg-elden-gold rounded-full" />
                     <div className="h-px w-24 bg-gradient-to-l from-transparent to-elden-gold/50" />
                  </div>
               </div>
            )}

            {/* Realm content */}
            <div className="relative">{children}</div>
         </div>

         {/* Realm exit effect - bottom border */}
         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold to-transparent opacity-50" />

         {/* Corner runes for decoration */}
         <div className="absolute top-8 left-8 text-elden-gold/20 text-2xl animate-glow pointer-events-none">
            ⚔
         </div>
         <div
            className="absolute top-8 right-8 text-elden-gold/20 text-2xl animate-glow pointer-events-none"
            style={{ animationDelay: "1s" }}
         >
            🜃
         </div>
         <div
            className="absolute bottom-8 left-8 text-elden-gold/20 text-2xl animate-glow pointer-events-none"
            style={{ animationDelay: "2s" }}
         >
            🜁
         </div>
         <div
            className="absolute bottom-8 right-8 text-elden-gold/20 text-2xl animate-glow pointer-events-none"
            style={{ animationDelay: "3s" }}
         >
            ⚜
         </div>
      </section>
   );
};

export default RealmSection;
