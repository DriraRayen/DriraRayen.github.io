import { Shield, Cpu, Users, GraduationCap } from "lucide-react";

const AboutSection = () => {
   return (
      <section
         id="about"
         className="relative py-32 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-elden-dark via-elden-dark/95 to-elden-dark"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold mb-6 tracking-wide">
                  About Me
               </h2>
               <div className="flex items-center justify-center gap-4 mb-4">
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

                     <div className="relative bg-elden-dark-light/50 backdrop-blur-sm border border-elden-gold/30 p-10 rounded-xl shadow-2xl">
                        {/* Decorative corner accent */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-elden-gold/50" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-elden-gold/50" />

                        <div className="space-y-5">
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              I'm a third-year{" "}
                              <span className="text-gold font-semibold">
                                 Computer Engineering
                              </span>{" "}
                              student specializing in IoT and Embedded Systems
                              at{" "}
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

                     <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-7 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                        <h3 className="font-cinzel text-2xl font-semibold text-gold mb-5 flex items-center gap-3">
                           <span className="text-2xl">🌍</span>
                           Languages
                        </h3>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between pb-3 border-b border-elden-gold/20">
                              <span className="font-garamond text-lg text-foreground/90">
                                 Arabic
                              </span>
                              <span className="font-cinzel text-sm text-gold/80 bg-elden-gold/10 px-3 py-1.5 rounded-full">
                                 Native
                              </span>
                           </div>
                           <div className="flex items-center justify-between pb-3 border-b border-elden-gold/20">
                              <span className="font-garamond text-lg text-foreground/90">
                                 French
                              </span>
                              <span className="font-cinzel text-sm text-gold/80 bg-elden-gold/10 px-3 py-1.5 rounded-full">
                                 Fluent
                              </span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="font-garamond text-lg text-foreground/90">
                                 English
                              </span>
                              <span className="font-cinzel text-sm text-gold/80 bg-elden-gold/10 px-3 py-1.5 rounded-full">
                                 Professional
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Interests */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-7 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                        <h3 className="font-cinzel text-2xl font-semibold text-gold mb-5 flex items-center gap-3">
                           <span className="text-2xl">⚡</span>
                           Interests
                        </h3>
                        <div className="flex flex-wrap gap-3">
                           <span className="px-4 py-2 bg-elden-gold/10 border border-elden-gold/30 rounded-lg text-sm font-garamond text-foreground/90 hover:bg-elden-gold/20 hover:border-elden-gold/50 transition-all duration-300 cursor-default">
                              🎮 Gaming
                           </span>
                           <span className="px-4 py-2 bg-elden-gold/10 border border-elden-gold/30 rounded-lg text-sm font-garamond text-foreground/90 hover:bg-elden-gold/20 hover:border-elden-gold/50 transition-all duration-300 cursor-default">
                              🏕️ Scouting
                           </span>
                           <span className="px-4 py-2 bg-elden-gold/10 border border-elden-gold/30 rounded-lg text-sm font-garamond text-foreground/90 hover:bg-elden-gold/20 hover:border-elden-gold/50 transition-all duration-300 cursor-default">
                              💻 Chess
                           </span>
                           <span className="px-4 py-2 bg-elden-gold/10 border border-elden-gold/30 rounded-lg text-sm font-garamond text-foreground/90 hover:bg-elden-gold/20 hover:border-elden-gold/50 transition-all duration-300 cursor-default">
                              ⚽ Football
                           </span>
                           <span className="px-4 py-2 bg-elden-gold/10 border border-elden-gold/30 rounded-lg text-sm font-garamond text-foreground/90 hover:bg-elden-gold/20 hover:border-elden-gold/50 transition-all duration-300 cursor-default">
                              🎬 Cinephile
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Education Section */}
            <div className="mt-20">
               <div className="text-center mb-12 animate-fadeIn">
                  <h3 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6">
                     Academic Path
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                     <div className="h-px w-16 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                     <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                     <div className="h-px w-16 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
                  </div>
               </div>

               <div className="max-w-4xl mx-auto space-y-6">
                  {/* Current Education */}
                  <div className="relative group animate-slideUp">
                     <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />

                     <div className="relative bg-elden-dark-light/50 backdrop-blur-sm border border-elden-gold/30 p-8 rounded-xl shadow-2xl">
                        {/* Decorative corner accents */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-elden-gold/50" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-elden-gold/50" />

                        <div className="flex items-start gap-6">
                           <div className="flex-shrink-0">
                              <div className="p-4 bg-elden-dark rounded-lg border-2 border-gold/60 shadow-lg shadow-gold/20">
                                 <GraduationCap className="w-10 h-10 text-gold" />
                              </div>
                           </div>
                           <div className="flex-grow">
                              <div className="flex items-start justify-between mb-3">
                                 <div>
                                    <h4 className="font-cinzel text-2xl font-bold text-gold mb-2">
                                       Computer Engineering Student
                                    </h4>
                                    <p className="font-garamond text-lg text-foreground/90 mb-1">
                                       Institut Supérieur d'Informatique et des
                                       Techniques de Communication (ISITCom)
                                    </p>
                                    <p className="font-garamond text-base text-muted-foreground/70">
                                       Hammam Sousse, Tunisia
                                    </p>
                                 </div>
                                 <div className="text-right">
                                    <span className="inline-block px-3 py-1 bg-elden-gold/20 border border-elden-gold/50 rounded-full text-gold font-cinzel text-sm mb-2">
                                       In Progress
                                    </span>
                                    <p className="font-cinzel text-sm text-muted-foreground/70">
                                       2023 - 2026
                                    </p>
                                 </div>
                              </div>

                              <p className="font-garamond text-base text-foreground/80 leading-relaxed mb-4">
                                 Third-year computer engineering student
                                 specializing in Internet of Things and embedded
                                 systems.
                              </p>

                              <div className="flex flex-wrap gap-2">
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Embedded Systems
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    IoT Architecture
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Network Security
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Cybersecurity
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Artificial Intelligence
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Baccalaureate */}
                  <div
                     className="relative group animate-slideUp"
                     style={{ animationDelay: "0.1s" }}
                  >
                     <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />

                     <div className="relative bg-elden-dark-light/50 backdrop-blur-sm border border-elden-gold/30 p-8 rounded-xl shadow-2xl">
                        {/* Decorative corner accents */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-elden-gold/50" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-elden-gold/50" />

                        <div className="flex items-start gap-6">
                           <div className="flex-shrink-0">
                              <div className="p-4 bg-elden-dark rounded-lg border-2 border-gold/60 shadow-lg shadow-gold/20">
                                 <GraduationCap className="w-10 h-10 text-gold" />
                              </div>
                           </div>
                           <div className="flex-grow">
                              <div className="flex items-start justify-between mb-3">
                                 <div>
                                    <h4 className="font-cinzel text-2xl font-bold text-gold mb-2">
                                       Baccalaureate in Mathematics
                                    </h4>
                                    <p className="font-garamond text-lg text-foreground/90 mb-1">
                                       Secondary Education
                                    </p>
                                    <p className="font-garamond text-base text-muted-foreground/70">
                                       Tunisia
                                    </p>
                                 </div>
                                 <div className="text-right">
                                    <span className="inline-block px-3 py-1 bg-green-600/20 border border-green-500/50 rounded-full text-green-400 font-cinzel text-sm mb-2">
                                       Completed
                                    </span>
                                    <p className="font-cinzel text-sm text-muted-foreground/70">
                                       2023
                                    </p>
                                 </div>
                              </div>

                              <p className="font-garamond text-base text-foreground/80 leading-relaxed mb-4">
                                 Specialized in Mathematics with strong
                                 foundations in analytical thinking,
                                 problem-solving, and mathematical reasoning.
                                 This rigorous academic background laid the
                                 groundwork for my next studies.
                              </p>

                              <div className="flex flex-wrap gap-2">
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Mathematics
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Physics
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Computer Science
                                 </span>
                                 <span className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">
                                    Problem solving
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
