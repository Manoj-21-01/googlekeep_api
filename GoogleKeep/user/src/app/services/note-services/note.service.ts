import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  http: any;
  baseUrl: any;
  authHeader: any;
  addNoteListCall: any;
  token: any;
  private allNotes: string[] = [];

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

  getNotes(): string[] {
    return this.allNotes;
  }

  archiveNotes(notes: string[]): void {
    console.log('Archiving notes:', notes);
  }

}
