import { LucideIcon } from "lucide-react";

interface SkillRuneProps {
   icon: LucideIcon;
   title: string;
   rune: string;
   skills: string[];
   description: string;
   index: number;
   isActive: boolean;
   onHover: () => void;
   onLeave: () => void;
}

const SkillRune = ({
   icon: Icon,
   title,
   rune,
   skills,
   description,
   index,
   isActive,
   onHover,
   onLeave,
}: SkillRuneProps) => {
   return (
      <div
         className="elden-card relative animate-slideUp border border-elden-mist bg-card/80 p-5 transition-colors duration-300 hover:border-elden-gold/60"
         style={{ animationDelay: `${index * 0.1}s` }}
         onMouseEnter={onHover}
         onMouseLeave={onLeave}
      >
         <div className="mb-5 flex items-start justify-between gap-4 border-b border-elden-mist pb-4">
            <div
               className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
                  isActive ? "border-gold text-gold" : "border-elden-mist text-gold-light"
               }`}
            >
               <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
               <p className="font-garamond text-xs uppercase tracking-[0.2em] text-elden-gold/70">
                  {rune}
               </p>
               <h3 className="mt-1 font-cinzel text-lg font-bold text-foreground">
                  {title}
               </h3>
            </div>
            <span className="font-garamond text-xs text-muted-foreground/70">
               {skills.length} skills
            </span>
         </div>

         <p className="mb-4 font-garamond text-sm leading-relaxed text-muted-foreground">
            {description}
         </p>

         <div className="space-y-2">
            {skills.map((skill) => (
               <div
                  key={skill}
                  className="flex items-center gap-3 border-b border-elden-mist/60 pb-2 last:border-b-0 last:pb-0"
               >
                  <span className="h-1.5 w-1.5 shrink-0 bg-elden-gold" />
                  <span className="font-garamond text-base text-foreground">{skill}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SkillRune;
