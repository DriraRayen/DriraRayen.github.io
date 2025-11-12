import AboutSection from '@/components/portfolio/AboutSection';
import RuneNavigation from '@/components/portfolio/RuneNavigation';

const About = () => {
  return (
    <div className="relative min-h-screen bg-elden-dark">
      <RuneNavigation />
      <AboutSection />
    </div>
  );
};

export default About;
