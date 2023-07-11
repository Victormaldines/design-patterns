import { DeviceImplementationProtocol } from '../device/device-implementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementationProtocol) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(`${this.device.getName()}'s status: ${this.device.getPower()}`);
  }
}
