import { Component, OnInit, Input } from '@angular/core';
import { Sample } from "../models/sample";

@Component({
  selector: 'app-uvvis',
  templateUrl: './uvvis.component.html',
  styleUrls: ['./uvvis.component.scss']
})
export class UvvisComponent implements OnInit {
  @Input() sample: Sample;
  constructor() { }
  ngOnInit(): void {}
}
