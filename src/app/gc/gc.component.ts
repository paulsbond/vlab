import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss'],
})
export class GcComponent implements OnInit {
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  inject(): void {
    this.state.gc.inject(this.state.selectedSample);
  }
}
