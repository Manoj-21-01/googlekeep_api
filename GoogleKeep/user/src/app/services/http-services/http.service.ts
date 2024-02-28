import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://fundoonotes.incubation.bridgelabz.com/api"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: localStorage.getItem('token') || ""
    // Authorization: "PlWHaoD8PYKbVQsGde2pnzqw350tD1HwNNlaBPQyE3CsJe2DOdF1HKHruCIHIiBj"
  })
  constructor(public http: HttpClient) {

   }
  
  loginApi(data:object){
  return this.http.post( `${this.baseUrl}/user/login`,data)
  }

  registerApi(data:object){
    return this.http.post( `${this.baseUrl}/user/userSignUp`,data)
  }
  getNoteList(){
    return this.http.get( `${this.baseUrl}/notes/getNotesList`, {headers:this.authHeader});
  }

}