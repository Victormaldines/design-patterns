import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Tango', 'malango');
  console.log('It will take 1.5 second');
  console.log(await user.getAddresses());
  console.log('It will repeat (Cache)');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
