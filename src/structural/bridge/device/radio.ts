import { DeviceImplementationProtocol } from './device-implementation';

export class Radio implements DeviceImplementationProtocol {
  private name = 'radio';
  private power = false;
  private volume = 10;

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number) {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
