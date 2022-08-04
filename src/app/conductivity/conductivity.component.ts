import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../models/sample';
import { StateService } from '../state.service';
import { random } from '../models/utils';

@Component({
  selector: 'app-conductivity',
  templateUrl: './conductivity.component.html',
  styleUrls: ['./conductivity.component.scss'],
})
export class ConductivityComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) { }
  ngOnInit(): void { }
  read(): void {
    const conc = this.sample.conc;
    const raw = 126500 * conc - 101265 * conc ** 1.5 * random(0.995, 1.005);
    const rounded = Math.round(raw);
    this.sample.conductivity = rounded > 9999 ? 'HIGH' : rounded;
  }
}
