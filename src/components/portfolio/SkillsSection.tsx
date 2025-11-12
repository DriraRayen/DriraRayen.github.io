import { useState } from "react";
import { Code2, Database, Cpu, Shield, Palette, Server } from "lucide-react";
import SkillRune from "./SkillRune";

const SkillsSection = () => {
   const [activeSkill, setActiveSkill] = useState<string | null>(null);

   const skillCategories = [
      {
         icon: Code2,
         title: "Languages",
         rune: "Core Programming",
         skills: ["JavaScript","TypeScript", "PHP", "C/C++", "Java", "Python"],
         description:
            "Proficient in multiple programming languages for diverse development needs",
      },
      {
         icon: Server,
         title: "Frameworks",
         rune: "Web Development",
         skills: ["Spring Boot", "Laravel", "React.js"],
         description:
            "Modern frameworks for building scalable and maintainable applications",
      },
      {
         icon: Database,
         title: "Databases",
         rune: "Data Management",
         skills: ["MySQL", "MongoDB"],
         description:
            "Database design and management for efficient data storage",
      },
      {
         icon: Cpu,
         title: "Embedded Systems",
         rune: "Hardware Programming",
         skills: ["VHDL", "Arduino", "ESP32", "STM32", "Raspberry Pi"],
         description:
            "Hardware design and embedded system development expertise",
      },
      {
         icon: Shield,
         title: "Systems & Security",
         rune: "DevOps & Security",
         skills: ["Kali Linux", "Git", "Postman"],
         description: "Security tools, version control, and API testing",
      },
      {
         icon: Palette,
         title: "Design Tools",
         rune: "UI/UX Design",
         skills: ["Figma", "Canva"],
         description:
            "Design tools for creating user interfaces and visual content",
      },
   ];

   return (
      <section id="skills" className="relative py-24 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold mb-6 tracking-wide">
                  Skills
               </h2>
               <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Technical expertise across multiple domains
               </p>
            </div>

            {/* Skills grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {skillCategories.map((category, index) => (
                  <SkillRune
                     key={category.title}
                     {...category}
                     index={index}
                     isActive={activeSkill === category.title}
                     onHover={() => setActiveSkill(category.title)}
                     onLeave={() => setActiveSkill(null)}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default SkillsSection;
