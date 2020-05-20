import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-dilution',
  templateUrl: './dilution.component.html',
  styleUrls: ['./dilution.component.scss'],
})
export class DilutionComponent implements OnInit {
  constructor(public state: StateService) {}
  ngOnInit(): void {}

  volume_change(): void {
    console.log(this.state.dilution.flask);
    this.state.dilution.volume =
      Math.round((this.state.dilution.volume + Number.EPSILON) * 10) / 10;
  }

  dilute(): void {
    const new_sample = this.state.dilution.dilute(this.state.selectedSample);
    this.state.samples.push(new_sample);
    this.state.dilution.label = '';
  }
}
