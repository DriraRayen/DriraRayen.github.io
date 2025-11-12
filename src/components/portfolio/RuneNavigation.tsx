import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Sparkles, Image, Award, Scroll, Mail } from 'lucide-react';

const RuneNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const runePoints = [
    { path: '/', label: 'Main Menu', icon: Home, rune: '⚔' },
    { path: '/about', label: 'The Wanderer', icon: User, rune: '🜃' },
    { path: '/projects', label: 'Forged Works', icon: Briefcase, rune: '🜁' },
    { path: '/skills', label: 'Rune Mastery', icon: Sparkles, rune: '🜄' },
    { path: '/gallery', label: 'Chronicles', icon: Image, rune: '🜂' },
    { path: '/certificates', label: 'Sacred Seals', icon: Award, rune: '⚜' },
    { path: '/timeline', label: 'Battle Log', icon: Scroll, rune: '⚔' },
    { path: '/contact', label: 'Summon Stone', icon: Mail, rune: '✉' },
  ];

  useEffect(() => {
    // Show navigation after initial load
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const currentIndex = runePoints.findIndex(point => point.path === location.pathname);

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
    >
      {/* Mystical path line connecting runes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-elden-mist via-elden-gold/30 to-elden-mist" />

      {/* Rune navigation points */}
      <div className="relative flex flex-col gap-8 py-4">
        {runePoints.map((point, index) => {
          const Icon = point.icon;
          const isActive = location.pathname === point.path;
          const isPassed = currentIndex > index;
          
          return (
            <button
              key={point.path}
              onClick={() => navigateToPage(point.path)}
              className="group relative"
              aria-label={`Navigate to ${point.label}`}
            >
              {/* Outer glow ring */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isActive
                    ? 'w-14 h-14 -left-3 -top-3 bg-elden-gold/20 blur-xl animate-pulse'
                    : 'w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:w-12 group-hover:h-12 group-hover:-left-2 group-hover:-top-2 bg-elden-gold/10 blur-lg'
                }`}
              />

              {/* Rune circle */}
              <div
                className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? 'bg-elden-gold border-elden-gold shadow-gold-intense scale-125'
                    : isPassed
                    ? 'bg-elden-gold/30 border-elden-gold/60 shadow-gold'
                    : 'bg-card border-elden-mist group-hover:border-gold group-hover:shadow-gold group-hover:scale-110'
                }`}
              >
                {/* Inner rune symbol */}
                <span
                  className={`text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-elden-dark scale-110'
                      : isPassed
                      ? 'text-gold-light'
                      : 'text-muted-foreground group-hover:text-gold'
                  }`}
                >
                  {point.rune}
                </span>

                {/* Active indicator pulse */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-2 border-elden-gold animate-ping" />
                )}
              </div>

              {/* Tooltip label */}
              <div
                className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none ${
                  isActive || isPassed
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                <div className="relative px-4 py-2 bg-card border border-elden-gold rounded-lg shadow-gold">
                  {/* Decorative corners */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-elden-gold" />
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-elden-gold" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-elden-gold" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-elden-gold" />
                  
                  <span className="font-cinzel text-sm text-gold">{point.label}</span>
                </div>
              </div>

              {/* Floating particles for active section */}
              {isActive && (
                <>
                  <div className="absolute -left-2 -top-2 w-1 h-1 bg-elden-gold rounded-full animate-float opacity-60" />
                  <div className="absolute -right-2 -bottom-2 w-1 h-1 bg-elden-gold-light rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
                  <div className="absolute -right-1 -top-3 w-0.5 h-0.5 bg-elden-gold rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }} />
                </>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default RuneNavigation;
