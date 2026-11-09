import { LucideIcon, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   technologies: string[];
   year: string;
   category: string;
   imageUrl: string;
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
   imageUrl,
   index,
   githubLink,
   liveLink,
}: ProjectCardProps) => {
   return (
      <div
         className="border border-elden-mist bg-card/80 p-4 transition-colors duration-300 hover:border-elden-gold/60 sm:p-6 md:p-8 group animate-slideUp"
         style={{ animationDelay: `${index * 0.1}s` }}
         role="article"
         aria-label={`Project: ${title}`}
      >
         {/* Header */}
         <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 border border-gold bg-elden-dark-light p-4 group-hover:animate-glow">
               <Icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="min-w-0 flex-1 font-cinzel text-xl md:text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
               {title}
            </h3>
            <div className="flex-shrink-0 text-right">
               <span className="font-garamond text-xs uppercase tracking-widest text-gold border border-gold px-3 py-1">
                  {category}
               </span>
            </div>
         </div>

         {/* Interface preview */}
         <div className="mb-6 overflow-hidden border border-elden-gold/30 bg-elden-dark">
            <img
               src={imageUrl}
               alt={`${title} interface preview`}
               className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
         </div>

         {/* Description */}
         <p className="font-garamond text-muted-foreground leading-relaxed mb-6">
            {description}
         </p>

         {/* Technologies */}
         <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
               <span
                  key={tech}
                  className="font-garamond text-sm border-b border-elden-gold/30 pb-1 text-gold-light"
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
                        className="border border-elden-gold/40 bg-elden-dark-light p-2 hover:border-gold hover:bg-elden-dark transition-all duration-300 group/link"
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
                        className="border border-elden-gold/40 bg-elden-dark-light p-2 hover:border-gold hover:bg-elden-dark transition-all duration-300 group/link"
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
