import { CreateEnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { CreateIndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new CreateEnterpriseCustomerVehicleFactory();
const individualFactory = new CreateIndividualCustomerVehicleFactory();

const customer1 = enterpriseFactory.createCustomer('Calangao');
const car1 = enterpriseFactory.createVehicle('fusca', customer1.name);

const customer2 = individualFactory.createCustomer('Zerao');
const car2 = individualFactory.createVehicle('Celta', customer2.name);

console.log(customer1, car1);
console.log();
console.log(customer2, car2);
console.log();
car1.pickUp();
car2.pickUp();
