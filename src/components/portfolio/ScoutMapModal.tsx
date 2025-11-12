import { X, MapPin, Tent, Mountain, Users, Award, Flag } from "lucide-react";
import { useEffect, useState } from "react";

interface ScoutMapModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const ScoutMapModal = ({ isOpen, onClose }: ScoutMapModalProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const [selectedLocation, setSelectedLocation] = useState<number | null>(
      null
   );

   useEffect(() => {
      if (isOpen) {
         setTimeout(() => setIsVisible(true), 50);
      } else {
         setIsVisible(false);
         setSelectedLocation(null);
      }
   }, [isOpen]);

   if (!isOpen) return null;

   // Scout journey locations - Add your actual locations here
   const scoutLocations = [
      {
         id: 1,
         name: "Tunis",
         region: "Tunis Governorate",
         type: "Headquarters",
         icon: Flag,
         year: "2012-Present",
         description:
            "Home base of Tunisian Scouts. Leadership training and regular meetings.",
         activities: [
            "Scout Leader Training",
            "Youth Mentorship",
            "Community Service",
         ],
         coordinates: { x: 50, y: 30 }, // Relative position on map
         color: "from-gold/20 to-yellow-600/20",
         borderColor: "border-gold/50",
      },
      {
         id: 2,
         name: "Ain Draham",
         region: "Jendouba Governorate",
         type: "Camp",
         icon: Mountain,
         year: "2015",
         description:
            "Mountain camping expedition. Leadership and survival skills.",
         activities: ["Mountain Hiking", "Team Building", "Survival Training"],
         coordinates: { x: 20, y: 15 },
         color: "from-green-600/20 to-emerald-600/20",
         borderColor: "border-green-500/50",
      },
      {
         id: 3,
         name: "Hammamet",
         region: "Nabeul Governorate",
         type: "Camp",
         icon: Tent,
         year: "2016",
         description:
            "Coastal camping and water activities. Environmental awareness programs.",
         activities: [
            "Beach Activities",
            "Environmental Projects",
            "Team Coordination",
         ],
         coordinates: { x: 65, y: 40 },
         color: "from-blue-600/20 to-cyan-600/20",
         borderColor: "border-blue-500/50",
      },
      {
         id: 4,
         name: "Sousse",
         region: "Sousse Governorate",
         type: "Event",
         icon: Users,
         year: "2017-2018",
         description:
            "Regional scout gatherings and leadership workshops. Youth development programs.",
         activities: [
            "Leadership Workshops",
            "Regional Gatherings",
            "Youth Programs",
         ],
         coordinates: { x: 55, y: 55 },
         color: "from-purple-600/20 to-pink-600/20",
         borderColor: "border-purple-500/50",
      },
      {
         id: 5,
         name: "Tozeur",
         region: "Tozeur Governorate",
         type: "Camp",
         icon: Mountain,
         year: "2019",
         description:
            "Desert expedition and cultural exploration. Endurance and navigation training.",
         activities: ["Desert Exploration", "Cultural Exchange", "Navigation"],
         coordinates: { x: 30, y: 75 },
         color: "from-orange-600/20 to-amber-600/20",
         borderColor: "border-orange-500/50",
      },
      {
         id: 6,
         name: "Tabarka",
         region: "Jendouba Governorate",
         type: "Camp",
         icon: Tent,
         year: "2020",
         description:
            "Coastal forest camping. Environmental conservation and community service.",
         activities: [
            "Forest Conservation",
            "Community Service",
            "Outdoor Skills",
         ],
         coordinates: { x: 15, y: 20 },
         color: "from-teal-600/20 to-green-600/20",
         borderColor: "border-teal-500/50",
      },
      {
         id: 7,
         name: "Monastir",
         region: "Monastir Governorate",
         type: "Event",
         icon: Award,
         year: "2021-2022",
         description:
            "Leadership recognition events and advanced training programs.",
         activities: [
            "Advanced Training",
            "Leadership Recognition",
            "Mentor Development",
         ],
         coordinates: { x: 60, y: 50 },
         color: "from-indigo-600/20 to-violet-600/20",
         borderColor: "border-indigo-500/50",
      },
   ];

   const locationTypeIcons = {
      Headquarters: "🏛️",
      Camp: "⛺",
      Event: "🎪",
   };

   return (
      <div
         className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}
         onClick={onClose}
      >
         {/* Backdrop */}
         <div className="absolute inset-0 bg-black/90 backdrop-blur-md">
            {/* Animated compass points */}
            <div className="absolute inset-0 overflow-hidden">
               {[...Array(15)].map((_, i) => (
                  <div
                     key={i}
                     className="absolute w-1 h-1 bg-elden-gold/20 rounded-full animate-float"
                     style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${4 + Math.random() * 4}s`,
                     }}
                  />
               ))}
            </div>
         </div>

         {/* Modal content */}
         <div
            className={`relative max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark border-2 border-elden-gold/50 rounded-2xl shadow-2xl transform transition-all duration-500 ${
               isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
         >
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-elden-gold/70" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-elden-gold/70" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-elden-gold/70" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-elden-gold/70" />

            {/* Close button */}
            <button
               onClick={onClose}
               className="absolute top-6 right-6 z-10 p-2 text-muted-foreground hover:text-gold transition-colors rounded-lg hover:bg-elden-gold/10"
            >
               <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center pt-12 pb-8 px-8 border-b border-elden-gold/30">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                  Scout's Journey Map
               </h2>
               <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <MapPin className="w-5 h-5 text-elden-gold animate-pulse" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/80">
                  13 Years of Leadership Across Tunisia • 2012-Present
               </p>
            </div>

            <div className="p-8">
               {/* Interactive Map */}
               <div className="mb-12">
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-elden-dark-light/50 to-elden-dark/50 rounded-xl border border-elden-gold/30 overflow-hidden">
                     {/* Map background effect */}
                     <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(218,165,32,0.1),transparent_50%)]" />
                     </div>

                     {/* Compass rose in corner */}
                     <div className="absolute top-4 left-4 w-12 h-12 text-elden-gold/30">
                        <svg
                           viewBox="0 0 100 100"
                           className="w-full h-full animate-pulse"
                        >
                           <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                           />
                           <polygon
                              points="50,10 55,45 50,40 45,45"
                              fill="currentColor"
                           />
                           <text
                              x="50"
                              y="20"
                              textAnchor="middle"
                              className="text-xs"
                              fill="currentColor"
                           >
                              N
                           </text>
                        </svg>
                     </div>

                     {/* Location markers */}
                     {scoutLocations.map((location) => {
                        const Icon = location.icon;
                        return (
                           <button
                              key={location.id}
                              className="absolute group transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                              style={{
                                 left: `${location.coordinates.x}%`,
                                 top: `${location.coordinates.y}%`,
                              }}
                              onClick={() =>
                                 setSelectedLocation(
                                    selectedLocation === location.id
                                       ? null
                                       : location.id
                                 )
                              }
                           >
                              {/* Glow effect */}
                              <div
                                 className={`absolute inset-0 bg-gradient-to-r ${location.color} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150`}
                              />

                              {/* Marker */}
                              <div
                                 className={`relative w-10 h-10 rounded-full bg-elden-dark-light border-2 ${
                                    location.borderColor
                                 } flex items-center justify-center transition-all duration-300 ${
                                    selectedLocation === location.id
                                       ? "ring-2 ring-elden-gold/50 scale-125"
                                       : ""
                                 }`}
                              >
                                 <Icon className="w-5 h-5 text-elden-gold" />
                              </div>

                              {/* Pulse ring */}
                              <div
                                 className={`absolute inset-0 border-2 ${location.borderColor} rounded-full animate-ping opacity-20`}
                              />

                              {/* Location name on hover */}
                              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                 <div className="bg-elden-dark-light/95 backdrop-blur-sm border border-elden-gold/30 px-3 py-1 rounded-lg">
                                    <p className="font-cinzel text-xs text-gold">
                                       {location.name}
                                    </p>
                                    <p className="font-garamond text-[10px] text-muted-foreground/80">
                                       {location.year}
                                    </p>
                                 </div>
                              </div>
                           </button>
                        );
                     })}

                     {/* Map title */}
                     <div className="absolute bottom-4 right-4 text-right">
                        <p className="font-cinzel text-xs text-muted-foreground/50 mb-1">
                           Map of Tunisia
                        </p>
                        <p className="font-garamond text-[10px] text-muted-foreground/40 italic">
                           "The journey of a thousand miles..."
                        </p>
                     </div>
                  </div>
               </div>

               {/* Selected Location Details */}
               {selectedLocation && (
                  <div className="mb-12 animate-fadeIn">
                     {scoutLocations
                        .filter((loc) => loc.id === selectedLocation)
                        .map((location) => {
                           const Icon = location.icon;
                           return (
                              <div key={location.id} className="relative group">
                                 {/* Glow effect */}
                                 <div
                                    className={`absolute -inset-2 bg-gradient-to-r ${location.color} rounded-xl blur-xl opacity-50`}
                                 />

                                 <div
                                    className={`relative bg-elden-dark-light/80 backdrop-blur-sm border ${location.borderColor} p-8 rounded-xl`}
                                 >
                                    <div className="flex items-start justify-between mb-6">
                                       <div>
                                          <div className="flex items-center gap-3 mb-2">
                                             <span className="text-3xl">
                                                {
                                                   locationTypeIcons[
                                                      location.type as keyof typeof locationTypeIcons
                                                   ]
                                                }
                                             </span>
                                             <div>
                                                <h3 className="font-cinzel text-2xl font-bold text-gold">
                                                   {location.name}
                                                </h3>
                                                <p className="font-garamond text-sm text-muted-foreground/70">
                                                   {location.region} •{" "}
                                                   {location.type}
                                                </p>
                                             </div>
                                          </div>
                                          <p className="font-cinzel text-xs text-elden-gold/80 uppercase tracking-wider">
                                             {location.year}
                                          </p>
                                       </div>
                                       <Icon className="w-12 h-12 text-elden-gold/30" />
                                    </div>

                                    <p className="font-garamond text-base text-foreground/90 leading-relaxed mb-6">
                                       {location.description}
                                    </p>

                                    <div>
                                       <h4 className="font-cinzel text-sm text-gold/80 uppercase tracking-wider mb-3">
                                          Activities
                                       </h4>
                                       <div className="flex flex-wrap gap-2">
                                          {location.activities.map(
                                             (activity) => (
                                                <span
                                                   key={activity}
                                                   className="font-garamond text-xs px-3 py-1 bg-elden-gold/10 border border-elden-gold/30 rounded-full text-muted-foreground/80"
                                                >
                                                   {activity}
                                                </span>
                                             )
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                  </div>
               )}

               {/* All Locations Grid */}
               <div>
                  <h3 className="font-cinzel text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                     <MapPin className="w-6 h-6" />
                     All Locations Visited
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {scoutLocations.map((location) => {
                        const Icon = location.icon;
                        return (
                           <button
                              key={location.id}
                              onClick={() =>
                                 setSelectedLocation(
                                    selectedLocation === location.id
                                       ? null
                                       : location.id
                                 )
                              }
                              className="relative group text-left"
                           >
                              {/* Glow effect */}
                              <div
                                 className={`absolute -inset-1 bg-gradient-to-r ${location.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500`}
                              />

                              <div
                                 className={`relative bg-elden-dark-light/80 backdrop-blur-sm border ${
                                    location.borderColor
                                 } p-4 rounded-lg transition-all duration-300 ${
                                    selectedLocation === location.id
                                       ? "ring-2 ring-elden-gold/50"
                                       : ""
                                 }`}
                              >
                                 <div className="flex items-start justify-between mb-2">
                                    <span className="text-2xl">
                                       {
                                          locationTypeIcons[
                                             location.type as keyof typeof locationTypeIcons
                                          ]
                                       }
                                    </span>
                                    <Icon className="w-6 h-6 text-elden-gold/50" />
                                 </div>
                                 <h4 className="font-cinzel text-base font-bold text-gold mb-1">
                                    {location.name}
                                 </h4>
                                 <p className="font-garamond text-xs text-muted-foreground/70 mb-2">
                                    {location.region}
                                 </p>
                                 <p className="font-cinzel text-xs text-elden-gold/80">
                                    {location.year}
                                 </p>
                              </div>
                           </button>
                        );
                     })}
                  </div>
               </div>

               {/* Footer stats */}
               <div className="mt-12 pt-8 border-t border-elden-gold/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                     <p className="font-cinzel text-3xl font-bold text-gold mb-1">
                        13
                     </p>
                     <p className="font-garamond text-sm text-muted-foreground/70">
                        Years of Service
                     </p>
                  </div>
                  <div>
                     <p className="font-cinzel text-3xl font-bold text-gold mb-1">
                        {scoutLocations.length}
                     </p>
                     <p className="font-garamond text-sm text-muted-foreground/70">
                        Locations Visited
                     </p>
                  </div>
                  <div>
                     <p className="font-cinzel text-3xl font-bold text-gold mb-1">
                        100+
                     </p>
                     <p className="font-garamond text-sm text-muted-foreground/70">
                        Youth Mentored
                     </p>
                  </div>
                  <div>
                     <p className="font-cinzel text-3xl font-bold text-gold mb-1">
                        ∞
                     </p>
                     <p className="font-garamond text-sm text-muted-foreground/70">
                        Memories Made
                     </p>
                  </div>
               </div>

               {/* Footer message */}
               <div className="text-center pt-8">
                  <p className="font-garamond text-sm text-muted-foreground/60 italic">
                     "Once a Scout, always a Scout" - Robert Baden-Powell
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ScoutMapModal;
