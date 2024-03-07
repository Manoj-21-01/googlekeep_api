import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OTHER_MENU_ICON } from 'src/app/assests/svg-icons';
import { DataService } from 'src/app/services/data-services/data.service';
import { UserService } from 'src/app/services/user-services/user.service';
import { ViewModeService } from 'src/app/services/view-mode-services/view-mode-services.service';


@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit, OnDestroy {
  subscription!:Subscription
  drawerState: boolean = false
  gridView: boolean = true; //initially the grid view is true by default
  constructor(iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, public dataService: DataService, public userService: UserService, public router: Router, public viewModeService: ViewModeService) {
    iconRegistry.addSvgIconLiteral('grid-view', sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON));
  }
  
handleView() {
  this.gridView = !this.gridView;
  this.viewModeService.toggleViewMode(this.gridView);
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
