import { DeliveryLocationFlyweight } from './delivery-location-flyweight';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = {
  [key: string]: DeliveryLocationFlyweight;
};
