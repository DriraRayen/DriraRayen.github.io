import { Shield, Cpu, Users } from "lucide-react";

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
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Engineer • Leader • Innovator
               </p>
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
                              I'm a third-year student at{" "}
                              <span className="text-gold font-semibold">
                                 ISITCom
                              </span>
                              , specializing in{" "}
                              <span className="text-gold font-semibold">
                                 IoT and Embedded Systems Engineering
                              </span>
                              . My passion lies at the intersection of hardware
                              and software, where I create intelligent solutions
                              that bridge the physical and digital worlds.
                           </p>
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              My technical journey spans across{" "}
                              <span className="text-gold">
                                 embedded systems
                              </span>
                              , <span className="text-gold">cybersecurity</span>
                              , and{" "}
                              <span className="text-gold">
                                 artificial intelligence
                              </span>
                              . I'm certified in network security (FORTINET,
                              CISCO) and continuously expanding my expertise in
                              emerging technologies.
                           </p>
                           <p className="font-garamond text-xl leading-relaxed text-foreground/95">
                              Beyond engineering, I've been a{" "}
                              <span className="text-gold font-semibold">
                                 Scout Leader
                              </span>{" "}
                              with the Tunisian Scouts since 2012, where I
                              develop leadership skills, mentor youth, and build
                              strong community connections.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Expertise Cards */}
               <div
                  className="space-y-5 animate-slideUp"
                  style={{ animationDelay: "0.15s" }}
               >
                  {/* IoT & Embedded Systems */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-7 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                        <div className="flex items-start gap-5">
                           <div className="flex-shrink-0">
                              <div className="p-4 bg-elden-dark rounded-lg border-2 border-gold/60 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                                 <Cpu className="w-8 h-8 text-gold" />
                              </div>
                           </div>
                           <div className="flex-grow">
                              <h3 className="font-cinzel text-2xl font-semibold text-gold mb-3 group-hover:text-gold-light transition-colors">
                                 IoT & Embedded Systems
                              </h3>
                              <p className="font-garamond text-base text-muted-foreground/90 leading-relaxed">
                                 Expertise in Arduino, VHDL, and embedded C/C++.
                                 Building intelligent systems that connect
                                 hardware with software to create real-world
                                 solutions.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Cybersecurity */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-7 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                        <div className="flex items-start gap-5">
                           <div className="flex-shrink-0">
                              <div className="p-4 bg-elden-dark rounded-lg border-2 border-gold/60 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                                 <Shield className="w-8 h-8 text-gold" />
                              </div>
                           </div>
                           <div className="flex-grow">
                              <h3 className="font-cinzel text-2xl font-semibold text-gold mb-3 group-hover:text-gold-light transition-colors">
                                 Cybersecurity
                              </h3>
                              <p className="font-garamond text-base text-muted-foreground/90 leading-relaxed">
                                 FORTINET and CISCO certified. Specialized in
                                 network security, threat analysis, and
                                 implementing robust security architectures.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Leadership */}
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-elden-gold/20 to-elden-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-7 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                        <div className="flex items-start gap-5">
                           <div className="flex-shrink-0">
                              <div className="p-4 bg-elden-dark rounded-lg border-2 border-gold/60 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                                 <Users className="w-8 h-8 text-gold" />
                              </div>
                           </div>
                           <div className="flex-grow">
                              <h3 className="font-cinzel text-2xl font-semibold text-gold mb-3 group-hover:text-gold-light transition-colors">
                                 Leadership & Mentorship
                              </h3>
                              <p className="font-garamond text-base text-muted-foreground/90 leading-relaxed">
                                 13+ years as a Scout Leader with the Tunisian
                                 Scouts. Developing leadership skills, mentoring
                                 youth, and fostering community growth.
                              </p>
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
