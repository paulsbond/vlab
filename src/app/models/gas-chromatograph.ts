import { Sample } from './sample';

export class GasChromatograph {
  data = [];
  runtime = 180;

  inject(sample: Sample): void {
    const a = 100; // Peak height
    const b = 120; // Peak center
    const c = 20; // Standard deviation
    this.data = [];
    for (let x = 0; x < this.runtime; x++) {
      let y = a * Math.exp(-Math.pow(x - b, 2) / (2 * Math.pow(c, 2)));
      this.data.push([x, y]);
    }
  }
}
