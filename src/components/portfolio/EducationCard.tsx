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
      <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />
      <div className="relative bg-elden-dark-light/50 backdrop-blur-sm border border-elden-gold/30 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl">
         <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-elden-gold/50" />
         <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-elden-gold/50" />
         <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
               <div className="p-3 sm:p-4 bg-elden-dark rounded-lg border-2 border-gold/60 shadow-lg shadow-gold/20">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
               </div>
            </div>
            <div className="flex-grow w-full">
               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-grow">
                     <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-gold mb-2">{education.title}</h4>
                     <p className="font-garamond text-base sm:text-lg text-foreground/90 mb-1">{education.institution}</p>
                     <p className="font-garamond text-sm sm:text-base text-muted-foreground/70">{education.location}</p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0 sm:text-right">
                     <span className="inline-block px-3 py-1 bg-elden-gold/20 border border-elden-gold/50 rounded-full text-gold font-cinzel text-xs sm:text-sm">{education.status}</span>
                     <p className="font-cinzel text-xs sm:text-sm text-muted-foreground/70">{education.period}</p>
                  </div>
               </div>
               <p className="font-garamond text-base text-foreground/80 leading-relaxed mb-4">{education.description}</p>
               <div className="flex flex-wrap gap-2">
                  {education.tags.map((tag) => (
                     <span key={tag} className="px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-xs font-garamond text-muted-foreground/80">{tag}</span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </article>
);

export default EducationCard;
