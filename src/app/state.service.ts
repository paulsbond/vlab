import { Injectable } from '@angular/core';
import { Experiment } from './models/experiment';
import { Sample } from './models/sample';
import config from './config.json';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  experiments = {};
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() {
    for (const [experimentId, experiment] of Object.entries(config.experiments)) {
      const samples = experiment.samples.map(
        (s) => new Sample(s.label, s.compound, s.conc, s.type, s.image)
      );
      const actions = experiment.actions;
      this.experiments[experimentId] = new Experiment(samples, actions);
    }
  }
}
