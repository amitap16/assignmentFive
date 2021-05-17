import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({ providedIn: 'root' })
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeCounter: number;
  inactiveCounter: number;

  constructor(private counterService: CounterService) { }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeCounter = this.counterService.addInactiveCounter();
    console.log('In UserService class - Active to Inactive: ' + this.activeCounter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveCounter = this.counterService.addActiveCounter();
    console.log('In UserService class - Inactive to Active: ' + this.inactiveCounter);
  }
}
