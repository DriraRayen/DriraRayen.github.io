/**
 * Elden Ring Atmospheric Sound Effects Synthesizer
 * Uses the Web Audio API to procedurally generate immersive dark fantasy UI audio
 * without external asset dependencies or network delay.
 */

/**
 * Master toggle: set to false to completely disable all sound effects
 * across the site without removing any implementation code.
 */
export const SOUND_EFFECTS_ENABLED = false;

class SoundEffectsManager {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private masterGain: GainNode | null = null;
  private listeners: Set<(muted: boolean) => void> = new Set();
  private lastSpecialSoundTime: number = 0;

  constructor() {
    if (typeof window !== "undefined") {
      this.muted = localStorage.getItem("elden_sound_muted") === "true";
    }
  }

  private initContext(): AudioContext | null {
    if (!SOUND_EFFECTS_ENABLED) return null;
    if (typeof window === "undefined") return null;

    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.45, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  public isMuted(): boolean {
    if (!SOUND_EFFECTS_ENABLED) return true;
    return this.muted;
  }

  public toggleMute(): boolean {
    const nextState = !this.muted;
    this.setMuted(nextState);
    if (!nextState) {
      // Play a quick golden chime upon unmuting
      this.playGrace();
    }
    return nextState;
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("elden_sound_muted", muted ? "true" : "false");
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.45, now);
    }

    this.listeners.forEach((fn) => fn(muted));
  }

  public subscribe(fn: (muted: boolean) => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  /**
   * Tactile Elden Ring menu selection sound:
   * A short stone/metallic transient with warm resonant decay.
   */
  public playClick(): void {
    if (this.muted) return;
    if (Date.now() - this.lastSpecialSoundTime < 140) return;

    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Filtered noise transient for physical tactile feel
    const bufferSize = Math.floor(ctx.sampleRate * 0.02);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(3, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    whiteNoise.start(now);

    // Resonant wooden/stone UI tone
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(680, now);
    osc.frequency.exponentialRampToValueAtTime(340, now + 0.05);

    oscGain.gain.setValueAtTime(0.12, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  /**
   * Soft parchment/stone navigation transition click
   */
  public playNavClick(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.08);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Steel blade unsheathe / sword ring when toggling the Tarnished Wanderer
   */
  public playTarnishedToggle(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Steel friction scrape (bandpass swept noise)
    const scrapeLen = Math.floor(ctx.sampleRate * 0.25);
    const noiseBuf = ctx.createBuffer(1, scrapeLen, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < scrapeLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;

    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(3200, now);
    bp.frequency.exponentialRampToValueAtTime(950, now + 0.22);
    bp.Q.setValueAtTime(8, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.25, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(bp);
    bp.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);

    // Dissonant blade ring (beating frequencies: 880Hz + 887Hz)
    const freqs = [880, 887, 1760];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + 0.03);

      const amp = idx === 2 ? 0.06 : 0.14;
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(amp, now + 0.05);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain!);

      osc.start(now + 0.03);
      osc.stop(now + 0.95);
    });
  }

  /**
   * Ancient parchment unroll & sacred bell when opening Secret Quests
   */
  public playQuestOpen(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Parchment flutter
    const len = Math.floor(ctx.sampleRate * 0.22);
    const noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / len) * Math.PI);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.linearRampToValueAtTime(2200, now + 0.2);
    filter.Q.setValueAtTime(4, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);

    // Ancient bell chords: E5 (659Hz) & B5 (987Hz)
    [659.25, 987.77].forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now + 0.05 * idx);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.13, now + 0.05 * idx + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + 0.05 * idx);
      osc.stop(now + 1.25);
    });
  }

  /**
   * Glorious Golden Fanfare for Level Up / Message Sent
   */
  public playLevelUp(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Deep resonant base swell
    const sub = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = "triangle";
    sub.frequency.setValueAtTime(110, now);
    sub.frequency.exponentialRampToValueAtTime(73.4, now + 1.2);

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.25, now + 0.15);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    sub.connect(subGain);
    subGain.connect(this.masterGain);
    sub.start(now);
    sub.stop(now + 1.85);

    // Radiant Major Chord: D4 (293.7), F#4 (370.0), A4 (440.0), D5 (587.3)
    const chord = [293.66, 369.99, 440.0, 587.33, 880.0];
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, now + 0.05);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.14 - idx * 0.02, now + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + 0.02);
      osc.stop(now + 2.6);
    });

    // High celestial shimmer bell (D6 = 1174.7Hz)
    const bell = ctx.createOscillator();
    const bellGain = ctx.createGain();
    bell.type = "sine";
    bell.frequency.setValueAtTime(1174.66, now + 0.1);

    bellGain.gain.setValueAtTime(0.001, now + 0.1);
    bellGain.gain.linearRampToValueAtTime(0.15, now + 0.15);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    bell.connect(bellGain);
    bellGain.connect(this.masterGain);
    bell.start(now + 0.1);
    bell.stop(now + 2.3);
  }

  /**
   * Golden item discovery chime for CV Download ("Record Acquired")
   */
  public playRecordAcquired(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const notes = [
      { f: 587.33, t: 0 },
      { f: 880.0, t: 0.12 },
      { f: 1318.51, t: 0.25 },
    ];

    notes.forEach(({ f, t }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now + t);

      gain.gain.setValueAtTime(0.001, now + t);
      gain.gain.linearRampToValueAtTime(0.16, now + t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + t + 1.6);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + t);
      osc.stop(now + t + 1.7);
    });
  }

  /**
   * Resonant temple gong & bell for opening modals (Achievements, Elden lore, Screenshots)
   */
  public playModalOpen(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const gongPartials = [
      { f: 196.0, a: 0.22, d: 1.4 },
      { f: 392.0, a: 0.15, d: 1.1 },
      { f: 622.25, a: 0.09, d: 0.9 },
      { f: 987.77, a: 0.06, d: 0.7 },
    ];

    gongPartials.forEach(({ f, a, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(a, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + d);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + d + 0.05);
    });
  }

  /**
   * Soft descending tone on closing modals
   */
  public playModalClose(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.08);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Site of Grace touched / Golden chime warp
   */
  public playGrace(): void {
    if (this.muted) return;
    this.lastSpecialSoundTime = Date.now();
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const arpeggio = [659.25, 830.61, 987.77, 1318.51];
    arpeggio.forEach((freq, idx) => {
      const t = now + idx * 0.06;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.13, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + 1.45);
    });
  }
}

export const soundEffects = new SoundEffectsManager();
