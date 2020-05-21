import { Injectable } from '@angular/core';
import { Dilution } from './models/dilution';
import { Flask } from './models/flask';
import { Sample } from './models/sample';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  samples: Sample[] = [
    new Sample('Ethanol 100%', 100, true),
    new Sample('Unknown 1', 1.35, true),
    new Sample('Unknown 2', 4.27, true),
  ];
  selectedSample = this.samples[0];
  actions = ['Dilution', 'Gas Chromatography'];
  selectedAction = 'Dilution';
  flasks: Flask[] = [
    { name: '5 ml', volume: 5 },
    { name: '10 ml', volume: 10 },
    { name: '25 ml', volume: 25 },
    { name: '50 ml', volume: 50 },
    { name: '100 ml', volume: 100 },
    { name: '250 ml', volume: 250 },
  ];
  dilution = new Dilution('', 0.1, this.flasks[0]);

  constructor() {}

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }

  selectAction(action: string) {
    this.selectedAction = action;
  }
}
