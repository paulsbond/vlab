import { Chromatograph } from './chromatograph';

export class Sample {
  gc = new Chromatograph('Gas Chromatography', 180, 50, 1000);
  hplc = new Chromatograph('HPLC', 360, 15, 1200);
  conductivity: number | string = '-';

  constructor(
    public label: string,
    public compound: string,
    public conc: number,
    public type: string = 'dilution',
    public image: string = 'vial.png'
  ) {}
}
