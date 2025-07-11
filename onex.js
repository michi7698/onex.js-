
class OnexPlayer {
  constructor() { this.audio = null; }
  init(src, options = {}) {
    if (!src) return console.error("[Onex] No se especificó el archivo de audio.");
    this.audio = new Audio(src);
    this.audio.loop = options.loop ?? true;
    this.audio.volume = options.volume ?? 1;
    this.audio.play().catch(() => {
      console.warn("[Onex] El navegador bloqueó la reproducción automática.");
    });
  }
  play() { this.audio?.play(); }
  pause() { this.audio?.pause(); }
  stop() { if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; } }
  toggle() { if (this.audio) this.audio.paused ? this.audio.play() : this.audio.pause(); }
  setVolume(v) { if (this.audio) this.audio.volume = v; }
}
window.Onex = new OnexPlayer();
