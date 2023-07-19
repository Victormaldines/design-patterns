import { SmartHouseCommandProtocol } from './smart-house-command-protocol';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommandProtocol } = {};

  addCommand(key: string, command: SmartHouseCommandProtocol) {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
