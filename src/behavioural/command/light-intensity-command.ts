import { SmartHouseCommandProtocol } from './smart-house-command-protocol';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommandProtocol {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`${this.light.name} increased intensity to ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`${this.light.name} decreased intensity to ${intensity}`);
  }
}
