import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   Home,
   User,
   Briefcase,
   Sparkles,
   Image,
   Award,
   Scroll,
   Mail,
} from "lucide-react";

interface GraceSite {
   id: string;
   label: string;
   position: number;
   icon: any;
   path: string;
}

const GraceSites = () => {
   const navigate = useNavigate();
   const [activeSection, setActiveSection] = useState(0);
   const [scrollProgress, setScrollProgress] = useState(0);
   const [isVisible, setIsVisible] = useState(false);
   const [hasScrolled, setHasScrolled] = useState(false);

   const graceSites: GraceSite[] = [
      {
         id: "hero",
         label: "The Beginning",
         position: 0,
         icon: Home,
         path: "#hero",
      },
      {
         id: "about",
         label: "The Wanderer",
         position: 1,
         icon: User,
         path: "#about",
      },
      {
         id: "projects",
         label: "Forged Works",
         position: 2,
         icon: Briefcase,
         path: "#projects",
      },
      {
         id: "skills",
         label: "Rune Mastery",
         position: 3,
         icon: Sparkles,
         path: "#skills",
      },
      {
         id: "gallery",
         label: "Chronicles",
         position: 4,
         icon: Image,
         path: "#gallery",
      },
      {
         id: "certificates",
         label: "Sacred Seals",
         position: 5,
         icon: Award,
         path: "#certificates",
      },
      {
         id: "timeline",
         label: "Battle Log",
         position: 6,
         icon: Scroll,
         path: "#timeline",
      },
      {
         id: "contact",
         label: "Summon Stone",
         position: 7,
         icon: Mail,
         path: "#contact",
      },
   ];

   useEffect(() => {
      const handleScroll = () => {
         // Track scroll for active section
         if (window.scrollY > 200) {
            setHasScrolled(true);
         } else {
            setHasScrolled(false);
         }

         const sections = graceSites.map((site) =>
            document.getElementById(site.id)
         );
         const scrollPosition = window.scrollY + window.innerHeight / 2;

         sections.forEach((section, index) => {
            if (section) {
               const sectionTop = section.offsetTop;
               const sectionBottom = sectionTop + section.offsetHeight;

               if (
                  scrollPosition >= sectionTop &&
                  scrollPosition < sectionBottom
               ) {
                  setActiveSection(index);
               }
            }
         });

         // Calculate overall scroll progress
         const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
         const progress = (window.scrollY / totalHeight) * 100;
         setScrollProgress(progress);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const scrollToSection = (sectionId: string) => {
      document
         .getElementById(sectionId)
         ?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <>
         {/* Hover trigger area on the right edge */}
         <div
            className="fixed right-0 top-0 w-16 h-full z-30"
            onMouseEnter={() => setIsVisible(true)}
         />

         <div
            className={`fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ${
               isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
            }`}
            onMouseLeave={() => setIsVisible(false)}
         >
            {/* Progress path - vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-elden-mist/20" />

            {/* Active progress indicator */}
            <div
               className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-elden-gold via-elden-gold-light to-transparent transition-all duration-300"
               style={{ height: `${scrollProgress}%` }}
            />

            {/* Grace Sites */}
            <div className="relative flex flex-col gap-12 py-4">
               {graceSites.map((site, index) => {
                  const Icon = site.icon;
                  const isActive = activeSection === index;
                  const isPassed = activeSection > index;

                  return (
                     <button
                        key={site.id}
                        onClick={() => scrollToSection(site.id)}
                        className="group relative"
                        aria-label={`Navigate to ${site.label}`}
                     >
                        {/* Grace site glow effect */}
                        {isActive && (
                           <>
                              <div className="absolute inset-0 w-12 h-12 -left-3 -top-3 rounded-full bg-elden-gold/15 blur-xl animate-pulse" />
                              <div
                                 className="absolute inset-0 w-10 h-10 -left-2 -top-2 rounded-full bg-elden-gold/20 blur-lg animate-pulse"
                                 style={{ animationDelay: "0.3s" }}
                              />
                           </>
                        )}

                        {/* Grace site flame container */}
                        <div
                           className={`relative w-6 h-6 transition-all duration-500 ${
                              isActive
                                 ? "scale-125"
                                 : "scale-100 group-hover:scale-110"
                           }`}
                        >
                           {/* Outer ring */}
                           <div
                              className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                                 isActive
                                    ? "border-2 border-elden-gold shadow-gold animate-pulse"
                                    : isPassed
                                    ? "border border-elden-gold/50"
                                    : "border border-elden-mist/60 group-hover:border-gold"
                              }`}
                           />

                           {/* Inner glow */}
                           <div
                              className={`absolute inset-0.5 rounded-full transition-all duration-500 ${
                                 isActive
                                    ? "bg-gradient-to-b from-elden-gold via-elden-gold-light to-elden-gold animate-pulse"
                                    : isPassed
                                    ? "bg-elden-gold/30"
                                    : "bg-transparent group-hover:bg-elden-gold/20"
                              }`}
                           />

                           {/* Center flame icon */}
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div
                                 className={`transition-all duration-300 ${
                                    isActive
                                       ? "text-elden-dark scale-110"
                                       : isPassed
                                       ? "text-gold-light"
                                       : "text-muted-foreground group-hover:text-gold"
                                 }`}
                              >
                                 {isActive ? (
                                    <div className="relative w-3 h-3">
                                       <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-2 h-3 bg-gradient-to-t from-elden-gold via-elden-gold-light to-transparent rounded-full animate-pulse" />
                                       </div>
                                       <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-1 h-2 bg-gradient-to-t from-elden-gold to-transparent rounded-full" />
                                       </div>
                                    </div>
                                 ) : (
                                    <Icon className="w-3 h-3" />
                                 )}
                              </div>
                           </div>

                           {/* Particles for active site - reduced */}
                           {isActive && (
                              <>
                                 <div className="absolute -left-1 -top-1 w-0.5 h-0.5 bg-elden-gold rounded-full animate-float opacity-50" />
                                 <div
                                    className="absolute -right-1 top-0 w-0.5 h-0.5 bg-elden-gold-light rounded-full animate-float opacity-50"
                                    style={{ animationDelay: "0.5s" }}
                                 />
                              </>
                           )}
                        </div>

                        {/* No tooltip - cleaner look */}
                     </button>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default GraceSites;
