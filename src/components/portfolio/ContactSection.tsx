import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
   return (
      <section
         id="contact"
         className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30"
      >
         <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                  Summoning Stone
               </h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Invoke this ancient rune to establish a connection across the
                  digital veil
               </p>
            </div>

            {/* Contact content */}
            <div className="grid md:grid-cols-2 gap-12">
               {/* Left side - Mystical message */}
               <div className="space-y-6 animate-slideUp">
                  <div className="bg-card border border-elden-mist p-8 rounded-lg shadow-gold hover:shadow-gold-intense hover:border-elden-gold/50 transition-all duration-300">
                     <h3 className="font-cinzel text-2xl font-bold text-gold mb-4">
                        Seek an Alliance?
                     </h3>
                     <p className="font-garamond text-lg text-muted-foreground leading-relaxed mb-6">
                        Whether you seek collaboration on mystical projects,
                        wish to discuss the arcane arts of technology, or simply
                        desire to forge a new connection in this vast digital
                        realm, I welcome your message.
                     </p>
                     <p className="font-garamond text-lg text-foreground">
                        May our paths converge toward{" "}
                        <span className="text-gold">innovation</span> and{" "}
                        <span className="text-gold">discovery</span>.
                     </p>
                  </div>

                  {/* Location */}
                  <div className="bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense hover:border-elden-gold/50 transition-all duration-300 flex items-center gap-4">
                     <div className="p-3 bg-elden-dark-light rounded-lg border border-gold">
                        <MapPin className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <p className="font-cinzel text-lg font-semibold text-gold">
                           Current Realm
                        </p>
                        <p className="font-garamond text-muted-foreground">
                           Sousse, Tunisia
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right side - Contact methods */}
               <div
                  className="space-y-4 animate-slideUp"
                  style={{ animationDelay: "0.2s" }}
               >
                  {/* Email */}
                  <a
                     href="mailto:rayen.drira@outlook.com"
                     className="block bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-elden-dark-light rounded-lg border border-gold group-hover:animate-glow">
                           <Mail className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                           <p className="font-cinzel text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                              Electronic Scroll
                           </p>
                           <p className="font-garamond text-sm text-muted-foreground">
                              rayen.drira@outlook.com
                           </p>
                        </div>
                        <Send className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  </a>

                  {/* Phone */}
                  <a
                     href="tel:+21695690027"
                     className="block bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-elden-dark-light rounded-lg border border-gold group-hover:animate-glow">
                           <Phone className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                           <p className="font-cinzel text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                              Telepathic Channel
                           </p>
                           <p className="font-garamond text-sm text-muted-foreground">
                              +216 95 690 027
                           </p>
                        </div>
                     </div>
                  </a>

                  {/* GitHub */}
                  <a
                     href="https://github.com/DriraRayen"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-elden-dark-light rounded-lg border border-gold group-hover:animate-glow">
                           <Github className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                           <p className="font-cinzel text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                              Code Repository
                           </p>
                           <p className="font-garamond text-sm text-muted-foreground">
                              github.com/DriraRayen
                           </p>
                        </div>
                     </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                     href="https://linkedin.com/in/DriraRayen"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-elden-dark-light rounded-lg border border-gold group-hover:animate-glow">
                           <Linkedin className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                           <p className="font-cinzel text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                              Professional Network
                           </p>
                           <p className="font-garamond text-sm text-muted-foreground">
                              linkedin.com/in/DriraRayen
                           </p>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
