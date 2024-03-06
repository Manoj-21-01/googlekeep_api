import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data.service';
import { UserService } from 'src/app/services/user-services/user.service';


@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit, OnDestroy {
  subscription!:Subscription
  drawerState: boolean = false
  constructor(public dataService: DataService, public userService: UserService, public router: Router) {

  }
  handleDrawerState(){
    this.dataService.updateDrawerState(!this.drawerState);
  }
  logOutUser(){
    this.userService.logOut().subscribe(()=>
    {
      console.log("User logged Out");
      this.router.navigate(["/login"]);
    }, 
    (error) => 
    {
      console.log(error);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.dataService.currentDrawerState.subscribe((result)=>this.drawerState = result)
  }
}
