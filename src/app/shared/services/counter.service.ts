import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  private activeCounter: number = 0;
  private inactiveCounter: number = 0;

  addActiveCounter() {
    this.activeCounter++;
    console.log('In CounterService class - Inactive to Active: ' + this.activeCounter);
    return this.activeCounter;
  }

  addInactiveCounter() {
    this.inactiveCounter++;
    console.log('In CounterService class - Active to Inactive: ' + this.inactiveCounter);
    return this.inactiveCounter;
  }
}
