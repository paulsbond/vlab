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

  constructor() {}
  ngOnInit() {}

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }
  selectAction(action: string) {
    this.selectedAction = action;
  }
}
