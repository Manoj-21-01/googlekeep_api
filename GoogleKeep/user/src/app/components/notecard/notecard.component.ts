import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http-services/http.service';
import { REMINDER_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, ARCHIVE_ICON, MORE_ICON, DELETE_FOREVER_ICON, TRASH_ICON, UNARCHIVE_ICON, RESTORE_ICON } 
from 'src/app/assests/svg-icons';
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
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  @Input() noteDetails!: NoteObj;
  @Input() viewMode: boolean = true;
  takeNote: boolean = true;
  ngOnInit(){ }
  logRemainder(){
    console.log("Remainder");
  }

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private httpService: HttpService,
    public noteService: NoteService,
    public shiftService: ShiftService
  ) {
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON));
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON));
    iconRegistry.addSvgIconLiteral('delete-forever-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON));
    this.shiftService.shiftReqd$.subscribe((data) => this.takeNote=data);
  }
  // colour functionality
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

  archiveNote(noteDetails : any): void {
    this.noteDetails.isArchived = true;
    console.log(noteDetails);
     const obj1={
      "noteIdList":[this.noteDetails.id],
      "isArchived":true
     }
     this.noteService.archiveNoteCall(obj1).subscribe(
      ()=>{
      console.log("Note Archived successfully");
     },
     error => {console.error('Error:',error);}
    );
  }

  //unarchive note
  unarchiveNote(noteDetails : any): void {
    this.noteDetails.isArchived = false;
    console.log(noteDetails);
     const obj1={
      "noteIdList":[this.noteDetails.id],
      "isArchived":false
     }
     this.noteService.archiveNoteCall(obj1).subscribe(
      ()=>{
      console.log("Note unArchived successfully");
     },
     error => {console.error('Error:',error);}
    );
  }

  //deleteNote 
  deleteNote(noteDetails : any): void {
    this.noteDetails.isDeleted = true;
    console.log(noteDetails);
     const obj1={
      "noteIdList":[this.noteDetails.id],
      "isDeleted":true
     }
     this.noteService.deleteNoteCall(obj1).subscribe(
      ()=>{console.log("Note Deleted successfully")},
      error =>{console.log(error);}
    );
  }

  restoreNote(noteDetails : any): void{
    this.noteDetails.isDeleted = false;
    console.log(noteDetails);
    const obj1={
      "noteIdList":[this.noteDetails.id],
      "isDeleted":false
    }
    this.noteService.deleteNoteCall(obj1).subscribe(
      ()=>{console.log("Note restored successfully")},
      error =>{console.log(error);}
    );
  }

  deletePermanently(noteDetails : any): void{
    const obj1={
      "noteIdList":[this.noteDetails.id],
    }
    this.noteService.deleteForeverCall(obj1).subscribe(
      ()=>{console.log("Note Deleted permanently")},
      error =>{console.log(error);}
    );
  }
}