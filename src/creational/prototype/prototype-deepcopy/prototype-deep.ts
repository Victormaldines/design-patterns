export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);

    newObject.addresses = this.addresses.map((address) => address.clone());

    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address = new Address('tilambuco', 110);
const p1 = new Person('Luiz', 30);

p1.addAddress(address);
const p2 = p1.clone();

p1.addresses[0].street = 'bla';
p2.name = 'Laurissio';

console.log(p2);
console.log(p2.addresses[0]);
console.log();
console.log(p1);
console.log(p1.addresses[0]);
