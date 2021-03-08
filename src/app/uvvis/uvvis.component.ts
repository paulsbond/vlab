import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from "../models/sample";
import { decimal_places } from '../models/utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uvvis',
  templateUrl: './uvvis.component.html',
  styleUrls: ['./uvvis.component.scss']
})
export class UvvisComponent implements OnInit {
  @Input() sample: Sample;
  readFormError: string;
  scanFormError: string;

  @ViewChild("readForm", { static: true }) readForm: NgForm;
  @ViewChild("scanForm", { static: true }) scanForm: NgForm;
  readFormChangesSubscription: any;
  scanFormChangesSubscription: any;

  constructor(public state: StateService) { }
  ngOnInit(): void {
    this.readFormChangesSubscription = this.readForm.valueChanges.subscribe(
      (values) => {
        if (!values.wavelength) {
          this.readFormError = "Wavelength is required";
        } else if (values.wavelength < 190 || values.wavelength > 1100) {
          this.readFormError = "Wavelength must be 190 to 1100 nm";
        } else if (decimal_places(values.wavelength) > 1) {
          this.readFormError = "Wavelength must be specified to 1 d.p."
        } else {
          this.readFormError = "";
        }
      }
    );
    this.scanFormChangesSubscription = this.scanForm.valueChanges.subscribe(
      (values) => {
        if (!values.min_nm) {
          this.scanFormError = "Min Wavelength is required";
        } else if (!values.max_nm) {
          this.scanFormError = "Max Wavelength is required";
        } else if (!values.nm_per_s) {
          this.scanFormError = "Scanning Speed is required";
        } else if (values.min_nm < 190 || values.min_nm > 1100) {
          this.scanFormError = "Min Wavelength must be 190 to 1100";
        } else if (values.max_nm < 190 || values.max_nm > 1100) {
          this.scanFormError = "Max Wavelength must be 190 to 1100";
        } else if (values.nm_per_s < 0.1 || values.nm_per_s > 100) {
          this.scanFormError = "Scanning Speed must be 0.1 to 100";
        } else if (decimal_places(values.min_nm) > 1) {
          this.scanFormError = "Min Wavelength must be specified to 1 d.p.";
        } else if (decimal_places(values.max_nm) > 1) {
          this.scanFormError = "Max Wavelength must be specified to 1 d.p.";
        } else if (decimal_places(values.nm_per_s) > 1) {
          this.scanFormError = "Scanning Speed must be specified to 1 d.p.";
        } else if (values.max_nm < values.min_nm + values.nm_per_s) {
          this.scanFormError = "Invalid settings";
        } else {
          this.scanFormError = "";
        }
      }
    );
  }

  scanStop(): void {
    if (this.sample.uvvis.running) {
      this.sample.uvvis.stop();
    }
    else {
      this.sample.uvvis.scan(this.sample, this.state.speed);
    }
  }
}
