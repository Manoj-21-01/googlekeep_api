import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  host: {
    class: 'app-sidenav-cnt'
  }
})
export class SidenavComponent implements OnInit , OnDestroy {
  subscription!: Subscription;
  drawerState: boolean = false
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dataServie: DataService){
    
  }
  ngOnInit(): void {
    this.subscription = this.dataServie.currentDrawerState.subscribe((result)=>this.drawerState=result)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
