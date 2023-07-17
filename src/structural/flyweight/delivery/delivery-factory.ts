import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocationFlyweight } from './delivery-location-flyweight';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsicState: DeliveryLocationData
  ): DeliveryFlyweightProtocol {
    const key = this.createId(intrinsicState);

    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocationFlyweight(intrinsicState);

    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
