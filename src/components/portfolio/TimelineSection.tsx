import {
   Calendar,
   Briefcase,
   GraduationCap,
   Trophy,
   Users,
   Palette,
   Flag,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
   loadGalleryImages,
   filterImagesByEvent,
   type GalleryImage,
} from "@/lib/galleryLoader";
import { timelineEvents as contentTimelineEvents } from "@/lib/content";

const timelineIcons = { Calendar, Briefcase, GraduationCap, Trophy, Users, Palette, Flag };
type TimelineTab = "ieee" | "other";

const TimelineSection = () => {
   const [activeTab, setActiveTab] = useState<TimelineTab>("other");
   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
   const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});
   useEffect(() => {
      const loadImages = async () => {
         try {
            const images = await loadGalleryImages();
            setGalleryImages(images);
         } catch (error) {
            console.error("Failed to load gallery images:", error);
         }
      };
      loadImages();
   }, []);

   // Map event keys to timeline events
   const timelineEvents = contentTimelineEvents.map((event) => ({
      ...event,
      icon: timelineIcons[event.icon as keyof typeof timelineIcons],
   }));
   const visibleTimelineEvents = timelineEvents.filter((event) => {
      const isIeeeEvent =
         event.title.toLowerCase().includes("ieee") ||
         event.details.some((detail) => detail.toLowerCase().includes("ieee"));
      return activeTab === "ieee" ? isIeeeEvent : !isIeeeEvent;
   });

   return (
      <section
         id="timeline"
         className="relative py-32 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-elden-dark to-elden-dark/95"
      >
         <div className="relative z-10 mx-auto max-w-7xl">
            {/* Section title */}
            <div className="text-center mb-20 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-6 tracking-wide">
                  Events Timeline
               </h2>
                  <div className="grace-divider flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Recent achievements and competitions
               </p>
            </div>

            <div className="flex justify-center mb-12">
               <div
                  className="inline-flex flex-col sm:flex-row gap-2 p-2 rounded-xl border-2 border-elden-gold/30 bg-elden-dark-light/60 shadow-lg shadow-elden-gold/10"
                  role="tablist"
                  aria-label="Filter events timeline"
               >
                  {[
                     { id: "other" as const, label: "Other Events", icon: Flag },
                     { id: "ieee" as const, label: "IEEE Events", icon: Trophy },
                  ].map((tab) => {
                     const Icon = tab.icon;
                     const isActive = activeTab === tab.id;
                     return (
                        <button
                           key={tab.id}
                           type="button"
                           role="tab"
                           aria-selected={isActive}
                           onClick={() => setActiveTab(tab.id)}
                           className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg border font-cinzel text-sm sm:text-base tracking-wide transition-all duration-300 ${
                              isActive
                                 ? "border-gold bg-elden-gold/20 text-gold shadow-lg shadow-elden-gold/30"
                                 : "border-transparent text-muted-foreground hover:border-elden-gold/40 hover:text-gold-light"
                           }`}
                        >
                           <Icon className="w-4 h-4" />
                           {tab.label}
                        </button>
                     );
                  })}
               </div>
            </div>

            {/* Timeline - Vertical Design */}
            <div className="relative mr-auto max-w-7xl">
               {/* Vertical line on left */}
               <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-elden-gold/40 via-elden-gold/60 to-elden-gold/40 md:left-1/2" />

               {/* Timeline events */}
               <div className="space-y-8 md:space-y-12">
                  {visibleTimelineEvents.map((event, index) => {
                     const Icon = event.icon;
                     // Dynamically filter images for this event
                     const eventImages = filterImagesByEvent(
                        galleryImages,
                        event.eventKey
                     );
                     const activeImageIndex =
                        (activeImageIndexes[event.eventKey] ?? 0) % Math.max(eventImages.length, 1);
                     const visibleImages = eventImages.length > 0
                        ? [0, 1].map((offset) => eventImages[(activeImageIndex + offset) % eventImages.length])
                        : [];
                     return (
                        <div
                           key={event.eventKey}
                           className="relative pl-8 sm:pl-12 md:grid md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-6 md:pl-0 animate-slideUp group"
                           style={{ animationDelay: `${index * 0.15}s` }}
                        >
                           {/* Timeline dot */}
                           <div className="absolute left-0 top-6 -translate-x-1/2 sm:top-8 md:left-1/2">
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

                           {/* Photo scroll */}
                           {eventImages.length > 0 && (
                              <div className="relative mb-4 md:col-start-3 md:row-start-1 md:mb-0">
                                 <div className="grid grid-cols-2 gap-2">
                                 {visibleImages.map((image, imageIndex) => (
                                    <figure key={`${event.eventKey}-${imageIndex}`} className="border border-elden-gold/40 bg-elden-dark p-1 shadow-[0_0_16px_rgba(218,165,32,0.16)]">
                                       <img
                                          src={image.src}
                                          alt={`${event.title} - Photo ${imageIndex + 1}`}
                                          className="aspect-[4/3] w-full object-cover"
                                       />
                                    </figure>
                                 ))}
                                 </div>
                                 {eventImages.length > 2 && (
                                    <>
                                       <button
                                          type="button"
                                          aria-label={`Previous ${event.title} photo`}
                                          onClick={() =>
                                             setActiveImageIndexes((indexes) => ({
                                                ...indexes,
                                                [event.eventKey]:
                                                   (activeImageIndex - 1 + eventImages.length) %
                                                   eventImages.length,
                                             }))
                                          }
                                          className="absolute -left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center border border-elden-gold/60 bg-elden-dark text-elden-gold transition-colors hover:bg-elden-gold hover:text-elden-dark"
                                       >
                                          <ChevronLeft className="h-3 w-3" />
                                       </button>
                                       <button
                                          type="button"
                                          aria-label={`Next ${event.title} photo`}
                                          onClick={() =>
                                             setActiveImageIndexes((indexes) => ({
                                                ...indexes,
                                                [event.eventKey]:
                                                   (activeImageIndex + 1) % eventImages.length,
                                             }))
                                          }
                                          className="absolute -right-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center border border-elden-gold/60 bg-elden-dark text-elden-gold transition-colors hover:bg-elden-gold hover:text-elden-dark"
                                       >
                                          <ChevronRight className="h-3 w-3" />
                                       </button>
                                    </>
                                 )}
                              </div>
                           )}

                           {/* Event card */}
                           <div className="relative group md:col-start-1 md:row-start-1">
                              {/* Glow effect */}
                              <div className="absolute -inset-2 bg-elden-gold/5 rounded-xl blur-xl group-hover:bg-elden-gold/10 transition-all duration-500" />

                              <div className="relative border border-elden-gold/40 bg-elden-dark-light/60 p-4 transition-all duration-300 hover:border-elden-gold/60 sm:p-6 md:p-8">
                                 {/* Corner accents */}
                                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-elden-gold/50" />
                                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-elden-gold/50" />

                                 {/* Header with icon and year */}
                                 <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                       <div className="flex-shrink-0 p-2 sm:p-3 bg-elden-dark rounded-lg border-2 border-gold/60 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <p className="mb-1 font-garamond text-xs uppercase tracking-[0.2em] text-elden-gold/70">Journey entry</p>
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
                                       <span className="inline-block border border-elden-gold/50 px-3 py-1.5 text-gold font-cinzel font-bold text-base sm:px-4 sm:py-2 sm:text-lg">
                                          {event.year}
                                       </span>
                                    </div>
                                 </div>

                                 {/* Event details */}
                                 <div className="mt-4 flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
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
