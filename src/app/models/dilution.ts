import { Sample } from './sample';
import { Flask } from './flask';
import { random } from './utils';

export class Dilution {
  constructor(
    public label: string,
    public volume: number,
    public flask: Flask
  ) {}

  dilute(sample: Sample): Sample {
    const sample_volume = this.volume * random(0.99, 1.01);
    const total_volume = this.flask.volume + random(-0.1, 0.1);
    const percentage = sample.percentage * (sample_volume / total_volume);
    return new Sample(this.label, percentage);
  }
}
