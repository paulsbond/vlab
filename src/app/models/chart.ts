export class Chart {
  public type = 'LineChart';
  public columns = ['x', 'y'];
  public data = [[0, 0]];
  public options = {
    chartArea: { top: 20, height: '80%', width: '80%' },
    enableInteractivity: false,
    hAxis: {
      title: 'X',
      titleTextStyle: { italic: false },
      maxValue: 1,
      format: '#',
    },
    height: 400,
    legend: 'none',
    vAxis: {
      title: 'Y',
      titleTextStyle: { italic: false },
      maxValue: 1,
      format: '#',
    },
  };

  constructor(
    xlabel: string,
    ylabel: string,
    xmax: number,
    ymax: number,
    private min_ymax: number
  ) {
    this.options.hAxis.title = xlabel;
    this.options.vAxis.title = ylabel;
    this.options.hAxis.maxValue = xmax;
    this.options.vAxis.maxValue = ymax;
  }

  add_point(x: number, y: number) {
    if (x === 0) {
      this.options.vAxis.maxValue = this.min_ymax;
      this.data = [[x, y]];
    } else {
      this.data = [...this.data, [x, y]];
    }
    this.options.vAxis.maxValue = Math.max(y, this.options.vAxis.maxValue);
    this.options = { ...this.options };
  }
}
