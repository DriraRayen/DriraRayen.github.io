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
import SoundToggle from "@/components/portfolio/SoundToggle";
import { soundEffects } from "@/lib/soundEffects";
import { ChevronLeft, Menu, ScrollText, X } from "lucide-react";

interface SecretQuest {
   id: "tarnished" | "legacy" | "inspiration";
   number: string;
   title: string;
   hint: string;
   reward: string;
}

const SECRET_QUESTS: SecretQuest[] = [
   {
      id: "tarnished",
      number: "Quest 01",
      title: "Look for the Tarnished",
      hint: "A secret identity rests within the Wanderer's portrait at the summit of the realm.",
      reward: "Tarnished Awakening",
   },
   {
      id: "legacy",
      number: "Quest 02",
      title: "Unlock the Tarnished's Legacy",
      hint: "Seek the hidden seal along the eastern border of the realm to reveal the traveler's attributes.",
      reward: "Character Stats",
   },
   {
      id: "inspiration",
      number: "Quest 03",
      title: "Discover the Lands Between",
      hint: "Journey to the foot of the chronicle and uncover the ancient words that forged this world.",
      reward: "Inspiration Chronicle",
   },
];

const Index = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("hero");
   const [showEldenRing, setShowEldenRing] = useState(false);
   const [showAchievements, setShowAchievements] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showBackToTop, setShowBackToTop] = useState(false);
   const [showSecretQuests, setShowSecretQuests] = useState(false);
   const [isTarnished, setIsTarnished] = useState(false);
   const [hasEnteredAbout, setHasEnteredAbout] = useState(false);
   const [isCharacterToggleHighlighted, setIsCharacterToggleHighlighted] = useState(false);
   const [notification, setNotification] = useState<"message" | "cv" | null>(null);
   const [completedQuests, setCompletedQuests] = useState<string[]>(() => {
      if (typeof window === "undefined") return [];
      try {
         const saved = localStorage.getItem("elden_completed_quests");
         return saved ? JSON.parse(saved) : [];
      } catch {
         return [];
      }
   });
   const [questNotification, setQuestNotification] = useState<SecretQuest | null>(null);

   const markQuestComplete = (questId: "tarnished" | "legacy" | "inspiration") => {
      const quest = SECRET_QUESTS.find((q) => q.id === questId);
      if (!quest) return;

      setCompletedQuests((prev) => {
         if (prev.includes(questId)) return prev;
         const next = [...prev, questId];
         try {
            localStorage.setItem("elden_completed_quests", JSON.stringify(next));
         } catch {}
         setQuestNotification(quest);
         return next;
      });
   };

   useEffect(() => {
      if (!questNotification) return;
      const timer = window.setTimeout(() => setQuestNotification(null), 5500);
      return () => window.clearTimeout(timer);
   }, [questNotification]);

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
      const sectionsToReveal = Array.from(
         document.querySelectorAll<HTMLElement>("main > section:not(#hero)")
      );

      if (!("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("is-revealed");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
      );

      sectionsToReveal.forEach((section) => {
         section.classList.add("scroll-reveal");
         observer.observe(section);
      });

      return () => {
         observer.disconnect();
         sectionsToReveal.forEach((section) =>
            section.classList.remove("scroll-reveal", "is-revealed")
         );
      };
   }, []);

   useEffect(() => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection || !("IntersectionObserver" in window)) return;

      let highlightTimer: number | undefined;
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (!entry.isIntersecting) return;

            setHasEnteredAbout(true);
            setIsCharacterToggleHighlighted(true);
            highlightTimer = window.setTimeout(
               () => setIsCharacterToggleHighlighted(false),
               1800
            );
            observer.disconnect();
         },
         { threshold: 0.12 }
      );

      observer.observe(aboutSection);
      return () => {
         observer.disconnect();
         if (highlightTimer) window.clearTimeout(highlightTimer);
      };
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
      soundEffects.playNavClick();
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
         <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
            <span className="gold-mote gold-mote-one" />
            <span className="gold-mote gold-mote-two" />
            <span className="gold-mote gold-mote-three" />
            <span className="gold-mote gold-mote-four" />
            <span className="gold-mote gold-mote-five" />
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
            className={`relative z-[2] transition-opacity duration-1000 ${
               isVisible ? "opacity-100" : "opacity-0"
            }`}
         >
            <HeroSection
               isTarnished={isTarnished}
               onToggleTarnished={() => {
                  soundEffects.playTarnishedToggle();
                  setIsTarnished((current) => {
                     const next = !current;
                     if (next) {
                        markQuestComplete("tarnished");
                     }
                     return next;
                  });
               }}
            />
            <AboutSection />
            <InternshipsSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <TimelineSection />
            <ScoutSection />
            <IEEEGallerySection />
            <DispatchSection
               onMessageSent={() => {
                  soundEffects.playLevelUp();
                  setNotification("message");
               }}
            />
            <ContactSection
               onCvDownload={() => {
                  soundEffects.playRecordAcquired();
                  setNotification("cv");
               }}
            />
         </main>

         {/* Enhanced Professional Footer */}
         <footer
            className="relative z-[2] py-8 text-center border-t border-elden-gold/30 bg-gradient-to-b from-elden-dark to-elden-dark-light/80"
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

               <div className="mb-4 flex flex-col items-center gap-2">
                  <button
                     onClick={() => {
                        markQuestComplete("inspiration");
                        soundEffects.playModalOpen();
                        setShowEldenRing(true);
                     }}
                     className="group relative font-garamond text-xs italic text-muted-foreground/40 transition-all duration-500 hover:text-gold/80"
                     title="Discover the inspiration"
                  >
                     <span className="relative z-10">Inspired by the Lands Between</span>
                     <div className="absolute inset-0 bg-gold/5 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </button>
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

         <div className="fixed bottom-6 left-6 z-40">
            {/* Quest completion notification banner anchored to the quest icon */}
            {questNotification && (
               <div
                  role="status"
                  aria-live="polite"
                  className="absolute bottom-16 left-0 z-50 w-72 sm:w-80 rounded-lg border-2 border-elden-gold/80 bg-gradient-to-r from-elden-dark via-[#1a140d] to-elden-dark p-4 shadow-[0_0_30px_rgba(218,165,32,0.45)] backdrop-blur-md animate-slideUp"
               >
                  <div className="flex items-start justify-between gap-3">
                     <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-elden-gold/80 bg-elden-gold/20 text-xs font-bold text-gold">
                           ✓
                        </span>
                        <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-gold">
                           Quest Complete!
                        </span>
                     </div>
                     <button
                        type="button"
                        onClick={() => setQuestNotification(null)}
                        className="text-xs text-elden-gold/60 transition-colors hover:text-gold"
                        aria-label="Dismiss quest notification"
                     >
                        ✕
                     </button>
                  </div>
                  <p className="mt-2 font-cinzel text-sm font-semibold text-foreground">
                     {questNotification.title}
                  </p>
                  <p className="mt-1 font-garamond text-xs text-elden-gold/75">
                     Marked in your chronicle • {completedQuests.length}/{SECRET_QUESTS.length} completed
                  </p>
                  {/* Subtle downward pointer to the scroll icon button */}
                  <div className="absolute -bottom-2 left-5 h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-elden-gold/80" />
               </div>
            )}

            {/* Secret Quests Modal */}
            {showSecretQuests && (
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
                  <div className="relative w-full max-w-3xl border-2 border-elden-gold/50 bg-gradient-to-b from-elden-dark-light to-elden-dark p-6 shadow-2xl shadow-elden-gold/30 sm:p-10">
                     <div className="absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-elden-gold/70" />
                     <div className="absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-elden-gold/70" />
                     <div className="mb-6 flex items-center justify-between border-b border-elden-gold/30 pb-4">
                        <div>
                           <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-elden-gold/70">
                              Optional Discoveries ({completedQuests.length}/{SECRET_QUESTS.length} Completed)
                           </p>
                           <h2 className="mt-1 font-cinzel text-2xl text-gold sm:text-3xl">Secret Quests</h2>
                           <p className="mt-1 font-garamond text-xs text-muted-foreground/75 italic">
                              These are riddles and hints. Explore the Lands Between to discover each secret on your own.
                           </p>
                        </div>
                        <button
                           type="button"
                           onClick={() => {
                              soundEffects.playModalClose();
                              setShowSecretQuests(false);
                           }}
                           className="text-muted-foreground transition-colors hover:text-gold"
                           aria-label="Close secret quests"
                        >
                           <X className="h-4 w-4" />
                        </button>
                     </div>

                     {/* Informational Quest Hint Cards - Non-clickable */}
                     <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                        {SECRET_QUESTS.map((quest) => {
                           const isCompleted = completedQuests.includes(quest.id);
                           return (
                              <div
                                 key={quest.id}
                                 className={`relative border p-5 transition-all select-none ${
                                    isCompleted
                                       ? "border-gold/80 bg-elden-gold/10 shadow-[0_0_20px_rgba(218,165,32,0.2)]"
                                       : "border-elden-gold/25 bg-elden-dark/60 opacity-85"
                                 }`}
                              >
                                 <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="font-cinzel text-xs uppercase tracking-widest text-elden-gold/60">
                                       {quest.number}
                                    </span>
                                    {isCompleted ? (
                                       <span className="flex items-center gap-1 font-cinzel text-[10px] uppercase tracking-wider text-gold font-bold bg-elden-dark/80 px-2 py-0.5 border border-gold/60 rounded">
                                          ✓ Completed
                                       </span>
                                    ) : (
                                       <span className="font-cinzel text-[10px] uppercase tracking-wider text-muted-foreground/60 bg-black/40 px-2 py-0.5 border border-white/10 rounded">
                                          Undiscovered
                                       </span>
                                    )}
                                 </div>

                                 <h3 className={`font-cinzel text-base font-bold ${isCompleted ? "text-gold" : "text-foreground/90"}`}>
                                    {quest.title}
                                 </h3>

                                 <p className="mt-3 font-garamond text-xs text-muted-foreground/90 leading-relaxed italic border-t border-elden-gold/15 pt-2">
                                    &ldquo;{quest.hint}&rdquo;
                                 </p>

                                 <div className="mt-4 flex items-center justify-between text-[11px] font-garamond border-t border-elden-gold/15 pt-2">
                                    <span className="text-elden-gold/60 uppercase tracking-wider">Reward</span>
                                    <span className={isCompleted ? "text-gold font-medium" : "text-muted-foreground/60"}>
                                       {isCompleted ? `${quest.reward} ✓` : quest.reward}
                                    </span>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            )}

            <button
               type="button"
               onClick={() => {
                  soundEffects.playQuestOpen();
                  setShowSecretQuests((visible) => !visible);
               }}
               className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-elden-gold/60 bg-elden-dark/90 text-gold shadow-lg shadow-elden-gold/20 transition-all hover:scale-110 hover:border-gold hover:bg-elden-gold/20 ${
                  questNotification ? "ring-2 ring-gold shadow-[0_0_20px_rgba(218,165,32,0.6)]" : ""
               }`}
               aria-label="Open secret quests"
               title={`Secret quests (${completedQuests.length}/${SECRET_QUESTS.length} completed)`}
            >
               <ScrollText className="h-5 w-5" />
               {completedQuests.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-elden-gold bg-elden-dark font-cinzel text-[10px] font-bold text-gold shadow-sm">
                     {completedQuests.length}
                  </span>
               )}
            </button>
            {/* Sound toggle hidden for now */}
            {/* <SoundToggle /> */}
         </div>

         {/* Elden Ring Modal */}
         <EldenRingSection
            isOpen={showEldenRing}
            onClose={() => {
               soundEffects.playModalClose();
               setShowEldenRing(false);
            }}
         />

         {/* Achievements Modal */}
         <AchievementsModal
            isOpen={showAchievements}
            onClose={() => {
               soundEffects.playModalClose();
               setShowAchievements(false);
            }}
         />

         <button
            type="button"
            onClick={() => {
               markQuestComplete("legacy");
               soundEffects.playModalOpen();
               setShowAchievements(true);
            }}
            className={`edge-stats-toggle group fixed right-0 top-1/2 z-40 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-md border-y border-l border-elden-gold/15 bg-elden-dark/20 text-elden-gold/30 backdrop-blur-sm transition-all duration-500 hover:w-10 hover:border-elden-gold/50 hover:bg-elden-dark/90 hover:text-gold focus-visible:w-10 focus-visible:border-elden-gold/60 focus-visible:text-gold ${
               !hasEnteredAbout
                  ? "pointer-events-none opacity-0"
                  : isCharacterToggleHighlighted
                    ? "about-edge-toggle-intro"
                    : "opacity-0 hover:opacity-100 focus-visible:opacity-100"
            }`}
            aria-label="Open character stats sidebar"
            title="Character record"
         >
            <ChevronLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-0.5" />
         </button>

         {/* Back to Top Button */}
         {showBackToTop && (
            <button
               onClick={() => {
                  soundEffects.playGrace();
                  scrollToSection("hero");
               }}
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
