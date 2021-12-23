import { ISettings } from '../../../../common/interfaces/Settings';

export class Settings implements ISettings {
  timeBetweenInputs: number;
  nInARow: number;

  constructor() {
    this.timeBetweenInputs = 0;
    this.nInARow = 3;
  }
}
