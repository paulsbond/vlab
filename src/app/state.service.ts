import { Injectable } from '@angular/core';
import { Experiment } from './models/experiment';
import { Sample } from './models/sample';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  experiments = {
    alcohol: new Experiment(
      [
        new Sample('Ethanol (100%)', 100, true, 'ethanol.png'),
        new Sample('Unknown 1', 1.35, true),
        new Sample('Unknown 2', 4.27, true),
      ],
      ['Dilution', 'Gas Chromatography']
    ),
    caffeine: new Experiment(
      [
        new Sample('Caffeine (100 mg/mL)', 100, true),
        new Sample('Tea', 20, true),
        new Sample('Coffee', 60, true),
      ],
      ['Dilution', 'HPLC']
    ),
  };

  constructor() {}
}
