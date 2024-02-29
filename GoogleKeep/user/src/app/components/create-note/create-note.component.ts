import { Component, EventEmitter, Output } from '@angular/core';

interface NoteObj {
  "title": string;
  "description": string;
  "color": string;
  "id": string;
}
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  takeNote: boolean=true
  title: string=""
  description: string=""
  @Output() updateList = new EventEmitter <NoteObj>();
  handleCreateNote(action: string){
    this.takeNote=!this.takeNote
    if (action == 'close'){
      // add api here
      const noteObj = {
        "title" : this.title,
        "description" : this.description,
        // "isPined": false,
        // "isArchived": false,
        "color": "#ffffff",
        "id":"12314"
        // "reminder": "",
      }
      this.updateList.emit(noteObj)
    }
  }
}