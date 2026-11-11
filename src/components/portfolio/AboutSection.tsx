import { Languages, Sparkles, Shield, Cpu, Users } from "lucide-react";
import { educationItems } from "@/lib/content";
import EducationCard from "./EducationCard";

const AboutSection = () => {
   return (
      <section
         id="about"
         className="relative py-32 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-elden-dark via-elden-dark/95 to-elden-dark"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide">
                  About Me
               </h2>
               <div className="grace-divider flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <div className="relative inline-block max-w-2xl mx-auto">
                  {/* Glow effect behind text */}
                  <div
                     className="absolute inset-0 blur-2xl bg-elden-gold/20 animate-pulse"
                     style={{ animationDuration: "3s" }}
                  />

                  {/* Main text with multiple effects */}
                  <p className="relative font-garamond text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-elden-gold to-gold-light animate-shimmer bg-[length:200%_auto] hover:scale-105 transition-transform duration-300 cursor-default drop-shadow-[0_0_15px_rgba(218,165,32,0.5)]">
                     Arise Ye Tarnished!
                  </p>
               </div>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
               {/* Introduction text */}
               <div className="space-y-6 animate-slideUp">
                  <div className="relative group">
                     {/* Glow effect */}
                     <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />

                     <div className="relative border border-elden-gold/30 bg-elden-dark-light/50 p-8 shadow-2xl transition-all duration-300 hover:border-elden-gold/50 md:p-10">
                        {/* Decorative corner accent */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-elden-gold/50" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-elden-gold/50" />

                        <div className="mb-6 flex items-center gap-3 border-b border-elden-mist pb-4">
                           <Shield className="h-5 w-5 shrink-0 text-gold" />
                           <div>
                              <p className="font-garamond text-xs uppercase tracking-[0.2em] text-elden-gold/70">Character profile</p>
                              <p className="font-cinzel text-lg text-gold">The Wanderer</p>
                           </div>
                        </div>
                        <div className="space-y-5">
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              I'm an engineering student in{" "}
                              <span className="text-gold font-semibold">
                                 Electronic Communication Systems
                              </span>{" "}
                              at{" "}
                              <span className="text-gold font-semibold">
                                 ENET'Com
                              </span>
                              . Previously, I completed my computer engineering
                              studies at{" "}
                              <span className="text-gold font-semibold">
                                 ISITCom
                              </span>
                              . I'm passionate about{" "}
                              <span className="text-gold">cybersecurity</span>{" "}
                              and{" "}
                              <span className="text-gold">
                                 artificial intelligence
                              </span>
                              , and I enjoy exploring how technology can solve
                              real-world problems.
                           </p>
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              Outside of my studies, I'm an active member of the{" "}
                              <span className="text-gold font-semibold">
                                 Tunisian Scouts
                              </span>
                              , where I lead activities, mentor younger members,
                              and spend time outdoors. Scouting has shaped my
                              sense of teamwork, responsibility, and curiosity —
                              qualities I bring into everything I do.
                           </p>
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              I am currently an IEEE member of{" "}
                              <span className="text-gold font-semibold">
                                 IEEE ENET'Com Student Branch
                              </span>
                              and{" "}
                              <span className="text-gold font-semibold">
                                 ORBEATS
                              </span>
                              . Previously, I was an active member of{" "}
                              <span className="text-gold font-semibold">
                                 Securinets ISITCom
                              </span>
                              , GamingFreaks ISITCom, and the IEEE ESSTHS
                              Student Branch.
                           </p>
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              When I'm not coding or tinkering with tech, you'll
                              often find me exploring fantastical worlds like{" "}
                              <span className="text-gold font-semibold">
                                 Elden Ring
                              </span>
                              , drawing inspiration from its rich environments
                              and intricate design for creativity and
                              problem-solving in my own projects.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Languages & Interests in place of Expertise */}
               <div
                  className="space-y-6 animate-slideUp"
                  style={{ animationDelay: "0.15s" }}
               >
                  {/* Languages */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative border border-elden-gold/40 bg-elden-dark-light/60 p-6 transition-all duration-300 hover:border-elden-gold/60 md:p-7">
                        <h3 className="mb-5 flex items-center gap-3 border-b border-elden-mist pb-4 font-cinzel text-2xl font-semibold text-gold">
                           <Languages className="h-5 w-5" />
                           Languages
                        </h3>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between pb-3 border-b border-elden-gold/20">
                              <span className="font-garamond text-lg text-foreground/90">
                                 Arabic
                              </span>
                              <span className="font-cinzel text-sm text-gold/80">
                                 Native
                              </span>
                           </div>
                           <div className="flex items-center justify-between pb-3 border-b border-elden-gold/20">
                              <span className="font-garamond text-lg text-foreground/90">
                                 French
                              </span>
                              <span className="font-cinzel text-sm text-gold/80">
                                 Intermediate
                              </span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="font-garamond text-lg text-foreground/90">
                                 English
                              </span>
                              <span className="font-cinzel text-sm text-gold/80">
                                 Advanced
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Interests */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative border border-elden-gold/40 bg-elden-dark-light/60 p-6 transition-all duration-300 hover:border-elden-gold/60 md:p-7">
                        <h3 className="mb-5 flex items-center gap-3 border-b border-elden-mist pb-4 font-cinzel text-2xl font-semibold text-gold">
                           <Sparkles className="h-5 w-5" />
                           Interests
                        </h3>
                        <div className="flex flex-wrap gap-3">
                           <span className="border-b border-elden-gold/30 px-2 py-2 text-sm font-garamond text-foreground/90">
                              🎮 Gaming
                           </span>
                           <span className="border-b border-elden-gold/30 px-2 py-2 text-sm font-garamond text-foreground/90">
                              🏕️ Scouting
                           </span>
                           <span className="border-b border-elden-gold/30 px-2 py-2 text-sm font-garamond text-foreground/90">
                              💻 Chess
                           </span>
                           <span className="border-b border-elden-gold/30 px-2 py-2 text-sm font-garamond text-foreground/90">
                              ⚽ Football
                           </span>
                           <span className="border-b border-elden-gold/30 px-2 py-2 text-sm font-garamond text-foreground/90">
                              🎬 Cinephile
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Education Section */}
            <div className="mt-12 md:mt-20">
               <div className="text-center mb-8 md:mb-12 animate-fadeIn">
                  <h3 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 md:mb-6">
                     Academic Path
                  </h3>
                  <div className="grace-divider flex items-center justify-center gap-4 mb-4">
                     <div className="h-px w-16 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                     <div className="h-px w-16 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
                  </div>
               </div>

               <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                  {educationItems.map((education, index) => (
                     <EducationCard key={`${education.institution}-${education.title}`} education={education} index={index} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
