import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit, OnDestroy {
  subscription!:Subscription
  drawerState: boolean = false
  constructor(public dataService: DataService) {

  }
  handleDrawerState(){
    this.dataService.updateDrawerState(!this.drawerState);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.dataService.currentDrawerState.subscribe((result)=>this.drawerState = result)
  }
}
