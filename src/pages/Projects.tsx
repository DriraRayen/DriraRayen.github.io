import ProjectsSection from '@/components/portfolio/ProjectsSection';
import RuneNavigation from '@/components/portfolio/RuneNavigation';

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-elden-dark">
      <RuneNavigation />
      <ProjectsSection />
    </div>
  );
};

export default Projects;
