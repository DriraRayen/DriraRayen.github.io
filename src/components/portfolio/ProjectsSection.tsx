import { ShoppingCart, Brain, HeartPulse, MessageSquare } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
   const projects = [
      {
         icon: ShoppingCart,
         title: "TawTaw Store",
         description:
            "Full-featured e-commerce platform with product management, shopping cart functionality, and user authentication. Built with modern web technologies for optimal performance.",
         technologies: ["JavaScript", "PHP", "MySQL"],
         year: "2025",
         category: "E-Commerce",
         githubLink: "https://github.com/DriraRayen/TawTaw-Store",
         liveLink: "https://tawtaw-store.kesug.com/",
      },
      {
         icon: Brain,
         title: "Memora",
         description:
            "Interactive flashcard learning application developed using Agile Scrum methodology. Features spaced repetition algorithms and progress tracking for effective knowledge retention.",
         technologies: ["JavaScript", "PHP", "MySQL", "Scrum"],
         year: "2025",
         category: "Education",
         githubLink: "https://github.com/DriraRayen/Memora",
         liveLink: "https://memora.kesug.com/",
      },
      {
         icon: HeartPulse,
         title: "VitaCare",
         description:
            "Comprehensive health tracking web application with secure authentication using OAuth 2.0 and JWT tokens. Built with Spring Boot backend and React frontend featuring intuitive UI components.",
         technologies: [
            "Spring Boot",
            "React.js",
            "Ant Design",
            "OAuth 2.0",
            "JWT",
         ],
         year: "2025",
         category: "Healthcare",
      },
      {
         icon: MessageSquare,
         title: "TawTaw Chat",
         description:
            "Terminal-based chat application built in C with beautiful UI design. Features inter-terminal messaging without network dependencies, showcasing creative use of terminal graphics and user interface design.",
         technologies: ["C", "Terminal UI"],
         year: "2024",
         category: "Communication",
      },
   ];

   return (
      <section
         id="projects"
         className="relative py-24 px-4 md:px-8 lg:px-16 bg-elden-dark-light/30"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold mb-6 tracking-wide">
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
               {projects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
