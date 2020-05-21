export class Chart {
  public type = 'LineChart';
  public columns = ['x', 'y'];
  public data = [[0, 0]];
  public options = {
    chartArea: { top: 20, height: '80%', width: '80%' },
    enableInteractivity: false,
    hAxis: {
      format: '#',
      title: 'X',
      titleTextStyle: { italic: false },
      viewWindow: { min: undefined, max: undefined },
    },
    height: 400,
    legend: 'none',
    vAxis: {
      format: '#',
      title: 'Y',
      titleTextStyle: { italic: false },
      viewWindow: { min: undefined, max: undefined },
    },
  };

  constructor(
    xlabel: string,
    ylabel: string,
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number
  ) {
    this.options.hAxis.title = xlabel;
    this.options.vAxis.title = ylabel;
    this.options.hAxis.viewWindow.min = xmin;
    this.options.hAxis.viewWindow.max = xmax;
    this.options.vAxis.viewWindow.min = ymin;
    this.options.vAxis.viewWindow.max = ymax;
  }

  add_point(x: number, y: number) {
    if (x === 0) {
      this.data = [[x, y]];
    } else {
      this.data = [...this.data, [x, y]];
    }
  }
}
