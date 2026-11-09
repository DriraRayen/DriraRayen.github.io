import { useEffect, useState } from "react";
import FloatingRunes from "@/components/portfolio/FloatingRunes";
import MysticalFog from "@/components/portfolio/MysticalFog";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import GallerySection from "@/components/portfolio/GallerySection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import ContactSection from "@/components/portfolio/ContactSection";
import DispatchSection from "@/components/portfolio/DispatchSection";
import EldenRingSection from "@/components/portfolio/EldenRingSection";
import AchievementsModal from "@/components/portfolio/AchievementsModal";
import ScoutSection from "@/components/portfolio/ScoutSection";
import InternshipsSection from "@/components/portfolio/InternshipsSection";
import IEEEGallerySection from "@/components/portfolio/IEEEGallerySection";
import { Menu } from "lucide-react";

const Index = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("hero");
   const [showEldenRing, setShowEldenRing] = useState(false);
   const [showAchievements, setShowAchievements] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showBackToTop, setShowBackToTop] = useState(false);
   const [notification, setNotification] = useState<"message" | "cv" | null>(null);

   useEffect(() => {
      setIsVisible(true);
      document.documentElement.classList.add("scroll-smooth");

      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
         setShowBackToTop(window.scrollY > 500);

         // Parallax effect
         const parallaxSlow = document.querySelector(
            ".parallax-slow"
         ) as HTMLElement;
         const parallaxFast = document.querySelector(
            ".parallax-fast"
         ) as HTMLElement;

         if (parallaxSlow) {
            parallaxSlow.style.transform = `translateY(${
               window.scrollY * 0.5
            }px)`;
         }
         if (parallaxFast) {
            parallaxFast.style.transform = `translateY(${
               window.scrollY * 0.3
            }px)`;
         }

         // Track active section
         const sections = [
            "hero",
            "about",
            "internships",
            "projects",
            "skills",
            "certificates",
            "timeline",
            "scouts",
            "ieee-gallery",
            "dispatch",
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

   useEffect(() => {
      if (!notification) {
         return;
      }

      const timeout = window.setTimeout(() => setNotification(null), 5000);
      return () => window.clearTimeout(timeout);
   }, [notification]);

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         const yOffset = -80; // Account for fixed nav
         const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
         window.scrollTo({ top: y, behavior: "smooth" });
      }
   };

   const sections = [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "internships", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "certificates", label: "Certificates" },
      { id: "timeline", label: "Timeline" },
      { id: "scouts", label: "Scouts" },
      { id: "ieee-gallery", label: "IEEE" },
      { id: "dispatch", label: "Dispatch" },
      { id: "contact", label: "Contact" },
   ];

   const handleNavClick = (sectionId: string) => {
      scrollToSection(sectionId);
      if (mobileMenuOpen) setMobileMenuOpen(false);
   };

   return (
      <div className="relative min-h-screen bg-elden-dark overflow-hidden">
         {notification && (
            <div
               role="status"
               className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 text-center"
            >
               <div className="w-full border-y border-elden-gold/40 bg-black px-4 py-8 shadow-[0_0_40px_rgba(218,165,32,0.2)]">
                  <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-elden-gold/80">
                     {notification === "message" ? "Message Delivered" : "Record Acquired"}
                  </p>
                  <p className="mt-2 font-cinzel text-2xl uppercase tracking-[0.2em] text-elden-gold sm:text-4xl">
                     {notification === "message"
                        ? "You have leveled up"
                        : "The Tarnished's record is yours"}
                  </p>
                  <p className="mt-2 font-garamond text-base text-elden-gold/75">
                     {notification === "message"
                        ? "Your dispatch has reached the Lands Between."
                        : "Your journey may now be studied across the Lands Between."}
                  </p>
               </div>
            </div>
         )}
         {/* Mystical atmospheric effects with parallax */}
         <div className="parallax-slow">
            <FloatingRunes />
         </div>
         <div className="parallax-fast">
            <MysticalFog />
         </div>

         {/* Enhanced Professional Navigation Bar */}
         <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
               isScrolled
                  ? "bg-elden-dark/98 backdrop-blur-lg border-b border-elden-gold/30 shadow-2xl"
                  : "bg-transparent"
            }`}
         >
            <div className="mx-auto w-full max-w-[1600px] px-5 py-5 sm:px-7 lg:px-10">
               <div className="flex items-center justify-between md:justify-center">
                  {/* Logo/Name with subtle glow */}
                  <button
                     onClick={() => handleNavClick("hero")}
                     className="relative whitespace-nowrap font-cinzel text-xl font-bold text-gold transition-all duration-300 group hover:text-gold-light md:text-2xl"
                  >
                     <span className="relative z-10">
                        <span className="hidden sm:inline">RAYEN DRIRA</span>
                        <span className="sm:hidden">RD</span>
                     </span>
                     {/* Subtle hover glow */}
                     <div className="absolute inset-0 bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>

                  {/* Desktop Navigation with active indicators */}
                  <div className="ml-12 hidden items-center gap-6 md:flex">
                     {sections.slice(1).map((section) => (
                        <button
                           key={section.id}
                           onClick={() => handleNavClick(section.id)}
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
                  <button
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     className="md:hidden p-2 text-gold hover:text-gold-light transition-colors"
                     aria-label="Toggle menu"
                  >
                     <Menu className="w-6 h-6" />
                  </button>
               </div>

               {/* Mobile Menu Dropdown */}
               {mobileMenuOpen && (
                  <>
                     {/* Backdrop overlay */}
                     <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                     />

                     {/* Sliding menu from right */}
                     <div className="fixed top-0 right-0 bottom-0 w-64 bg-elden-dark/98 backdrop-blur-lg border-l border-elden-gold/30 shadow-2xl z-50 md:hidden animate-slideInRight">
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-elden-gold/30">
                           <span className="font-cinzel text-lg font-bold text-gold">
                              Menu
                           </span>
                           <button
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 text-gold hover:text-gold-light transition-colors"
                              aria-label="Close menu"
                           >
                              <svg
                                 className="w-6 h-6"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                 />
                              </svg>
                           </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-2 p-4">
                           {sections.slice(1).map((section) => (
                              <button
                                 key={section.id}
                                 onClick={() => handleNavClick(section.id)}
                                 className={`font-garamond text-sm uppercase tracking-widest transition-all duration-300 py-3 px-4 rounded-lg text-left ${
                                    activeSection === section.id
                                       ? "text-gold bg-elden-gold/20 border-l-4 border-gold shadow-lg shadow-gold/20"
                                       : "text-muted-foreground hover:text-gold-light hover:bg-elden-gold/10"
                                 }`}
                              >
                                 {section.label}
                              </button>
                           ))}
                        </div>

                        {/* Decorative bottom accent */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-elden-gold/30">
                           <div className="flex items-center justify-center gap-2">
                              <div className="h-px w-12 bg-gradient-to-r from-transparent to-elden-gold/50" />
                              <span className="text-elden-gold/70 text-sm">
                                 ✦
                              </span>
                              <div className="h-px w-12 bg-gradient-to-l from-transparent to-elden-gold/50" />
                           </div>
                        </div>
                     </div>
                  </>
               )}
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
            <InternshipsSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <TimelineSection />
            <ScoutSection />
            <IEEEGallerySection />
            <DispatchSection onMessageSent={() => setNotification("message")} />
            <ContactSection onCvDownload={() => setNotification("cv")} />
         </main>

         {/* Enhanced Professional Footer */}
         <footer
            className="relative py-8 text-center border-t border-elden-gold/30 bg-gradient-to-b from-elden-dark to-elden-dark-light/80"
            role="contentinfo"
         >
            {/* Decorative top border with glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elden-gold/30 to-transparent blur-sm" />

            {/* Footer content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
               <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-1 h-1 bg-elden-gold/70 rounded-full animate-glow" />
                  <div className="h-px w-12 bg-gradient-to-r from-elden-gold/50 to-transparent" />
                  <span className="text-elden-gold/80 text-lg">✦</span>
                  <div className="h-px w-12 bg-gradient-to-l from-elden-gold/50 to-transparent" />
                  <div className="w-1 h-1 bg-elden-gold/70 rounded-full animate-glow" />
               </div>

               <p className="text-muted-foreground/90 font-garamond text-sm mb-2">
                  Crafted with dedication by{" "}
                  <span className="text-gold font-cinzel font-semibold">
                     Rayen Drira
                  </span>
               </p>
               <p className="text-xs text-muted-foreground/70 tracking-wider uppercase mb-4">
                  © {new Date().getFullYear()} • All Rights Reserved
               </p>

               {/* Hidden Easter Eggs */}
               <div className="mx-auto mb-4 max-w-md border border-elden-gold/20 bg-elden-dark/30 p-3">
                  <p className="mb-2 text-center font-cinzel text-[9px] uppercase tracking-[0.35em] text-elden-gold/50">
                     Secret Quests // Optional Discoveries
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                  <button
                     onClick={() => setShowEldenRing(true)}
                     className="group relative border border-elden-gold/20 bg-elden-dark/40 px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-elden-gold/60 hover:bg-elden-gold/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                     title="Optional quest: discover the inspiration"
                  >
                     <span className="block font-cinzel text-[9px] uppercase tracking-widest text-elden-gold/50">Quest 01</span>
                     <span className="relative z-10 block font-garamond text-xs italic text-muted-foreground/60 group-hover:text-gold/90">
                        Discover the Lands Between
                     </span>
                     <span className="mt-1 block font-garamond text-[10px] text-elden-gold/40 group-hover:text-elden-gold/70">Reward: inspiration log</span>
                  </button>
                  <button
                     onClick={() => setShowAchievements(true)}
                     className="group relative border border-elden-gold/20 bg-elden-dark/40 px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-elden-gold/60 hover:bg-elden-gold/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                     title="Optional quest: view character stats"
                  >
                     <span className="block font-cinzel text-[9px] uppercase tracking-widest text-elden-gold/50">Quest 02</span>
                     <span className="relative z-10 block font-garamond text-xs italic text-muted-foreground/60 group-hover:text-gold/90">
                        Unlock the Tarnished&apos;s Legacy
                     </span>
                     <span className="mt-1 block font-garamond text-[10px] text-elden-gold/40 group-hover:text-elden-gold/70">Reward: character stats</span>
                  </button>
                  </div>
               </div>

               {/* Social links or additional info can go here */}
               <div className="flex items-center justify-center gap-4 text-muted-foreground/60 text-xs">
                  <a
                     href="https://linkedin.com/in/DriraRayen"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-gold transition-colors cursor-pointer"
                  >
                     LinkedIn
                  </a>
                  <span>•</span>
                  <a
                     href="https://github.com/DriraRayen"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-gold transition-colors cursor-pointer"
                  >
                     GitHub
                  </a>
                  <span>•</span>
                  <a
                     href="mailto:rayen.drira@outlook.com"
                     className="hover:text-gold transition-colors cursor-pointer"
                  >
                     Email
                  </a>
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

         {/* Achievements Modal */}
         <AchievementsModal
            isOpen={showAchievements}
            onClose={() => setShowAchievements(false)}
         />

         {/* Back to Top Button */}
         {showBackToTop && (
            <button
               onClick={() => scrollToSection("hero")}
               className="fixed bottom-8 right-8 z-40 p-4 bg-elden-gold/20 hover:bg-elden-gold/30 border-2 border-elden-gold/50 hover:border-gold rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 hover:scale-110 group animate-fadeIn"
               aria-label="Back to top"
            >
               <svg
                  className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
               </svg>
            </button>
         )}
      </div>
   );
};

export default Index;
