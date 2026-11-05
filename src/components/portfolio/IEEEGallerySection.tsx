import { useEffect, useState } from "react";
import { loadIEEEImages, type GalleryImage } from "@/lib/galleryLoader";

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
   const years = Array.from(new Set(images.map((image) => image.event))).sort().reverse();

   return (
      <section id="ieee-gallery" className="relative py-24 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gold mb-4">IEEE Activities</h2>
               <p className="font-garamond text-lg text-muted-foreground/70">Events, workshops, and activities organized by year</p>
            </div>
            {loading ? (
               <p className="text-center font-garamond text-lg text-muted-foreground/70">Loading IEEE activities...</p>
            ) : error ? (
               <p className="text-center font-garamond text-lg text-red-300">{error}</p>
            ) : years.length === 0 ? (
               <p className="text-center font-garamond text-lg text-muted-foreground/70">Add IEEE photos from the private dashboard to begin this gallery.</p>
            ) : years.map((year) => (
               <div key={year} className="mb-12">
                  <h3 className="font-cinzel text-2xl font-bold text-gold mb-5">{year}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                     {images.filter((image) => image.event === year).map((image) => (
                        <figure key={image.src} className="aspect-square overflow-hidden rounded-lg border border-elden-mist shadow-gold">
                           <img src={image.src} alt={image.title} onError={() => setError("One or more IEEE images could not be loaded.")} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                           <figcaption className="sr-only">{image.title}</figcaption>
                        </figure>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default IEEEGallerySection;
