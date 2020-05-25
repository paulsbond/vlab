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
        new Sample('Ethanol (100%)', 'ethanol', 100, true, 'ethanol.png'),
        new Sample('Unknown 1', 'ethanol', 1.35, true),
        new Sample('Unknown 2', 'ethanol', 4.27, true),
      ],
      ['Dilution', 'Gas Chromatography']
    ),
    caffeine: new Experiment(
      [
        new Sample('Caffeine (85 μg/mL)', 'caffeine', 85, true),
        new Sample('Tea', 'caffeine', 20, true),
        new Sample('Coffee', 'caffeine', 60, true),
      ],
      ['Dilution', 'HPLC']
    ),
    salt: new Experiment(
      [
        new Sample('Cheeseburger', 'NaCl', 0.002665, true, 'burger.png'),
        new Sample('Cheesy Chips', 'NaCl', 0.003484, true, 'chips.png'),
        new Sample(
          'Chicken Korma and Rice',
          'NaCl',
          0.0008053,
          true,
          'curry.png'
        ),
        new Sample('Fish and Chips', 'NaCl', 0.001385, true, 'fish.png'),
        new Sample('Kebab', 'NaCl', 0.004265, true, 'kebab.png'),
        new Sample('0.5 M Aqueous NaCl', 'NaCl', 0.5, true),
      ],
      ['Dilution', 'Conductivity']
    ),
  };
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() {}
}
