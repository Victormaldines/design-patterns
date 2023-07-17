import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Tropia', '30A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Calangão', '30A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Zerão', '502A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Gemaplys', '103', 'Sla', 'SC');
console.log();
console.log(factory.getLocations());
