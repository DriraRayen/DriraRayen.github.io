import { X, Swords, Heart, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/eldenlord.jpg";

interface EldenRingSectionProps {
   isOpen: boolean;
   onClose: () => void;
}

const EldenRingSection = ({ isOpen, onClose }: EldenRingSectionProps) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 bg-elden-dark/98 backdrop-blur-lg flex items-center justify-center p-6 animate-fadeIn overflow-y-auto">
         <button
            onClick={onClose}
            className="fixed top-6 right-6 p-2 bg-elden-dark border-2 border-gold rounded-full hover:bg-elden-gold hover:text-elden-dark transition-all duration-300 z-10 shadow-xl shadow-gold/30"
            aria-label="Close"
         >
            <X className="w-5 h-5 text-gold hover:text-elden-dark" />
         </button>

         <div className="max-w-5xl w-full max-h-[85vh] overflow-y-auto bg-elden-dark-light/80 border-2 border-gold/60 rounded-xl shadow-2xl shadow-gold/30 p-8 my-auto scrollbar-thin scrollbar-track-elden-dark/50 scrollbar-thumb-gold/60 hover:scrollbar-thumb-gold/80">
            {/* Header with Photo */}
            <div className="text-center mb-6 animate-slideUp">
               {/* Profile Photo as Elden Lord */}
               <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-elden-gold/30 rounded-full blur-2xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full border-4 border-gold shadow-2xl shadow-gold/50 overflow-hidden bg-elden-dark">
                     <img
                        src={profilePhoto}
                        alt="Elden Lord"
                        className="w-full h-full object-cover"
                        onError={(e) =>
                           console.error("Image failed to load:", profilePhoto)
                        }
                     />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-elden-dark border-2 border-gold rounded-full shadow-lg">
                     <span className="font-cinzel text-xs text-gold font-bold">
                        ELDEN LORD
                     </span>
                  </div>
               </div>

               <div className="flex items-center justify-center gap-3 mb-3">
                  <Swords className="w-6 h-6 text-gold animate-float" />
                  <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold">
                     Elden Ring
                  </h2>
                  <Swords
                     className="w-6 h-6 text-gold animate-float"
                     style={{ animationDelay: "1s" }}
                  />
               </div>
               <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-1.5 h-1.5 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50 animate-pulse" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-gold-light italic">
                  A Journey Through the Lands Between
               </p>
            </div>

            {/* Content Card */}
            <div
               className="relative bg-elden-dark/40 backdrop-blur-sm border border-elden-gold/40 rounded-lg p-6 shadow-xl shadow-gold/10 animate-slideUp grid md:grid-cols-2 gap-6"
               style={{ animationDelay: "0.2s" }}
            >
               {/* Decorative corners */}
               <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/60" />
               <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/60" />
               <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/60" />
               <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/60" />

               {/* Game Overview */}
               <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                     <Sparkles className="w-5 h-5 text-gold" />
                     <h3 className="font-cinzel text-xl font-bold text-gold">
                        The Game
                     </h3>
                  </div>
                  <p className="font-garamond text-sm text-muted-foreground/90 leading-relaxed">
                     Elden Ring is FromSoftware's masterpiece - an open-world
                     RPG from Hidetaka Miyazaki and George R.R. Martin. Massive
                     world, brutal challenges, and the freedom to play however
                     you want. Every victory feels earned.
                  </p>
               </div>

               {/* Personal Impact */}
               <div>
                  <div className="flex items-center gap-3 mb-3">
                     <Heart className="w-5 h-5 text-gold animate-pulse" />
                     <h3 className="font-cinzel text-xl font-bold text-gold">
                        Why It Matters
                     </h3>
                  </div>
                  <div className="space-y-3 font-garamond text-sm text-muted-foreground/90 leading-relaxed">
                     <p>
                        Dying 50 times to the same boss teaches real
                        perseverance. That mindset carries over to CTF
                        competitions and debugging at 2 AM - you learn from
                        failure and keep pushing.
                     </p>
                     <p>
                        The game rewards exploration and curiosity, just like
                        learning new tech. That same thrill of discovery drives
                        me whether I'm uncovering hidden areas or diving into a
                        new framework.
                     </p>
                     <p>
                        The golden aesthetic, mystical vibe, and elegant fonts
                        you see here? All inspired by this game. My way of
                        combining what I love with professional work.
                     </p>
                  </div>
               </div>
            </div>

            {/* Fun Stats Section */}
            <div className="grid grid-cols-3 gap-3 mt-6">
               <div
                  className="bg-elden-dark/40 border border-elden-gold/30 rounded-lg p-3 text-center animate-slideUp"
                  style={{ animationDelay: "0.4s" }}
               >
                  <div className="text-xl font-cinzel font-bold text-gold mb-1">
                     ∞
                  </div>
                  <p className="font-garamond text-xs text-muted-foreground">
                     Times I Died
                  </p>
               </div>
               <div
                  className="bg-elden-dark/40 border border-elden-gold/30 rounded-lg p-3 text-center animate-slideUp"
                  style={{ animationDelay: "0.5s" }}
               >
                  <div className="text-xl font-cinzel font-bold text-gold mb-1">
                     ✦
                  </div>
                  <p className="font-garamond text-xs text-muted-foreground">
                     Epic Victories
                  </p>
               </div>
               <div
                  className="bg-elden-dark/40 border border-elden-gold/30 rounded-lg p-3 text-center animate-slideUp"
                  style={{ animationDelay: "0.6s" }}
               >
                  <div className="text-xl font-cinzel font-bold text-gold mb-1">
                     ⚔
                  </div>
                  <p className="font-garamond text-xs text-muted-foreground">
                     Hours Lost (Worth It)
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EldenRingSection;
