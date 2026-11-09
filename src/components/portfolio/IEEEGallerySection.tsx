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
      ? images.map((image) => image.src)
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
   const collagePositions = [
      "left-1/2 top-1/2 z-20 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2",
      "left-[2%] top-[4%] z-30 h-[30%] w-[28%] -rotate-6",
      "right-[2%] top-[3%] z-30 h-[29%] w-[28%] rotate-6",
      "bottom-[3%] left-[3%] z-30 h-[30%] w-[29%] rotate-6",
      "bottom-[2%] right-[3%] z-30 h-[29%] w-[28%] -rotate-6",
      "left-[25%] top-[2%] z-10 h-[22%] w-[25%] -rotate-3",
      "left-[1%] top-[39%] z-40 h-[20%] w-[22%] -rotate-12",
      "right-[1%] top-[38%] z-40 h-[21%] w-[23%] rotate-12",
      "left-[19%] bottom-[1%] z-10 h-[20%] w-[23%] rotate-6",
      "right-[19%] bottom-[1%] z-10 h-[20%] w-[23%] -rotate-6",
      "left-[42%] top-[17%] z-40 h-[20%] w-[18%] rotate-3",
      "left-[40%] bottom-[14%] z-40 h-[18%] w-[20%] -rotate-3",
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
               <div className="relative mx-auto max-w-5xl">
                  <div className="relative isolate h-[24rem] sm:h-[32rem] lg:h-[40rem]">
                        {collageImages.map((image, imageIndex) => (
                           <figure
                              key={`ieee-gallery-${imageIndex}`}
                              className={`group absolute transform-gpu overflow-hidden border border-elden-gold/60 bg-elden-dark shadow-[0_0_22px_rgba(218,165,32,0.28)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:z-[60] hover:scale-[1.14] hover:rotate-0 hover:border-gold hover:shadow-[0_0_42px_rgba(218,165,32,0.7)] ${collagePositions[imageIndex % collagePositions.length]}`}
                           >
                              <img
                                 src={image}
                                 alt={`IEEE activity photo ${imageIndex + 1}`}
                                 onError={() => setError("One or more IEEE images could not be loaded.")}
                                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-elden-dark/70 via-transparent to-transparent" />
                           </figure>
                        ))}
                  </div>
               </div>
            )}
         </div>
      </section>
   );
};

export default IEEEGallerySection;
