import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  http: any;
  baseUrl: any;
  authHeader: any;
  addNoteListCall: any;

  constructor(public httpService: HttpService) { 

  }
  
  getNoteListCall()
  {
    return this.httpService.getNoteList()
  }

  addNoteCall(data: object)
  {
    return this.httpService.addNote(data);
  }

}
