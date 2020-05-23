import { Sample } from './sample';

export class Experiment {
  public selectedSample: Sample;
  public selectedAction: string;

  constructor(public samples: Sample[], public actions: string[]) {
    this.selectedSample = this.samples[0];
    this.selectedAction = this.actions[0];
  }

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }

  selectAction(action: string) {
    this.selectedAction = action;
  }
}
