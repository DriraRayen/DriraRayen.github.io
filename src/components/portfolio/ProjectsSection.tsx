import {
   Filter,
   ShoppingCart,
   Brain,
   HeartPulse,
   MessageSquare,
   Lock,
} from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
   const projects = [
      {
         icon: ShoppingCart,
         title: "TawTaw Store",
         description:
            "A full-featured e-commerce platform where users can browse products, add items to their cart, and complete secure purchases. ",
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
            "An interactive flashcard learning platform that helps students study and memorize information effectively through spaced repetition and a massive library of study sets.",
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
            "A comprehensive health tracking application that allows users to monitor their vital signs, track medications and maintain a personal health diary with secure data management.",
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
         icon: Filter,
         title: "SuperCleaner",
         description:
            "A Chrome extension that lets users permanently hide unwanted elements on websites, such as ads, pop-ups, images, and cluttered sections.",
         technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Chrome Extensions (Manifest V3)",
         ],
         year: "2025",
         category: "Productivity",
         githubLink:
            "https://github.com/Hallous-Yassine/super-cleaner-extension",
      },
      {
         icon: Lock,
         title: "CryptoVerse",
         description:
            "A web-based cryptography demo showcasing hybrid encryption using TRNG-generated RSA keys from a Raspberry Pi and AES-256-GCM via the Web Crypto API.",
         technologies: [
            "React",
            "Web Crypto API",
            "AES-256-GCM",
            "RSA-OAEP",
            "Raspberry Pi",
            "TRNG",
            "Framer Motion",
         ],
         year: "2025",
         category: "Cybersecurity",
         githubLink: "https://github.com/Reoozi/pattern-trust",
      },
      {
         icon: MessageSquare,
         title: "TawTaw Chat",
         description:
            "A terminal-based messaging application that enables real-time communication between users on the same system through an elegant command-line interface with beautiful visual design.",
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
               {projects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
