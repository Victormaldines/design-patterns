import { CustomerProtocol } from '../customer/customer-protocol';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-vehicle';

export class CreateIndividualCustomerVehicleFactory {
  createCustomer(customerName: string): CustomerProtocol {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
