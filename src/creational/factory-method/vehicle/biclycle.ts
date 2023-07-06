import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string) {
    console.log(`${this.name} is coming for ${customerName}`);
    return;
  }

  stop() {
    console.log(`${this.name} stopped`);
    return;
  }
}
