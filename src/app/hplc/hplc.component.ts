import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-hplc',
  templateUrl: './hplc.component.html',
  styleUrls: ['./hplc.component.scss'],
})
export class HplcComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  inject(): void {
    this.sample.hplc.inject(this.sample);
  }
}
