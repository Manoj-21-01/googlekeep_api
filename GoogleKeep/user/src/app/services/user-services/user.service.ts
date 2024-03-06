import { HttpService } from '../http-services/http.service';
import { Injectable } from '@angular/core';


@Injectable({
  // use root for entire application and any for particular module
  providedIn: 'root'
})
export class UserService {
   // injecting dependency : accesstype 
  constructor(public http:HttpService) { 


  }
  loginUser(data:object){
    return this.http.loginApi(data);
  }

  registerUser(data:object){
    return this.http.registerApi(data);
  }
  logOut(){
    return this.http.logOutUser();
  }
}