import { Sample } from './sample';
import { Chart } from './chart';

export class UvVis {
  private _min_nm: number = 190;
  private _max_nm: number = 1100;
  private _nm_per_second: number = 10;
  private _nm: number;
  private _running: boolean = false;
  private _interval;

  public chart: Chart = new Chart('Wavelength / nm', 'Absorbance', 190, 1100, -0.1, 2);

  public get running(): boolean {
    return this._running;
  }

  constructor() {}

  start(sample: Sample, speed: number): void {
    if (this._running) return;
    this._nm = this._min_nm;
    this._running = true;
    this._interval = setInterval(() => {
      let absorbance = 0.5;
      this.chart.add_point(this._nm, absorbance);
      this._nm += this._nm_per_second;
      if (this._nm > this._max_nm) this.stop();
    }, 1000 / speed);
  }

  stop(): void {
    this._running = false;
    clearInterval(this._interval);
  }
}
