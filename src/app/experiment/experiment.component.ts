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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id in this.state.experiments) {
      this.experiment = this.state.experiments[id];
    } else {
      this.router.navigate(['/']);
    }
  }

  onDiluted(sample: Sample) {
    this.experiment.samples.push(sample);
  }
}
