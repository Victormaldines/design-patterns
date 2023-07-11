import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower(); // true

  // type guard

  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeUp(); // 40
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);

console.log(radio);
console.log();
clientCode(radioRemoteControl);
console.log(radio);

console.log('----');

const tvRemoteControl = new RemoteControlWithVolume(tv);
console.log(tv);
console.log();
clientCode(tvRemoteControl);
console.log(tv);
