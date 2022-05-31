import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from "../models/sample";
import { decimal_places } from '../models/utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uvvis-scanning',
  templateUrl: './uvvis-scanning.component.html',
  styleUrls: ['./uvvis-scanning.component.scss'],
})
export class UvvisScanningComponent implements OnInit {
  @Input() sample: Sample;
  formError: string;
  nm_range: string = "FULL";

  @ViewChild("form", { static: true }) form: NgForm;
  formChangesSubscription: any;

  constructor(public state: StateService) { }
  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges.subscribe(
      (values) => {
        if (values.nm_range === "CUSTOM") {
          if (!values.min_nm) {
            this.formError = "Min Wavelength is required";
          } else if (!values.max_nm) {
            this.formError = "Max Wavelength is required";
          } else if (values.min_nm < 190 || values.min_nm > 1100) {
            this.formError = "Min Wavelength must be 190 to 1100";
          } else if (values.max_nm < 190 || values.max_nm > 1100) {
            this.formError = "Max Wavelength must be 190 to 1100";
          } else if (decimal_places(values.min_nm) > 1) {
            this.formError = "Min Wavelength must be specified to 1 d.p.";
          } else if (decimal_places(values.max_nm) > 1) {
            this.formError = "Max Wavelength must be specified to 1 d.p.";
          } else if (values.max_nm < values.min_nm + values.nm_per_reading) {
            this.formError = "Invalid settings";
          } else {
            this.formError = "";
          }
        } else if (values.nm_range === "FULL") {
          this.sample.uvvis.min_nm = 190;
          this.sample.uvvis.max_nm = 1100;
        } else if (values.nm_range === "VISIBLE") {
          this.sample.uvvis.min_nm = 350;
          this.sample.uvvis.max_nm = 700;
        } else if (values.nm_range === "UV") {
          this.sample.uvvis.min_nm = 220;
          this.sample.uvvis.max_nm = 400;
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

  exportCsv(): void {
    let content = "Wavelength,Absorbance\n";
    this.sample.uvvis.chart.data.forEach(point => {
      content += point[0].toFixed(1) + "," + point[1].toFixed(4) + "\n";
    });
    var blob = new Blob([content], { type: "text/csv" });
    var link = document.createElement('a');
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "uvvis.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
