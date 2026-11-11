import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundEffects, SOUND_EFFECTS_ENABLED } from "@/lib/soundEffects";

interface SoundToggleProps {
  className?: string;
}

const SoundToggle = ({ className = "" }: SoundToggleProps) => {
  const [muted, setMuted] = useState(soundEffects.isMuted());

  useEffect(() => {
    return soundEffects.subscribe((isMuted) => {
      setMuted(isMuted);
    });
  }, []);

  if (!SOUND_EFFECTS_ENABLED) {
    return null;
  }

  const handleToggle = () => {
    soundEffects.toggleMute();
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-elden-gold/60 bg-elden-dark/90 text-gold shadow-lg shadow-elden-gold/20 transition-all hover:scale-110 hover:border-gold hover:bg-elden-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`}
      aria-label={muted ? "Enable sound effects" : "Mute sound effects"}
      title={muted ? "Sound Effects: Muted" : "Sound Effects: Active"}
    >
      {muted ? (
        <VolumeX className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
      ) : (
        <Volume2 className="h-5 w-5 text-gold transition-colors group-hover:text-gold-light group-hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)]" />
      )}
      <span className="sr-only">
        {muted ? "Enable sound effects" : "Mute sound effects"}
      </span>
    </button>
  );
};

export default SoundToggle;
