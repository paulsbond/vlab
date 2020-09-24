import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from "../models/sample";

@Component({
  selector: 'app-uvvis',
  templateUrl: './uvvis.component.html',
  styleUrls: ['./uvvis.component.scss']
})
export class UvvisComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) { }
  ngOnInit(): void {}
  startPause(): void {
    if (this.sample.uvvis.running) {
      this.sample.uvvis.pause();
    }
    else {
      this.sample.uvvis.start(this.sample, this.state.speed);
    }
  }
  reset(): void {
    this.sample.uvvis.reset();
  }
}
