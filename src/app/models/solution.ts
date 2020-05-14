import { Compound } from './compound';
import { Container } from './container';

export class Solution {
  constructor(
    public container: Container,
    public label: string,
    public millilitres: number,
    public solvent: Compound,
    public solutes: Solute[]
  ) {}

  volume(units: string): number {
    if (units == 'mL') return this.millilitres;
    if (units == 'L') return this.millilitres / 1000;
  }
}

export class Solute {
  constructor(public compound: Compound, public molar: number) {}
}
