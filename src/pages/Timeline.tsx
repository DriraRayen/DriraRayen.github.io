import TimelineSection from '@/components/portfolio/TimelineSection';
import RuneNavigation from '@/components/portfolio/RuneNavigation';

const Timeline = () => {
  return (
    <div className="relative min-h-screen bg-elden-dark">
      <RuneNavigation />
      <TimelineSection />
    </div>
  );
};

export default Timeline;
