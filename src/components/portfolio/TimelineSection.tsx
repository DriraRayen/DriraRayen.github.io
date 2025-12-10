import {
   Calendar,
   Briefcase,
   GraduationCap,
   Trophy,
   ChevronLeft,
   ChevronRight,
   Users,
   Palette,
   Flag,
} from "lucide-react";
import { useState } from "react";
import raksha1 from "@/assets/gallery/raksha-1 .jpg";
import raksha2 from "@/assets/gallery/raksha-2.jpg";
import redroom1 from "@/assets/gallery/REDROOM-1.jpg";
import redroom2 from "@/assets/gallery/REDROOM-2.jpg";
import redroom3 from "@/assets/gallery/REDROOM-3.jpg";

import redroom5 from "@/assets/gallery/REDROOM-5.jpg";
import redroom7 from "@/assets/gallery/REDROOM-7.jpg";
import night1 from "@/assets/gallery/night1.jpg";
import night2 from "@/assets/gallery/night2.jpg";
import nuit2025_1 from "@/assets/gallery/Nuit_2025_1.jpg";
import nuit2025_2 from "@/assets/gallery/Nuit_2025_2.png";
import nuit2025_3 from "@/assets/gallery/Nuit_2025_3.jpg";
import nuit2025_4 from "@/assets/gallery/Nuit_2025_4.jpg";

const TimelineSection = () => {
   const [activeImageIndexes, setActiveImageIndexes] = useState<{
      [key: number]: number;
   }>({});
   const [showGallery, setShowGallery] = useState<{
      [key: number]: boolean;
   }>({});

   const timelineEvents = [
      {
         year: "2025",
         title: "Nuit d'Info 2025",
         team: "Team Super_Tounsi_ISITCOM",
         type: "achievement",
         icon: Trophy,
         description: "Won the Silver Medal in MiniMind challenge, ",
         details: ["Silver Medal", "Team Collaboration", "Global Event"],
         images: [nuit2025_1, nuit2025_2, nuit2025_3, nuit2025_4],
      },
      {
         year: "2025",
         title: "IEEE Xtreme 19.0",
         team: "",
         type: "hackathon",
         icon: Trophy,
         description:
            "Competed in the 24-hour global programming competition, solving challenging algorithmic problems",
         details: [
            "Programming Marathon",
            "IEEE Competition",
            "Problem Solving",
            "Global Event",
         ],
         images: [],
      },
      {
         year: "2025",
         title: "KYBISEC Online CTF",
         team: "Team HYDR4",
         type: "ctf",
         icon: Flag,
         description:
            "Achieved Rank 5 in the online CTF competition celebrating the launch of KyubiSec's official website",
         details: [
            "Capture The Flag",
            "Online Competition",
            "Team Collaboration",
            "Top 5 Finish",
         ],
         images: [],
      },
      {
         year: "2025",
         title: "Raksha Pentest",
         team: "Team NeverLate",
         type: "ctf",
         icon: Flag,
         description:
            "Participated in the first penetration testing event in Tunisia by Securients ISITCOM & Securinets EPI",
         details: ["Penetration Testing", "King of the hill", "Bomb diffuse"],
         images: [raksha1, raksha2],
      },
      {
         year: "2025",
         title: "RedRoom Hackathon",
         team: "Team bitwi$e",
         type: "hackathon",
         icon: Trophy,
         description:
            "Secured 3rd place in the 26-hour cybersecurity hackathon at Securients ISITCOM",
         details: [
            "Workshops",
            "CTF Challenges",
            "Penetration Testing",
            "Escape Room",
            "Team bitwi$e",
         ],
         images: [redroom1, redroom2, redroom3, redroom5, redroom7],
      },
      {
         year: "2024",
         title: "Nuit d'Info 2024",
         team: "Team CodingToon_ISITCOM",
         type: "achievement",
         icon: Trophy,
         description:
            "Participated in the Nuit d'Info as a designer, the annual all-night competition featuring diverse challenges",
         details: ["Team Collaboration", "Global Event"],
         images: [night1, night2],
      },
   ];

   const handleNextImage = (eventIndex: number, totalImages: number) => {
      setActiveImageIndexes((prev) => ({
         ...prev,
         [eventIndex]: ((prev[eventIndex] || 0) + 1) % totalImages,
      }));
   };

   const handlePrevImage = (eventIndex: number, totalImages: number) => {
      setActiveImageIndexes((prev) => ({
         ...prev,
         [eventIndex]:
            ((prev[eventIndex] || 0) - 1 + totalImages) % totalImages,
      }));
   };

   const getTypeColor = (type: string) => {
      return "bg-elden-gold/20 border-elden-gold text-gold";
   };

   return (
      <section
         id="timeline"
         className="relative py-32 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-elden-dark to-elden-dark/95"
      >
         <div className="max-w-6xl mx-auto relative z-10">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide">
                  Events Timeline
               </h2>
               <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Recent achievements and competitions
               </p>
            </div>

            {/* Timeline - Vertical Design */}
            <div className="relative max-w-4xl mx-auto">
               {/* Vertical line on left */}
               <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-elden-gold/40 via-elden-gold/60 to-elden-gold/40" />

               {/* Timeline events */}
               <div className="space-y-8 md:space-y-12">
                  {timelineEvents.map((event, index) => {
                     const Icon = event.icon;

                     return (
                        <div
                           key={index}
                           className="relative pl-8 sm:pl-12 md:pl-24 animate-slideUp group"
                           style={{ animationDelay: `${index * 0.15}s` }}
                        >
                           {/* Timeline dot */}
                           <div className="absolute left-0 sm:left-0 md:left-8 top-6 sm:top-8 transform -translate-x-1/2">
                              <div className="relative">
                                 {/* Pulsing ring */}
                                 <div
                                    className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 bg-elden-gold/30 rounded-full animate-ping"
                                    style={{ animationDuration: "2s" }}
                                 />
                                 {/* Solid dot */}
                                 <div className="relative w-4 h-4 sm:w-6 sm:h-6 bg-elden-gold rounded-full border-2 sm:border-4 border-elden-dark shadow-lg shadow-elden-gold/50" />
                              </div>
                           </div>

                           {/* Event card */}
                           <div className="relative group">
                              {/* Glow effect */}
                              <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />

                              <div className="relative bg-elden-dark-light/60 backdrop-blur-sm border border-elden-gold/40 p-4 sm:p-6 md:p-8 rounded-xl hover:border-elden-gold/60 transition-all duration-300">
                                 {/* Corner accents */}
                                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-elden-gold/50" />
                                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-elden-gold/50" />

                                 {/* Header with icon and year */}
                                 <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                       <div className="flex-shrink-0 p-2 sm:p-3 bg-elden-dark rounded-lg border-2 border-gold/60 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1 group-hover:text-gold-light transition-colors">
                                             {event.title}
                                          </h3>
                                          {event.team && (
                                             <p className="font-garamond text-xs sm:text-sm text-gold/70 mb-2 italic">
                                                {event.team}
                                             </p>
                                          )}
                                          <p className="font-garamond text-sm sm:text-base text-muted-foreground/90">
                                             {event.description}
                                          </p>
                                       </div>
                                    </div>
                                    <div className="flex-shrink-0 self-start">
                                       <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-elden-gold/20 border border-elden-gold/50 text-gold font-cinzel font-bold text-base sm:text-lg rounded-lg shadow-lg">
                                          {event.year}
                                       </span>
                                    </div>
                                 </div>

                                 {/* Image Gallery */}
                                 {event.images &&
                                    event.images.length > 0 &&
                                    showGallery[index] && (
                                       <div className="mt-6 relative group/gallery">
                                          <div className="relative w-full rounded-lg border-2 border-elden-gold/30 bg-elden-dark">
                                             {/* Image */}
                                             <img
                                                src={
                                                   event.images[
                                                      activeImageIndexes[
                                                         index
                                                      ] || 0
                                                   ]
                                                }
                                                alt={`${event.title} - Image ${
                                                   (activeImageIndexes[index] ||
                                                      0) + 1
                                                }`}
                                                className="w-full h-auto object-contain rounded-lg"
                                             />

                                             {/* Navigation Buttons */}
                                             {event.images.length > 1 && (
                                                <>
                                                   <button
                                                      onClick={() =>
                                                         handlePrevImage(
                                                            index,
                                                            event.images.length
                                                         )
                                                      }
                                                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-elden-dark/80 backdrop-blur-sm border border-elden-gold/50 rounded-lg opacity-100 sm:opacity-0 group-hover/gallery:opacity-100 hover:bg-elden-dark hover:border-gold transition-all duration-300"
                                                      aria-label="Previous image"
                                                   >
                                                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                                                   </button>
                                                   <button
                                                      onClick={() =>
                                                         handleNextImage(
                                                            index,
                                                            event.images.length
                                                         )
                                                      }
                                                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-elden-dark/80 backdrop-blur-sm border border-elden-gold/50 rounded-lg opacity-100 sm:opacity-0 group-hover/gallery:opacity-100 hover:bg-elden-dark hover:border-gold transition-all duration-300"
                                                      aria-label="Next image"
                                                   >
                                                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                                                   </button>
                                                </>
                                             )}

                                             {/* Image Counter */}
                                             {event.images.length > 1 && (
                                                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-elden-dark/90 backdrop-blur-sm border border-elden-gold/50 rounded-md">
                                                   <span className="text-[10px] sm:text-xs font-cinzel text-gold">
                                                      {(activeImageIndexes[
                                                         index
                                                      ] || 0) + 1}{" "}
                                                      / {event.images.length}
                                                   </span>
                                                </div>
                                             )}
                                          </div>

                                          {/* Thumbnail Navigation */}
                                          {event.images.length > 1 && (
                                             <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-elden-gold/30 scrollbar-track-transparent">
                                                {event.images.map(
                                                   (img, imgIndex) => (
                                                      <button
                                                         key={imgIndex}
                                                         onClick={() =>
                                                            setActiveImageIndexes(
                                                               (prev) => ({
                                                                  ...prev,
                                                                  [index]:
                                                                     imgIndex,
                                                               })
                                                            )
                                                         }
                                                         className={`flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-md border-2 overflow-hidden transition-all duration-300 ${
                                                            (activeImageIndexes[
                                                               index
                                                            ] || 0) === imgIndex
                                                               ? "border-gold shadow-lg shadow-gold/30"
                                                               : "border-elden-gold/30 hover:border-elden-gold/60"
                                                         }`}
                                                      >
                                                         <img
                                                            src={img}
                                                            alt={`Thumbnail ${
                                                               imgIndex + 1
                                                            }`}
                                                            className="w-full h-full object-cover"
                                                         />
                                                      </button>
                                                   )
                                                )}
                                             </div>
                                          )}
                                       </div>
                                    )}

                                 {/* Details and View Photos Button */}
                                 <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 mt-4">
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                       {event.details.map((detail, i) => (
                                          <span
                                             key={i}
                                             className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-elden-dark/60 border border-elden-gold/30 rounded-md text-[10px] sm:text-xs font-garamond text-gold-light/80 hover:border-elden-gold/60 hover:text-gold-light transition-all"
                                          >
                                             {detail}
                                          </span>
                                       ))}
                                    </div>

                                    {/* View Photos Button */}
                                    {event.images &&
                                       event.images.length > 0 && (
                                          <button
                                             onClick={() =>
                                                setShowGallery((prev) => ({
                                                   ...prev,
                                                   [index]: !prev[index],
                                                }))
                                             }
                                             className="w-full sm:w-auto flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 bg-elden-gold/20 border-2 border-elden-gold/50 rounded-lg font-cinzel text-sm sm:text-base text-gold hover:bg-elden-gold/30 hover:border-gold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2"
                                          >
                                             <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                             {showGallery[index]
                                                ? "Hide Photos"
                                                : `View Photos (${event.images.length})`}
                                          </button>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default TimelineSection;
