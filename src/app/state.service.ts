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
        new Sample('Ethanol 100%', 'ethanol', 100, true, 'ethanol.png'),
        new Sample('Lager', 'ethanol', 2.9, true, 'pint.png'),
        new Sample('IPA', 'ethanol', 4.6, true, 'pint.png'),
        new Sample('Stout', 'ethanol', 3.6, true, 'pint.png'),
        new Sample('Cider', 'ethanol', 5.3, true, 'pint.png'),
        new Sample('Shiraz', 'ethanol', 14.2, true, 'wine.png'),
        new Sample('Sauvignon Blanc', 'ethanol', 13.6, true, 'wine.png'),
        new Sample('Cabernet Sauvignon', 'ethanol', 12.4, true, 'wine.png'),
        new Sample('Pinot Grigio', 'ethanol', 13.9, true, 'wine.png'),
        new Sample('Gin', 'ethanol', 37.5, true, 'spirit.png'),
        new Sample('Vodka', 'ethanol', 40.2, true, 'spirit.png'),
        new Sample('Whisky', 'ethanol', 38.5, true, 'spirit.png'),
        new Sample('Tequila', 'ethanol', 36.4, true, 'spirit.png'),
        new Sample('Rum & Coke', 'ethanol', 4.2, true, 'mixer.png'),
        new Sample('Gin & Tonic', 'ethanol', 9.7, true, 'mixer.png'),
        new Sample('Vodka & Diet Coke', 'ethanol', 7.4, true, 'mixer.png'),
        new Sample('Schnapps & Lemonade', 'ethanol', 6.7, true, 'mixer.png'),
      ],
      ['Dilution', 'Gas Chromatography']
    ),
    caffeine: new Experiment(
      [
        new Sample('Caffeine 100 μg/mL', 'caffeine', 100, true, 'vol100.png'),
        new Sample('Builders Tea', 'caffeine', 281.25, true, 'tea.png'),
        new Sample('Expresso Coffee', 'caffeine', 825.0, true, 'coffee.png'),
        new Sample('Americano', 'caffeine', 307.5, true, 'coffee.png'),
        new Sample('Decaf Tea', 'caffeine', 18.75, true, 'tea.png'),
        new Sample('Decaf Americano', 'caffeine', 13.89, true, 'coffee.png'),
        new Sample('Green Tea', 'caffeine', 246.53, true, 'tea.png'),
        new Sample('Earl Grey', 'caffeine', 166.67, true, 'tea.png'),
        new Sample('Everyday Tea', 'caffeine', 106.25, true, 'tea.png'),
        new Sample('Latte', 'caffeine', 197.92, true, 'coffee.png'),
      ],
      ['Dilution', 'HPLC']
    ),
    salt: new Experiment(
      [
        new Sample('0.5 M Aqueous NaCl', 'NaCl', 0.5, true, 'vol250.png'),
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
      ],
      ['Dilution', 'Conductivity']
    ),
  };
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() {}
}
