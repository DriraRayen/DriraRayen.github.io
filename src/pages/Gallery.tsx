import GallerySection from '@/components/portfolio/GallerySection';
import RuneNavigation from '@/components/portfolio/RuneNavigation';

const Gallery = () => {
  return (
    <div className="relative min-h-screen bg-elden-dark">
      <RuneNavigation />
      <GallerySection />
    </div>
  );
};

export default Gallery;
