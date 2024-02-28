import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BRUSH_ICON, COLLABRATOR_ICON, IMG_ICON, REMINDER_ICON, TICK_ICON } from 'src/app/assests/svg-icons';
import { NoteService } from 'src/app/services/note-services/note.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {
  [x: string]: any;
  noteList = []
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public noteService: NoteService) {
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('remind-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('background-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
  }
ngOnInit(): void{
  this.noteService.getNoteListCall().subscribe((result: any)=>{this.noteList=result.data.data
  console.log(this.noteList);
  },(error)=>{console.log(error)});
}

}