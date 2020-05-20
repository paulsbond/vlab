import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { decimal_places } from '../models/utils';

@Component({
  selector: 'app-dilution',
  templateUrl: './dilution.component.html',
  styleUrls: ['./dilution.component.scss'],
})
export class DilutionComponent implements OnInit {
  @ViewChild('dilutionForm', { static: true }) dilutionForm: NgForm;
  formChangesSubscription: any;
  error: string;

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
    const new_sample = this.state.dilution.dilute(this.state.selectedSample);
    this.state.samples.push(new_sample);
    this.state.dilution.label = '';
  }
}
