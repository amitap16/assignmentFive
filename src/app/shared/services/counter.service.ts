import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  private activeToInactiveCounter: number = 0;
  private inactiveToActiveCounter: number = 0;

  IncrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  IncrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
}
