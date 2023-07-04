import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';
const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Luiz1', age: 35 });
myDatabaseClassic.add({ name: 'Maria1', age: 20 });
myDatabaseClassic.add({ name: 'Eduardo1', age: 60 });
myDatabaseClassic.show();

console.log(MyDatabaseModule === myDatabaseFromModuleA);
