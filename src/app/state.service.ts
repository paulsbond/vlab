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
        new Sample('Ethanol 100%', 'ethanol', 100, 'stock', 'ethanol.png'),
        new Sample('Lager', 'ethanol', 2.9, 'unknown', 'pint.png'),
        new Sample('IPA', 'ethanol', 4.6, 'unknown', 'pint.png'),
        new Sample('Stout', 'ethanol', 3.6, 'unknown', 'pint.png'),
        new Sample('Cider', 'ethanol', 5.3, 'unknown', 'pint.png'),
        new Sample('Shiraz', 'ethanol', 14.2, 'unknown', 'wine.png'),
        new Sample('Sauvignon Blanc', 'ethanol', 13.6, 'unknown', 'wine.png'),
        new Sample('Cabernet Sauvignon', 'ethanol', 12.4, 'unknown', 'wine.png'),
        new Sample('Pinot Grigio', 'ethanol', 13.9, 'unknown', 'wine.png'),
        new Sample('Gin', 'ethanol', 37.5, 'unknown', 'spirit.png'),
        new Sample('Vodka', 'ethanol', 40.2, 'unknown', 'spirit.png'),
        new Sample('Whisky', 'ethanol', 38.5, 'unknown', 'spirit.png'),
        new Sample('Tequila', 'ethanol', 36.4, 'unknown', 'spirit.png'),
        new Sample('Rum & Coke', 'ethanol', 4.2, 'unknown', 'mixer.png'),
        new Sample('Gin & Tonic', 'ethanol', 9.7, 'unknown', 'mixer.png'),
        new Sample('Vodka & Diet Coke', 'ethanol', 7.4, 'unknown', 'mixer.png'),
        new Sample('Schnapps & Lemonade', 'ethanol', 6.7, 'unknown', 'mixer.png'),
      ],
      ['Dilution', 'Gas Chromatography']
    ),
    caffeine: new Experiment(
      [
        new Sample('Caffeine 100 μg/mL', 'caffeine', 100, 'stock', 'vol100.png'),
        new Sample('Builders Tea', 'caffeine', 281.25, 'unknown', 'tea.png'),
        new Sample('Expresso Coffee', 'caffeine', 825.0, 'unknown', 'coffee.png'),
        new Sample('Americano', 'caffeine', 307.5, 'unknown', 'coffee.png'),
        new Sample('Decaf Tea', 'caffeine', 18.75, 'unknown', 'tea.png'),
        new Sample('Decaf Americano', 'caffeine', 13.89, 'unknown', 'coffee.png'),
        new Sample('Green Tea', 'caffeine', 246.53, 'unknown', 'tea.png'),
        new Sample('Earl Grey', 'caffeine', 166.67, 'unknown', 'tea.png'),
        new Sample('Everyday Tea', 'caffeine', 106.25, 'unknown', 'tea.png'),
        new Sample('Latte', 'caffeine', 197.92, 'unknown', 'coffee.png'),
      ],
      ['Dilution', 'HPLC']
    ),
    salt: new Experiment(
      [
        new Sample('0.5 M Aqueous NaCl', 'NaCl', 0.5, 'stock', 'vol250.png'),
        new Sample('Cheeseburger', 'NaCl', 0.002665, 'unknown', 'burger.png'),
        new Sample('Cheesy Chips', 'NaCl', 0.003484, 'unknown', 'chips.png'),
        new Sample('Chicken Korma and Rice', 'NaCl', 0.0008053, 'unknown', 'curry.png'),
        new Sample('Fish and Chips', 'NaCl', 0.001385, 'unknown', 'fish.png'),
        new Sample('Kebab', 'NaCl', 0.004265, 'unknown', 'kebab.png'),
      ],
      ['Dilution', 'Conductivity']
    ),
  };
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() {}
}
