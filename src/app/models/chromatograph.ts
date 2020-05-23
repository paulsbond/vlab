import { Chart } from './chart';
import { Gaussian } from './gaussian';
import { Sample } from './sample';
import { random } from './utils';

export class Chromatograph {
  private _running: boolean = false;

  public chart: Chart;
  public result: Result;

  public get running(): boolean {
    return this._running;
  }

  constructor(
    private runtime: number,
    private min_voltage: number,
    private max_voltage: number
  ) {
    this.chart = new Chart(
      'Time / s',
      'Voltage / mV',
      0,
      runtime,
      -20,
      max_voltage
    );
  }

  inject(sample: Sample): void {
    if (this._running) return;
    const gaussian = get_gaussian(sample);
    const cut_height = Math.min(gaussian.height, this.max_voltage);
    let area = 0;
    let time = 0;
    this._running = true;
    this.result = undefined;
    const interval = setInterval(() => {
      let voltage = gaussian.y(time);
      voltage += random(-2, 2);
      voltage = Math.min(voltage, this.max_voltage);
      area += voltage;
      this.chart.add_point(time, voltage);
      time++;
      if (time > this.runtime) {
        this._running = false;
        clearInterval(interval);
        if (gaussian.height > this.min_voltage) {
          this.result = {
            retention_time: gaussian.position,
            area: area,
            height: cut_height,
            fwhm: gaussian.width(cut_height / 2),
          };
        }
      }
    }, 10);
  }
}

function get_gaussian(sample: Sample): Gaussian {
  if (sample.compound === 'ethanol') {
    const height = ((sample.conc * 1000) / 5.2) * random(0.995, 1.005);
    const position = 120 * random(0.995, 1.005);
    const sd = 5 * random(0.995, 1.005);
    return new Gaussian(height, position, sd);
  } else if (sample.compound === 'caffeine') {
    const height = ((sample.conc * 1200) / 85) * random(0.995, 1.005);
    const position = 240 * random(0.995, 1.005);
    const sd = 2.5 * random(0.995, 1.005);
    return new Gaussian(height, position, sd);
  }
}

export class Result {
  retention_time: number;
  area: number;
  height: number;
  fwhm: number;
}
