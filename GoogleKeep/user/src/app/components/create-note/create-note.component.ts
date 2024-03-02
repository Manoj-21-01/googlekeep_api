import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';

interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string
}
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})

export class CreateNoteComponent  {
  takeNote: boolean=true
  title:string =""
  description: string=""
  @Output() updateList= new EventEmitter <NoteObj>()

  constructor(public noteService:NoteService){
    
  }

  handleCreateNote(action : string ){
    this.takeNote=!this.takeNote
    if (action =='close'){
      // we have to add api here
        const noteObj:NoteObj = {
          "title" : this.title,
          "description" : this.description,
          // "isPined": false,
          // "isArchived": false,
          "color": "#ffffff",
          // "reminder": "",
          "id":"12346"
        };
      this.noteService.addNoteCall(noteObj).subscribe(result=>{
        this.updateList.emit(noteObj);
      });
      
    }
    
  }
}