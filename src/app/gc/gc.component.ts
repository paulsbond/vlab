import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';
import { GasChromatograph } from '../models/gas-chromatograph';

@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss'],
})
export class GcComponent implements OnInit {
  @Input() gc: GasChromatograph;
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  inject(): void {
    this.gc.inject(this.state.selectedSample);
  }
}
