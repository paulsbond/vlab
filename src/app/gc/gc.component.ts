import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss'],
})
export class GcComponent implements OnInit {
  @Input() sample: Sample;

  type = 'LineChart';
  columns = ['x', 'y'];
  runtime = 180;
  data = [[0, 0]];
  x = 0;

  options = {
    chartArea: { top: 20, height: '80%', width: '80%' },
    enableInteractivity: false,
    hAxis: {
      title: 'Time / s',
      titleTextStyle: { italic: false },
      maxValue: 180,
    },
    height: 400,
    legend: 'none',
    vAxis: {
      title: 'Voltage / mV',
      titleTextStyle: { italic: false },
      maxValue: 1000,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  inject(): void {
    const a = (this.sample.percentage * 1000) / 5.2; // Peak height
    const b = 120; // Peak center
    const c = 20; // Standard deviation
    let x = 0;
    let max_y = 1;
    let loop = () => {
      setTimeout(() => {
        let y = a * Math.exp(-Math.pow(x - b, 2) / (2 * Math.pow(c, 2)));
        if (y > 1000) y = 1000;
        if (y > max_y) max_y = y;
        this.options.vAxis.maxValue = max_y;
        this.options = { ...this.options };
        if (x === 0) {
          this.data = [[x, y]];
        } else {
          this.data = [...this.data, [x, y]];
        }
        if (++x <= this.runtime) {
          loop();
        }
      }, 10);
    };
    loop();
  }
}
