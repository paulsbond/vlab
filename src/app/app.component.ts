import { Component } from '@angular/core';
import { Sample } from './models/sample';
import { GasChromatograph } from './models/gas-chromatograph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  samples: Sample[] = [
    { percentage: 0.1 },
    { percentage: 0.2 },
    { percentage: 5.2 },
    { percentage: 6.0 },
  ];
  selectedSample: Sample = this.samples[0];
  actions: string[] = [
    'Dilution',
    'Gas Chromatography',
    'Liquid Chromatography',
    'UV-Vis Spectroscopy',
  ];
  selectedAction: string = 'Gas Chromatography';
  gc = new GasChromatograph();

  constructor() {}
  ngOnInit() {}

  selectSample(sample: Sample) {
    this.selectedSample = sample;
  }
  selectAction(action: string) {
    this.selectedAction = action;
  }
}
