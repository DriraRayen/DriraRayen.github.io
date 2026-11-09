import { GraduationCap } from "lucide-react";
import type { Education } from "@/lib/content";

interface EducationCardProps {
   education: Education;
   index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => (
   <article
      className="relative group animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
   >
      <div className="relative border border-elden-gold/30 bg-elden-dark-light/50 p-4 transition-colors duration-300 hover:border-elden-gold/60 sm:p-6 md:p-8">
         <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
               <div className="border border-gold/60 bg-elden-dark p-3 sm:p-4">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
               </div>
            </div>
            <div className="flex-grow w-full">
               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-grow">
                     <p className="mb-1 font-garamond text-xs uppercase tracking-[0.2em] text-elden-gold/70">Path node</p>
                     <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-gold mb-2">{education.title}</h4>
                     <p className="font-garamond text-base sm:text-lg text-foreground/90 mb-1">{education.institution}</p>
                     <p className="font-garamond text-sm sm:text-base text-muted-foreground/70">{education.location}</p>
                     <p className="mt-2 font-cinzel text-xs sm:text-sm text-muted-foreground/70">{education.period}</p>
                  </div>
                  <div className="flex w-full sm:w-auto flex-col items-center sm:items-end gap-2 sm:gap-0 sm:text-right">
                     <span className="inline-block whitespace-nowrap border border-elden-gold/50 px-3 py-1 text-gold font-cinzel text-xs sm:text-sm">{education.status}</span>
                  </div>
               </div>
               <p className="font-garamond text-base text-foreground/80 leading-relaxed mb-4">{education.description}</p>
               <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-elden-mist pt-3">
                  {education.tags.map((tag) => (
                     <span key={tag} className="border-b border-elden-gold/30 pb-1 text-xs font-garamond text-muted-foreground/80">{tag}</span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </article>
);

export default EducationCard;
