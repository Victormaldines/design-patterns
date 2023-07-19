import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Reciever
const bedroomLight = new SmartHouseLight('Bedroom light');
const bathroomLight = new SmartHouseLight('Bathroom light');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

// controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand(
  'button-bedroom-light-power',
  bedroomLightPowerCommand
);
smartHouseApp.addCommand(
  'button-bathroom-light-power',
  bathroomLightPowerCommand
);
smartHouseApp.addCommand(
  'button-bedroom-light-intensity',
  bedroomLightIntensityCommand
);

smartHouseApp.executeCommand('button-bedroom-light-power');
smartHouseApp.executeCommand('button-bathroom-light-power');
smartHouseApp.undoCommand('button-bedroom-light-power');
smartHouseApp.undoCommand('button-bathroom-light-power');
smartHouseApp.executeCommand('button-bedroom-light-intensity');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('button-bedroom-light-intensity');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('button-bedroom-light-intensity');
}
