import { LucideIcon, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   technologies: string[];
   year: string;
   category: string;
   index: number;
   githubLink?: string;
   liveLink?: string;
}

const ProjectCard = ({
   icon: Icon,
   title,
   description,
   technologies,
   year,
   category,
   index,
   githubLink,
   liveLink,
}: ProjectCardProps) => {
   return (
      <div
         className="bg-card border border-elden-mist p-8 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-500 group animate-slideUp"
         style={{ animationDelay: `${index * 0.1}s` }}
      >
         {/* Header */}
         <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-elden-dark-light rounded-lg border border-gold group-hover:animate-glow">
               <Icon className="w-8 h-8 text-gold" />
            </div>
            <div className="text-right">
               <span className="font-garamond text-sm text-gold border border-gold px-3 py-1 rounded-full">
                  {category}
               </span>
            </div>
         </div>

         {/* Title */}
         <h3 className="font-cinzel text-2xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
            {title}
         </h3>

         {/* Description */}
         <p className="font-garamond text-muted-foreground leading-relaxed mb-6">
            {description}
         </p>

         {/* Technologies */}
         <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
               <span
                  key={tech}
                  className="font-garamond text-sm bg-elden-dark-light text-gold-light border border-elden-mist px-3 py-1 rounded-md"
               >
                  {tech}
               </span>
            ))}
         </div>

         {/* Footer with Year and Links */}
         <div className="flex items-center justify-between pt-4 border-t border-elden-mist">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-garamond">
               <span className="w-1.5 h-1.5 bg-gold rounded-full" />
               <span>Forged in {year}</span>
            </div>

            {/* Project Links */}
            {(githubLink || liveLink) && (
               <div className="flex items-center gap-3">
                  {githubLink && (
                     <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-elden-dark-light border border-elden-gold/40 rounded-lg hover:border-gold hover:bg-elden-dark transition-all duration-300 group/link"
                        aria-label="View on GitHub"
                     >
                        <Github className="w-5 h-5 text-gold-light group-hover/link:text-gold transition-colors" />
                     </a>
                  )}
                  {liveLink && (
                     <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-elden-dark-light border border-elden-gold/40 rounded-lg hover:border-gold hover:bg-elden-dark transition-all duration-300 group/link"
                        aria-label="View live project"
                     >
                        <ExternalLink className="w-5 h-5 text-gold-light group-hover/link:text-gold transition-colors" />
                     </a>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};

export default ProjectCard;
