import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocationFlyweight implements DeliveryFlyweightProtocol {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string) {
    console.log('Deliver to %s', name);
    console.log(
      `in ${this.intrinsicState.street}, ${this.intrinsicState.city}`
    );
    console.log(`Number: ${number}`);
    console.log('###');
  }
}
