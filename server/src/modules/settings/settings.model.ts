import { ISettings } from '../../../../common/interfaces/Settings';

export class Settings implements ISettings {
  timeBetweenInputs: number;

  constructor() {
    this.timeBetweenInputs = 5;
  }
}
