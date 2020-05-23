import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { Flask, flasks } from '../models/flask';
import { decimal_places, random } from '../models/utils';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-dilution',
  templateUrl: './dilution.component.html',
  styleUrls: ['./dilution.component.scss'],
})
export class DilutionComponent implements OnInit {
  @Input() sample: Sample;
  @Output() diluted = new EventEmitter<Sample>();
  label: string = '';
  volume: number = 0.1;
  flasks: Flask[] = flasks;
  flask: Flask = flasks[0];
  error: string;

  @ViewChild('dilutionForm', { static: true }) dilutionForm: NgForm;
  formChangesSubscription: any;

  constructor(public state: StateService) {}
  ngOnInit(): void {
    this.formChangesSubscription = this.dilutionForm.valueChanges.subscribe(
      (values) => {
        if (!values.label) {
          this.error = 'Label is required';
        } else if (!values.volume) {
          this.error = 'Sample volume is required';
        } else if (values.volume > values.flask.volume) {
          this.error = 'Sample will not fit in the flask';
        } else if (decimal_places(values.volume) > 1) {
          this.error = 'Can only measure sample to 1 d.p.';
        } else {
          this.error = '';
        }
      }
    );
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  dilute(): void {
    const sample_volume = this.volume * random(0.99, 1.01);
    const total_volume = this.flask.volume + random(-0.1, 0.1);
    const percentage = this.sample.percentage * (sample_volume / total_volume);
    const new_sample = new Sample(this.label, percentage);
    this.label = '';
    this.diluted.emit(new_sample);
  }
}
