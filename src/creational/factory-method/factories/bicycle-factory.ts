import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { Bicycle } from '../vehicle/biclycle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
