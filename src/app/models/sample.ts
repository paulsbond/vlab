import { Chromatograph } from './chromatograph';

export class Sample {
  gc = new Chromatograph(180, 50, 1000);
  hplc = new Chromatograph(360, 15, 1200);
  conductivity: number = 0;

  constructor(
    public label: string,
    public compound: string,
    public conc: number,
    public supplied: boolean = false,
    public image: string = 'vial.png'
  ) {}
}
