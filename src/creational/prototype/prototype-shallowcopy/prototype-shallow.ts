export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address = new Address('tilambuco', 110);
const p1 = new Person('Luiz', 30);
const p2 = p1.clone();

p1.addAddress(address);
p1.addresses[0].street = 'bla';
p2.name = 'Laurissio';

console.log(p2);
console.log(p2.addresses);
