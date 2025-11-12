import { LucideIcon } from 'lucide-react';

interface SkillRuneProps {
  icon: LucideIcon;
  title: string;
  rune: string;
  skills: string[];
  description: string;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const SkillRune = ({ 
  icon: Icon, 
  title, 
  rune, 
  skills, 
  description, 
  index, 
  isActive,
  onHover,
  onLeave 
}: SkillRuneProps) => {
  return (
    <div
      className="relative bg-card border border-elden-mist p-6 rounded-lg shadow-gold hover:shadow-gold-intense transition-all duration-500 group cursor-pointer animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Rune symbol */}
      <div className="flex justify-center mb-4">
        <div className={`p-4 bg-elden-dark-light rounded-full border-2 transition-all duration-300 ${
          isActive ? 'border-gold animate-glow scale-110' : 'border-elden-mist'
        }`}>
          <Icon className={`w-10 h-10 transition-colors ${isActive ? 'text-gold' : 'text-gold-light'}`} />
        </div>
      </div>

      {/* Title & Rune name */}
      <h3 className={`font-cinzel text-xl font-bold text-center mb-2 transition-colors ${
        isActive ? 'text-gold glow-gold' : 'text-foreground'
      }`}>
        {title}
      </h3>
      <p className="font-garamond text-sm text-gold-light text-center mb-4 italic">
        {rune}
      </p>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`font-garamond text-xs px-2 py-1 rounded-md transition-all ${
              isActive 
                ? 'bg-elden-gold text-elden-dark font-semibold' 
                : 'bg-elden-dark-light text-gold-light border border-elden-mist'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description (revealed on hover) */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <p className="font-garamond text-sm text-muted-foreground text-center pt-4 border-t border-elden-mist">
          {description}
        </p>
      </div>

      {/* Decorative corners */}
      <div className={`absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 transition-colors ${
        isActive ? 'border-gold' : 'border-elden-mist'
      }`} />
      <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 transition-colors ${
        isActive ? 'border-gold' : 'border-elden-mist'
      }`} />
      <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 transition-colors ${
        isActive ? 'border-gold' : 'border-elden-mist'
      }`} />
      <div className={`absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 transition-colors ${
        isActive ? 'border-gold' : 'border-elden-mist'
      }`} />
    </div>
  );
};

export default SkillRune;
