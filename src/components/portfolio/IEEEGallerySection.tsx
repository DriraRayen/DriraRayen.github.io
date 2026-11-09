import { useEffect, useState } from "react";
import { loadIEEEImages, type GalleryImage } from "@/lib/galleryLoader";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile.png";
import scoutPhoto from "@/assets/scout/457267251_491688690159648_2087364282629311019_n.jpg";
import scoutPhotoTwo from "@/assets/scout/457495605_2920589678099762_4936891130418150017_n.jpg";
import scoutPhotoThree from "@/assets/scout/472827168_9199159656773025_2524182767294913578_n.jpg";
import scoutPhotoFour from "@/assets/scout/473290492_9193861143969543_4454265673454118210_n.jpg";
import scoutPhotoFive from "@/assets/scout/479192201_1045983964236209_3658037707148390552_n.jpg";
import scoutPhotoSix from "@/assets/scout/480931314_1059755526192386_4772270541455655903_n.jpg";
import scoutPhotoSeven from "@/assets/scout/481025140_1059755852859020_4506513498898051164_n.jpg";

const IEEEGallerySection = () => {
   const [images, setImages] = useState<GalleryImage[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   useEffect(() => {
      loadIEEEImages()
         .then(setImages)
         .catch((loadError) => {
            console.error("Failed to load IEEE gallery:", loadError);
            setError("The IEEE gallery could not be loaded.");
         })
         .finally(() => setLoading(false));
   }, []);
   const collageImages = images.length > 0
      ? images.slice(0, 10).map((image) => image.src)
      : [
           heroBackground,
           profilePhoto,
           scoutPhoto,
           scoutPhotoTwo,
           scoutPhotoThree,
           scoutPhotoFour,
           scoutPhotoFive,
           scoutPhotoSix,
           scoutPhotoSeven,
        ];

   return (
      <section id="ieee-gallery" className="relative py-24 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">IEEE Highlights</h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70">A selection of IEEE activities and community moments</p>
            </div>
            {loading ? (
               <p className="text-center font-garamond text-lg text-muted-foreground/70">Loading IEEE activities...</p>
            ) : error ? (
               <p className="text-center font-garamond text-lg text-red-300">{error}</p>
            ) : (
               <div className="relative mx-auto max-w-4xl">
                  <div className="relative overflow-visible p-2 sm:p-3">
                     <div className="relative h-[20rem] min-h-[20rem] sm:h-[28rem] sm:min-h-[28rem] lg:h-[36rem] lg:min-h-[36rem]">
                        {collageImages.map((image, imageIndex) => (
                           <figure
                              key={`ieee-gallery-${imageIndex}`}
                              className={`absolute overflow-hidden rounded-xl border-2 border-elden-gold/60 bg-elden-dark shadow-[0_0_22px_rgba(218,165,32,0.28)] transition-all duration-500 group hover:scale-105 hover:border-gold hover:shadow-[0_0_34px_rgba(218,165,32,0.55)] ${
                                 imageIndex === 0
                                    ? "left-1/2 top-1/2 z-10 h-[52%] w-[74%] -translate-x-1/2 -translate-y-1/2 rotate-0 sm:h-[62%] sm:w-[58%]"
                                    : imageIndex === 1
                                      ? "left-[3%] top-[4%] z-20 h-[29%] w-[38%] -rotate-6 sm:left-[7%] sm:top-[5%] sm:h-[32%] sm:w-[29%]"
                                      : imageIndex === 2
                                        ? "right-[3%] top-[2%] z-20 h-[27%] w-[36%] rotate-6 sm:right-[6%] sm:top-[4%] sm:h-[31%] sm:w-[28%]"
                                        : imageIndex === 3
                                          ? "bottom-[4%] left-[2%] z-20 h-[28%] w-[40%] rotate-6 sm:bottom-[5%] sm:left-[5%] sm:h-[31%] sm:w-[29%]"
                                          : imageIndex === 4
                                            ? "bottom-[2%] right-[3%] z-20 h-[27%] w-[38%] -rotate-6 sm:bottom-[4%] sm:right-[6%] sm:h-[30%] sm:w-[28%]"
                                            : imageIndex === 5
                                              ? "left-[28%] top-[1%] z-0 h-[20%] w-[30%] -rotate-3 sm:left-[31%] sm:top-[2%] sm:h-[23%] sm:w-[22%]"
                                              : imageIndex === 6
                                                ? "left-[1%] top-[38%] z-20 h-[19%] w-[27%] -rotate-12 sm:left-[2%] sm:top-[39%] sm:h-[22%] sm:w-[20%]"
                                                : imageIndex === 7
                                                  ? "right-[1%] top-[36%] z-20 h-[20%] w-[28%] rotate-12 sm:right-[2%] sm:top-[38%] sm:h-[23%] sm:w-[20%]"
                                                  : imageIndex === 8
                                                    ? "left-[19%] bottom-[1%] z-0 h-[18%] w-[29%] rotate-6 sm:left-[22%] sm:bottom-[2%] sm:h-[21%] sm:w-[21%]"
                                                    : imageIndex === 9
                                                      ? "right-[19%] bottom-[1%] z-0 h-[18%] w-[29%] -rotate-6 sm:right-[22%] sm:bottom-[2%] sm:h-[21%] sm:w-[21%]"
                                                      : "left-1/2 top-[18%] z-0 h-[15%] w-[22%] rotate-3 -translate-x-1/2 sm:top-[19%] sm:h-[18%] sm:w-[17%]"
                              }`}
                           >
                              <img
                                 src={image}
                                 alt={`IEEE activity photo ${imageIndex + 1}`}
                                 onError={() => setError("One or more IEEE images could not be loaded.")}
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-elden-dark/70 via-transparent to-transparent" />
                           </figure>
                        ))}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </section>
   );
};

export default IEEEGallerySection;
