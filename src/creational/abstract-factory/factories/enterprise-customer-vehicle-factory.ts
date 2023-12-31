import { CustomerProtocol } from '../customer/customer-protocol';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-vehicle';

export class CreateEnterpriseCustomerVehicleFactory {
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
