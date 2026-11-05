import { useState } from "react";
import { Award, X } from "lucide-react";
import { certificateItems } from "@/lib/content";

const CertificatesSection = () => {
   const [selectedCert, setSelectedCert] = useState<number | null>(null);

   return (
      <section
         id="certificates"
         className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                  Sacred Seals of Achievement
               </h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground max-w-2xl mx-auto">
                  Legendary marks of mastery, bestowed by ancient guilds of
                  wisdom
               </p>
            </div>

            {/* Certificates grid */}
            <div className="grid md:grid-cols-2 gap-6">
               {certificateItems.map((cert, index) => (
                  <div
                     key={index}
                     className="group relative bg-card border border-elden-mist rounded-lg overflow-hidden shadow-gold hover:shadow-gold-intense hover:scale-[1.02] transition-all duration-500 cursor-pointer animate-slideUp"
                     style={{ animationDelay: `${index * 0.15}s` }}
                     onClick={() => setSelectedCert(index)}
                  >
                     <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                           src={cert.imageUrl}
                           alt={`Certificate: ${cert.title} from ${cert.issuer}`}
                           className="w-full h-full object-contain bg-elden-dark/50 transition-transform duration-500 group-hover:scale-105"
                           loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-elden-dark via-transparent to-transparent opacity-40" />
                        <div className="absolute top-3 right-3">
                           <div className="w-10 h-10 bg-elden-gold rounded-full flex items-center justify-center shadow-gold">
                              <Award className="w-5 h-5 text-elden-dark" />
                           </div>
                        </div>
                     </div>

                     <div className="p-5">
                        <h3 className="font-cinzel text-lg font-bold text-gold mb-1 group-hover:glow-gold transition-all">
                           {cert.title}
                        </h3>
                        <p className="font-garamond text-sm text-gold-light mb-1">
                           {cert.issuer}
                        </p>
                        <p className="font-garamond text-xs text-muted-foreground">
                           {cert.date}
                        </p>
                     </div>

                     {/* Decorative corners */}
                     <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-elden-mist group-hover:border-gold transition-colors" />
                     <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-elden-mist group-hover:border-gold transition-colors" />
                     <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-elden-mist group-hover:border-gold transition-colors" />
                     <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-elden-mist group-hover:border-gold transition-colors" />
                  </div>
               ))}
            </div>
         </div>

         {/* Certificate Modal */}
         {selectedCert !== null && (
            <div className="fixed inset-0 z-50 bg-elden-dark/95 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
               <button
                  onClick={() => setSelectedCert(null)}
                  className="fixed top-4 right-4 p-2 bg-card border border-gold rounded-full hover:bg-elden-gold hover:text-elden-dark transition-all duration-300 z-10"
                  aria-label="Close certificate"
               >
                  <X className="w-5 h-5" />
               </button>

               <div className="max-w-2xl w-full bg-card border-2 border-gold rounded-lg overflow-hidden shadow-gold-intense my-8">
                  <img
                     src={certificateItems[selectedCert].imageUrl}
                     alt={certificateItems[selectedCert].title}
                     className="w-full h-auto max-h-[60vh] object-contain"
                  />
                  <div className="p-6">
                     <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-elden-gold rounded-full flex items-center justify-center flex-shrink-0">
                           <Award className="w-6 h-6 text-elden-dark" />
                        </div>
                        <div>
                           <h3 className="font-cinzel text-xl font-bold text-gold mb-1">
                              {certificateItems[selectedCert].title}
                           </h3>
                           <p className="font-garamond text-sm text-gold-light">
                              {certificateItems[selectedCert].issuer}
                           </p>
                           <p className="font-garamond text-xs text-muted-foreground">
                              {certificateItems[selectedCert].date}
                           </p>
                        </div>
                     </div>
                     <p className="font-garamond text-base text-muted-foreground mb-4 italic">
                        {certificateItems[selectedCert].description}
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {certificateItems[selectedCert].skills.map((skill) => (
                           <span
                              key={skill}
                              className="px-2.5 py-1 bg-elden-dark-light text-gold-light border border-elden-mist rounded-md font-garamond text-xs"
                           >
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default CertificatesSection;
