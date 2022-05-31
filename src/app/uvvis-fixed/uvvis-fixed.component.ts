import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from "../models/sample";
import { decimal_places } from '../models/utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uvvis-fixed',
  templateUrl: './uvvis-fixed.component.html',
  styleUrls: ['./uvvis-fixed.component.scss']
})
export class UvvisFixedComponent implements OnInit {
  @Input() sample: Sample;
  formError: string;

  @ViewChild("form", { static: true }) form: NgForm;
  formChangesSubscription: any;

  constructor(public state: StateService) { }
  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges.subscribe(
      (values) => {
        if (!values.wavelength) {
          this.formError = "Wavelength is required";
        } else if (values.wavelength < 190 || values.wavelength > 1100) {
          this.formError = "Wavelength must be 190 to 1100 nm";
        } else if (decimal_places(values.wavelength) > 1) {
          this.formError = "Wavelength must be specified to 1 d.p."
        } else {
          this.formError = "";
        }
      }
    );
  }
}
