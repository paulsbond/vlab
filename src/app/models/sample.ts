import { GasChromatograph } from './gas-chromatograph';

export class Sample {
  gc = new GasChromatograph();

  constructor(
    public label: string,
    public percentage: number,
    public supplied: boolean = false
  ) {}
}
