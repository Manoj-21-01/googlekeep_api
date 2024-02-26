import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://fundoonotes.incubation.bridgelabz.com/api/user"
  constructor(public http: HttpClient) {

   }
  
  loginApi(data:object){
  return this.http.post( `${this.baseUrl}/login`,data)
  }

  registerApi(data:object){
    return this.http.post( `${this.baseUrl}/userSignUp`,data)
  }
}