import type { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class AnimationLoop {
  private running = false;
  private frameId = 0;
  private onTick: (() => void) | null = null;

  constructor(
    private composer: EffectComposer,
    private controls: OrbitControls,
  ) {}

  setOnTick(fn: () => void): void {
    this.onTick = fn;
  }

  start(): void {
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.frameId = requestAnimationFrame(loop);
      this.controls.update();
      if (this.onTick) this.onTick();
      this.composer.render();
    };
    loop();
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.frameId);
  }
}
