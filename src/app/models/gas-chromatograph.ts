import { Sample } from './sample';
import { Chart } from './chart';

export class GasChromatograph {
  private _max_voltage: number = 1000;
  private _runtime: number = 180;
  private _time: number;
  private _running: boolean = false;
  private _interval;

  public chart: Chart = new Chart('Time / s', 'Voltage / mV', 180, 1000);

  public get running(): boolean {
    return this._running;
  }

  constructor() {}

  inject(sample: Sample): void {
    if (this._running) return;
    const a = (sample.percentage * 1000) / 5.2; // Peak height
    const b = 120; // Peak center
    const c = 20; // Standard deviation
    this._time = 0;
    this._running = true;
    this._interval = setInterval(() => {
      let voltage =
        a * Math.exp(-Math.pow(this._time - b, 2) / (2 * Math.pow(c, 2)));
      if (voltage > this._max_voltage) voltage = this._max_voltage;
      this.chart.add_point(this._time, voltage);
      this._time++;
      if (this._time > this._runtime) this.stop();
    }, 10);
  }

  stop(): void {
    this._running = false;
    clearInterval(this._interval);
  }
}
