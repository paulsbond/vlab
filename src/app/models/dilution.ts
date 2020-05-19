import { Sample } from './sample';
import { Flask } from './flask';

export class Dilution {
  constructor(
    public label: string,
    public volume: number,
    public flask: Flask
  ) {}

  dilute(sample: Sample): Sample {
    const percentage = sample.percentage * (this.volume / this.flask.volume);
    return new Sample(this.label, percentage);
  }
}
