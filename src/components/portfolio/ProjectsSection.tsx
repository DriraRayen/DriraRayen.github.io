import { Filter, ShoppingCart, Brain, HeartPulse, MessageSquare, Lock } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectItems } from "@/lib/content";

const projectIcons = { Filter, ShoppingCart, Brain, HeartPulse, MessageSquare, Lock };

const ProjectsSection = () => {
   return (
      <section
         id="projects"
         className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide">
                  Projects
               </h2>
               <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Recent development projects and applications
               </p>
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
               {projectItems.map((project, index) => (
                  <ProjectCard key={project.title} {...project} icon={projectIcons[project.icon as keyof typeof projectIcons]} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
