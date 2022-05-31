import { Sample } from './sample';
import { Chart } from './chart';
import { random } from './utils';
import config from '../config.json';

export class UvVis {
  private _running: boolean = false;
  private _interval;
  private _seconds_per_reading: number = 0.2;
  private _scan_nm: number = 190;

  public chart: Chart = new Chart('Wavelength / nm', 'Absorbance', 190, 1100, 0, 1, true);
  public read_nm: number = 190;
  public read_abs: number = 0;
  public read_cuvette_cm: number = 1;
  public scan_cuvette_cm: number = 1;
  public min_nm: number = 190;
  public max_nm: number = 1100;
  public nm_per_reading: number = 2;

  public get running(): boolean {
    return this._running;
  }

  constructor() {}

  run_time(): number {
    let min = this.min_nm;
    if (this._running) min = this._scan_nm;
    const nm_range = this.max_nm - min;
    const time = nm_range / this.nm_per_reading * this._seconds_per_reading;
    return (time > 0) ? time : 0;
  }

  read(sample: Sample): void {
    this.read_abs = read_abs(sample, this.read_nm, this.read_cuvette_cm);
  }

  scan(sample: Sample, speed: number): void {
    if (this._running) return;
    this.chart.options.hAxis.viewWindow.min = this.min_nm;
    this.chart.options.hAxis.viewWindow.max = this.max_nm;
    this.chart.reset();
    this._scan_nm = this.min_nm;
    this._running = true;
    this._interval = setInterval(() => {
      let absorbance = read_abs(sample, this._scan_nm, this.scan_cuvette_cm);
      this.chart.add_point(this._scan_nm, absorbance);
      this.chart.auto_yaxis();
      this._scan_nm += this.nm_per_reading;
      if (this._scan_nm > this.max_nm) {
        this._running = false;
        clearInterval(this._interval);
      }
    }, this._seconds_per_reading * 1000 / speed);
  }

  stop(): void {
    this._running = false;
    clearInterval(this._interval);
  }
}

function read_abs(sample: Sample, nm: number, cuvette_cm: number): number {
  const ref = config.compounds[sample.compound]["UV-Vis"];
  let abs = ref["xy"][0][1];
  for (let xy of ref["xy"]) {
    if (nm >= xy[0]) abs = xy[1];
  }
  let reading = abs / ref["conc"] * sample.conc * cuvette_cm;
  reading *= random(0.995, 1.005);
  return (reading > 2) ? 2 : reading;
}
