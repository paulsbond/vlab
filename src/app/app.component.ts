import { Component } from '@angular/core';
import { Sample } from './models/sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  samples: Sample[] = [
    { label: 'Unknown Sample', conc: '0.1 M' },
    { label: 'Caffeine', conc: '0.1 g/L' },
    { label: 'Caffeine', conc: '0.05 g/L' },
  ];
  selectedSample: Sample;
  actions: string[] = [
    'Dilution',
    'Gas Chromatography',
    'Liquid Chromatography',
    'UV-Vis Spectroscopy',
  ];
  selectedAction: string;
  chart = {
    type: 'LineChart',
    columnNames: ['Seconds', 'Voltage'],
    options: {},
    data: [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 4],
      [5, 9],
      [6, 4],
      [7, 2],
      [8, 1],
      [9, 0],
    ],
  };

  constructor() {}
  ngOnInit() {}

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }
  selectAction(action: string) {
    this.selectedAction = action;
  }
}
