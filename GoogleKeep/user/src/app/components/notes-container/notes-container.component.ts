import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, UNDO_ICON } from 'src/app/assests/svg-icons';
import { NoteService } from 'src/app/services/note-services/note.service';
import { ViewModeService } from 'src/app/services/view-mode-services/view-mode-services.service';
interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
"isArchived": boolean,
  "isDeleted": boolean
}

interface noteObj {
  "action":string
  "data":NoteObj
}
@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent {
  noteList:NoteObj[]=[]
  filteredNoteList: NoteObj[]=[]
  viewMode: boolean = true;
  
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public noteService: NoteService, public viewModeService: ViewModeService) {
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
    this.viewModeService.viewMode$.subscribe(mode => this.viewMode = mode);

  }
  ngOnInit(): void {
    this.getNoteList()
  }

  
  getNoteList(){
    console.log("parent getnote")
    this.noteService.getNoteListCall().subscribe((result: any)=>{
      this.noteList=result.data.data      
      this.noteList=this.noteList.filter(notes => !notes.isArchived && !notes.isDeleted)
      console.log(this.noteList);
      console.log(this.filteredNoteList);
      },(error)=>{console.log(error)})
  }

  updateNoteList($event:noteObj){
    if($event.action==='addNote')
    {
      this.noteList=[$event.data, ...this.noteList];      
    }
    if($event.action==='archiveNote' || $event.action==='deleteNote'){
    this.noteList=this.noteList.filter((noteObj)=>{
      return noteObj.id != $event.data.id;
    })
  }
  }

}