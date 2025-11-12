import { useEffect, useState } from "react";
import FloatingRunes from "@/components/portfolio/FloatingRunes";
import MysticalFog from "@/components/portfolio/MysticalFog";
import ScrollIndicator from "@/components/portfolio/ScrollIndicator";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import GallerySection from "@/components/portfolio/GallerySection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import ContactSection from "@/components/portfolio/ContactSection";
import EldenRingSection from "@/components/portfolio/EldenRingSection";
import { Menu } from "lucide-react";

const Index = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("hero");
   const [showEldenRing, setShowEldenRing] = useState(false);

   useEffect(() => {
      setIsVisible(true);
      document.documentElement.classList.add("scroll-smooth");

      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);

         // Track active section
         const sections = [
            "hero",
            "about",
            "projects",
            "skills",
            "certificates",
            "timeline",
            "contact",
         ];
         for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
               const rect = element.getBoundingClientRect();
               if (rect.top <= 150 && rect.bottom >= 150) {
                  setActiveSection(sectionId);
                  break;
               }
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToSection = (sectionId: string) => {
      document
         .getElementById(sectionId)
         ?.scrollIntoView({ behavior: "smooth" });
   };

   const sections = [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "certificates", label: "Certificates" },
      { id: "timeline", label: "Timeline" },
      { id: "contact", label: "Contact" },
   ];

   return (
      <div className="relative min-h-screen bg-elden-dark overflow-hidden">
         {/* Mystical atmospheric effects */}
         <FloatingRunes />
         <MysticalFog />

         {/* Enhanced Professional Navigation Bar */}
         <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
               isScrolled
                  ? "bg-elden-dark/98 backdrop-blur-lg border-b border-elden-gold/30 shadow-2xl"
                  : "bg-transparent"
            }`}
         >
            <div className="max-w-7xl mx-auto px-6 py-5">
               <div className="flex items-center justify-between">
                  {/* Logo/Name with subtle glow */}
                  <button
                     onClick={() => scrollToSection("hero")}
                     className="font-cinzel text-xl md:text-2xl font-bold text-gold hover:text-gold-light transition-all duration-300 relative group"
                  >
                     <span className="relative z-10">RAYEN DRIRA</span>
                     {/* Subtle hover glow */}
                     <div className="absolute inset-0 bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>

                  {/* Desktop Navigation with active indicators */}
                  <div className="hidden md:flex items-center gap-10">
                     {sections.slice(1).map((section) => (
                        <button
                           key={section.id}
                           onClick={() => scrollToSection(section.id)}
                           className={`font-garamond text-sm uppercase tracking-widest transition-all duration-300 relative group ${
                              activeSection === section.id
                                 ? "text-gold"
                                 : "text-muted-foreground hover:text-gold-light"
                           }`}
                        >
                           {section.label}
                           {/* Active indicator */}
                           <span
                              className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-300 ${
                                 activeSection === section.id
                                    ? "w-full opacity-100"
                                    : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                              }`}
                           />
                           {/* Decorative dot */}
                           {activeSection === section.id && (
                              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full animate-pulse" />
                           )}
                        </button>
                     ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <button className="md:hidden p-2 text-gold hover:text-gold-light transition-colors">
                     <Menu className="w-6 h-6" />
                  </button>
               </div>
            </div>

            {/* Decorative bottom accent line */}
            {isScrolled && (
               <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold/40 to-transparent" />
            )}
         </nav>

         <main
            className={`relative transition-opacity duration-1000 ${
               isVisible ? "opacity-100" : "opacity-0"
            }`}
         >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <TimelineSection />
            <ContactSection />
         </main>

         {/* Enhanced Professional Footer */}
         <footer className="relative py-16 text-center border-t border-elden-gold/30 bg-gradient-to-b from-elden-dark to-elden-dark-light/80">
            {/* Decorative top border with glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold/30 to-transparent blur-sm" />

            {/* Footer content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
               <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="w-1.5 h-1.5 bg-elden-gold/70 rounded-full animate-glow" />
                  <div className="h-px w-20 bg-gradient-to-r from-elden-gold/50 to-transparent" />
                  <span className="text-elden-gold/80 text-xl">✦</span>
                  <div className="h-px w-20 bg-gradient-to-l from-elden-gold/50 to-transparent" />
                  <div className="w-1.5 h-1.5 bg-elden-gold/70 rounded-full animate-glow" />
               </div>

               <p className="text-muted-foreground/90 font-garamond text-base mb-3">
                  Crafted with dedication by{" "}
                  <span className="text-gold font-cinzel font-semibold">
                     Rayen Drira
                  </span>
               </p>
               <p className="text-xs text-muted-foreground/70 tracking-wider uppercase mb-4">
                  © {new Date().getFullYear()} • All Rights Reserved
               </p>

               {/* Hidden Elden Ring Easter Egg */}
               <button
                  onClick={() => setShowEldenRing(true)}
                  className="group relative text-xs text-muted-foreground/40 hover:text-gold/80 transition-all duration-500 font-garamond italic mb-8"
                  title="Discover the inspiration"
               >
                  <span className="relative z-10">
                     Inspired by the Lands Between
                  </span>
                  <div className="absolute inset-0 bg-gold/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               </button>

               {/* Social links or additional info can go here */}
               <div className="flex items-center justify-center gap-4 text-muted-foreground/60 text-xs">
                  <span className="hover:text-gold transition-colors cursor-pointer">
                     LinkedIn
                  </span>
                  <span>•</span>
                  <span className="hover:text-gold transition-colors cursor-pointer">
                     GitHub
                  </span>
                  <span>•</span>
                  <span className="hover:text-gold transition-colors cursor-pointer">
                     Email
                  </span>
               </div>

               {/* Subtle floating particles */}
               <div className="absolute left-1/4 -top-6 w-1 h-1 bg-elden-gold/30 rounded-full animate-float" />
               <div
                  className="absolute right-1/4 top-0 w-0.5 h-0.5 bg-elden-gold-light/30 rounded-full animate-float"
                  style={{ animationDelay: "1.5s" }}
               />
               <div
                  className="absolute left-1/3 bottom-4 w-0.5 h-0.5 bg-elden-gold/30 rounded-full animate-float"
                  style={{ animationDelay: "2.5s" }}
               />
            </div>
         </footer>

         {/* Elden Ring Modal */}
         <EldenRingSection
            isOpen={showEldenRing}
            onClose={() => setShowEldenRing(false)}
         />
      </div>
   );
};

export default Index;
