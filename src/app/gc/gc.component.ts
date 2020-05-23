import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss'],
})
export class GcComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  inject(): void {
    this.sample.gc.inject(this.sample);
  }
}
