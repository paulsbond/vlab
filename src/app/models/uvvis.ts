import { Sample } from './sample';
import { Chart } from './chart';
import { random } from './utils';
import config from '../config.json';

export class UvVis {
  private _running: boolean = false;
  private _interval;

  public chart: Chart = new Chart('Wavelength / nm', 'Absorbance', 190, 1100, 0, 1, true);
  public read_nm: number = 190.0;
  public read_abs: number = 0.0;
  public min_nm: number = 190;
  public max_nm: number = 1100;
  public nm_per_s: number = 10;

  public get running(): boolean {
    return this._running;
  }

  constructor() {}

  read(sample: Sample): void {
    this.read_abs = read_abs(sample, this.read_nm);
  }

  scan(sample: Sample, speed: number): void {
    if (this._running) return;
    this.chart.reset();
    let scan_nm = this.min_nm;
    this._running = true;
    this._interval = setInterval(() => {
      let absorbance = read_abs(sample, scan_nm);
      this.chart.add_point(scan_nm, absorbance);
      this.chart.auto_yaxis();
      scan_nm += this.nm_per_s;
      if (scan_nm > this.max_nm) {
        this._running = false;
        clearInterval(this._interval);
      }
    }, 1000 / speed);
  }

  stop(): void {
    this._running = false;
    clearInterval(this._interval);
  }
}

function read_abs(sample: Sample, nm: number): number {
  const ref = config.compounds[sample.compound]["UV-Vis"];
  let abs = ref["xy"][0][1];
  for (let xy of ref["xy"]) {
    if (nm >= xy[0]) abs = xy[1];
  }
  return abs / ref["conc"] * sample.conc * random(0.995, 1.005);
}
