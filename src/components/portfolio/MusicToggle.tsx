import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ enabled, onToggle }: MusicToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 bg-card border border-gold rounded-full shadow-gold hover:shadow-gold-intense transition-all duration-300 group"
      aria-label="Toggle ambient music"
    >
      {enabled ? (
        <Volume2 className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
      )}
    </button>
  );
};

export default MusicToggle;
