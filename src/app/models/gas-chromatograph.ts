import { Chart } from './chart';
import { Gaussian } from './gaussian';
import { Sample } from './sample';

export class GasChromatograph {
  private _max_voltage: number = 1000;
  private _runtime: number = 180;
  private _running: boolean = false;

  public chart: Chart = new Chart('Time / s', 'Voltage / mV', 180, 1000);
  public result: Result;

  public get running(): boolean {
    return this._running;
  }

  constructor() {}

  inject(sample: Sample): void {
    if (this._running) return;
    const height = (sample.percentage * 1000) / 5.2;
    const cut_height = Math.min(height, this._max_voltage);
    const position = 120;
    const sd = 20;
    const gaussian = new Gaussian(height, position, sd);
    let area = 0;
    let time = 0;
    this._running = true;
    const interval = setInterval(() => {
      const voltage = Math.min(gaussian.y(time), this._max_voltage);
      area += voltage;
      this.chart.add_point(time, voltage);
      time++;
      if (time > this._runtime) {
        this._running = false;
        clearInterval(interval);
        this.result = {
          retention_time: position,
          area: area,
          height: cut_height,
          fwhm: gaussian.width(cut_height / 2),
        };
      }
    }, 10);
  }
}

export class Result {
  retention_time: number;
  area: number;
  height: number;
  fwhm: number;
}
