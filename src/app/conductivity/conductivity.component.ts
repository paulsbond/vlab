import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../models/sample';
import { StateService } from '../state.service';
import { random } from '../models/utils';
import { evaluate } from 'mathjs';
import config from '../config.json';

@Component({
  selector: 'app-conductivity',
  templateUrl: './conductivity.component.html',
  styleUrls: ['./conductivity.component.scss'],
})
export class ConductivityComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  read(): void {
    const conc = this.sample.conc;
    const func = config.compounds[this.sample.compound]['Conductivity'].func;
    const raw = evaluate(func, { x: conc }) * random(0.995, 1.005);
    const rounded = Math.round(raw);
    this.sample.conductivity = rounded > 9999 ? 'HIGH' : rounded;
  }
}
