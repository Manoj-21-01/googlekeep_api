import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private drawerState = new BehaviorSubject(false);
  currentDrawerState = this.drawerState.asObservable();

  constructor() { }

  updateDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
}