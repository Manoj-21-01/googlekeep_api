import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(public httpService: HttpService) { 

  }
  getNoteListCall(){
    return this.httpService.getNoteList();
  }
}
