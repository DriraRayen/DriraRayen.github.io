import { useState } from "react";
import { Code2, Database, Cpu, Shield, Palette, Server, Brain } from "lucide-react";
import SkillRune from "./SkillRune";
import { skillCategories } from "@/lib/content";

const skillIcons = { Languages: Code2, Frameworks: Server, Databases: Database, "Embedded Systems": Cpu, "Systems & Security": Shield, "Design Tools": Palette, "AI & Deep Learning": Brain };

const SkillsSection = () => {
   const [activeSkill, setActiveSkill] = useState<string | null>(null);

   return (
      <section id="skills" className="relative py-24 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide">
                  Skills
               </h2>
               <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Player attributes and equipped abilities
               </p>
            </div>

            {/* Skills grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
               {skillCategories.map((category, index) => (
                  <SkillRune
                     key={category.title}
                     {...category}
                     icon={skillIcons[category.title as keyof typeof skillIcons]}
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
