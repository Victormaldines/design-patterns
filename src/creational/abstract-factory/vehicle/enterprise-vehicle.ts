import { CustomerProtocol } from '../customer/customer-protocol';
import { VehicleProtocol } from './vehicle-protocol';

export class EnterpriseCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: CustomerProtocol
  ) {}
  pickUp(): void {
    console.log(
      `${this.name} is coming for ${this.customer.name} (ENTERPRISE)`
    );
  }
}
