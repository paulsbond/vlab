import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../state.service';
import { Sample } from "../models/sample";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  @Input() sample: Sample;
  constructor(public state: StateService) { }
  ngOnInit(): void { }
}
