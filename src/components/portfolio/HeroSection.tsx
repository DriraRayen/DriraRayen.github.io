import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile.png";

const HeroSection = () => {
   const scrollToAbout = () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <section
         id="hero"
         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
         style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
      >
         {/* Overlay gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-elden-dark/60 via-transparent to-elden-dark" />

         <div className="relative z-10 px-6 md:px-8 animate-fadeIn max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
               {/* Left side - Profile Image */}
               <div className="flex justify-center md:justify-end animate-slideUp order-2 md:order-1">
                  <div className="relative group">
                     {/* Enhanced glow effect */}
                     <div className="absolute -inset-4 bg-elden-gold/10 rounded-2xl blur-3xl group-hover:bg-elden-gold/20 transition-all duration-700" />

                     {/* Subtle pulsing ring */}
                     <div
                        className="absolute inset-0 border border-elden-gold/20 rounded-xl animate-pulse"
                        style={{ animationDuration: "3s" }}
                     />

                     {/* Image container with enhanced border */}
                     <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden border-2 border-elden-gold/50 shadow-2xl">
                        {/* Profile Photo */}
                        <img
                           src={profilePhoto}
                           alt="Rayen Drira"
                           className="w-full h-full object-cover object-center"
                           onError={(e) => {
                              console.error("Failed to load profile image");
                              e.currentTarget.style.display = "none";
                           }}
                        />

                        {/* Enhanced corner accents */}
                        <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-elden-gold/70" />
                        <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-elden-gold/70" />
                        <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-elden-gold/70" />
                        <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-elden-gold/70" />

                        {/* Inner accent lines */}
                        <div className="absolute top-3 left-3 w-3 h-px bg-elden-gold/50" />
                        <div className="absolute top-3 left-3 w-px h-3 bg-elden-gold/50" />
                        <div className="absolute top-3 right-3 w-3 h-px bg-elden-gold/50" />
                        <div className="absolute top-3 right-3 w-px h-3 bg-elden-gold/50" />
                        <div className="absolute bottom-3 left-3 w-3 h-px bg-elden-gold/50" />
                        <div className="absolute bottom-3 left-3 w-px h-3 bg-elden-gold/50" />
                        <div className="absolute bottom-3 right-3 w-3 h-px bg-elden-gold/50" />
                        <div className="absolute bottom-3 right-3 w-px h-3 bg-elden-gold/50" />
                     </div>

                     {/* Refined floating particles */}
                     <div className="absolute -left-6 top-1/4 w-2 h-2 bg-elden-gold/30 rounded-full animate-float opacity-60" />
                     <div
                        className="absolute -right-6 top-2/3 w-1.5 h-1.5 bg-elden-gold-light/30 rounded-full animate-float opacity-60"
                        style={{ animationDelay: "1.5s" }}
                     />
                     <div
                        className="absolute -left-4 bottom-1/4 w-1 h-1 bg-elden-gold/30 rounded-full animate-float opacity-60"
                        style={{ animationDelay: "2.5s" }}
                     />
                  </div>
               </div>

               {/* Right side - Information */}
               <div
                  className="text-left animate-slideUp order-1 md:order-2"
                  style={{ animationDelay: "0.15s" }}
               >
                  {/* Name with enhanced styling */}
                  <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold tracking-wide leading-tight">
                     RAYEN DRIRA
                  </h1>

                  {/* Elegant divider */}
                  <div className="flex items-center gap-4 mb-6">
                     <div className="h-px w-20 bg-gradient-to-r from-elden-gold/70 via-elden-gold/40 to-transparent" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                     <div className="h-px w-8 bg-elden-gold/20" />
                  </div>

                  {/* Professional title with better hierarchy */}
                  <p className="font-garamond text-2xl md:text-3xl text-gold-light/95 mb-4 font-medium">
                     IoT & Embedded Systems Student
                  </p>

                  {/* Subtitle */}
                  <p className="font-garamond text-base text-muted-foreground/70 mb-8 uppercase tracking-widest">
                     Hardware • Software • Innovation
                  </p>

                  {/* Description with better typography */}
                  <p className="font-garamond text-lg md:text-xl text-muted-foreground/90 mb-10 leading-relaxed max-w-2xl">
                     Crafting innovative solutions at the intersection of
                     hardware and software. Passionate about building
                     intelligent embedded systems and IoT applications that
                     bridge the physical and digital worlds.
                  </p>

                  {/* Enhanced CTA Button */}
                  <button
                     onClick={scrollToAbout}
                     className="relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-gold/70 hover:border-gold rounded-lg hover:bg-gold/10 transition-all duration-300 group overflow-hidden"
                     aria-label="Explore my portfolio"
                  >
                     {/* Button shine effect */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                     <span className="relative font-garamond text-lg font-semibold text-gold group-hover:text-gold-light transition-colors tracking-wide">
                        Game Start
                     </span>
                     <ArrowDown className="relative w-5 h-5 text-gold group-hover:text-gold-light group-hover:translate-y-1 transition-all" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
