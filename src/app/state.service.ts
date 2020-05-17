import { Injectable } from '@angular/core';
import { Sample } from './models/sample';
import { GasChromatograph } from './models/gas-chromatograph';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  samples: Sample[] = [
    { percentage: 0.1 },
    { percentage: 0.2 },
    { percentage: 5.2 },
    { percentage: 6.0 },
  ];
  selectedSample = this.samples[0];
  actions = ['Dilution', 'Gas Chromatography'];
  selectedAction = 'Gas Chromatography';
  gc = new GasChromatograph();

  constructor() {}

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }

  selectAction(action: string) {
    this.selectedAction = action;
  }
}
