import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LucideIcon, Github, ExternalLink, X } from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

interface ProjectScreenshot {
   src: string;
   alt: string;
}

interface ProjectCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   technologies: string[];
   year: string;
   category: string;
   imageUrl: string;
   screenshots?: ProjectScreenshot[];
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
   screenshots,
   index,
   githubLink,
   liveLink,
}: ProjectCardProps) => {
   const [activeScreenshot, setActiveScreenshot] = useState<ProjectScreenshot | null>(null);

   const openScreenshot = (screenshot: ProjectScreenshot) => {
      soundEffects.playModalOpen();
      setActiveScreenshot(screenshot);
   };

   const closeScreenshot = () => {
      soundEffects.playModalClose();
      setActiveScreenshot(null);
   };

   useEffect(() => {
      if (!activeScreenshot) return;

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") closeScreenshot();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [activeScreenshot]);

   return (
      <>
      <div
         className="elden-card border border-elden-mist bg-card/80 p-4 transition-colors duration-300 hover:border-elden-gold/60 sm:p-6 md:p-8 group animate-slideUp"
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
         {screenshots?.length ? (
            <div className={`mb-6 grid gap-3 ${screenshots.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
               {screenshots.map((screenshot) => (
                  <figure key={screenshot.src} className="overflow-hidden border border-elden-gold/30 bg-elden-dark transition-colors duration-300 hover:border-elden-gold/70">
                     <button
                        type="button"
                        onClick={() => openScreenshot(screenshot)}
                        className={`flex w-full items-center justify-center bg-black/40 p-2 transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold ${screenshots.length === 1 ? "aspect-video" : "aspect-[3/4]"}`}
                        aria-label={`View ${title} screenshot larger`}
                     >
                        <img
                           src={screenshot.src}
                           alt={screenshot.alt}
                           loading="lazy"
                           className="h-full w-full object-contain object-top"
                        />
                     </button>
                  </figure>
               ))}
            </div>
         ) : (
            <div className="mb-6 overflow-hidden border border-elden-gold/30 bg-elden-dark">
               <img
                  src={imageUrl}
                  alt={`${title} interface preview`}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
         )}

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
      {activeScreenshot &&
         createPortal(
            <div
               className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fadeIn"
               role="dialog"
               aria-modal="true"
               aria-label={`${title} screenshot`}
               onClick={closeScreenshot}
            >
               <button
                  type="button"
                  className="absolute right-4 top-4 z-10 rounded-full border border-elden-gold/50 bg-elden-dark/90 p-3 text-gold transition-colors hover:bg-elden-gold/20"
                  onClick={closeScreenshot}
                  aria-label="Close screenshot"
               >
                  <X className="h-5 w-5" />
               </button>
               <img
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  className="max-h-[90vh] max-w-[92vw] object-contain shadow-[0_0_40px_rgba(218,165,32,0.18)]"
                  onClick={(event) => event.stopPropagation()}
               />
            </div>,
            document.body
         )}
      </>
   );
};

export default ProjectCard;
