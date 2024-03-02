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
    return this.http.get(`${this.baseUrl}/notes/getNotesList`,{headers:this.authHeader})
  }

  addNote(data: object){
    return this.http.post(`${this.baseUrl}/notes/addNotes`,data,{headers:this.authHeader})
  }

}