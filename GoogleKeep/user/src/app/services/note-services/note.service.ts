import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

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
  archiveNoteCall(data: object){
    return this.httpService.archiveNote(data);
  }
  getArchivedNotesCall(): Observable<any> {
    return this.httpService.getArchivedNotes();
  }
  deleteNoteCall(data: object){
    return this.httpService.trashNote(data);
  }

  getTrashNotesCall(): Observable<any> {
    return this.httpService.getTrashNotes();
  }

  deleteForeverCall(data: object){
    return this.httpService.deleteForever(data);
  }
  colorNoteCall(data: object){
    return this.httpService.changeColor(data);
  }
}