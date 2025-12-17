import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { loadGalleryImages, type GalleryImage } from "@/lib/galleryLoader";

const GallerySection = () => {
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [currentImage, setCurrentImage] = useState(0);
   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const loadImages = async () => {
         try {
            const images = await loadGalleryImages();
            setGalleryImages(images);
         } catch (error) {
            console.error("Failed to load gallery images:", error);
         } finally {
            setLoading(false);
         }
      };

      loadImages();
   }, []);

   const openLightbox = (index: number) => {
      setCurrentImage(index);
      setLightboxOpen(true);
   };

   const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
   };

   const prevImage = () => {
      setCurrentImage(
         (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
      );
   };

   return (
      <section id="gallery" className="relative py-24 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16 animate-fadeIn">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">
                  Chronicles of Journey
               </h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-2 h-2 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-2xl mx-auto">
                  Captured moments from quests undertaken, battles won, and
                  bonds forged in the fires of experience
               </p>
            </div>

            {/* Gallery grid */}
            {loading ? (
               <div className="text-center py-12">
                  <p className="font-garamond text-lg text-muted-foreground/70">
                     Loading chronicles...
                  </p>
               </div>
            ) : galleryImages.length === 0 ? (
               <div className="text-center py-12">
                  <p className="font-garamond text-lg text-muted-foreground/70">
                     No chronicles found. Add images to event folders to see
                     them here.
                  </p>
               </div>
            ) : (
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                     <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-lg border border-elden-mist shadow-gold hover:shadow-gold-intense hover:scale-[1.02] transition-all duration-500 cursor-pointer animate-slideUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => openLightbox(index)}
                     >
                        <img
                           src={image.src}
                           alt={image.title}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-elden-dark via-elden-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="absolute bottom-0 left-0 right-0 p-4">
                              <span className="inline-block px-2 py-1 bg-elden-gold text-elden-dark text-xs font-cinzel font-semibold rounded mb-2">
                                 {image.category}
                              </span>
                              <h3 className="font-cinzel text-lg font-bold text-gold mb-1">
                                 {image.title}
                              </h3>
                              <p className="font-garamond text-sm text-gold-light">
                                 {image.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>

         {/* Lightbox */}
         {lightboxOpen && (
            <div className="fixed inset-0 z-50 bg-elden-dark/95 flex items-center justify-center p-4 animate-fadeIn">
               <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-6 right-6 p-2 bg-card border border-gold rounded-full hover:bg-elden-gold hover:text-elden-dark transition-all duration-300"
                  aria-label="Close lightbox"
               >
                  <X className="w-6 h-6" />
               </button>

               <button
                  onClick={prevImage}
                  className="absolute left-6 p-3 bg-card border border-gold rounded-full hover:bg-elden-gold hover:text-elden-dark transition-all duration-300"
                  aria-label="Previous image"
               >
                  <ChevronLeft className="w-6 h-6" />
               </button>

               <button
                  onClick={nextImage}
                  className="absolute right-6 p-3 bg-card border border-gold rounded-full hover:bg-elden-gold hover:text-elden-dark transition-all duration-300"
                  aria-label="Next image"
               >
                  <ChevronRight className="w-6 h-6" />
               </button>

               <div className="max-w-5xl w-full">
                  <img
                     src={galleryImages[currentImage].src}
                     alt={galleryImages[currentImage].title}
                     className="w-full h-auto rounded-lg shadow-gold-intense"
                  />
                  <div className="text-center mt-6">
                     <span className="inline-block px-3 py-1 bg-elden-gold text-elden-dark text-sm font-cinzel font-semibold rounded mb-3">
                        {galleryImages[currentImage].category}
                     </span>
                     <h3 className="font-cinzel text-2xl font-bold text-gold mb-2">
                        {galleryImages[currentImage].title}
                     </h3>
                     <p className="font-garamond text-lg text-gold-light">
                        {galleryImages[currentImage].description}
                     </p>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default GallerySection;
