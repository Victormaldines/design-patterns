const personPrototype = {
  firstName: 'luiz',
  lastName: 'miranda',
  age: 30,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.getFullName());
