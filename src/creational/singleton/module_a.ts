import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Luiz', age: 35 });
myDatabaseClassic.add({ name: 'Maria', age: 20 });
myDatabaseClassic.add({ name: 'Eduardo', age: 60 });

export { myDatabaseClassic };
