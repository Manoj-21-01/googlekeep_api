import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private drawerState = new BehaviorSubject(false);
  currentDrawerState = this.drawerState.asObservable();

  constructor() { }

  private _refreshrequired = new Subject<void>();
  get refreshRequired(){
    return this._refreshrequired;
  }
  updateDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
  // Save(inputdata: any){
  //   return this.http.post(this.baseUrl, inputdata).pipe(
  //     tap(()=>{
  //       this.refreshRequired.next();
  //     })
  //   )
  // }
}