import { Component, OnInit } from '@angular/core';
import config from '../config.json';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss'],
})
export class ExperimentsComponent implements OnInit {
  experiments = config.experiments;
  constructor() {}
  ngOnInit(): void {}
}
