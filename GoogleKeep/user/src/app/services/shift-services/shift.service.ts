import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private shiftReqdSubject= new BehaviorSubject<boolean>(true);
  shiftReqd$ = this.shiftReqdSubject.asObservable();

  check(shiftReqd: boolean){
    this.shiftReqdSubject.next(shiftReqd);
  }

  constructor() { }
}