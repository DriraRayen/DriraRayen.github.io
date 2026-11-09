import { Briefcase, Calendar, MapPin } from "lucide-react";
import { internshipItems } from "@/lib/internshipContent";

const InternshipsSection = () => (
   <section id="internships" className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16 animate-fadeIn">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">Experience</h2>
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
               <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
               <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
            </div>
            <p className="font-garamond text-lg text-muted-foreground/70">Vocations, campaigns, and field experience</p>
         </div>
         {internshipItems.length === 0 ? (
            <p className="text-center font-garamond text-lg text-muted-foreground/70">New internship chronicles will appear here.</p>
         ) : (
            <div className="grid md:grid-cols-2 gap-6">
               {internshipItems.map((internship) => (
                  <article key={`${internship.company}-${internship.title}`} className="relative border border-elden-mist bg-card/80 p-6 transition-colors duration-300 hover:border-elden-gold/60">
                     <div className="flex items-start gap-4">
                        <div className="border border-gold bg-elden-dark-light p-3">
                           <Briefcase className="w-7 h-7 text-gold" />
                        </div>
                        <div className="flex-1">
                           <p className="font-garamond text-xs uppercase tracking-[0.2em] text-elden-gold/70">Vocation</p>
                           <h3 className="font-cinzel text-xl font-bold text-gold">{internship.title}</h3>
                           <p className="font-garamond text-lg text-gold-light">{internship.company}</p>
                           <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{internship.period}</span>
                              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{internship.location}</span>
                           </div>
                        </div>
                     </div>
                     <p className="font-garamond text-muted-foreground leading-relaxed mt-5">{internship.description}</p>
                     <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-elden-mist pt-3">
                        {internship.skills.map((skill) => <span key={skill} className="border-b border-elden-gold/30 pb-1 text-sm text-gold-light">{skill}</span>)}
                     </div>
                  </article>
               ))}
            </div>
         )}
      </div>
   </section>
);

export default InternshipsSection;
