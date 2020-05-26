import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';
import { Experiment } from '../models/experiment';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss'],
})
export class ExperimentComponent implements OnInit {
  experiment: Experiment;
  anyDiluted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id in this.state.experiments) {
      this.experiment = this.state.experiments[id];
      this.anyDiluted = this.experiment.samples.some((x) => !x.supplied);
    } else {
      this.router.navigate(['/']);
    }
  }

  onDiluted(sample: Sample) {
    this.experiment.samples.push(sample);
    this.anyDiluted = true;
  }
}
