import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http-services/http.service';
import { NoteService } from 'src/app/services/note-services/note.service';
import { ShiftService } from 'src/app/services/shift-services/shift.service';

interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
  "isArchived": boolean,
  "isDeleted": boolean
}
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})

export class CreateNoteComponent  {
  takeNote: boolean=true;
  title:string =""
  description: string=""
  @Output() updateList= new EventEmitter <NoteObj>()
  noteDetails: any;

  constructor(public noteService:NoteService, public httpService: HttpService, public shiftService: ShiftService){
    
  }

  changeColor(color: string): void {
    this.noteDetails.color = color;
    console.log(this.noteDetails);
     const obj1={
      "noteIdList":[this.noteDetails.id],
      "color":this.noteDetails.color
     }
     this.noteService.colorNoteCall(obj1).subscribe(
      ()=>{
      console.log("Color applied successfully");
     },
     error => {console.error('Error:',error);}
    );
  }
  handleCreateNote(action : string ){
    this.takeNote=!this.takeNote
    this.shiftService.check(this.takeNote)
    if (action =='close'){
      // we have to add api here
        const noteObj:NoteObj = {
          "title" : this.title,
          "description" : this.description,
          // "isPined": false,
          "isArchived": false,
          "isDeleted": false,
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